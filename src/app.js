const express = require('express');
const routes = require('./routes');

const app = express();

// Rotas
app.use(routes);

module.exports = app;
