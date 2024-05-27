const express = require('express');
const router = express.Router();

const proctoring = require('./proctoring');
const quiz = require('./quiz');
const users = require('./user');
const course = require('./course');

router.use('/proctoring', proctoring);
router.use('/quiz', quiz);
router.use('/users', users);
router.use('/course', course);

module.exports = router;
