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
      ])
        .skip((page - 1) * pageSize)
        .limit(pageSize);
      const count = (
        await UserData.aggregate([
          {
            $group: {
              _id: '$username',
              data: { $first: '$$ROOT' },
            },
          },
        ])
      ).length;
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
  async getUserById(id = '') {
    try {
      const data = await UserData.aggregate([
        {
          $match: {
            username: id,
          },
        },
        {
          $group: {
            _id: '$username',
            data: { $first: '$$ROOT' },
          },
        },
      ]);
      if (data) {
        return { status: true, code: 200, data: data[0] };
      }
      return { status: false, code: 404, message: 'User not found' };
    } catch (error) {
      console.error('Error fetching user data by id:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  // search user by fullname contains
  async searchUserByName(fullname = '') {
    try {
      const data = await UserData.aggregate([
        {
          $match: {
            full_name: { $regex: fullname, $options: 'i' },
          },
        },
        {
          $group: {
            _id: '$username',
            data: { $first: '$$ROOT' },
          },
        },
      ]);
      if (data.length > 0) {
        return { status: true, code: 200, data };
      }
      return { status: false, code: 404, message: 'User not found' };
    } catch (error) {
      console.error('Error searching user data by name:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new UserService();
