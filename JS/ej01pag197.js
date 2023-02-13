//Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguiente objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy", sclass : "VI", rollno : 12 }

let objeto1 = { name : "David Rayy", sclass : "VI", rollno : 12 };

//1ª Forma por Objetc.keys()
// claves es un array
const claves = Object.keys(objeto1);
// ["name", "sclass", "rollno"]
console.log(claves);
// bucle for...of para recorrer un array
for (let key of claves) {
    // name, sclass y rollno (en distintas líneas)
    console.log(key);
    // David Rayy, VI y 12 (en distintas líneas)
    console.log(objeto1[key]);
}
//2ª Forma por for..in
for (const key in objeto1) {
    console.log(key);
    console.log(objeto1[key]);
}