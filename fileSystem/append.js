const fs = require("fs");

fs.appendFileSync("hola.txt", "data to append", "utf-8");