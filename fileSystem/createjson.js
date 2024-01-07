const fs = require("fs");

const obj = [
    {name: "David"},
    {name: "Daniel"}
];

let objString = JSON.stringify(obj);

fs.writeFileSync("nombres.json", objString, "utf-8");