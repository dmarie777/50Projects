const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')

let count= 1;

next.addEventListener('click', () => {
    circles[count].classList.add('active')
    progress.style.width = `${(100/(circles.length-1))*count}%`
    count++
    verifyDisable()
})
prev.addEventListener('click', () => {
    count --
    circles[count].classList.remove('active')
    progress.style.width = `${(100/(circles.length-1))*(count-1)}%`
    verifyDisable()
})

function verifyDisable () {
    if (count >=circles.length) {
        next.disabled = true
    } else if (count <=1) {
        prev.disabled = true
    }  else {
        prev.disabled = false;
        next.disabled = false;
    }
}
