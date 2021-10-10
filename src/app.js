const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
app.use(express.json());

mongoose.connect(
  'mongodb+srv://chapolin:ShBNZhZf8lbMJKmf@newton.ry3ej.mongodb.net/projetoV',
  { useNewUrlParser: true },
  // eslint-disable-next-line no-console
).then(() => console.log('Mongoose connected!')).catch(() => console.log('Connection Failed!'));

// Rotas
app.use(routes);

module.exports = app;
