const str = 'En un lugar de la mancha';
// 24
console.log(str.length);
// 6
console.log(str.indexOf('l'));
// 6 (comienza a buscar a partir de la posición 6)
console.log(str.indexOf('l', 6));
// 18
console.log(str.indexOf('mancha'));
// -1 (comienza a buscar a partir de la posición 19)
console.log(str.indexOf('mancha', 19));
// -1
console.log(str.indexOf('noencontrado'));

const quijote = 'En un lugar de la mancha';
// 23
console.log(quijote.lastIndexOf('a'));
// 6 (considera solamente hasta la posición 6)
console.log(quijote.lastIndexOf('l', 6));
// -1 (considera solamente hasta la posición 5)
console.log(quijote.lastIndexOf('l', 5));
// -1
console.log(quijote.lastIndexOf('noencontrado'));
// 9 (expresión regular que busca la primera coincidencia de a, b o c)
console.log(quijote.search(/[abc]/));

const fruta = 'Apple, Banana, Kiwi';
// Banana (la posición 13 no se toma)
console.log(fruta.slice(7, 13));
// Banana (la posición -6 no se toma)
console.log(fruta.slice(-12, -6));
// Banana, Kiwi (toma desde la posición 7 hasta el final del string)
console.log(fruta.slice(7));
// Banana, Kiwi (toma desde la posición -12 hasta el final del string)
console.log(fruta.slice(-12));

// Banana (toma los 6 siguientes caracteres desde la posición 7)
console.log(fruta.substring(7, 6));
// Banana, Kiwi (toma desde la posición 7 hasta el final del string)
console.log(fruta.substring(7));

const visita = 'Visita MICROSOFT! Microsoft!';
// Visita MICROSOFT! Corenetworks! (case sensitive y solamente primera coincidencia)
console.log(visita.replace('Microsoft', 'Corenetworks'));
// Visita Corenetworks! Microsoft! (no case sensitive (i) y solamente primera coincidencia)
console.log(visita.replace(/Microsoft/i, 'Corenetworks'));
// Visita Corenetworks! Corenetworks! (no case sensitive (i) y todas las coincidencias(g))
console.log(visita.replace(/Microsoft/ig, 'Corenetworks'));
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