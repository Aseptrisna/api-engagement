const UserService = require('../../service/user');

class UserController {
  async getAllUsers(req, res) {
    const { page, pageSize } = req.query;
    const result = await UserService.getAllUsers(
      parseInt(page),
      parseInt(pageSize)
    );
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }

  async getUserById(req, res) {
    const result = await UserService.getUserById(req.params.id);
    if (result.status) {
      res.status(result.code).json(result.data);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }

  async searchUserByName(req, res) {
    const { fullname } = req.params;
    const result = await UserService.searchUserByName(fullname);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new UserController();
