let menu = document.querySelectorAll(".menu");
let cards = document.querySelectorAll(".card-item");

const lightbox = GLightbox({selector: '.glightbox'}) // initialize GLightbox

menu.forEach((item) => {
  // event to run code
  item.addEventListener("click", () => {
    // remove active class
    menu.forEach((li) => li.classList.remove("active-menu"));
    // add active class in current item
    item.classList.add("active-menu");
    let goal = item.getAttribute("data-goal").toLowerCase();
    // show all cards
    if (goal === "all") {
      cards.forEach((card) => {
        // add animation AOS
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "1400");
        card.style.display = "block";
        // remove hidden class
        setTimeout(() => {
          card.classList.remove("hidden");
        }, 10);
        // change gallery data-attribute
        let link = card.querySelector('.glightbox');
        console.log(link);
        if (link) link.setAttribute('data-gallery', 'all');
      });
      // refresh AOS
      if (typeof AOS !== "undefined") {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
      // reload lightbox
      lightbox.reload();
      // hinde all cards
    } else {
      cards.forEach((card) => {
        // remove animation AOS
        card.removeAttribute("data-aos");
        card.removeAttribute("data-aos-duration");
        // add hidden class
        let targat = card.getAttribute("data-targat").toLowerCase();
        if (goal !== targat) {
          card.classList.add("hidden");
          setTimeout(() => {
            card.style.display = "none";
          }, 400);
        }
      });
      // show current cards
      setTimeout(() => {
        cards.forEach((card) => {
          let targat = card.getAttribute("data-targat").toLowerCase();
          if (goal === targat) {
            if (
              card.style.display === "none" ||
              card.classList.contains("hidden")
            ) {
              card.style.display = "block";
              setTimeout(() => {
                card.classList.remove("hidden");
              }, 30);
            }
            // change gallery data-attribute
            let link = card.querySelector('.glightbox');
            if (link) link.setAttribute('data-gallery', goal);
          }
        });
        // reload lightbox
        lightbox.reload();
      }, 400);
    }
  });
});

document.querySelector('.menu[data-goal="all"]').click();