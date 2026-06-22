
// testmonials slider
new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 2500, pauseOnMouseEnter: true },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
// Gallery Slider
new Swiper(".gallery-swiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: { delay: 3000, pauseOnMouseEnter: true },
  breakpoints: {
    220: { slidesPerView: 3 },
    576: { slidesPerView: 6 },
    1024: { slidesPerView: 9 },
  },
});
// gallery img preview
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
  });
});
// offer counter
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
function update_value() {
  localStorage.setItem("seconds", sec.innerText);
  localStorage.setItem("minutes", min.innerText);
  localStorage.setItem("hours", hours.innerText);
  localStorage.setItem("days", days.innerText);
}
function set_value() {
  sec.innerText = localStorage.getItem("seconds");
  hours.innerText = localStorage.getItem("hours");
  min.innerText = localStorage.getItem("minutes");
  days.innerText = localStorage.getItem("days");
}
function remove_value() {
  localStorage.clear();
}
set_value();
update_value();
function counter() {
  sec.innerText -= 1;
  update_value();
  if (sec.innerText == 0 || sec.innerText < 0 || sec.innerText == "") {
    sec.innerText = 60;
    min.innerText -= 1;
    if (min.innerText == 0 || min.innerText < 0 || min.innerText == "") {
      min.innerText = 60;
      hours.innerText -= 1;
      if (
        hours.innerText == 0 ||
        hours.innerText < 0 ||
        hours.innerText == ""
      ) {
        hours.innerText = 24;
        days.innerText -= 1;
        if (days.innerText == 0 || days.innerText < 0 || days.innerText == "") {
          days.innerText = 30;
        }
      }
    }
  }
}
setInterval(counter, 1000);


