// routes/proctoringRoutes.js
const express = require('express');
const router = express.Router();
const ProctoringController = require('../../controller/proctoring');

router.get('/', ProctoringController.groupProctoringDataByUsername);
router.get('/:id', ProctoringController.getProctoringDataById);
router.post('/', ProctoringController.createProctoringData);
router.put('/:id', ProctoringController.updateProctoringData);
router.delete('/:id', ProctoringController.deleteProctoringData);

router.get('/row/image', ProctoringController.getLatestData);
router.get('/row/result', ProctoringController.getAllProctoringResult);
module.exports = router;
