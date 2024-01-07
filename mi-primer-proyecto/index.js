const prompt = require("prompt-sync")();


// console.log(`Hola ${name}`);

/* Practica 5 */
/* Crear un programa que le pida al usuario ingresar una lista de nombres, en número de nombres permitidos es inderteminado.

Una vez el usuario no desee ingresar las nombres, el programa le da al usuario la siguiente información:
- Cuantos nombres se ingresaron:
- Si existe al menos un valor repitido o no
- Cual es el nombre mas largo de todos los ingresados
- Cual es el nombre mas corto de todos los ingresados
*/

const duplicatesNames = (arrayNames) => {
    let duplicados = arrayNames.filter((value, index, array) => {
        return array.indexOf(value) !== index;
    });

    return duplicados.length > 0;
}

const longestName = (arrayNames) => {
    let longest = arrayNames.reduce((accum, current) => {
        return current.length > accum.length ? current : accum;
    }, "");
    return longest;
}

const shortestName = (arrayNames) => {
    let shortest = arrayNames.reduce((accum, current) => {
      return accum.length <= current.length ? accum : current
    });
    return shortest;
}

let arrayNames = [];
let flag = true;

while (flag) {
    const name = prompt("ingresa tu nombre (si ya no quieres continuar presione Enter): ");
    name == "" ? flag = false : arrayNames.push(name);
}

if(!flag) {
    let CountName = arrayNames.length;
    let duplicateName = duplicatesNames(arrayNames);
    let longestNames = longestName(arrayNames);
    let shortest = shortestName(arrayNames);
    console.log(`Count of numbers: ${CountName}`);
    console.log(`Duplicates names; ${duplicateName}`);
    console.log(`longest Name: ${longestNames}`);
    console.log(`Shortest Name: ${shortest}`);
}