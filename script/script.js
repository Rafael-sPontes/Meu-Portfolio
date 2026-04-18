let currentIndex = 0;
const slides = document.querySelectorAll('.aprendizado');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function updateCarousel() {
    // Remove a classe 'active' de todos os slides e dots
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
    });

    // Adiciona ao slide e dot atual
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Inicia o primeiro slide
updateCarousel();

// Timer de 10 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);