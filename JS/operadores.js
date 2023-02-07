// suma
let a = 2 + 3;
// resta
let b = 2 - 3;
// multiplicación
let c = 2 * 3;
// división
let d = 2 / 3;
// módulo
let e = 2 % 3;
// incremento posterior
a++;
// incremento anterior
++a;
// decremento posterior
a--;
// decremento anterior
--a;

// _________________________________
let x1 = 4;
console.log("El valor de x1 es " + x1); //x1 dará 4
// y1 = 5; x1 = 5 (primero incrementa y luego asigna)
let y1 = ++x1; 
console.log("El valor de x1 ahora es " + x1);
console.log("El valor de y1 es " + y1);
// _________________________________
let x2 = 4;
console.log("El valor de x2 es " + x2);
// y2 = 4; x2 = 5 (primero asigna y luego incrementa)
let y2 = x2++;
console.log("El valor de x2 ahora es " + x2);
console.log("El valor de y2 es " + y2);