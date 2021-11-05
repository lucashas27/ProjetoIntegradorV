const express = require('express');
const controller = require('../controllers/votacaoController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const router = express.Router();

router.use(ensureAuthenticated);

router.get('/', controller.list);
router.get('/:id', controller.show);

module.exports = router;
