const express = require("express");

const router = express.Router();

const { addJob } = require("../controllers/jobController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorizeRole("employer"),
    addJob
);

module.exports = router;