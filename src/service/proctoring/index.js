const ProctoringData = require('../../model/proctoring_model');
const model = require('../../model/mdl_proctoring_face_images');
const result = require('../../model/model_result');

class ProctoringService {
  async getAllProctoringData(page = 1, pageSize = 10) {
    try {
      const data = await ProctoringData.find({}, { _id: 0, __v: 0 })
        .sort({ _id: -1 })
        .limit(pageSize * 1)
        .skip((page - 1) * pageSize);
      const count = await ProctoringData.countDocuments();
      const totalPages = Math.ceil(count / pageSize);
      return {
        status: true,
        code: 200,
        message: 'Proctoring data retrieved successfully',
        data,
        totalItems: count,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      console.error('Error fetching proctoring data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async getAllProctoringReult(page = 1, pageSize = 10) {
    try {
      const data = await result
        .find({}, { _id: 0, __v: 0 })
        .sort({ _id: -1 })
        .limit(pageSize * 1)
        .skip((page - 1) * pageSize);
      const count = await result.countDocuments();
      const totalPages = Math.ceil(count / pageSize);
      return {
        status: true,
        code: 200,
        message: 'Proctoring data retrieved successfully',
        data,
        totalItems: count,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      console.error('Error fetching proctoring data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async getLatestData() {
    try {
      // Mengambil data terbaru dengan mengurutkan berdasarkan createdAt dalam urutan menurun
      const latestData = await model.find().sort({ _id: -1 }).limit(1);
      return latestData[0];
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async groupProctoringDataByUsername() {
    try {
      const groupedData = await ProctoringData.aggregate([
        {
          $group: {
            _id: '$username',
            data: { $first: '$$ROOT' },
          },
        },
      ]);

      return {
        status: true,
        code: 200,
        message: 'Proctoring data grouped by username successfully',
        data: groupedData,
      };
    } catch (error) {
      console.error('Error grouping proctoring data by username:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async getProctoringDataById(id) {
    try {
      const data = await ProctoringData.find({ username: id }).limit(20);
      const countLength = await ProctoringData.find({
        username: id,
      }).countDocuments();
      if (!data) {
        return {
          status: false,
          code: 404,
          message: 'Proctoring data not found',
        };
      }
      return { status: true, code: 200, data, totalItems: countLength };
    } catch (error) {
      console.error('Error fetching proctoring data by ID:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async createProctoringData(data) {
    try {
      const newData = await ProctoringData.create(data);
      return {
        status: true,
        code: 201,
        message: 'Proctoring data created successfully',
        newData,
      };
    } catch (error) {
      console.error('Error creating proctoring data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async updateProctoringData(id, newData) {
    try {
      const updatedData = await ProctoringData.findByIdAndUpdate(id, newData, {
        new: true,
      });
      if (!updatedData) {
        return {
          status: false,
          code: 404,
          message: 'Proctoring data not found',
        };
      }
      return {
        status: true,
        code: 200,
        message: 'Proctoring data updated successfully',
        updatedData,
      };
    } catch (error) {
      console.error('Error updating proctoring data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }

  async deleteProctoringData(id) {
    try {
      const deletedData = await ProctoringData.findByIdAndDelete(id);
      if (!deletedData) {
        return {
          status: false,
          code: 404,
          message: 'Proctoring data not found',
        };
      }
      return {
        status: true,
        code: 200,
        message: 'Proctoring data deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting proctoring data:', error);
      return { status: false, code: 500, message: 'Internal Server Error' };
    }
  }
}

module.exports = new ProctoringService();
