const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 3030;

// Serve the static Vue.js build
app.use(express.static(path.join(__dirname, '/dist')));

// Serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
