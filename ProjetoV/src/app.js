const express = require('express');
const app = express();

//Rotas
const routes = require('./routes');
app.use(routes);

module.exports = app;

