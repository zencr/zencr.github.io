/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        /*
        {
            x: -200,
            z: -200,
            image: "location-pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        // Example 3: Text only
        {
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        */

        // --- Spawn ---
        {
            x: -500,
            z: -500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 500,
            z: -500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -500,
            z: 500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 500,
            z: 500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 16,
            z: 0,
            image: "location-pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "World Spawn Point",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        // --- Spawn ---

        // --- Shopping District ---
        {
            x: -864,
            z: 752,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -624,
            z: 1080,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -864,
            z: 1080,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -624,
            z: 752,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -744,
            z: 916,
            image: "location-pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Shopping District",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        // --- Shopping District ---

        // --- Claimed Area ---

        // --- Terra ---
        {
            x: -1000,
            z: -900,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -600,
            z: -500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1000,
            z: -500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -600,
            z: -900,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -800,
            z: -700,
            text: "Terra Base", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // --- Terra ---

        // --- Jerkies ---
        {
            x: -1100,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1500,
            z: -1400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1100,
            z: -1400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1500,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1300,
            z: -1200,
            text: "Jerkies", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // -----
        {
            x: -1100,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1500,
            z: -600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1100,
            z: -600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1500,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1300,
            z: -800,
            text: "Jerkies", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // -----
        {
            x: -1500,
            z: -600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1100,
            z: -250,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1500,
            z: -250,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1100,
            z: -600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1300,
            z: -425,
            text: "Jerkies", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // --- Jerkies ---

        // --- YeetGenic ---
        {
            x: 1500,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1700,
            z: -1200,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1500,
            z: -1200,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1700,
            z: -1000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1600,
            z: -1100,
            text: "YeetGenic", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // ---
        {
            x: 1700,
            z: -1200,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 2000,
            z: -1400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1700,
            z: -1400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 2000,
            z: -1200,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: 1850,
            z: -1300,
            text: "YeetGenic", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // --- YeetGenic ---

        // --- JourBlock ---
        {
            x: -1800,
            z: 400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2200,
            z: 800,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -1800,
            z: 800,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2200,
            z: 400,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2000,
            z: 600,
            text: "JourBlock", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // --- JourBlock ---

        // --- Hexacorp ---
        {
            x: -2000,
            z: -1600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2400,
            z: -2000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2000,
            z: -2000,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2400,
            z: -1600,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2200,
            z: -1800,
            text: "Hexacorp", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // ---
        {
            x: -2300,
            z: -2500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2700,
            z: -2900,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2300,
            z: -2900,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2700,
            z: -2500,
            image: "circle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        {
            x: -2500,
            z: -2700,
            text: "Hexacorp HQ", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        // --- Hexacorp ---


        // --- Claimed Area ---


        // do not delete the following two closing brackets
    ]
}
