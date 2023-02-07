/*Ejercicio 3: realiza la siguientes conversiones entre variables de diferente tipo:
1. De string a number.
2. De number a string.
3. De boolean a string.*/

const v1= "3"; //Texto: 3
let v4=parseInt(v1); //Asignamos su conversión a número
const v2= 13; // Número: 13
let v5= String(v2); //Asignamos su conversión a texto
//let v5= v2.toString(); 
const v3= true; //Boolean verdadero
let v6 = String(v3);
//let v6= v3.toString();

console.log(v4); //El v4 muestra el número 3
console.log(v5); //El v5 muestra el texto "13"
console.log(v6); //El v6 muestra el texto "true"



