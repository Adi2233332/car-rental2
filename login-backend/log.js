const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample user data (stored in memory)
let users = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' }
];

// Endpoint for signing up
app.post(sign-up.xlsx, (req, res) => {
    const newUser = req.body;
    // Check if the username or email already exists
    const existingUser = users.find(user => user.username === newUser.username || user.email === newUser.email);
    if (existingUser) {
        res.status(400).json({ message: 'Username or email already exists' });
    } else {
        users.push(newUser);
        res.status(201).json({ message: 'User signed up successfully' });
    }
});

// Endpoint for logging in
app.post(/login/login.html, (req, res) => {
    const { username, password } = req.body;
    // Find user by username and password
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
