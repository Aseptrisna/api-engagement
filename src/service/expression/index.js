const Expression_model = require('../../model/expression_model');

class ExpressionImageService {
  async getExpressionImages(userId, topicId) {
    try {
      const data = await Expression_model.aggregate([
        {
          $match: {
            username: userId,
            quiz_id: parseInt(topicId),
          },
        },
      ]).limit(20);

      const countLength = (
        await Expression_model.aggregate([
          {
            $match: {
              username: userId,
              quiz_id: parseInt(topicId),
            },
          },
        ])
      ).length;

      return {
        status: true,
        code: 200,
        message: 'Expressions image fetched successfully',
        data,
        totalItems: countLength,
      };
    } catch (error) {
      console.error('Error getting expression image:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new ExpressionImageService();
