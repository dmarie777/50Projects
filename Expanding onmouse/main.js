const panels = document.querySelectorAll('.panel')
const navLinks = document.querySelectorAll('.nav__link')
const rootStyles = getComputedStyle(document.documentElement)
//convert steps to an odd number
const steps = navLinks.length % 2 !==0? navLinks.length : navLinks.length + 1;
//Create an array with numbers from 0 to PI
const start = 0;
const end = Math.PI;
const angles = Array.from({length: steps}, (_,i) => lerp(start, end, i / steps));


const radius = rootStyles.getPropertyValue('--radius')

//
navLinks.forEach(link => {
    link.onmouseover = function (event) {
        let target = event.target;
        const idTarget = Number(target.id);
        removeActive();
        target.classList.add('active');
    }
})

//Add the active class to the hover panels
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

function lerp(a, b, t) {
    return a + t * (b-a);
}

