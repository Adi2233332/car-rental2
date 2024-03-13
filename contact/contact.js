document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Form submission logic goes here
            alert("Form will be redirected to your mail app");
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
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        if (validateForm()) {
            // If form is valid, you can proceed with form submission
            console.log("Form submitted successfully");
            // Uncomment the below line to submit the form
            // form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Reset previous error messages
        resetErrorMessages();

        // Validate Full Name
        const fullNameInput = form.querySelector('input[name="full-name"]');
        if (fullNameInput.value.trim() === "") {
            displayErrorMessage(fullNameInput, "Full Name is required");
            isValid = false;
        }

        // Validate Email
        const emailInput = form.querySelector('input[name="email"]');
        if (!isValidEmail(emailInput.value.trim())) {
            displayErrorMessage(emailInput, "Invalid Email Address");
            isValid = false;
        }

        // Validate Mobile Number
        const mobileNumberInput = form.querySelector('input[name="mobile-number"]');
        if (!isValidMobileNumber(mobileNumberInput.value.trim())) {
            displayErrorMessage(mobileNumberInput, "Invalid Mobile Number");
            isValid = false;
        }

        // Validate Email Subject
        const emailSubjectInput = form.querySelector('input[name="email-subject"]');
        if (emailSubjectInput.value.trim() === "") {
            displayErrorMessage(emailSubjectInput, "Email Subject is required");
            isValid = false;
        }

        // Validate Message
        const messageInput = form.querySelector('textarea[name="message"]');
        if (messageInput.value.trim() === "") {
            displayErrorMessage(messageInput, "Message is required");
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidMobileNumber(mobileNumber) {
        const mobileNumberRegex = /^[0-9]{10}$/;
        return mobileNumberRegex.test(mobileNumber);
    }

    function displayErrorMessage(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }

    function resetErrorMessages() {
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });
    }
});

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
