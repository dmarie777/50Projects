const root = document.querySelector(':root');
const container = document.querySelector('.container');
const logoCells = document.querySelectorAll(".square")
const navLink = document.querySelector(".nav__link")
const aboutBox = document.querySelector(".header__about")
const buttons = document.querySelectorAll('.buttons__brokenCorner')
const rootStyles = getComputedStyle(root);

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

//// dat.GUI instance 
const gui = new dat.GUI(); 
const params = { 
    numCol: 0, 
    height: '10px', 
    darkBack: `linear-gradient(rgb(27, 27, 27),rgb(27, 27, 27) ) no-repeat padding-box`,
    lightBack: 'linear-gradient(rgb(245, 248, 250),rgb(245, 248, 250) ) no-repeat padding-box',
    selectedBackground:`linear-gradient(rgb(27, 27, 27),rgb(27, 27, 27) ) no-repeat padding-box`,
};

/// Effect in background
class Grid {
    constructor() {
        this.numColumns = rootStyles.getPropertyValue('--col'),
        this.gridHeight = rootStyles.getPropertyValue('--height').match(/\d+/)[0],
        this.gridWidth  = Math.round(windowWidth/this.numColumns),
        this.numRows = Math.ceil(windowHeight/this.gridWidth),
        this.gridArr = [];
    }

    createGrid() {
        for (let i=0; i<this.numRows*this.numColumns; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            container.appendChild(newDiv);  
        }
        this.gridArr = document.querySelectorAll('.grid');
    }

    updateGrid(val) {
        this.gridArr.forEach(el => el.remove());
        this.numColumns = val,
        this.createGrid();
    }

    addBackground() {
        document.body.style.background = params.selectedBackground;
        
        this.gridArr.forEach(cell => {
            cell.style.background = params.selectedBackground;
        })
    }

    lightEffect({x: pointerX, y: pointerY}) {
        document.documentElement.style.setProperty('--x', pointerX.toFixed(2));
        document.documentElement.style.setProperty('--y', pointerY.toFixed(2));
        document.documentElement.style.setProperty('--mainColorHue', rootStyles.getPropertyValue("--mainColor").trim().match(/hsl\((\d+),/)[1]);
    }
}

const grid = new Grid();
grid.createGrid();
grid.addBackground();
document.addEventListener('pointermove', grid.lightEffect);

//Animation in the navbar
logoCells.forEach(cell => {
    let timeOut;

    cell.addEventListener("mouseover", (event) => {
        const target = event.target;
        clearTimeout()
        target.style.borderColor = rootStyles.getPropertyValue("--mainColor");
        timeOut = setTimeout(() => {
            target.style.borderColor = "grey";
        }, 900)
    });
})

//Animation in letters
function shuffle(textStr) {
    const textArr = textStr.split('');
    for(let i = textArr.length-1; i>0 ; i--) {
        const j  = Math.floor(Math.random() * (i+1));
        [textArr[i], textArr[j]]  = [textArr[j], textArr[i]];
    }
    return textArr.join('');  
}

const buttonsContentArr = Array.from(buttons).map(button => button.textContent)
const animationOptions = {
    duration: 300,
    easing: 'ease',
  };

//Animation in buttons
buttons.forEach((button, i) => {
    let index = 0;
    const textStr = buttonsContentArr[i];
    const keyframes = Array.from({ length: textStr.length }, () => shuffle(textStr));
    const interval = animationOptions.duration / keyframes.length;

    button.addEventListener('mouseenter', (event) => {
        if (button.animationInterval) {
            clearInterval(button.animationInterval);
        }

        button.animationInterval = setInterval(() => {
            button.textContent = keyframes[index];
            index = (index + 1) % keyframes.length;
        }, interval);
    });

    button.addEventListener('click', (event) => {
        const targetColor = event.target.dataset.color;
        document.documentElement.style.setProperty('--mainColor', targetColor);
        console.log('targetcOLOR',targetColor)
        
    })

    button.addEventListener('mouseleave', () => {
        if (button.animationInterval) {
            clearInterval(button.animationInterval);
            button.animationInterval = null;
        }

        button.textContent = buttonsContentArr[i];
        index = 0; 
    });
}) 

//Navlink
navLink.addEventListener("click", (event) => {
    event.preventDefault();
    aboutBox.classList.toggle('open');

})

//Light effect in svg
const svg = document.querySelector('svg');
const lightCircle = document.getElementById('lightCircle');

svg.addEventListener('mousemove', (event) => {
  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  const transformedPt = pt.matrixTransform(svg.getScreenCTM().inverse());
  lightCircle.setAttribute('cx', transformedPt.x);
  lightCircle.setAttribute('cy', transformedPt.y);
});

///// Dat-gui options /////
gui.add(params, 'numCol', 1, 50).step(1).onChange(function(val) {
    root.style.setProperty('--col', val);
    grid.updateGrid(val);
    grid.addBackground();
});

gui.add(params, 'selectedBackground',['lightBack', 'darkBack']).name('Background Style').onChange(function(value) {
    params.selectedBackground = params[value];   
    grid.gridArr.forEach(grid => {
        grid.style.background = params[value];
    })
    document.body.style.background = params[value];
});
gui.close();
