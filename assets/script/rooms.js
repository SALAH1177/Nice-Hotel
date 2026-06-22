let price = document.getElementById("filterPrice");
let capacity = document.getElementById("filterCapacity");
let viewType = document.getElementById("filterType");
let loadMoreBtn = document.getElementById("loadMoreBtn");
let roomsContainer = document.getElementById("roomsContainer");
  let rooms = document.querySelectorAll(".room-item");

function applyFilters() {
  let priceValue = price.value;
  let capacityValue = capacity.value;
  let viewTypeValue = viewType.value;
  let sort = document.getElementById("sortBy").value;


  rooms.forEach((card) => {
    let cardPrice = parseFloat(card.getAttribute("data-price"));
    let cardCapacity = parseInt(card.getAttribute("data-capacity")); 
    let cardViewType = card.getAttribute("data-view-type");
    let matches = true;

    if (priceValue === "under100") {
      matches = cardPrice < 100;
    } else if (priceValue === "100-200") {
      matches = cardPrice >= 100 && cardPrice <= 200;
    } else if (priceValue === "200-300") {
      matches = cardPrice > 200 && cardPrice <= 300;
    } else if (priceValue === "over300") {
      matches = cardPrice > 300;
    }

    let matchesCapacity = true;

    if (capacityValue === "2") {
      // let guests = parseInt(capacityValue);
      // matchesCapacity = minCapacity <= guests && maxCapacity >= guests;
      matchesCapacity = cardCapacity === 2;
    } else if (capacityValue === "4") {
      matchesCapacity = cardCapacity >= 3 && cardCapacity <= 4;
    } else if (capacityValue === "5") {
      matchesCapacity = cardCapacity >= 5;
    }

    let matchesViewType = viewTypeValue === "all" || cardViewType === viewTypeValue;

    if (matches && matchesCapacity && matchesViewType) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  let cols = Array.from(document.querySelectorAll(".room-item"));

 cols.sort((a, b) => {

  if (sort === "price-asc") {
    return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
  }

  if (sort === "price-desc") {
    return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
  }

  return 0;
});

cols.forEach(col => {
  roomsContainer.appendChild(col);
});
}
price.addEventListener("change", applyFilters);
capacity.addEventListener("change", applyFilters);
viewType.addEventListener("change", applyFilters);
document.getElementById("sortBy").addEventListener("change", applyFilters);
const moreRooms = [
  {
    title: "Royal Ocean Suite",
    price: 420,
    capacity: 4,
    view: "sea view",
    image: "assets/images/room-20.webp",

    features: [
      {
        icon: "bi-people",
        text: "2-4 Guests",
      },
      {
        icon: "bi-wifi",
        text: "Free WiFi",
      },
      {
        icon: "bi-tv",
        text: "Smart TV",
      },
    ],
  },

  {
    title: "Family Garden Deluxe",
    price: 175,
    capacity: 6,
    view: "garden",
    image: "assets/images/room-13.webp",

    features: [
      {
        icon: "bi-people",
        text: "4-6 Guests",
      },
      {
        icon: "bi-car-front",
        text: "Parking",
      },
      {
        icon: "bi-water",
        text: "Pool Access",
      },
    ],
  },

  {
    title: "Business Executive Plus",
    price: 230,
    capacity: 2,
    view: "courtyard",
    image: "assets/images/room-18.webp",

    features: [
      {
        icon: "bi-people",
        text: "1-2 Guests",
      },
      {
        icon: "bi-briefcase",
        text: "Work Desk",
      },
      {
        icon: "bi-wifi",
        text: "High-Speed WiFi",
      },
    ],
  },

  {
    title: "Luxury Sky View",
    price: 680,
    capacity: 8,
    view: "luxury",
    image: "assets/images/room-15.webp",

    features: [
      {
        icon: "bi-people",
        text: "4-8 Guests",
      },
      {
        icon: "bi-tv",
        text: "Smart TV",
      },
      {
        icon: "bi-cup-hot",
        text: "Coffee Bar",
      },
    ],
  },

  {
    title: "City Comfort Room",
    price: 145,
    capacity: 2,
    view: "city view",
    image: "assets/images/room-16.webp",

    features: [
      {
        icon: "bi-people",
        text: "1-2 Guests",
      },
      {
        icon: "bi-wifi",
        text: "Free WiFi",
      },
      {
        icon: "bi-briefcase",
        text: "Work Desk",
      },
    ],
  },

  {
    title: "Ocean Honeymoon Suite",
    price: 390,
    capacity: 2,
    view: "sea view",
    image: "assets/images/room-9.webp",

    features: [
      {
        icon: "bi-people",
        text: "1-2 Guests",
      },
      {
        icon: "bi-heart",
        text: "Romantic View",
      },
      {
        icon: "bi-cup-hot",
        text: "Breakfast",
      },
    ],
  },
];
loadMoreBtn.addEventListener("click", () => {
  // المرور على كل غرفة جديدة
  moreRooms.forEach((room) => {
    // إنشاء المميزات الخاصة بالغرفة
    let featuresHTML = room.features
      .map(feature => `<span><i class="bi ${feature.icon}"></i> ${feature.text}</span>`)
      .join("");

    // إضافة الغرفة داخل الصفحة
    roomsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-lg-4 room-item"
           data-price="${room.price}"
     data-capacity="${room.capacity}"
           data-view-type="${room.view}">
        <div class="room-card">
          <div class="position-relative">
            <img src="${room.image}"
                 class="room-img"
                 alt="${room.title}">
            <div class="badge-custom">
              NEW
            </div>
            <div class="price">
              $${room.price}
              <span>/night</span>
            </div>
          </div>
          <div class="room-body" style="padding: 20px;">
            <h3 class="room-title">
              ${room.title}
            </h3>
            <p class="room-text">
              Luxury room with premium services and modern facilities.
            </p>
            <div class="features d-flex justify-content-evenly flex-wrap">
              ${featuresHTML}
            </div>
            <div class="mt-4 d-flex gap-2">
              <a href="roomdetails.html" class="btn btn-custom">View Details</a>
              <a href="booking.html" class="btn btn-gold">Check Availability</a>
            </div>
          </div>
        </div>
      </div>
      `,
    );
  });
  // إعادة تشغيل الفلترة والترتيب
  applyFilters();
});
