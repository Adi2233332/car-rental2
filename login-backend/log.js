const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock database of users
const users = [
    { id: 1, fullName: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', password: 'password456' }
];

// Endpoint to handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // If login successful, send a success message
        res.json({ message: 'Login successful', user });
    } else {
        // If login fails, send a failure message
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
