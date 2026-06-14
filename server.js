require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Test database connection
        await pool.query("SELECT NOW()");

        console.log("✅ PostgreSQL Connected Successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to PostgreSQL");
        console.error(error.message);
    }
}

startServer();