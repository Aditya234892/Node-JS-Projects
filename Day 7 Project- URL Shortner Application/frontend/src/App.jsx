import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await axios.post('https://node-js-projects.onrender.com/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to shorten URL');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto', 
      padding: '20px', 
      textAlign: 'center' 
    }}>
      <h1>URL Shortener</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your long URL"
          style={{ 
            width: '100%', 
            padding: '10px', 
            marginBottom: '10px' 
          }}
          required
        />
        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none' 
          }}
        >
          Shorten URL
        </button>
      </form>

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {shortUrl && (
        <div style={{ 
          marginTop: '20px', 
          border: '1px solid #ddd', 
          padding: '10px' 
        }}>
          <p>Shortened URL:</p>
          <input 
            type="text" 
            value={shortUrl} 
            readOnly 
            style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '10px' 
            }}
          />
          <button 
            onClick={copyToClipboard}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#2196F3', 
              color: 'white', 
              border: 'none' 
            }}
          >
            Copy URL
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
