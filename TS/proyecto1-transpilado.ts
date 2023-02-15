//Ejercicio Proyecto TS
type Persona = { nombre:string, dinero:number, cuenta:string | number }

let gestor: Persona;
gestor.nombre = "Pepito";
gestor.dinero = 200;
gestor.cuenta = "Cuenta X"; //Permite también number
// gestor.otro=3; No permite otro atributo a este objeto

let cliente: Persona;
gestor.nombre = "Juanito";
gestor.dinero = 300;
gestor.cuenta = 8074583224323; //Permite también string

let mensaje: ('hola' | 'adios' | 'buenos dias');

mensaje="hola";

let gestor3 = Object.keys(gestor);
for (const key of gestor3) {
    console.log(key);
}
let cliente3 = Object.keys(cliente);
for (const key of cliente3) {
    console.log(key);
}

console.log(mensaje);