const express = require('express');
const { Activity } = require('../infrastructure/mongodb');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
  console.log('Health check performed');
});

app.get('/logs', async (req, res) => {
  const { userId, page = 1, limit = 10 } = req.query;
  const query = userId ? { userId } : {};
  const logs = await Activity.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .sort({ processedAt: -1 });
  res.json(logs);
});

app.listen(3000, () => console.log('API running on port 3000'));