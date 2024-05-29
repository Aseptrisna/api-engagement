const CleaningImageService = require('../../service/cleaning/index');

class CleaningImageController {
  async getCleaningImage(req, res) {
    const { userId, topicId } = req.query;
    const result = await CleaningImageService.getCleaningImage(userId, topicId);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new CleaningImageController();
