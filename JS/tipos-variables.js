// Tipo NUMBER
const numero0 = 1;
const numero1 = 20.1;
// 32
const numero2 = 3.2e1;
// 300
const numero3 = 3e2;
// hexadecimal
const numero4 = 0x1f;
console.log(numero4);
// binario
const numero5 = 0b1010;
console.log(numero5);
// octal
const numero6 = 0o744;
console.log(numero6);
// otra forma de declarar una variable de tipo numérico
const numero7 = Number(2);

//Tipo Boolean
const boolean1 = true;
console.log(boolean1);
const boolean2 = false;
console.log(boolean2);

//Tipo String

const str1 = 'Hola "a" todos'; //Comillas dobles dentro, comillas simples fuera
const str5 = "Hola 'a' todos"; //Comillas simples dentro, comillas dobles fuera
console.log(str1);
console.log(str5);
const str2 = 'Hola a todos';
const str3 = '"';
const str4 = '"';

//PROPIEDAD LENGTH
// 14
console.log(str1.length);
// 3

//MÉTODO indexOf
console.log(str2.indexOf('a'));
// 1
console.log(str2.indexOf('ol'));
//8
console.log(str2.indexOf('od'));
//1
console.log(str2.indexOf('o'));
// -1
console.log(str2.indexOf('r'));

const str6 = 'fdsahjkdjsakdsa';
// dsahjkdjsakdsa

//MÉTODO substring
console.log(str6.substring(1));
// dsa
console.log(str6.substring(1, 4));

//MÉTODO charAt
const str7 = 'buenos dias';
// d
console.log(str4.charAt(7));

//ARRAYS
const array1 = [];
const array2 = [20, 3, 8];
console.log(array2[1]);
const array3 = ['Carmen', 'Juan'];
// otra forma de declarar arrays
const array4 = new Array(20, 3, 8); 
//Equivalente a: const array2 = [20, 3, 8];
console.log(array4[1]);
const array5 = new Array(null, undefined, '', 8);
console.log(array2[2]); //8
array2[2]=13;
console.log(array2[2]); //13
console.log(array2.length);
console.log(array5.length);

//Tipo DATE

const date1 = new Date();
// Tue Feb 07 2023 11:45:07 GMT+0100 (Hora estàndard del Centre d’Europa)
console.log(date1);

// milisegundos en formato Unix
//Ejemplo de la fecha anterior= 1675766805232 milisegundos aprox
const milisegundos = new Date().getTime();
console.log(milisegundos);
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);
console.log(date2);

//Conversión de tipos

//parseInt() convierte de string a entero
// 2
const a = parseInt('2');
// 2
const b = +'2';
// NaN
const c = +'d';
// 2
const d = Number('2');

//De string a float 
// 2.32
const e = parseFloat('2.32');
// 2.32
const f = +'2.32';
// 2.32
const g = Number('2.32');
// 0
const h = Number('');
// NaN
const i = Number('99 88');

//Conversión de number a string
const j = 2;
// "2" (pero de tipo string)
console.log(j.toString());
// "2" (pero de tipo string)
console.log(String(j));