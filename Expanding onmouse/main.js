const panels = document.querySelectorAll('.panel')
const navLinksArr = document.querySelectorAll('.nav__link')
const linksContainer = document.querySelector('.navLinks')
const rootStyles = getComputedStyle(document.documentElement)
const diameter = rootStyles.getPropertyValue('--diameter')

//Functionality for the navbar
linksContainer.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    navLinksArr.forEach((button, index) => {
        const rect = button.getBoundingClientRect();
        const buttonCenterY = rect.top + rect.width / 2; 
        const distance = Math.abs(mouseY - buttonCenterY);
        let newWidth = 0;
        if (distance > 200) {
            newWidth = diameter;
        } else {
            newWidth = 40 + Math.sin((1.75  - 0.0075 * distance)  ) * 40;
        }
        button.style.width = `${newWidth}px`
        button.style.height = `${newWidth}px`
    })

})

linksContainer.addEventListener('mouseleave', normalSizes)

function normalSizes() { 
    navLinksArr.forEach((link,i) => {
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
