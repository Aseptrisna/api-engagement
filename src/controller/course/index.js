const CourseService = require('../../service/course');

class CourseController {
  async getCourseUser(req, res) {
    const { username } = req.params;

    const result = await CourseService.getCourseUser(username);

    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }

  async getTopicsCourse(req, res) {
    const { username, course } = req.params;

    const result = await CourseService.getTopicsCourse(username, course);

    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new CourseController();
