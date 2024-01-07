const fs = require("fs");

const content = fs.readFileSync('hola.txt', {encoding: "utf-8"});

console.log(content);