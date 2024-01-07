const http = require("node:http");

const server = http.createServer((request, response) => {
    const method = request.method;

    if(method === "GET") {
        response.writeHead(201, { "Content-Type": "text/html" });
        response.end("<h3>Hola desde node GET</h3>");
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h3>No se encontro nada para ese metódo</h3>");
    }
});

server.listen(8080, () => {
    console.log("server listening in port 8080");
})