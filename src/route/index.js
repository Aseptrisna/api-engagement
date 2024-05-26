const express = require('express');
const router = express.Router();

const proctoring = require('./proctoring');
const quiz = require('./quiz');
const users = require('./user');

router.use('/proctoring', proctoring);
router.use('/quiz', quiz);
router.use('/users', users);

module.exports = router;
