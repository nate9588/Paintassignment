var canvas1;
var linecolor = "#008000";
var md = false;
var currentSize = 2;

document.addEventListener('DOMContentLoaded', function () {
    var mainbody = document.getElementsByTagName("body")[0];
    canvas1 = document.createElement("div");
    mainbody.appendChild(canvas1);
    canvas1.className = "whitebackground";
    canvas1.innerHTML = "CANVAS:";


    var toolbox = document.createElement("div");
    mainbody.appendChild(toolbox);
    toolbox.className = "toolbox";
    toolbox.innerHTML = "TOOLBOX";

    var color = document.createElement("div");
    toolbox.appendChild(color);
    color.className = "inner-box";
    color.innerHTML = "COLORS";

    //Eraser
    var eraser = document.createElement("img");
    eraser.src = "eraser.jpg";
    toolbox.appendChild(eraser);
    eraser.className = "eraser";
    eraser.id = "white";

    //Brush
    var brushsize = document.createElement("img");
    brushsize.src = "brush.png";
    toolbox.appendChild(brushsize);
    brushsize.innerHTML = "BRUSH";
    brushsize.className = "brushsize";

    // colors
    var c1 = document.createElement("div");
    color.appendChild(c1);
    c1.id = "blue";

    var c2 = document.createElement("div");
    color.appendChild(c2);
    c2.id = "red";

    var c3 = document.createElement("div");
    color.appendChild(c3);
    c3.id = "yellow";

    var c4 = document.createElement("div");
    color.appendChild(c4);
    c4.id = "teal";

    var c5 = document.createElement("div");
    color.appendChild(c5);
    c5.id = "coral";

    canvas1.addEventListener("mousemove", showCoords);

    c1.addEventListener('click', changecolor);
    c2.addEventListener('click', changecolor);
    c3.addEventListener('click', changecolor);
    c4.addEventListener('click', changecolor);
    c5.addEventListener('click', changecolor);
    eraser.addEventListener('click', changecolor);
    brushsize.addEventListener('click', Add);

}, false);


function showCoords(event) {

    var sY = event.screenY;
    var sX = event.screenX;
    var x = event.clientX;
    var y = event.clientY;
    var coords = document.createElement("div");
    coords.className = "draw";
    coords.style.top = y + "px";
    coords.style.left = x + "px";
    coords.style.backgroundColor = linecolor;
    canvas1.appendChild(coords)

}

function changecolor() {
    linecolor = this.id;
}

function Add() {
    if (currentSize < 8) {
        currentSize++;

    }

}

