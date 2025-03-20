const canvas2 = document.getElementById('circleTransition');
if (canvas2) {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    const ctx2 = canvas2.getContext('2d');

    let radius = 0;
    const maxRadius = 2 * window.innerHeight;
    const centerX = canvas2.width / 2;
    const centerY = canvas2.height / 2;
    let isGrowing = false;
    
    function drawCircle() {
        console.log('drawing');
        
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.beginPath();
        ctx2.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx2.fillStyle = 'blue';
        ctx2.fill();
        ctx2.closePath();
    }
    
    function animate() {
        if(isGrowing && radius < maxRadius) {
            radius += 10;
            drawCircle();
            requestAnimationFrame(animate);
        }
    }
    
    canvas2.addEventListener('click', () => {
        if(!isGrowing) {
            isGrowing = true;
            animate();
        }
    })
     
    drawCircle()
    // if (transitionButton){
    //     transitionButton.addEventListener("click", function(event){
    //         event.preventDefault();
    //         // Apply the transition effect
    //         transitionBlock.style.transform = "translate(0%, 0%)";
    //         createTransition();
    //         setTimeout(function(){
    //             // Navigate to the new page after the transition
    //             location.href = "/static/demo.html"; // Replace with the path to your target HTML file
    //         }, 800); // Match the duration of the CSS transition
    //     });
    // }
    
}