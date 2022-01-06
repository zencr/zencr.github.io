class Unmined {

    map(mapId, options, regions) {

        const dpiScale = window.devicePixelRatio ?? 1.0;

        const worldMinX = options.minRegionX * 512;
        const worldMinY = options.minRegionZ * 512;
        const worldWidth = (options.maxRegionX + 1 - options.minRegionX) * 512;
        const worldHeight = (options.maxRegionZ + 1 - options.minRegionZ) * 512;

        const worldTileSize = 256;

        const worldMaxZoomFactor = Math.pow(2, options.maxZoom);

        // left, bottom, right, top, Y is negated
        var mapExtent = ol.extent.boundingExtent([
            [worldMinX * worldMaxZoomFactor, -(worldMinY + worldHeight) * worldMaxZoomFactor],
            [(worldMinX + worldWidth) * worldMaxZoomFactor, -worldMinY * worldMaxZoomFactor]]);

        var viewProjection = new ol.proj.Projection({
            code: 'VIEW',
            units: 'pixels',
        });

        var dataProjection = new ol.proj.Projection({
            code: 'DATA',
            units: 'pixels',
        });

        // Coordinate transformation between view and data
        // OpenLayers Y is positive up, world Y is positive down
        ol.proj.addCoordinateTransforms(viewProjection, dataProjection,
            function (coordinate) {
                return [coordinate[0], -coordinate[1]];
            },
            function (coordinate) {
                return [coordinate[0], -coordinate[1]];
            });

        const mapZoomLevels = options.maxZoom - options.minZoom;
        // Resolution for each OpenLayers zoom level        
        var resolutions = new Array(mapZoomLevels + 1);
        for (let z = 0; z < mapZoomLevels + 1; ++z) {
            resolutions[mapZoomLevels - z] = Math.pow(2, z) * dpiScale / worldMaxZoomFactor;
        }

        var tileGrid = new ol.tilegrid.TileGrid({
            extent: mapExtent,
            origin: [0, 0],
            resolutions: resolutions,
            tileSize: worldTileSize / dpiScale
        });

        var unminedLayer =
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    projection: viewProjection,
                    tileGrid: tileGrid,
                    tilePixelRatio: dpiScale,
                    tileSize: worldTileSize / dpiScale,

                    tileUrlFunction: function (coordinate) {
                        const worldZoom = -(mapZoomLevels - coordinate[0]) + options.maxZoom;
                        const worldZoomFactor = Math.pow(2, worldZoom);

                        const minTileX = Math.floor(worldMinX * worldZoomFactor / worldTileSize);
                        const minTileY = Math.floor(worldMinY * worldZoomFactor / worldTileSize);
                        const maxTileX = Math.ceil((worldMinX + worldWidth) * worldZoomFactor / worldTileSize) - 1;
                        const maxTileY = Math.ceil((worldMinY + worldHeight) * worldZoomFactor / worldTileSize) - 1;

                        const tileX = coordinate[1];
                        const tileY = coordinate[2];

                        const tileBlockSize = worldTileSize / worldZoomFactor;
                        const tileBlockPoint = {
                            x: tileX * tileBlockSize,
                            z: tileY * tileBlockSize
                        };

                        const hasTile = function () {
                            const tileRegionPoint = {
                                x: Math.floor(tileBlockPoint.x / 512),
                                z: Math.floor(tileBlockPoint.z / 512)
                            };
                            const tileRegionSize = Math.ceil(tileBlockSize / 512);

                            for (let x = tileRegionPoint.x; x < tileRegionPoint.x + tileRegionSize; x++) {
                                for (let z = tileRegionPoint.z; z < tileRegionPoint.z + tileRegionSize; z++) {
                                    const group = {
                                        x: Math.floor(x / 32),
                                        z: Math.floor(z / 32)
                                    };
                                    const regionMap = regions.find(e => e.x == group.x && e.z == group.z);
                                    if (regionMap) {
                                        const relX = x - group.x * 32;
                                        const relZ = z - group.z * 32;
                                        const inx = relZ * 32 + relX;
                                        var b = regionMap.m[Math.floor(inx / 32)];
                                        var bit = inx % 32;
                                        var found = (b & (1 << bit)) != 0;
                                        if (found) return true;
                                    }
                                }
                            }
                            return false;
                        };

                        if (tileX >= minTileX
                            && tileY >= minTileY
                            && tileX <= maxTileX
                            && tileY <= maxTileY
                            && hasTile()) {
                            const url = ('tiles/zoom.{z}/{xd}/{yd}/tile.{x}.{y}.' + options.imageFormat)
                                .replace('{z}', worldZoom)
                                .replace('{yd}', Math.floor(tileY / 10))
                                .replace('{xd}', Math.floor(tileX / 10))
                                .replace('{y}', tileY)
                                .replace('{x}', tileX);
                            return url;
                        }
                        else
                            return undefined;
                    }
                })
            });

        var mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(0),
            projection: dataProjection
        });

        var map = new ol.Map({
            target: 'map',
            controls: ol.control.defaults().extend([
                mousePositionControl
            ]),
            layers: [
                unminedLayer,                
                /*
                new ol.layer.Tile({
                    source: new ol.source.TileDebug({
                        tileGrid: unminedTileGrid,
                        projection: viewProjection
                    })
                })
                */

            ],
            view: new ol.View({
                center: [0, 0],
                extent: mapExtent,
                projection: viewProjection,
                resolutions: tileGrid.getResolutions(),
                maxZoom: mapZoomLevels,
                zoom: mapZoomLevels - options.maxZoom,
                constrainResolution: true,
                showFullExtent: true,
                constrainOnlyCenter: true
            })
        });

        if (options.markers)
        {
            var markersLayer = this.createMarkersLayer(options.markers, dataProjection, viewProjection);
            map.addLayer(markersLayer);
            map.addLayer(this.createBoundingsLayer(dataProjection, viewProjection));
        }

        this.openlayersMap = map;
    }

    createMarkersLayer(markers, dataProjection, viewProjection) {
        var features = [];

        for (var i = 0; i < markers.length; i++) {
            var item = markers[i];
            var longitude = item.x;
            var latitude = item.z;

            var feature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], dataProjection, viewProjection))
            });

            var style = new ol.style.Style();
            if (item.image)
                style.setImage(new ol.style.Icon({
                    src: item.image,
                    anchor: item.imageAnchor,
                    scale: item.imageScale
                }));

            if (item.text)
                style.setText(new ol.style.Text({
                    text: item.text,
                    font: item.font,
                    offsetX: item.offsetX,
                    offsetY: item.offsetY,
                    fill: new ol.style.Fill({
                        color: item.textColor
                    })
                }));

            feature.setStyle(style);

            features.push(feature);
        }

        var vectorSource = new ol.source.Vector({
            features: features
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        return vectorLayer;
    }

    createBoundingsLayer(dataProjection, viewProjection) {
        const styles = [
            /* We are using two different styles for the polygons:
             *  - The first style is for the polygons themselves.
             *  - The second style is to draw the vertices of the polygons.
             *    In a custom `geometry` function the vertices of a polygon are
             *    returned as `MultiPoint` geometry, which will be used to render
             *    the style.
             */
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'yellow',
                    width: 2,
                }),
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 3,
                    fill: new ol.style.Fill({
                        color: 'orange',
                    }),
                }),
                geometry: function (feature) {
                    // return the coordinates of the first ring of the polygon
                    const coordinates = feature.getGeometry().getCoordinates()[0];
                    return new ol.geom.MultiPoint(coordinates);
                },
            }),
        ];

        const geojsonObject = {
            'type': 'FeatureCollection',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'EPSG:3857',
                },
            },
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Spawn
                            [
                                ol.proj.transform([500, -500], dataProjection, viewProjection),
                                ol.proj.transform([500, 500], dataProjection, viewProjection),
                                ol.proj.transform([-500, 500], dataProjection, viewProjection),
                                ol.proj.transform([-500, -500], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Shopping District
                            [
                                ol.proj.transform([-864, 752], dataProjection, viewProjection),
                                ol.proj.transform([-624, 752], dataProjection, viewProjection),
                                ol.proj.transform([-624, 1080], dataProjection, viewProjection),
                                ol.proj.transform([-864, 1080], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Terra Base
                            [
                                ol.proj.transform([-1000, -900], dataProjection, viewProjection),
                                ol.proj.transform([-1000, -500], dataProjection, viewProjection),
                                ol.proj.transform([-600, -500], dataProjection, viewProjection),
                                ol.proj.transform([-600, -900], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Jerkies
                            [
                                ol.proj.transform([-1500, -1400], dataProjection, viewProjection),
                                ol.proj.transform([-1500, -250], dataProjection, viewProjection),
                                ol.proj.transform([-1100, -250], dataProjection, viewProjection),
                                ol.proj.transform([-1100, -1400], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // YeetGenic
                            [
                                ol.proj.transform([1500, -1200], dataProjection, viewProjection),
                                ol.proj.transform([1500, -1000], dataProjection, viewProjection),
                                ol.proj.transform([1700, -1000], dataProjection, viewProjection),
                                ol.proj.transform([1700, -1400], dataProjection, viewProjection),
                                ol.proj.transform([2000, -1400], dataProjection, viewProjection),
                                ol.proj.transform([2000, -1200], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // JourBlock
                            [
                                ol.proj.transform([-1800, 400], dataProjection, viewProjection),
                                ol.proj.transform([-1800, 800], dataProjection, viewProjection),
                                ol.proj.transform([-2200, 800], dataProjection, viewProjection),
                                ol.proj.transform([-2200, 400], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Hexacorp
                            [
                                ol.proj.transform([-2000, -1600], dataProjection, viewProjection),
                                ol.proj.transform([-2000, -2000], dataProjection, viewProjection),
                                ol.proj.transform([-2400, -2000], dataProjection, viewProjection),
                                ol.proj.transform([-2400, -1600], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [ // Hexacorp HQ
                            [
                                ol.proj.transform([-2300, -2500], dataProjection, viewProjection),
                                ol.proj.transform([-2700, -2500], dataProjection, viewProjection),
                                ol.proj.transform([-2700, -2900], dataProjection, viewProjection),
                                ol.proj.transform([-2300, -2900], dataProjection, viewProjection),
                            ],
                        ],
                    },
                },
            ],
        };

        const source = new ol.source.Vector({
            features: new ol.format.GeoJSON().readFeatures(geojsonObject),
        });

        const layer = new ol.layer.Vector({
            source: source,
            style: styles,
        });

        return layer;
    }

}