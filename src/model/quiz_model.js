const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  guid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  nim: {
    type: String,
    required: true
  },
  quizName: {
    type: String,
    required: true
  },
  minGrade: {
    type: Number,
    required: true
  },
  attemptNilaiMin: {
    type: Number
  },
  nilaiMinDuration: {
    type: String
  },
  maxGrade: {
    type: Number,
    required: true
  },
  attemptNilaiMax: {
    type: Number
  },
  nilaiMaxDuration: {
    type: String
  }
}, { versionKey: false });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
