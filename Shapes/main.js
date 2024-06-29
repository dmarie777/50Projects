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
    drawer.drawBackground();
    drawer.draw('triangle');

})

window.addEventListener('resize', () => {
    canvas.width = scrollContainer.offsetWidth;
    canvas.height = scrollContainer.offsetHeight;
    drawer.drawBackground();
    drawer.draw('triangle');
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
                    ctx.arc(x,y, size *2, 0, 2*Math.PI);
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
    drawer.draw('triangle');
}

