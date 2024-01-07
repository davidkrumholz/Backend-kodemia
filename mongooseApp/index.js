const mongoose = require("mongoose");

// un esquema es el que define la forma de un documento

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 200
    }
});

// un modelo es el generador de documentos de acuerdo al esquema

const Koder = mongoose.model("koders", koderSchema);

const main = async () => {
    await mongoose.connect("mongodb+srv://davidkrumholzn:3e54nBfi7ssYaWXb@cluster0.zug3jpg.mongodb.net/Kodemia?retryWrites=true&w=majority");
    await Koder.create({
        name: "Jesus",
        age: 19
    });
    const allKoders = await Koder.find();
    console.log("all: ", allKoders);
}

main()
.then((data) => console.log("done"))
.catch((err) => console.log("error: ", err));