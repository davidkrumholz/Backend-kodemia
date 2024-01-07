// const promesa = fetch("https://api.kodemia.com");

// console.log("promesa: ", promesa);

// const promesa = fetch("https://api.kodemia.com/")
// .then((data) => {
//     return data.json();
// })
// .then((respuesta) => {
//     console.log("respuesta en JSON:", respuesta);
// })
// .catch((ex)=> {
//     console.log("error");
// });


const principal = async () => {
  let result =  await fetch("https://api.kodemia.com/");
  let resultJson =  await result.json();
  return resultJson;
}

principal().then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log(error);
})