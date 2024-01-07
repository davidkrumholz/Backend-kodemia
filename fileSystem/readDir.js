const fs = require("fs");
const Path = require("os");

let readDir = fs.readdirSync(`${Path.homedir()}/kodemia`);

console.log(readDir);