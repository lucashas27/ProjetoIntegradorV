const express = require('express');
const controller = require('../controllers/personController');

const router = express.Router();

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
