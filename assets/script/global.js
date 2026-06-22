const toggle_menu = document.querySelectorAll(".navbar-menu");
const menu_links = document.getElementById("navbarSupportedContent");
const navbar = document.getElementById("navbar");
const brand = document.querySelectorAll(".extra");

toggle_menu.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    menu_links.classList.toggle("show_menu");
    menu_links.classList.toggle("show_menu_animation");
    navbar.classList.toggle("menu-bg");
    brand.forEach((el) =>{
      el.classList.toggle("apper")
    })
    document.body.classList.toggle("scroll_disable");
  });
});

// nav fixed
let nav_fixed = document.getElementById("nav-fixed");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    nav_fixed.classList.add("nav_fixed");
  } else {
    nav_fixed.classList.remove("nav_fixed");
  }
});
let btnUp = document.getElementById("btn-up");

window.onscroll = () => {
    if (window.scrollY > 100) {
        btnUp.classList.remove("d-none");
        btnUp.classList.add("d-flex");
    } else {
        btnUp.classList.add("d-none");
        btnUp.classList.remove("d-flex");
    }
};

btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

AOS.init(
  {
    once: true,
  }
);