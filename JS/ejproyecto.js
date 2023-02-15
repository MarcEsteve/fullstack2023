//Ejercicio 1 de Proyecto
// let gestor = {
//     nombre:"Pepito",
//     dinero: 200,
//     numero: "Cuenta X"
// };
let gestor = {};
gestor.nombre ="Pepito";
gestor.dinero = 200;
gestor.cuenta = "Cuenta X";

let cliente = {
    nombre: "Juanito",
    numCuenta: 8074583224323,
    saldoDisponible: 300
};
let mensaje = {
    emisor: "Juanito",
    receptor: "Pepito",
    mensaje: "Hola gestor"
};
let transferencia = {
    emisor: 4324234,
    receptor: 5435435,
    dineroTransferencia: 400
};
//Ejercicio 2 de Proyecto
let gestor3 = Object.keys(gestor);
for (const key of gestor3) {
    console.log(key);
}
let cliente3 = Object.keys(cliente);
for (const key of cliente3) {
    console.log(key);
}
let mensaje3 = Object.keys(mensaje);
for (const key of mensaje3) {
    console.log(key);
}
let transferencia3 = Object.keys(transferencia);
for (const key of transferencia3) {
    console.log(key);
}