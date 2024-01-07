//En la arquitectura limpia el index se dedica solamente en levantar el servidot e iniciar la aplicación
const app = require("./src/server");

app.listen(8080, () => {
    console.log("listening in port 8080");
});