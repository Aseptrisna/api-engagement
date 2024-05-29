const { getExpressionImages } = require('../../service/expression');

class ExpressionImageController {
  async getExpressionImages(req, res) {
    const { userId, topicId } = req.query;
    const result = await getExpressionImages(userId, topicId);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new ExpressionImageController();
