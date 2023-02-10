//Ejercicio 7: escribe un programa que elimine el último carácter de un string.
let text = "Hola buenas";
text = text.slice(0,-1);
console.log(text);
text = text.substring(0, text.length-1);
console.log(text);