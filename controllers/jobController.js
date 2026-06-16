const {
    createJob,
    getAllJobs,
    getJobById,
} = require("../models/jobModel");

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
     const getJobs = async (req, res) => {
    try {
        const jobs = await getAllJobs();

        res.status(200).json({
            jobs,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Server Error",
        });
    }
}; 

const getJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await getJobById(id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
            });
        }

        res.status(200).json({
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
    getJobs,
     getJob,
};