const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    course: {
      type: Number,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'sismulproctoring',
  }
);

const CourseData = mongoose.model('sismulproctoring', courseSchema);

module.exports = CourseData;
