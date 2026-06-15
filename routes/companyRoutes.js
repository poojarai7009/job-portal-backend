const express = require("express");

const router = express.Router();

const { addCompany } = require("../controllers/companyController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorizeRole("employer"),
    addCompany
);

module.exports = router;