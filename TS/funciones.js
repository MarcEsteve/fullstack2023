// función normal
function calculo(altura) {
    return 5 * altura / 2;
}
;
function triangulo(base, altura) {
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3, 8));
// función de flecha
var funcion1 = function (altura) {
    return 5 * altura / 2;
};
console.log(funcion1(6));
// forma simplificada de la función de flecha
var funcion2 = function (altura) { return 5 * altura / 2; };
console.log(funcion2(10));
// sin parámetros opcionales (ejemplo de dos parámetros obligatorios)
var construirNombre1 = function (nombre, apellidos) {
    return nombre + ' ' + apellidos;
};
// error porque solamente se ha pasado un parámetro
// const resultado1 = construirNombre1('Bob');
// error porque se han pasado tres parámetros
// const resultado2 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
var resultado3 = construirNombre1('Bob', 'Adams');
// los parámetros opcionales no pueden ubicarse antes que los obligatorios. Si no se suministran, su valor es undefined
var construirNombre2 = function (nombre, apellidos) {
    return apellidos ? nombre + ' ' + apellidos : nombre;
    // if (apellidos) {
    //     return nombre + ' ' + apellidos;
    // } else {
    //     return nombre
    // }
};
// correcto
var resultado4 = construirNombre2('Bob');
// error porque la función acepta uno o dos parámetros
// const resultado5 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
var resultado6 = construirNombre2('Bob', 'Adams');
console.log(resultado3);
console.log(resultado4);
console.log(resultado6);
var construirNombre3 = function (nombre, apellidos) {
    if (apellidos === void 0) { apellidos = 'Smith'; }
    return nombre + ' ' + apellidos;
};
// correcto, el segundo parámetro es opcional
var resultado1 = construirNombre3('Bob');
console.log(resultado1);
// correcto
var resultado2 = construirNombre1('Bob', undefined);
console.log(resultado2);
// error porque se han pasado tres parámetros
// const resultado3 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
var resultado7 = construirNombre1('Bob', 'Adams');
console.log(resultado7);
// los parámetros con valores por defecto no necesariamente se ubican después de los parámetros obligatorios
var construirNombre6 = function (nombre, apellidos) {
    if (nombre === void 0) { nombre = 'Will'; }
    return "".concat(nombre, " ").concat(apellidos);
};
// error porque la función espera dos parámetros
// const resultado5 = construirNombre2('Bob');
// error porque la función espera dos parámetros
// const resultado6 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
var resultado9 = construirNombre6('Bob', 'Adams');
// correcto
var resultado10 = construirNombre6(undefined, 'Adams');
// error porque el primer parámetro debe ser tipo string
// const resultado9 = construirNombre2(true, 'Adams');
console.log(resultado9);
console.log(resultado10);
