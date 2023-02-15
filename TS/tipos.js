// const a: number = 1;
var nombre = 'Mario Rodríguez'; // error porque las variables declaradas con const requieren de la asignación de un valor
var a = 3;
// correcto porque se declara la variable y posteriormente se cambia el 
// No puedo volver a asingar una constante
// a=4;
var b;
b = 2;
b = 4;
var sumar2 = function (x, y) {
    return x + y;
};
sumar2(3, 4);
// f es una variable de tipo string
var f = 'hola';
// error porque se está asignando un valor numérico a una variable de tipo string
// f = 0;
//Si podemos cambiar VALORES, no tipos
f = "buenas tardes";
//Objetos
var objeto4 = {
    edad: 1,
    b: 2
};
// objeto4.c= 13; En JS si puedes cambiar el tamaño del objeto
// objeto4.edad= "13";
console.log(objeto4.edad);
var objeto9 = {
    // no es necesario asignar un valor a la propiedad numero porque es opcional
    a: 2
};
// undefined
console.log(objeto9.numero);
// correcto porque la propiedad numero se ha declarado como propiedad opcional
objeto9.numero = 1;
// 1
console.log(objeto9.numero);
//ARRAY
var lista1 = [1, 2, 3];
// otra forma de declarar un array
var lista2 = [1, 2, 3];
// cosas3 será tipado como (string | number | boolean)[]
var cosas3 = [true, 1, 'baloncesto'];
// error porque cosas3 únicamente puede almacenar valores de tipo string, number y boolean
// cosas3[0] = {}
// correcto porque los valores booleanos son permitidos
cosas3.push(true);
// cosas4 sí puede contener valores de cualquier tipo (aunque esto no es recomendable)
var cosas4 = [true, 1];
// la variable z admite valores de tipo string y number
var z = 4;
// correcto porque la variable admite valores de tipo string
z = 'hola';
// error porque la variable no admite valores de tipo booleano
// z = true;
