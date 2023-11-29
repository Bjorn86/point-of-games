const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const corsOptions = {
  origin: process.env.CORS_API_URL,
  methods: 'GET',
};

app.use(cors(corsOptions));
app.get('/api/feature-flag', (req, res) => {
  const featureFlags = {
    isFeatureFlagEnabled: true,
  };
  res.json(featureFlags);
});

app.listen(port);
