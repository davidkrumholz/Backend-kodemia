// El objetivo es describir el servidor (Crear servidor) con los middlewares en la capa de aplicación

const express = require("express");

const kodersRouter = require("./routes/koders.router");

const app = express();

app.use(express.json());

app.use("/koders", kodersRouter);

app.get("/", (request, response) => {
    response.json({
        message: "Kodemia API",
        version: 1
    });
});

module.exports = app;