const express = require('express');
const router = express.Router();
const personRoute = require('./person.routes');
const propositionRoute = require('./proposition.routes')

router.get('/', (req, res) => {
  return res.status(200).json({
    title: "Node Express API",
    version: "0.0.1"
  });
});

router.use('/persons', personRoute);
router.use('/propositions', propositionRoute);


module.exports = router;