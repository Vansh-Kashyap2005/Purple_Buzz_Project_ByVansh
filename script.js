
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;
    let slideInterval;
    const autoPlayDelay = 5000;
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => changeSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    
    function changeSlide(index) {
        
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        
        currentIndex = index;

        
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;

        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        
        resetTimer();
    }

    nextBtn.addEventListener('click', () => {
        changeSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        changeSlide(currentIndex - 1);
    });

    
    function startTimer() {
        slideInterval = setInterval(() => {
            changeSlide(currentIndex + 1);
        }, autoPlayDelay); 
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    
    startTimer();
});
