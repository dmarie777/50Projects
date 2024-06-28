const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scrollContainer = document.querySelector('.scroll-container');

const colors = ['247 37 133', '181 23 158', '114 9 183', '86 11 173', '72 12 168', '58 12 163'];
const back_color = 'rgb(13, 25, 57)';

//Define canvas size
canvas.width = scrollContainer.offsetWidth;
canvas.height = scrollContainer.offsetHeight;


scrollContainer.addEventListener('wheel', (event) => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    //Draw background 
    ctx.fillStyle = back_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawShapes();
})



let size=50;

function drawShapes() {
    for (let x = 0; x<canvas.width; x+=size) {
        for(let y=0; y<canvas.height-150; y+=size) {
            let options = Math.floor(Math.random()*3);
            if (options == 0) {
                ctx.strokeStyle = `rgb(${colors[Math.floor(Math.random()*colors.length)]})`;
                ctx.strokeRect(x,y, Math.random()*size, 150);
            } 
        } 
    }
}
//Draw background 
ctx.fillStyle = back_color;
ctx.fillRect(0, 0, canvas.width, canvas.height);

drawShapes();

