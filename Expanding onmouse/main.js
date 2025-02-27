const panels = document.querySelectorAll('.panel')
const panelsImg = document.querySelectorAll('.panel__img')

const navLinksArr = document.querySelectorAll('.nav__link')
const linksContainer = document.querySelector('.nav')
const rootStyles = getComputedStyle(document.documentElement)
const diameterStr = rootStyles.getPropertyValue('--diameter')

let color =  '';
const colorsArr = Array.from(navLinksArr).map(link => link.dataset.color )

//Functionality for the navbar
linksContainer.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    navLinksArr.forEach((button) => {
        const buttonBox = button.getBoundingClientRect();
        const buttonCenterY = buttonBox.top + buttonBox.width / 2; 
        const distance = Math.abs(mouseY - buttonCenterY);

        let newDiameter;
        if (distance > 200) {
            newDiameter = parseInt(diameterStr);
        } else {
            newDiameter = parseInt(diameterStr) + Math.sin(Math.PI / 2 * ( 1 - distance / 200)) * 30;
        };

        button.style.width = `${newDiameter}px`
        button.style.height = `${newDiameter}px`
    })
})

linksContainer.addEventListener('mouseleave', normalSizes)

//functionality for the buttons///
navLinksArr.forEach((button,i) => {
    button.addEventListener('click' ,(event)=> {
        // console.log(event.target);
        const target = event.target;
        color = target.dataset.color
        document.documentElement.style.setProperty('--color', colorsArr[i])
    })
})



//functionality for the panels///
panelsImg.forEach((panel, i) => {
    panel.addEventListener('mouseover', function (event) {
        let target = event.target;
        if (target.tagName === 'DIV') {
            removeActive()
            target.classList.add('active')
            panels[i].classList.add('active')
        }
    })
    panel.addEventListener('mouseleave', removeActive)

})

function removeActive() {
     panels.forEach(panel => {
        panel.classList.remove('active')
     })
}

function normalSizes() { 
    navLinksArr.forEach((link) => {
            link.style.width = diameterStr
            link.style.height = diameterStr
    })
}