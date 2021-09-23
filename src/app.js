const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('../routes/buscarTemas');

app.use('/', index);

module.exports = app;

