const { default: mongoose } = require('mongoose');

const ExpressionData = new mongoose.Schema(
  {},
  { collection: 'sismul_expressions' }
);

module.exports = mongoose.model('ExpressionData', ExpressionData);
