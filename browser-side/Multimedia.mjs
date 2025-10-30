//* Multimedia
// Images
// images are inserted into the HTML document using the <img> element
/* 
<img src="path/to/image.jpg" alt="Description of image" width="600" height="400">
*/
// The alt attribute provides alternative text for the image if it cannot be displayed.
// The width and height attributes specify the dimensions of the image in pixels.

// Inserting a new image create the DOM element and insert it into the good position in the document
// changing the displayed image by modifying the src attribute of an existing <img> element
// Preloading images to improve user experience by loading images in the background before they are needed
// create a new Image object and set its src attribute to the image URL
export function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

//* SVG (Scalable Vector Graphics)
// SVG is an XML-based format for vector graphics that can be embedded directly into HTML documents using the <svg> element
/*
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
<rect x="10" y="10" width="80" height="80" fill="blue" />
</svg>
*/
// SVG elements can be styled using CSS and manipulated using JavaScript just like HTML elements
// Including an SVG externally using the <img> tag, background-image in CSS, or the <object> tag
// Including an SVG directly in HTML using the <svg> element
// We can create and manipulate SVG elements using DOM methods
// Allow to easly edit parts of the image 

export function createSVGCircle(cx, cy, r, fill) {
    const svgns = "http://www.w3.org/2000/svg";
    const circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    return circle;
}

export function addCircleToSVG(svgElement, cx, cy, r, fill) {
    const circle = createSVGCircle(cx, cy, r, fill);
    svgElement.appendChild(circle);
}

//* Canvas
// The <canvas> element provides a drawable region in HTML documents that can be used for rendering graphics on the fly using JavaScript
// To have a canvas element in HTML:
/*
<canvas id="myCanvas" width="500" height="400" role="img" aria-label="A description of the canvas content"></canvas>
*/
// Getting a 2D rendering context from the canvas
export function getCanvasContext(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        return canvas.getContext('2d');
    }
    return null;
}

// Drawing a rectangle on the canvas using proprties and methods of the context object
// Or using library such as charts.js, fabric.js, three.js (for 3D) wich draw on canvas
export function drawRectangle(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

//* Video and Audio
// HTML5 provides built-in support for embedding video and audio content using the <video> and <audio> elements
// Including an audio and video in HTML:
// <audio> and <video> elements support multiple source formats using the <source> element
// using src attribute and <source> elements
// they have Methods allowing to start and stop playback, adjust volume, and listen for events such as play, pause, and ended
/*
<video id="myVideo" width="640" height="360" controls>
    <source src="path/to/video.mp4" type="video/mp4">
    <source src="path/to/video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<audio id="myAudio" controls>
    <source src="path/to/audio.mp3" type="audio/mpeg">
    <source src="path/to/audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>

*/
export function playMedia(mediaId) {
    const mediaElement = document.getElementById(mediaId);
    if (mediaElement) {
        mediaElement.play();
    } 
}

export function pauseMedia(mediaId) {
    const mediaElement = document.getElementById(mediaId);
    if (mediaElement) {
        mediaElement.pause();
    }
}

export function setMediaVolume(mediaId, volume) {
    const mediaElement = document.getElementById(mediaId);
    if (mediaElement) {
        mediaElement.volume = volume; // volume should be between 0.0 and 1.0
    }
}