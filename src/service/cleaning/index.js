const CleaningImage = require('../../model/cleaning_model');

class CleaningImageService {
  async getCleaningImage(userId, topicId) {
    try {
      const data = await CleaningImage.aggregate([
        {
          $match: {
            username: userId,
            quiz_id: parseInt(topicId),
          },
        },
      ]).limit(20);

      const countLength = (
        await CleaningImage.aggregate([
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
        message: 'Cleaning image fetched successfully',
        data,
        totalItems: countLength,
      };
    } catch (error) {
      console.error('Error getting cleaning image:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new CleaningImageService();
