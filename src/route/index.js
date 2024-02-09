const express = require('express');
const router = express.Router();

const proctoring = require('./proctoring');

router.use('/proctoring', proctoring);

module.exports = router;