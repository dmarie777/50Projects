const scrollContainer = document.querySelector('.cards-container');
let isHorizontalScroll = true;

// event listener that allows horizontal scroll using the wheel when the variable isHorizontalScroll is equal to true  
scrollContainer.addEventListener('wheel', (event) => {
    if (isHorizontalScroll) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
        console.log('deltaY', event.deltaY)
        // if we are at the begining of the scroll container and deltaY is negative, return to vertical scroll
        if (scrollContainer.scrollLeft==0 && event.deltaY <0 ) {
            console.log('return to vertical scroll');
            scrollContainer.style.overflowX = 'hidden';
            isHorizontalScroll = false;
        } 
    }
}); 

// implement intersector observer to change the variable isHorizontalScroll to true when hitting the scrollcontainer again
const obeserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isHorizontalScroll = true;
        } 
    });
}

const observer = new IntersectionObserver(observerCallback, obeserverOptions);
observer.observe(scrollContainer);