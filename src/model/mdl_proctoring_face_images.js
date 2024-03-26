const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    guid: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    picture: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    idCourses: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const User = mongoose.model("logProctoring", userSchema);

module.exports = User;
