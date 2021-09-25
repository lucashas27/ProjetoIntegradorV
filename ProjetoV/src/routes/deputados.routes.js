const express = require('express');
const controller = require('../controllers/deputadoController');

const router = express.Router();

router.get('/', controller.list);

module.exports = router;
