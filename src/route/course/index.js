const express = require('express');
const router = express.Router();
const CourseController = require('../../controller/course');

router.get('/user/:username', CourseController.getCourseUser);
router.get('/topics/:username/:course', CourseController.getTopicsCourse);

module.exports = router;
