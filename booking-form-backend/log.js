const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Check if email and password match a user in your database
    // For simplicity, let's assume there's a hardcoded user
    const user = { email: 'example@example.com', password: 'password123' };
    if (email === user.email && password === user.password) {
        // Redirect to home page or show login successful message
        res.send('Login successful! Redirecting to home page...');
    } else {
        // If login fails, ask to sign up
        res.send('Login failed! Please sign up.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
