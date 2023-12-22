const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const dataText = process.env.DATA_TEXT || 'Hello, World!';
// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
 res.send(dataText);
});
// Define a route that handles POST requests with JSON data
app.post('/api/data', (req, res) => {
 const requestData = req.body;
 res.json({ message: 'Data received successfully', data: requestData });
});
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});