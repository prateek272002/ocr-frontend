// config.js
const API_URL = process.env.NODE_ENV === 'production' ? 'https://your-heroku-app-url' : 'http://localhost:5000';

export default API_URL;
