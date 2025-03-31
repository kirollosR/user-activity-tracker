const express = require('express');
const { sendEvent } = require('./producer');
const app = express();

app.use(express.json());

app.post('/activity', (req, res) => {
  const event = req.body; // { userId, action, page }
  sendEvent(event);
  res.status(200).send('Event sent');
});

app.listen(3001, () => console.log('Producer API running on port 3001'));