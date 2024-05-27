const CourseData = require('../../model/course_model');

class CourseService {
  async getCourseUser(username = '') {
    try {
      const data = await CourseData.aggregate([
        {
          $match: {
            username: { $regex: username, $options: 'i' },
          },
        },
        {
          $group: {
            _id: '$course',
            data: { $first: '$$ROOT' },
          },
        },
      ]).limit(10);

      return {
        status: true,
        code: 200,
        message: 'Course data retrieved successfully',
        data,
      };
    } catch (error) {
      console.error('Error fetching course data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new CourseService();