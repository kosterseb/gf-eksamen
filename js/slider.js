let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Auto-slide
let autoSlideInterval;

function showSlide(index) {
    // Fjern aktiv klasse fra alle slides og dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Tilføj aktiv slide og dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
    resetAutoSlide();
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Pause auto-slide når du hover
const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Start auto-slide når du loader siden
startAutoSlide();