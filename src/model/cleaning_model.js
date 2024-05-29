const { default: mongoose } = require('mongoose');

const cleaningImage = new mongoose.Schema(
  {},
  { collection: 'sismul_cleaning' }
);

const CleaningImage = mongoose.model('sismul_cleaning', cleaningImage);

module.exports = CleaningImage;
