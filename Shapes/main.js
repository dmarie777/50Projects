const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scrollContainer = document.querySelector('.scroll-container');

const colors = ['144 202 249', '100 181 246', '66 165 245', '33 150 243', '30 136 229', '25 118 210', '21 101 192', '13 71 161']
const back_color = 'rgb(5, 25, 35)';

//Define canvas size
canvas.width = scrollContainer.offsetWidth;
canvas.height = scrollContainer.offsetHeight;


scrollContainer.addEventListener('wheel', (event) => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    drawBackground();
    drawShapes();
})

window.addEventListener('resize', () => {
    canvas.width = scrollContainer.offsetWidth;
    canvas.height = scrollContainer.offsetHeight;
    drawBackground();
    drawShapes();
})

let size=50;

function drawShapes() {
    for (let x = 0; x<canvas.width; x+=size) {
        for(let y=0; y<canvas.height-150; y+=size) {
            let options = Math.floor(Math.random()*4);
            if (options == 0) {
                ctx.strokeStyle = `rgb(${colors[Math.floor(Math.random()*colors.length)]})`;
                ctx.strokeRect(x,y, Math.random()*size, 150);
            } 
        } 
    }
}

function drawBackground() {
    ctx.fillStyle = back_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = function() {
    drawBackground();
    drawShapes();
}

