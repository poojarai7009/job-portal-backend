const express = require("express");

const router = express.Router();

const {
    addJob,
    getJobs,
     getJob,
} = require("../controllers/jobController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.get("/", getJobs);
router.get("/:id", getJob);

router.post(
    "/",
    authenticate,
    authorizeRole("employer"),
    addJob
);

module.exports = router;