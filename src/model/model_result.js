const mongoose = require('mongoose');

// Skema model
const logSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  warning: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  datetime: {
    type: String,
    required: true
  },
  idCourses: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  createAt: {
    type: String
  }
});

// Membuat model dari skema
const Log = mongoose.model('resultproctoring', logSchema);

module.exports = Log;
