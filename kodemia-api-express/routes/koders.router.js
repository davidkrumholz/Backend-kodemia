const express = require("express");

const router = express.Router();

router.use((request, response, next) => {
    console.log("Middleware de Koders");
    next();
});

router.get("/", (request, response, next) => {
    console.log("Middleware desde Get koders");
    next();
}, (request, response) => {
    response.json({
        message: "GET Koders"
    });
});

module.exports = router;