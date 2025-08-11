// This is a simulated backend server file. It will not run on its own without a proper Node.js environment.
// It uses a simple array to store data, which would be replaced by a database in a real application.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// This array simulates a database where user data would be stored.
const confirmedNumbers = [];
let totalVisitors = 0;
let totalShares = 0;

// Middleware to parse JSON body and enable CORS
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Endpoint for a user to submit their number
app.post('/api/entry', (req, res) => {
    const { mobileNumber } = req.body;
    console.log(`Received new number: ${mobileNumber}`);
    
    // In a real application, you would save this to a database and track shares
    // For this simulation, we'll just log it.
    
    totalVisitors++; // This would be a real visitor counter
    
    res.json({ message: 'Number received. Please share to confirm!' });
});

// Endpoint for an admin to get all the data
app.get('/api/admin', (req, res) => {
    // In a real application, this would fetch data from the database
    // For this simulation, we'll send our hardcoded values.
    const adminData = {
        totalVisitors: totalVisitors,
        totalShares: confirmedNumbers.length,
        confirmedNumbers: confirmedNumbers
    };
    res.json(adminData);
});

app.listen(port, () => {
    console.log(`Simulated server listening at http://localhost:${port}`);
});
