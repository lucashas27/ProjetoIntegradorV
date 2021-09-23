const express = require('express');
const router = express.Router();

const controller = require('../controllers/propositionControler');

router.get('/', controller.list)

module.exports = router;