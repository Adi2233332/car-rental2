const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose any port you like

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  // Access form data from req.body
  const { pickup, dropoff, date, time } = req.body;

  // Check the input
  console.log('Pickup Point:', pickup);
  console.log('Drop-off Point:', dropoff);
  console.log('Date:', date);
  console.log('Time:', time);

  // Send a response
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
