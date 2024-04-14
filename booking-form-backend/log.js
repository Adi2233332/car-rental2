const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle login form submissions
app.post('/login', (req, res) => {
    const { full_name, email, mobile_number, email_subject } = req.body;
    // Here you can process the form data (e.g., validate credentials, store in database, etc.)
    // For now, just log the form data to the console
    console.log('Login form data:', { full_name, email, mobile_number, email_subject });
    res.send('Login successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
