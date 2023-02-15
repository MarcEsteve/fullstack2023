// función normal
function calculo(altura:number):number {
    return 5 * altura / 2;
};
function triangulo(base:number,altura:number):number {
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3,8));

// función de flecha
const funcion1 = (altura:number):number => {
    return 5 * altura / 2;
};
console.log(funcion1(6));

// forma simplificada de la función de flecha
const funcion2 = (altura:number):number => 5 * altura / 2;
console.log(funcion2(10));

// sin parámetros opcionales (ejemplo de dos parámetros obligatorios)
const construirNombre1 = (nombre: string, apellidos: string) => {
    return nombre + ' ' + apellidos;
};
// error porque solamente se ha pasado un parámetro
// const resultado1 = construirNombre1('Bob');
// error porque se han pasado tres parámetros
// const resultado2 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
const resultado3 = construirNombre1('Bob', 'Adams');
// los parámetros opcionales no pueden ubicarse antes que los obligatorios. Si no se suministran, su valor es undefined
const construirNombre2 = (nombre: string, apellidos?: string) => {
    return apellidos ? nombre + ' ' + apellidos : nombre;
    // if (apellidos) {
    //     return nombre + ' ' + apellidos;
    // } else {
    //     return nombre
    // }
};
// correcto
const resultado4 = construirNombre2('Bob');
// error porque la función acepta uno o dos parámetros
// const resultado5 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
const resultado6 = construirNombre2('Bob', 'Adams');

console.log(resultado3);
console.log(resultado4);
console.log(resultado6);

const construirNombre3 = (nombre: string, apellidos = 'Smith') => {
    return nombre + ' ' + apellidos;
};
// correcto, el segundo parámetro es opcional
const resultado1 = construirNombre3('Bob');

console.log(resultado1);
// correcto
const resultado2 = construirNombre1('Bob', undefined);
console.log(resultado2);

// error porque se han pasado tres parámetros
// const resultado3 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
const resultado7 = construirNombre1('Bob', 'Adams');
console.log(resultado7);

// los parámetros con valores por defecto no necesariamente se ubican después de los parámetros obligatorios
const construirNombre6 = (nombre = 'Will', apellidos: string) => {
return `${nombre} ${apellidos}`;
};
// error porque la función espera dos parámetros
// const resultado5 = construirNombre2('Bob');
// error porque la función espera dos parámetros
// const resultado6 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
const resultado9 = construirNombre6('Bob', 'Adams');
// correcto
const resultado10 = construirNombre6(undefined, 'Adams');
// error porque el primer parámetro debe ser tipo string
// const resultado11 = construirNombre2(true, 'Adams');
console.log(resultado9);
console.log(resultado10);