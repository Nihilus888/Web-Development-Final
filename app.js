const { response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

// Enable CORs for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory (where your EJS files are located)
app.set('views', './views');

// Route to home page
app.get('/home', (req, res) => {
    res.render('home');
});

// Route to history page
app.get('/history', (req, res) => {

    fetch('http://localhost:3000/api/data')
        .then(response => {
            if(!response.ok) {
                throw new Error("Unable to make API call");
            }
            return response.json();
        })
        .then(timelineData => {
            res.render('history', { timelineData });
        })
        .catch(error => {
            console.error("Error: ". error);
        });
});

// Route to images page
app.get('/images', (req, res) => {
    res.render('images');
})

// Route to resources page
app.get('/resources', (req, res) => {
    res.render('resources');
})

// API call to local json data file server
app.get('/api/data', (req, res) => {
    const filePath = "./data/data.json";

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json("Issue with pulling the local json data file");
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (err) {
            res.status(500).json("Error parsing the json data");
        }
    });
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/home');
});
