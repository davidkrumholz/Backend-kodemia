const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Get desde koders clean architecture"
    });
});

module.exports = router;