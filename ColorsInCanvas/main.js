const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Srt canvas width and height to be the same as the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//To make the canvas resize when the window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


const arrColors = ["rgb(202, 240,248)", "rgb(173, 232,244)", "rgb(144, 224,239)", "rgb(72, 202,228)", "rgb(0, 180,216)", "rgb(0, 150,199)", "rgb(0, 119,182)", "rgb(2, 62,138)"]

//background
const height = window.innerHeight/arrColors.length;

for (let y=0; y<arrColors.length; y++ ) {
    ctx.fillStyle = arrColors[y];
    ctx.fillRect(0, y*height, window.innerWidth, height );
}

//boat
const x = window.innerWidth/3;
const y = window.innerHeight/2;
const radius = 200; // Arc radius
const startAngle = Math.PI/6; // Starting point on circle
const endAngle = Math.PI; 

ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.fillStyle = "rgb(200, 230, 255)";
ctx.arc(x, y, radius , startAngle, endAngle  )
ctx.stroke();
ctx.fill();
ctx.fillStyle = "rgb(0, 119,182)";
ctx.fillRect(x-150,y+170, 500, 50)

