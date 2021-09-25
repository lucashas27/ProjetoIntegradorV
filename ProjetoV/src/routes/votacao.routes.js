const express = require('express');
const controller = require('../controllers/votacaoController');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.show);

module.exports = router;
