const panels = document.querySelectorAll('.panel')
const navLinksArr = document.querySelectorAll('.nav__link')
const linksContainer = document.querySelector('.navLinks')
const rootStyles = getComputedStyle(document.documentElement)
const diameter = rootStyles.getPropertyValue('--diameter')

//Functionality for the navbar
linksContainer.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    navLinksArr.forEach((button) => {
        const buttonBox = button.getBoundingClientRect();
        const buttonCenterY = buttonBox.top + buttonBox.width / 2; 
        const distance = Math.abs(mouseY - buttonCenterY);
        let newDiameter;
        if (distance > 200) {
            newDiameter = parseInt(diameter);
        } else {
            newDiameter = parseInt(diameter) + Math.sin(Math.PI / 2 * ( 1 - distance / 200)) * 40;
        }
        button.style.width = `${newDiameter}px`
        button.style.height = `${newDiameter}px`
    })
})

linksContainer.addEventListener('mouseleave', normalSizes)

function normalSizes() { 
    navLinksArr.forEach((link) => {
            link.style.width = diameter
            link.style.height = diameter
    })
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
