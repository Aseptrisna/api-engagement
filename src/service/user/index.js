const UserData = require('../../model/user_model');

class UserService {
  // GET ALL USERS
  async getAllUsers(page = 1, pageSize = 10) {
    try {
      const data = await UserData.aggregate([
        {
          $group: {
            _id: '$username',
            data: { $first: '$$ROOT' },
          },
        },
      ]);
      const count = await UserData.countDocuments();
      const totalPages = Math.ceil(count / pageSize);
      return {
        status: true,
        code: 200,
        message: 'Users data retrieved successfully',
        data,
        total: data.length,
        totalItems: count,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      console.error('Error fetching users data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  // GET USER BY ID
  async getUserById(id) {
    try {
      const data = await UserData.findById(id);
      if (data) {
        return { status: true, code: 200, data };
      }
      return { status: false, code: 404, message: 'User not found' };
    } catch (error) {
      console.error('Error fetching user data by id:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new UserService();
