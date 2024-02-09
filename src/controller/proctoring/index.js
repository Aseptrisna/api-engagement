const ProctoringService = require('../../service/proctoring');

class ProctoringController {

    async getAllProctoringData(req, res) {
        const { page, pageSize } = req.query;
        const result = await ProctoringService.getAllProctoringData(parseInt(page), parseInt(pageSize));
        if (result.status) {
            res.status(result.code).json(result);
        } else {
            res.status(result.code).json({ message: result.message });
        }
    }

    async groupProctoringDataByUsername(req, res) {
        try {
            // const { page = 1, limit = 10 } = req.query;
            // const skip = (parseInt(page) - 1) * parseInt(limit);
            const result = await ProctoringService.groupProctoringDataByUsername();

            if (result.status) {
                res.status(result.code).json(result);
            } else {
                res.status(result.code).json({ message: result.message });
            }
        } catch (error) {
            console.error("Error grouping proctoring data by username:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getProctoringDataById(req, res) {
        const result = await ProctoringService.getProctoringDataById(req.params.id);
        if (result.status) {
            res.status(result.code).json(result.data);
        } else {
            res.status(result.code).json({ message: result.message });
        }
    }

    async createProctoringData(req, res) {
        const result = await ProctoringService.createProctoringData(req.body);
        if (result.status) {
            res.status(result.code).json(result.newData);
        } else {
            res.status(result.code).json({ message: result.message });
        }
    }

    async updateProctoringData(req, res) {
        const result = await ProctoringService.updateProctoringData(req.params.id, req.body);
        if (result.status) {
            res.status(result.code).json(result.updatedData);
        } else {
            res.status(result.code).json({ message: result.message });
        }
    }

    async deleteProctoringData(req, res) {
        const result = await ProctoringService.deleteProctoringData(req.params.id);
        if (result.status) {
            res.status(result.code).json({ message: result.message });
        } else {
            res.status(result.code).json({ message: result.message });
        }
    }
}

module.exports = new ProctoringController();
