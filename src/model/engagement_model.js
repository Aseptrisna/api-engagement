const mongoose = new require('mongoose');

const engagementSchema = new mongoose.Schema(
  {},
  { collection: 'sismul_engagement' }
);

const EngagementModel = mongoose.model('Engagement', engagementSchema);

module.exports = EngagementModel;
