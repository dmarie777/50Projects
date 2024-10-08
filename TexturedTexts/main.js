const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth*0.4;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const img = document.createElement("img");
img.src = "img/reflective1.jpg";

//FONTS
//create the font
const font = new FontFace("Panchang-Variable",  "url('./fonts/Panchang-Variable.woff')");
////Load the font
font.load().then(loadedFont => {
    //Add the font to the document
    document.fonts.add(loadedFont)
    ctx.font = "35px Panchang-Variable"
    if (img.complete) {
        drawText();
    } else {
        img.onload = function() {
            drawText();
        }
    }
}).catch(error => {
    console.error("Failed to load font:", error);
});

function drawText() {
    ctx.fillStyle = ctx.createPattern(img, 'repeat');
    ctx.textAlign = 'start';
    ctx.fillText("USING THE HTML5 ", 0, canvas.height/2);
    ctx.fillText("CANVAS", 0, canvas.height/2+50);
}