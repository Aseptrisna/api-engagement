const express = require('express');
const router = express.Router();
const EngagementController = require('../../controller/engagement/index');

router.get('/', EngagementController.getEngagementImages);

module.exports = router;
