const root = document.querySelector(':root');
const container = document.querySelector('.container');
const rootStyles = getComputedStyle(root)
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const gridColumns = rootStyles.getPropertyValue('--size');
const gridWidth = Math.round(windowWidth/gridColumns);
const gridRows = Math.ceil(windowHeight/gridWidth);

function createGrid() {
    for (let i=0; i<gridRows*gridColumns; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    }
}
function setPosition() {
    document.documentElement.style.setProperty('--width', `${windowWidth.toFixed(2)}` );
}

function syncPosition({x: pointerX, y: pointerY}) {
    document.documentElement.style.setProperty('--x', pointerX);
    document.documentElement.style.setProperty('--y', pointerY);
    console.log(pointerX, pointerY);
}
document.addEventListener('pointermove', syncPosition)
window.addEventListener("load", setPosition)
createGrid()
