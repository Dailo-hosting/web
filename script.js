let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const intervalTime = 3000; // Cambia de imagen cada 3 segundos

function nextSlide() {
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
}

function startSlider() {
    setInterval(nextSlide, intervalTime);
}

startSlider();
















document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const testimonios = document.querySelectorAll('.testimonio-item');
    let currentTestimonio = 0;

    function showTestimonio(index) {
        testimonios.forEach((testimonio, i) => {
            if (i === index) {
                testimonio.classList.add('active');
            } else {
                testimonio.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentTestimonio = (currentTestimonio > 0) ? currentTestimonio - 1 : testimonios.length - 1;
        showTestimonio(currentTestimonio);
    });

    nextButton.addEventListener('click', function() {
        currentTestimonio = (currentTestimonio < testimonios.length - 1) ? currentTestimonio + 1 : 0;
        showTestimonio(currentTestimonio);
    });

    // Muestra el primer testimonio al cargar la página
    showTestimonio(currentTestimonio);
});































document.addEventListener("DOMContentLoaded", function() {
    const slideTrack = document.querySelector(".slide-track");
    const sliderItems = document.querySelectorAll(".otro-slider");

    let clonedContent = slideTrack.innerHTML; // Guardar el contenido original del carrusel

    let clonedItems = [];
    for (let i = 0; i < 10; i++) { // Clonar el contenido 10 veces (o más si es necesario)
        clonedItems.push(clonedContent);
    }

    clonedItems.forEach(item => {
        slideTrack.innerHTML += item; // Agregar el contenido clonado al carrusel
    });
});




