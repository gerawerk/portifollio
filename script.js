// const hire = document.querySelector(".hire");
// const hireBtn = function (e) {
//   e.preventDefault();
//   alert("I'm not available for now");
// };
// hire.addEventListener("click", hireBtn);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav");
  const menuBtn = document.querySelector(".menu-btn");
  const mainNav = document.querySelector(".main_nav");

  const blurElements = document.querySelectorAll(" .About_me ,.contact");

  // const closeBtn = document.querySelector(".close-btn");
  // closeBtn.style.display = "none";

  // menuBtn.addEventListener("click", function () {
  //   mainNav.classList.toggle("show");
  //   blurElements.forEach((element) => {
  //     element.classList.add("overlay");
  //   });
  //   menuBtn.style.display = "none";
  //   closeBtn.style.display = "block";
  // });

  // // event listener to the close button for toggling the menu and blur effect
  // closeBtn.addEventListener("click", function () {
  //   mainNav.classList.toggle("show");
  //   blurElements.forEach((element) => {
  //     element.classList.remove("overlay");
  //   });

  //   menuBtn.style.display = "block";
  //   closeBtn.style.display = "none";
  // });

  document.querySelector(".menu-button").addEventListener("click", function () {
    mainNav.classList.toggle("show");
    blurElements.forEach((element) => {
      element.classList.toggle("overlay");
    });
    document.querySelector(".menu-open").classList.toggle("hidden");
    document.querySelector(".menu-close").classList.toggle("hidden");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      // if (
      //   (
      //     window.matchMedia("(max-width: 768px)") ||
      //     window.matchMedia("(max-width: 650px)")
      //   ).matches
      // ) {
      //   menuBtn.style.display = "block";
      //   closeBtn.style.display = "none";
      // }
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      link.classList.add("active");

      mainNav.classList.remove("show");
      document.querySelector(".menu-open").classList.remove("hidden");
      document.querySelector(".menu-close").classList.add("hidden");

      blurElements.forEach((element) => {
        element.classList.remove("overlay");
      });
      // menuBtn.style.display = "block";
      // closeBtn.style.display = "none";
      navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: "smooth" });
        });
      });
    });
  });
  // if (
  //   !window.matchMedia("(max-width: 768px)").matches ||
  //   !window.matchMedia("(max-width: 768px)").matches
  // ) {
  //   menuBtn.style.display = "block";
  //   closeBtn.style.display = "none";
  // }
});

// Event listener to the submit button of the contact form
const submitButton = document.querySelector(".send");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector("#hire");
  const emailInput = document.querySelector('input[type="email"]');
  const subjectInput = document.querySelector(
    'input[placeholder="Enter your subject"]'
  );
  const messageTextarea = document.querySelector("textarea");

  // Validating the form fields
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageTextarea.value.trim() === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Validating the email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }

  // Log the form data to the console and clear the input fields
  console.log("Name:", nameInput.value.trim());
  console.log("Email:", emailInput.value.trim());
  console.log("Subject:", subjectInput.value.trim());
  console.log("Message:", messageTextarea.value.trim());
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageTextarea.value = "";

  alert("Form submitted successfully!");
});
