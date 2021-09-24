const express = require('express');
const controller = require('../controllers/propositionControler');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.find);

module.exports = router;
