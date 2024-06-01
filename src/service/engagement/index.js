const EngagementModel = require('../../model/engagement_model');

class EngagementService {
  async getEngagementImages(userId, topicId) {
    try {
      const data = await EngagementModel.aggregate([
        {
          $match: {
            username: userId,
            'details.quiz_id': parseInt(topicId),
          },
        },
      ]).limit(1);

      const countLength = data[0].expressions.length;

      return {
        status: true,
        code: 200,
        message: 'Engagement image fetched successfully',
        data: data[0],
        totalItems: countLength,
      };
    } catch (error) {
      console.error('Error getting engagement image:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new EngagementService();
