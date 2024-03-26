const Quiz = require('../../model/quiz_model');

class QuizService {
    async getAllQuizzes(page = 1, pageSize = 10) {
        try {
            const data = await Quiz.find({}, { _id: 0, __v: 0 })
                .sort({ _id: -1 })
                .limit(pageSize * 1)
                .skip((page - 1) * pageSize);
            const count = await Quiz.countDocuments();
            const totalPages = Math.ceil(count / pageSize);
            return { status: true, code: 200, message: "Quiz data retrieved successfully", data, totalItems: count, totalPages, currentPage: page };
        } catch (error) {
            console.error("Error fetching quiz data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async getQuizzesByNim(nim) {
        try {
            const data = await Quiz.find({ nim });
            if (!data || data.length === 0) {
                return { status: false, code: 404, message: "No quiz data found for the given NIM" };
            }
            return { status: true, code: 200, message: "Quiz data retrieved successfully", data };
        } catch (error) {
            console.error("Error fetching quiz data by NIM:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async getQuizById(id) {
        try {
            const data = await Quiz.findById(id);
            if (!data) {
                return { status: false, code: 404, message: "Quiz data not found" };
            }
            return { status: true, code: 200, data };
        } catch (error) {
            console.error("Error fetching quiz data by ID:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async createQuiz(data) {
        try {
            const newData = await Quiz.create(data);
            return { status: true, code: 201, message: "Quiz data created successfully", newData };
        } catch (error) {
            console.error("Error creating quiz data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async updateQuiz(id, newData) {
        try {
            const updatedData = await Quiz.findByIdAndUpdate(id, newData, { new: true });
            if (!updatedData) {
                return { status: false, code: 404, message: "Quiz data not found" };
            }
            return { status: true, code: 200, message: "Quiz data updated successfully", updatedData };
        } catch (error) {
            console.error("Error updating quiz data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async deleteQuiz(id) {
        try {
            const deletedData = await Quiz.findByIdAndDelete(id);
            if (!deletedData) {
                return { status: false, code: 404, message: "Quiz data not found" };
            }
            return { status: true, code: 200, message: "Quiz data deleted successfully" };
        } catch (error) {
            console.error("Error deleting quiz data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }
}

module.exports = new QuizService();
