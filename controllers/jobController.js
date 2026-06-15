const { createJob } = require("../models/jobModel");

const addJob = async (req, res) => {
    try {
        const {
            title,
            description,
            salary,
            location,
            company_id,
        } = req.body;

        const created_by = req.user.id;

        const job = await createJob(
            title,
            description,
            salary,
            location,
            company_id,
            created_by
        );

        res.status(201).json({
            message: "Job created successfully",
            job,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    addJob,
};