const root = document.querySelector(':root');
const container = document.querySelector('.container');
const rootStyles = getComputedStyle(root)
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const gridColumns = rootStyles.getPropertyValue('--col');
const gridWidth = Math.round(windowWidth/gridColumns);
const gridRows = Math.ceil(windowHeight/gridWidth);

function createGrid() {
    for (let i=0; i<gridRows*gridColumns; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    }
}

function syncPosition({x: pointerX, y: pointerY}) {
    document.documentElement.style.setProperty('--x', pointerX.toFixed(2));
    document.documentElement.style.setProperty('--y', pointerY.toFixed(2));
}
document.addEventListener('pointermove', syncPosition)

createGrid()
