const express = require('express');
const router = express.Router();
const CourseController = require('../../controller/course');

router.get('/user/:username', CourseController.getCourseUser);

module.exports = router;
