const fs = require("fs");
const folderPath = require("os");

fs.writeFileSync(`${folderPath.homedir()}/hola.txt`, "Esto es una prueba desde node", 'utf-8');
