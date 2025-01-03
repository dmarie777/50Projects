const root = document.querySelector(':root');
const container = document.querySelector('.container');
const rootStyles = getComputedStyle(root);
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
const gridArr = document.querySelectorAll('.grid')

//dat.GUI instance 
const gui = new dat.GUI(); 
const params = { 
    rotationX: 0, 
    rotationY: 0, 
    rotationZ: 0, 
    darkBack: `linear-gradient(rgb(27, 27, 27),rgb(27, 27, 27) ) no-repeat padding-box`,
    lightBack: 'linear-gradient(rgb(245, 247, 250),rgb(240, 243, 248) ) no-repeat padding-box',
    selectedBackground:`linear-gradient(rgb(27, 27, 27),rgb(27, 27, 27) ) no-repeat padding-box`,

};

document.body.style.background = params.darkBack;
gridArr.forEach(grid => {
    grid.style.background = params.darkBack;
})

gui.add(params, 'rotationX', -180, 180);
gui.add(params, 'selectedBackground',['lightBack', 'darkBack']).name('Background Style').onChange(function(value) {
    gridArr.forEach(grid => {
        grid.style.background = params[value];
    })
    document.body.style.background = params[value];
});

function updateGrids() { 
    console.log(`X: ${params.rotationX}, Y: ${params.rotationY}, Z: ${params.rotationZ}`);
};


gui.onChange(updateGrids);
updateGrids();