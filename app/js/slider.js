const buttonNext = document.querySelector('.slider__next');
const buttonPrev = document.querySelector('.slider__prev');
const slides = document.querySelectorAll('.slider .slider__inner');
let currentSlide = 0;

buttonNext.addEventListener('click', function(e) {
    nextSlide();
});

buttonPrev.addEventListener('click', function(e) {
    previousSlide();
});

function goToSlide(n) {
    slides[currentSlide].className = 'slider__inner';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__inner showing';
}

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}