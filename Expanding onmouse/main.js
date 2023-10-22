const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.onmouseover = function (event) {
        let target = event.target;
        removeActive()
        target.classList.add('active')
    }
})


function removeActive() {
     panels.forEach(panel => {
        panel.classList.remove('active')
     })
}

