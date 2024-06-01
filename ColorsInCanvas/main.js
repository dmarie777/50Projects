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

for (let i=10; i< window.innerWidth; i+=70) {
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(i, 10, 50, 50);
    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(i+30, 30, 50, 50);
}

