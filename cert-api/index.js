const express = require('express');
const cors = require('cors');

const certificatsRoutes = require('./routes/certificats');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/certificats', certificatsRoutes);

app.get('/api', (req, res) => {
  res.send('API Cert-View opérationnelle');
});

app.listen(PORT, () => {
  console.log(`✅ API started : http://localhost:${PORT}`);
});
