const { applyToJob } = require("../models/applicationModel");

const apply = async (req, res) => {
    try {
        
        const job_id = req.params.id;

        const user_id = req.user.id;

        const application = await applyToJob(job_id, user_id);

        res.status(201).json({
            message: "Applied successfully",
            application,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    apply,
};