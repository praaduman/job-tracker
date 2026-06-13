require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
const db = require('./config/db');

db.raw('SELECT 1')
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection failed:', err));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;   