const express = require("express");

const router = express.Router();

const { apply } = require("../controllers/applicationController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.post(
    "/:id/apply",
    authenticate,
    authorizeRole("job_seeker"),
    apply
);

module.exports = router;