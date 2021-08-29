const express = require('express');
const routes = require('./routes');
const db = require('./src/db');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
db.sync().then(() => {
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
app.listen(4000, () => console.log('Servidor iniciado na porta 4000'));
