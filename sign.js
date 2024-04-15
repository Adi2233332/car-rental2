document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Form data
    const formData = new FormData(this);

    // Send form data using fetch
    fetch(sign-up.xlsx, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
        // You can handle the server response here
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
