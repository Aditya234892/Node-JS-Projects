const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

const requestLogger = (req, res, next) => {
    const method = req.method; 
    const url = req.url; 
    const ip = req.ip; 
    const timestamp = new Date().toISOString(); 

    console.log(`TimeStamp: [${timestamp}], Method: ${method}, URL: ${url}, IP: ${ip}`);
    next();
};

app.use(requestLogger);

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

app.post('/submit', (req, res) => {
    res.status(201).send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
