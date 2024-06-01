const EngagementService = require('../../service/engagement/index');

class EngagementController {
  async getEngagementImages(req, res) {
    const { userId, topicId } = req.query;
    const result = await EngagementService.getEngagementImages(userId, topicId);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new EngagementController();
