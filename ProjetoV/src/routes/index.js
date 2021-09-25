const express = require('express');

const personRoute = require('./person.routes');
const propositionRoute = require('./proposition.routes');
const deputadosRoute = require('./deputados.routes');
const temasRoute = require('./temas.routes');
const votacaoRoute = require('./votacao.routes');

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  title: 'Node Express API',
  version: '0.0.1',
}));

router.use('/persons', personRoute);
router.use('/propositions', propositionRoute);
router.use('/deputados', deputadosRoute);
router.use('/temas', temasRoute);
router.use('/votacao', votacaoRoute);

module.exports = router;
