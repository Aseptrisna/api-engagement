const express = require('express');
const router = express.Router();
const CleaningController = require('../../controller/cleaning/index');

router.get('/', CleaningController.getCleaningImage);

module.exports = router;
