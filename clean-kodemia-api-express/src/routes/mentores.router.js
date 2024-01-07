const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Get desde mentores clean architecture"
    });
});

module.exports = router;