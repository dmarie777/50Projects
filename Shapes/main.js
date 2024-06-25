const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scrollContainer = document.querySelector('.scroll-container');
let scroll = 0;

scrollContainer.addEventListener('wheel', (event) => {
    scroll = scroll + event.deltaY
    console.log(scroll );
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawShapes();

})


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'red';

let size=50;

function drawShapes() {
    for (let x = 0; x<window.innerWidth; x+=size) {
        for(let y=0; y<window.innerHeight; y+=size) {
            let options = Math.floor(Math.random()*3);
            if (options == 0) {
                ctx.strokeRect(x,y, Math.random()*size, 200);
            } 
        } 
    }
}
drawShapes();

