const express = require("express");

const router = express.Router();

const {
    signup,
    login,
} = require("../controllers/userController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.post("/signup", signup);
router.post("/login", login);

router.get("/profile", authenticate, (req, res) => {
    res.status(200).json({
        message: "Profile fetched successfully",
        user: req.user,
    });
});
 router.get(
    "/post-job",
    authenticate,
    authorizeRole("employer"),
    (req, res) => {
        res.status(200).json({
            message: "Welcome Employer! You can post jobs.",
        });
    }
);

module.exports = router;