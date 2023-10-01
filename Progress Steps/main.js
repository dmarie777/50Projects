const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')

let currentActive= 1;

next.addEventListener('click', () => {
    currentActive++
    progress.style.width = `${(100/(circles.length-1))*(currentActive-1)}%`
    update()
    verifyDisable()
})
prev.addEventListener('click', () => {
    currentActive --
    progress.style.width = `${(100/(circles.length-1))*(currentActive-1)}%`
    update()
    verifyDisable()
})

function update() {
  circles.forEach((circle, id) => {
    if (id < currentActive) {
        circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
  })
}

function verifyDisable () {
    if (currentActive >=circles.length) {
        next.disabled = true
    } else if (currentActive <=1) {
        prev.disabled = true
    }  else {
        prev.disabled = false;
        next.disabled = false;
    }
}
