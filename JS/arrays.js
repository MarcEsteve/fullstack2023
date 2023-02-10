const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
const lon = frutas.length;
// for clásico
for (let i = 0; i < lon; i++) {
console.log(frutas[i])
}
// for...of
for (let fruta of frutas) {
    console.log(fruta);
}
const coches = ['Saab', 'Volvo', 'Opel','BMW'];
for (let coche of coches) {
    console.log(coche);
}

// Banana,Orange,Apple,Mango
console.log(frutas.toString());

// Banana * Orange * Apple * Mango
console.log(frutas.join(' * '));   

console.log(coches);
console.log(coches.push('Renault'));
// ["Saab", "Volvo", "BMW", "Renault"]
console.log(coches);

// 5
console.log(frutas.unshift('Lemon'));
// ["Lemon", "Banana", "Orange", "Apple", "Mango"]
console.log(frutas);

// pop() quita el valor de la última posición
console.log(coches.pop()); 
console.log(coches);

//Ejercicio programas[] con push(), unshift[], pop(), shift()
const programas = ['HTML', 'CSS', 'JS']; //3 valores
console.log(programas);
programas.push("Python"); //4
console.log(programas);
programas.unshift("C++"); // 5
console.log(programas);
programas.pop(); //Quitaremos Python
console.log(programas); 
programas.shift(); //Quitaremos C++
console.log(programas); 
programas.splice(3,1,"PHP","Java");
console.log(programas); 
//Equivalente a índices
// programas[3] = "";
// programas[3] = "PHP";
// programas[4] = "Java";


const frutas3 = ['Banana', 'Orange', 'Apple', 'Mango'];
delete frutas3[0];
// [empty, "Orange", "Apple", "Mango"]
console.log(frutas3);

// eliminar elementos
const frutas1 = ['Banana', 'Orange', 'Apple', 'Mango'];
// Eliminados ["Orange", "Apple"]
console.log(frutas1.splice(1, 2));
// ["Banana", "Mango"]
console.log(frutas1);

// añadir elementos
const frutas2 = ['Banana', 'Orange', 'Apple', 'Mango'];
// []
console.log(frutas2.splice(2, 0, 'Lemon', 'Kiwi'));
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
console.log(frutas2);

const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const myChildren = myGirls.concat(myBoys);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
console.log(myGirls);
console.log(myBoys);
console.log(myChildren);


console.log(frutas);
const frutas4 = frutas.slice(1,2);
// ["Orange"]
console.log(frutas4);
const frutas5 = frutas.slice(1);
// ["Orange", "Lemon", "Apple", "Mango"]
console.log(frutas5);

//Reverse
console.log(frutas);
console.log(frutas.reverse());

const frutas7 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Apple", "Banana", "Mango", "Orange"]
console.log(frutas7.sort());
// ordenación ascendente de números enteros mediante una función de comparación
const puntos = [40, 100, 1, 5, 25, 10];
const puntos2 = puntos.sort();
// [1, 10, 100, 25, 40, 5]
console.log(puntos2);

const puntos3 = puntos.sort((a, b) => a - b);
// [1, 5, 10, 25, 40, 100]
console.log(puntos3);

// esta forma de ordenar elementos es muy potente puesto que pueden ordenarse también objetos a partir de alguna propiedad
const coches3 = [
{ type: 'Volvo', year: 2016 },
{ type: 'Saab', year: 2001 },
{ type: 'BMW', year: 2010 }
];
// función para ordenar ascendentemente por la propiedad year
const cochesOrdenados = coches3.sort((a, b) => a.year - b.year);
// [{type: "Saab", year: 2001}, {type: "BMW", year: 2010}, {type: "Volvo", year:2016}]
console.log(cochesOrdenados);