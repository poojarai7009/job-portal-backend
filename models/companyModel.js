const pool = require("../config/db");

const createCompany = async (
    name,
    description,
    website,
    location,
    created_by
) => {
    const result = await pool.query(
        `INSERT INTO companies
        (name, description, website, location, created_by)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [name, description, website, location, created_by]
    );

    return result.rows[0];
};

module.exports = {
    createCompany,
};