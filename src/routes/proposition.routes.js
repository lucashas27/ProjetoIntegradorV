const express = require('express');
const controller = require('../controllers/propositionControler');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const router = express.Router();

router.use(ensureAuthenticated);

router.get('/', controller.list);
router.get('/:id', controller.find);

module.exports = router;
