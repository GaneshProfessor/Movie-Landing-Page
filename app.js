//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 12000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// Start autoslide on page load
runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

// Handle trailer button clicks
document.addEventListener('DOMContentLoaded', function() {
    const trailerButtons = document.querySelectorAll('.trailer-btn');
    
    trailerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const vidBox = this.parentElement.nextElementSibling;
            const video = vidBox.querySelector('video');
            
            if (vidBox.classList.contains('active')) {
                vidBox.classList.remove('active');
                video.pause();
                video.currentTime = 0;
            } else {
                // Close all other videos
                document.querySelectorAll('.vid-box.active').forEach(box => {
                    box.classList.remove('active');
                    box.querySelector('video').pause();
                });
                
                vidBox.classList.add('active');
                video.play();
            }
        });
    });
    
    // Preload only the first image
    const firstImage = document.querySelector('.carousel .list .item:first-child img');
    if (firstImage) {
        firstImage.loading = 'eager';
    }
    
    // Lazy load other images
    const otherImages = document.querySelectorAll('.carousel .list .item:not(:first-child) img');
    otherImages.forEach(img => {
        img.loading = 'lazy';
    });
});