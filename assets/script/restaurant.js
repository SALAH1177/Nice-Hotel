let filterButtons = document.querySelectorAll(".filter-btn");
let menuItems = document.querySelectorAll(".menu-box");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    let filterValue = button.getAttribute("data-filter");

    menuItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
