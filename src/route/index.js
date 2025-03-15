const express = require('express');
const router = express.Router();

const proctoring = require('./proctoring');
const quiz = require('./quiz');
const users = require('./user');
const course = require('./course');
const cleaning = require('./cleaning');
const expression = require('./expression');

router.use('/proctoring', proctoring);
router.use('/quiz', quiz);
router.use('/users', users);
router.use('/course', course);
router.use('/cleaning', cleaning);
router.use('/expression', expression);

module.exports = router;
