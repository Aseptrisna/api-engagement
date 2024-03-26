const express = require('express');
const router = express.Router();

const proctoring = require('./proctoring');
const quiz = require('./quiz');

router.use('/proctoring', proctoring);
router.use('/quiz', quiz);

module.exports = router;