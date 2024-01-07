const express = require("express");

const server = express();

server.use(express.json());

// server.get('/hola', (request, response) => {
//     response.writeHead(200, {"Content-Type": "application/json"})
//     response.end(JSON.stringify({message: "Hola desde express"}));
// });

// server.post('/hola', (request, response) => {
//     response.json({message: "Hola desde express"});
// });

// server.get("/hola/:nombre", (request, response) => {
//     response.json({message: `Hola ${request.params.nombre}, como estás?`})
// })

// server.get('/', (request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end("Hola desde express ruta raiz");
// });

let koders = [];

server.get("/koders", (request, response) => {
    response.json(koders);
});

server.post("/koders/:name", (request, response) => {
    let newKoder = {name: request.params.name}
    koders.push(newKoder);
    response.json({
        message: "Koder creado",
        newKoder
    });
});

server.delete("/koders/:name", (request, response) => {
    let koderExist = koders.find((koder) => koder.name === request.params.name);
    if(!koderExist) {
        response.status(404);
        response.json({message: "Koder not found"});
        return;
    }
    let newKoders = koders.filter((koder) => koder.name !== request.params.name);
    koders = newKoders;
    response.json({message: "koder delete",koders});
});

server.post("/koders", (request, response) => {
    koders.push(request.body);
    response.json({
        message: "Koder added",
        koders
    });
});

server.listen(8080, () => {
    console.log("server listening on port 8080");
});