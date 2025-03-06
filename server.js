// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the service worker and manifest files
app.use('/sw.js', express.static(path.join(__dirname, 'public', 'sw.js')));
app.use('/manifest.json', express.static(path.join(__dirname, 'public', 'manifest.json')));

// Send the index.html file for any GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
