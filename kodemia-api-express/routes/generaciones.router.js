const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "GET Generaciones"
    });
});

module.exports = router;