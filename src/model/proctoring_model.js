const mongoose = require('mongoose');

const proctoringSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  expression: {
    type: String,
    required: true
  },
  confidence: {
    type: Number,
    required: true
  },
  ftp_path: {
    type: String,
    required: true
  },
  updated_at: {
    type: String,
    required: true
  }
});

const 

  ProctoringData = mongoose.model('ProctoringData', proctoringSchema);

module.exports = ProctoringData;
