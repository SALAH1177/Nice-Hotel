let arrival = document.getElementById("arrival"); // arrival
// console.log(arrival.value);
let departure = document.getElementById("departure"); // departure
// console.log(departure.value);
let adult = document.getElementById("adult"); // adult
// console.log(adult.value);
let children = document.getElementById("children"); // children
// console.log(children.value);
let rooms = document.getElementById("rooms"); // rooms
// console.log(rooms.value);
let name = document.getElementById("name"); // name
// console.log(name.value);
let email = document.getElementById("email"); // email
// console.log(email.value);
let phone = document.getElementById("phone"); // phone
// console.log(phone.value);
let roomPreference = document.getElementById("room-preference"); // room preference
// console.log(roomPreference.value);
let btnBooking = document.getElementById("btn-booking"); // btn booking
// console.log(btnBooking);
let errorData = document.getElementById("error-data"); // error
// console.log(errorData);
let userData = JSON.parse(localStorage.getItem("user")) || {}; // get user data
// console.log(userData);

btnBooking.addEventListener("click", (e) => {
  e.preventDefault();
  // check if data is correct
  if (confirmData() === false) {
    return;
  }
  // get form data
  let bookingDate = {
    arrival: arrival.value,
    departure: departure.value,
    adult: adult.value,
    children: children.value,
    rooms: rooms.value,
    name: name.value,
    email: email.value,
    phone: phone.value,
    roomPreference: roomPreference.value,
  };
  // console.log(bookingDate);
  localStorage.setItem("booking", JSON.stringify(bookingDate));
  // check if user is logged in or not
  if (
    bookingDate.name === userData.name &&
    bookingDate.email === userData.email
  ) {
    Swal.fire({
        icon: "info",
        title: "Check your booking information",
        html: `
            <div>
            <p>Name: ${bookingDate.name}</p>
            <p>Email: ${bookingDate.email}</p>
            <p>Phone: ${bookingDate.phone}</p>
            <hr>
            <p><b>booking details</b></p>
            <p>Check in: ${bookingDate.arrival}</p>
            <p>Check out: ${bookingDate.departure}</p>
            <p>Rooms: ${bookingDate.rooms}</p>
            <p>Children: ${bookingDate.children}</p>
            <p>Adults: ${bookingDate.adult}</p>
            <p>Room preference: ${bookingDate.roomPreference}</p>
            <hr>
            <p>the price ${bookingDate.rooms * 100}$</p>
            </div>
            `,
        showConfirmButton: true,
        confirmButtonText: "Book now",
        showCancelButton: true,
        cancelButtonText: "DO you want to edit the booking",
        allowOutsideClick: false,
        timer: 20000,
        timerProgressBar: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // show booking information
          let newDiv = document.getElementById("info"); // get the info div
          newDiv.innerHTML = `
                <div class="container p-4">
                    <div class="booking-info-title">
                      <h2 class="fw-bold title-info-booking">Booking Information</h2>
                      <div class="booking-profile">
                        <h3 class="text-light fw-bold">booking profile</h3>
                        <div class="d-flex flex-wrap p-4 align-items-center justify-content-between">
                            <div class="col-12">
                                <div class="col-11">
                                    <p class="text-secondary">Full Name</p>
                                    <p class="ps-6 text-light"><i class="fa-solid fa-user icon-info-booking me-1"></i>${name.value}</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="col-11">
                                    <p class="text-secondary">Email</p>
                                    <p class="ps-6 text-light"><i class="fa-regular fa-envelope icon-info-booking me-1"></i>${email.value}</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="col-11">
                                    <p class="text-secondary">Phone</p>
                                    <p class="ps-6 text-light"><i class="fa-solid fa-phone icon-info-booking me-1"></i>${phone.value}</p>
                                </div>
                            </div> 
                        </div>
                      </div>
                      <div class="booking-date">
                        <h3 class="text-light fw-bold">booking date</h3>
                        <div class="d-flex flex-wrap p-4 align-items-center justify-content-between">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="col-11">
                                    <p class="text-secondary">Check-in</p>
                                    <p class="ps-6 text-light"><i class="fa-regular fa-calendar-days icon-info-booking me-1"></i>${arrival.value}</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="col-11">
                                    <p class="text-secondary">Check-out</p>
                                    <p class="ps-6 text-light"><i class="fa-regular fa-calendar-days icon-info-booking me-1"></i>${departure.value}</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="booking-room">
                        <h3 class="text-light fw-bold">booking room</h3>
                        <div class="d-flex flex-wrap p-4 align-items-center justify-content-between">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="col-11">
                                    <p class="text-secondary">Room</p>
                                    <h3 class="fs-4 text-light"><i class="fa-solid fa-bed icon-info-booking me-1"></i>${rooms.value}</h3>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="col-11">
                                    <p class="text-secondary">Adult</p>
                                    <h3 class="fs-4 text-light"><i class="fa-solid fa-user-group icon-info-booking me-1"></i>${adult.value}</h3>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="col-11">
                                    <p class="text-secondary">Children</p>
                                    <h3 class="fs-4 text-light"><i class="fa-solid fa-child icon-info-booking me-1"></i>${children.value}</h3>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            `;
          Swal.fire({ // show a confirmation message
            title: "Booking Confirmed!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          // Calling the clearData function
          clearData();
        }
      });
  } else { // if the user is not logged in
    Swal.fire({
      icon: "error",
      title: "you must log in first",
      showConfirmButton: true,
      confirmButtonText: "Modify data",
      showCancelButton: true,
      cancelButtonText: "Registration",
      timer: 5000,
      timerProgressBar: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = "login.html";
      }
    });
  }
});

// ensuring the information is correct
function confirmData() {
  if (
    email.value === "" ||
    phone.value === "" ||
    name.value === "" ||
    arrival.value === "" ||
    departure.value === "" ||
    adult.value === "" ||
    children.value === "" ||
    rooms.value === ""
  ) {
    errorData.classList.remove("d-none");
    errorData.innerHTML = "Please enter your data";
    return false;
  } else {
    errorData.classList.add("d-none");
    return true;
  }
}

// clear form
function clearData() {
  arrival.value = "";
  departure.value = "";
  adult.selectedIndex = 0;
  children.selectedIndex = 0;
  rooms.selectedIndex = 0;
  name.value = "";
  email.value = "";
  phone.value = "";
  roomPreference.selectedIndex = 0;
}
