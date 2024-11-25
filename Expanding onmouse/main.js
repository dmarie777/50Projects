const panels = document.querySelectorAll('.panel')
const navLinksArr = document.querySelectorAll('.nav__link')
const linksContainer = document.querySelector('.navLinks')
const rootStyles = getComputedStyle(document.documentElement)
const diameter = rootStyles.getPropertyValue('--diameter')

//Create an array with numbers from 0 to PI///
//convert steps to an odd number
const steps = navLinksArr.length % 2 !==0? navLinksArr.length : navLinksArr.length + 1;
const start = 0;
const end = Math.PI;
const angles = Array.from({length: steps}, (_,i) => lerp(start, end, i / steps));
let newAngle = []

navLinksArr.forEach(link => {
    link.onmouseover = function (event) {
        let target = event.target;
        updateAngles(target);
        assignNewRadius();
    }
})

linksContainer.addEventListener('mouseleave', normalSizes)

function normalSizes(event) {
    console.log('out');
    
    navLinksArr.forEach((link,i) => {
        link.style.width = diameter
        link.style.height = diameter
})

}

function updateAngles(target) {
    const idTarget = Number(target.id);
    const middleAngle = Math.floor(steps/2);
    if (idTarget > middleAngle) {
        newAngle = [...new Array(idTarget-middleAngle).fill(start), ...angles].slice(0,navLinksArr.length);
    } else {
        newAngle = [...angles, ...new Array(middleAngle-idTarget).fill(end)].slice(-navLinksArr.length); 
    };
}

function assignNewRadius() {
    navLinksArr.forEach((link,i) => {
            const width = 40 * Math.sin(newAngle[i]) 
            link.style.width = `calc(${diameter} + ${width}px)`
            link.style.height = `calc(${diameter} + ${width}px)`
    })
}

function lerp(a, b, t) {
    return a + t * (b-a);
}


//functionality for the panels///
panels.forEach(panel => {
    panel.onmouseover = function (event) {
        let target = event.target;
        if (target.tagName === 'DIV') {
            removeActive()
            target.classList.add('active')
        }
    }
})

function removeActive() {
     panels.forEach(panel => {
        panel.classList.remove('active')
     })
}
