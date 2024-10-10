const scrollers = document.querySelectorAll(".scroller")

if (!window.matchMedia("(prefers-reduced-motion:reduced)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    });
}