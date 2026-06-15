const { createCompany } = require("../models/companyModel");

const addCompany = async (req, res) => {
    try {
        const {
            name,
            description,
            website,
            location,
        } = req.body;

        const created_by = req.user.id;

        const company = await createCompany(
            name,
            description,
            website,
            location,
            created_by
        );

        res.status(201).json({
            message: "Company created successfully",
            company,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    addCompany,
};