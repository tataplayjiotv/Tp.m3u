const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware to verify tokens
function authenticateToken(req, res, next) {
  const token = req.query.tkn;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Route to access secure content
app.get('/api/getM3u', authenticateToken, (req, res) => {
  // Your protected logic here
  res.send('This is a protected resource');
});

// Route to generate a token
app.get('/api/generateLink', (req, res) => {
  const user = { name: 'user' }; // Replace with actual user details

  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const url = `https://gfhfgf6f2g6fdgfd.vercel.app/api/getM3u?sid=tplay_A&id=123456789&sname=tataP&tkn=${token}`;
  
  res.json({ url });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
