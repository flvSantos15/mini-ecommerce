let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Troca automática a cada 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// Exibir primeiro slide ao carregar
showSlide(currentSlide);
