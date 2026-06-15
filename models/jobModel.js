const pool = require("../config/db");

const createJob = async (
    title,
    description,
    salary,
    location,
    company_id,
    created_by
) => {
    const result = await pool.query(
        `INSERT INTO jobs
        (title, description, salary, location, company_id, created_by)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [
            title,
            description,
            salary,
            location,
            company_id,
            created_by,
        ]
    );

    return result.rows[0];
};

module.exports = {
    createJob,
};