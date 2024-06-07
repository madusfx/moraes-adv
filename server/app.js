require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3030

app.use(cors({
  origin: 'https://moraes-adv.vercel.app',
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});