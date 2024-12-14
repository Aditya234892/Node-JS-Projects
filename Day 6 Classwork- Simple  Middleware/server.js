const express = require('express');
const app = express();

const loggingMiddleware = (req, res, next) => {
    const name = "Aditya Mishra";
    const startTime = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    console.log(`This is ${name}'s server, Time Stamp: [${timestamp}], Method: ${method},  request to ${url}`);

    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`[${timestamp}] ${method} request to ${url} - Completed in ${duration}ms (Status: ${res.statusCode})`);
    });

    next();
};

app.use(loggingMiddleware);

app.get('/', (req, res) => {
    res.send('This is the home page.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
