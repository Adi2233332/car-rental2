document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add form validation and submission logic here
    // For simplicity, this example does not include validation logic
    // You can also use AJAX to submit the form data to a server
    // Here, we'll just log the form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);
});
