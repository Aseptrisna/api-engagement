const express = require('express');
const router = express.Router();
const quizController = require('../../controller/quiz');

// Route untuk mendapatkan semua kuis
router.get('/', quizController.getAllQuizzes);

// Route untuk mendapatkan kuis berdasarkan ID
router.get('/:id', quizController.getQuizById);

// Route untuk mendapatkan kuis berdasarkan NIM
router.get('/nim/:nim', quizController.getQuizzesByNim);

// Route untuk membuat kuis baru
router.post('/', quizController.createQuiz);

// Route untuk memperbarui kuis berdasarkan ID
router.put('/:id', quizController.updateQuiz);

// Route untuk menghapus kuis berdasarkan ID
router.delete('/:id', quizController.deleteQuiz);

module.exports = router;
