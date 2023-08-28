const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // 자동 슬라이드를 위한 타이머 설정

showSlide(currentIndex); // 초기 슬라이드 표시

// 화살표 클릭 이벤트 처리
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);
