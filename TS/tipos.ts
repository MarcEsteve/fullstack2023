// const a: number = 1;
const nombre: string = 'Mario Rodríguez';// error porque las variables declaradas con const requieren de la asignación de un valor
const a: number=3;
// correcto porque se declara la variable y posteriormente se cambia el 
// No puedo volver a asingar una constante
// a=4;
let b: number;
b = 2;
b = 4;
const sumar2 = (x: number, y: number): number => {
    return x + y;
}
sumar2(3, 4);
// f es una variable de tipo string
let f = 'hola';
// error porque se está asignando un valor numérico a una variable de tipo string
// f = 0;
//Si podemos cambiar VALORES, no tipos
f= "buenas tardes";

//Objetos
const objeto4: {edad: 1,b: 2} = {
    edad: 1,
    b: 2
};
// objeto4.c= 13; En JS si puedes cambiar el tamaño del objeto
// objeto4.edad= "13";
console.log(objeto4.edad);

const objeto9: {
    // la propiedad numero se declara como opcional
    numero?: number;
    a: number
} = {
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

const lista1: number[] = [1, 2, 3];
// otra forma de declarar un array
const lista2: Array<number> = [1, 2, 3];

// cosas3 será tipado como (string | number | boolean)[]
const cosas3 = [true, 1, 'baloncesto'];
// error porque cosas3 únicamente puede almacenar valores de tipo string, number y boolean
// cosas3[0] = {}

// correcto porque los valores booleanos son permitidos
cosas3.push(true);
// cosas4 sí puede contener valores de cualquier tipo (aunque esto no es recomendable)
const cosas4: any[] = [true, 1];

// la variable z admite valores de tipo string y number
let z: number | string = 4;
// correcto porque la variable admite valores de tipo string
z = 'hola';
// error porque la variable no admite valores de tipo booleano
// z = true;

