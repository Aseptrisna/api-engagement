const express = require('express');
const router = express.Router();
const ExpressionController = require('../../controller/expression');

router.get('/', ExpressionController.getExpressionImages);

module.exports = router;
