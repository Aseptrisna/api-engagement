const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    profile_url: {
      type: String,
      required: true,
    },
    username: {
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
    full_name: {
      type: String,
      required: true,
    },
    course_name: {
      type: String,
      required: true,
    },
  },
  { collection: 'users' }
);

const UserData = mongoose.model('users', userSchema);

module.exports = UserData;
