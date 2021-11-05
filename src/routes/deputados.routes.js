const express = require('express');
const controller = require('../controllers/deputadoController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const router = express.Router();

router.use(ensureAuthenticated);
router.get('/', controller.list);

module.exports = router;
