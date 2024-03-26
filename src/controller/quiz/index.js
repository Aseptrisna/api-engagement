const quizService = require('../../service/quiz');

class QuizController {
    async getAllQuizzes(req, res) {
        try {
            const { page, pageSize } = req.query;
            const quizzes = await quizService.getAllQuizzes(parseInt(page), parseInt(pageSize));
            res.status(quizzes.status ? 200 : 500).json(quizzes);
        } catch (error) {
            console.error("Error getting all quizzes:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async getQuizById(req, res) {
        try {
            const { id } = req.params;
            const quiz = await quizService.getQuizById(id);
            res.status(quiz.status ? 200 : (quiz.code === 404 ? 404 : 500)).json(quiz);
        } catch (error) {
            console.error("Error getting quiz by ID:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async getQuizzesByNim(req, res) {
        try {
            const { nim } = req.params;
            const quizzes = await quizService.getQuizzesByNim(nim);
            res.status(quizzes.status ? 200 : (quizzes.code === 404 ? 404 : 500)).json(quizzes);
        } catch (error) {
            console.error("Error getting quizzes by NIM:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async createQuiz(req, res) {
        try {
            const quizData = req.body;
            const createdQuiz = await quizService.createQuiz(quizData);
            res.status(createdQuiz.status ? 201 : 500).json(createdQuiz);
        } catch (error) {
            console.error("Error creating quiz:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async updateQuiz(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const updatedQuiz = await quizService.updateQuiz(id, newData);
            res.status(updatedQuiz.status ? 200 : (updatedQuiz.code === 404 ? 404 : 500)).json(updatedQuiz);
        } catch (error) {
            console.error("Error updating quiz:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async deleteQuiz(req, res) {
        try {
            const { id } = req.params;
            const deletedQuiz = await quizService.deleteQuiz(id);
            res.status(deletedQuiz.status ? 200 : (deletedQuiz.code === 404 ? 404 : 500)).json(deletedQuiz);
        } catch (error) {
            console.error("Error deleting quiz:", error);
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }
}

module.exports = new QuizController();
