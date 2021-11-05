const express = require('express');
const controller = require('../controllers/personController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const router = express.Router();

router.use(ensureAuthenticated);

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
