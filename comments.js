// Create web server

// Load modules
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About!');
});

// Listen on port 3000
app.listen(port, () => console.log(`Server started on port ${port}`));