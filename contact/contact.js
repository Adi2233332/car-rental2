document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Form submission logic goes here
            console.log("Form submitted successfully");
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(function (input) {
            if (!input.checkValidity()) {
                isValid = false;
                displayErrorMessage(input);
            }
        });

        return isValid;
    }

    function displayErrorMessage(input) {
        const errorMessage = input.dataset.errorMessage || "Invalid input";
        const errorContainer = document.createElement("span");
        errorContainer.classList.add("error-message");
        errorContainer.textContent = errorMessage;

        const parent = input.parentNode;
        parent.appendChild(errorContainer);

        setTimeout(function () {
            errorContainer.remove();
        }, 3000);
    }
});
const contact = document.querySelector("#contact-form");
contact.onsubmit = (e) => {
  e.preventDefault();
  const formFields = new FormData(contact);
  const fullName = formFields.get("full-name");
  const email = formFields.get("email");
  const mobileNumber = formFields.get("mobile-number");
  const message = formFields.get("message");
  const emailSubject = formFields.get("email-subject");
  const emailBody = `Full Name: ${fullName}
  Mobile Number: ${mobileNumber}\n
  Message: ${message}\n`;
  window.location.href = `mailto:shashank.m748@gmail.com?subject=${emailSubject}&body=${emailBody}`;
};
