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
            x: 16,
            z: 0,
            image: "location-pin.png",
            imageAnchor: [0.2, 1],
            imageScale: 0.2,
            text: "World Spawn Point",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        // --- Spawn ---

        // --- Shopping District ---
        {
            x: -744,
            z: 916,
            image: "location-pin.png",
            imageAnchor: [0.2, 1],
            imageScale: 0.2,
            text: "Shopping District",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        // --- Shopping District ---

        // --- Claimed Area ---

        // --- Terra ---
        {
            x: -800,
            z: -700,
            text: "Terra Base", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -250,
            z: 1050,
            text: "Terra Island", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: 300,
            z: -188,
            text: "Terra City", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        // --- Terra ---

        // --- Jerkies ---
        {
            x: -1300,
            z: -800,
            text: "Jerkies", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -1708,
            z: -893,
            text: "Jerkies", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -1043,
            z: -1161,
            text: "Jerkies", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -738,
            z: -1139,
            text: "Jerkies", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        // --- Jerkies ---

        // --- YeetGenic ---
        {
            x: 1750,
            z: -1250,
            text: "YeetGenic", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        // --- YeetGenic ---

        // --- JourBlock ---
        {
            x: -2000,
            z: 600,
            text: "JourBlock", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        // --- JourBlock ---

        // --- Hexacorp ---
        {
            x: -2200,
            z: -1800,
            text: "Hexacorp", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -2500,
            z: -2700,
            text: "Hexacorp HQ", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 14px Calibri,sans serif",
        },
        // --- Hexacorp ---


        // --- Claimed Area ---


        // do not delete the following two closing brackets
    ]
}
