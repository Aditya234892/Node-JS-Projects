const express = require('express');
const cors = require('cors');
const shortid = require('shortid');

const app = express();
app.use(cors());
app.use(express.json());

const urlDatabase = {};

app.post('/shorten', (req, res) => {
  const { originalUrl } = req.body;
  
  const urlPattern = /^https?:\/\/[^\s$.?#].[^\s]*$/;
  if (!urlPattern.test(originalUrl)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  const shortCode = shortid.generate();
  
  urlDatabase[shortCode] = originalUrl;

  const shortUrl = `http://localhost:5000/${shortCode}`;

  res.json({ shortUrl });
});

app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const originalUrl = urlDatabase[shortCode];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});