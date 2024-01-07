const express = require("express");
const kodersRouter = require("./routes/koders.router");
const mentoresRouter = require("./routes/mentores.router");
const generacionesRouter = require("./routes/generaciones.router");

const server = express();

server.use(express.json());

server.use((request, response, next) => {
    console.log("Middleware de aplicación 2");
    request.pepito = "perez";
    next();
});

server.use((request, response, next) => {
    console.log("middleware de aplicación");
    next();
});

server.use('/koders', kodersRouter);
server.use("/mentores", mentoresRouter);
server.use("/generaciones", generacionesRouter);

server.get("/", (request, response) => {
    response.json({
        message: "Kodemia API",
        randomValue: request.pepito
    });
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});