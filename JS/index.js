// let currentIndex = 0;
// const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slides img').length;

// function showSlide(index) {
//     if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (index >= totalSlides) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }

//     const translation = -currentIndex * 100 + '%';
//     slides.style.transform = `translateX(${translation})`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// function autoSlide() {
//     nextSlide();
//     setTimeout(autoSlide, 5000);
// }

// setTimeout(autoSlide, 3000);
