const express = require('express');
const cors = require('cors');
const app = express();
const certificatsRoutes = require('./routes/certificats');
const initDatabase = require('./init-db');

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/certificats', certificatsRoutes);

app.get('/api', (req, res) => {
  res.send('API Cert-View opérationnelle');
});

initDatabase();

app.listen(PORT, () => {
  console.log(`✅ API started : http://localhost:${PORT}`);
});
