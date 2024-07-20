const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scrollContainer = document.querySelector('.scroll-container');
const buttons = document.querySelectorAll('.button')
let shape = 'rectangle';

const colors = ['144 202 249', '100 181 246', '66 165 245', '33 150 243', '30 136 229', '25 118 210', '21 101 192', '13 71 161']
const back_color = 'rgb(5, 25, 35)';


//Define canvas size
canvas.width = scrollContainer.offsetWidth;
canvas.height = scrollContainer.offsetHeight;
window.addEventListener('resize', () => {
    canvas.width = scrollContainer.offsetWidth;
    canvas.height = scrollContainer.offsetHeight;
    drawer.drawBackground();
    drawer.draw(shape);
})

//events
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let buttonTarget = event.target.closest('button.button');
        if (buttonTarget) {
            shape = buttonTarget.id;
            console.log(shape);
            ctx.clearRect(0,0, canvas.width, canvas.height);
            drawer.draw(shape);
        }
    })
})

scrollContainer.addEventListener('wheel', (event) => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawer.drawBackground();
    console.log(shape);
    drawer.draw(shape);

})

class Drawer {
    constructor(size) {
        this.size = size
    }
    draw(shape) {
        for (let x = 0; x<canvas.width; x+=this.size) {
            for(let y=0; y<canvas.height-150; y+=this.size) {
                let options = Math.floor(Math.random()*4);
                ctx.strokeStyle = `rgb(${colors[Math.floor(Math.random()*colors.length)]})`;
                if (options == 0 && shape==='rectangle') {
                    ctx.strokeRect(x,y, Math.random()*this.size, 150);
                } else if (options == 0 && shape==='circle') {
                    ctx.beginPath();
                    ctx.arc(x,y, Math.floor(Math.random()*this.size), 0, 2*Math.PI);
                    ctx.stroke();
                } else if (options == 0 && shape==='triangle'){
                    ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + this.size / 2, y + this.size*2);
                            ctx.lineTo(x - this.size / 2, y + this.size*3);
                            ctx.closePath();
                            ctx.stroke();
                }
            } 
        }
    }
    drawBackground() {
        ctx.fillStyle = back_color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

const drawer = new Drawer(50);

window.onload = function() {
    drawer.drawBackground();
    drawer.draw(shape);
}

