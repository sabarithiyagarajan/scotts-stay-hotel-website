// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// BOOKING FORM

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Room Availability Checked Successfully!");

});


// CONTACT FORM

const contactButton = document.querySelector(".contact-form button");

contactButton.addEventListener("click", function(){

    alert("Message Sent Successfully!");

});