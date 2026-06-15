const pool = require("../config/db");

const applyToJob = async (job_id, user_id) => {
    const result = await pool.query(
        `INSERT INTO applications (job_id, user_id)
         VALUES ($1, $2)
         RETURNING *`,
        [job_id, user_id]
    );

    return result.rows[0];
};

module.exports = {
    applyToJob,
};