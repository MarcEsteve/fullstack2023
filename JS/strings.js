const str = 'Visita MICROSOFT! Microsoft!';
// Visita MICROSOFT! Corenetworks! (case sensitive y solamente primera coincidencia)
console.log(str.replace('Microsoft', 'Corenetworks'));
// Visita Corenetworks! Microsoft! (no case sensitive (i) y solamente primera coincidencia)
console.log(str.replace(/Microsoft/i, 'Corenetworks'));
// Visita Corenetworks! Corenetworks! (no case sensitive (i) y todas las coincidencias(g))
console.log(str.replace(/Microsoft/ig, 'Corenetworks'));
//replaceAll('texto', 'texto a sustituir')

const str2 = 'Hello World!';
// HELLO WORLD!
console.log(str2.toUpperCase());
const str3 = ' HELLO WORLD!';
// hello world!
console.log(str3.toLowerCase());

//CONCATENAR

const text1 = 'Hello';
const text2 = 'World';
const text3 = '!';
// HelloWorld
console.log(text1.concat(text2));
// Hello World
console.log(text1.concat(' ', text2));
// Hello World!
console.log(text1.concat(' ', text2, text3));

//Equivalente a text1 + " " + text2 + text3; Concatenación con el +

const text = 'HELLO WORLD';
// 87
console.log(text.charCodeAt(6));