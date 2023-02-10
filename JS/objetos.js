const persona = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
};
// Alejandro
console.log(persona.nombre);
// Alejandro
console.log(persona['nombre']);
// error
// console.log(persona.lugar de residencia);
// en este caso son obligatorios los corchetes
persona['lugar de residencia'] = 'Sevilla';
// Sevilla
console.log(persona['lugar de residencia']);
const propiedad = 'nombre';
// undefined porque busca la variable propiedad dentro del objeto persona
console.log(persona.propiedad);
// Alejandro
console.log(persona[propiedad]); //Equivalente a persona['nombre']

//Anidación de elementos
const persona1 = {
    nombre: 'Carmen',
    apellidos: 'González',
    datos: {
        dirección: 'Sevilla'
    }
};
// Sevilla
console.log(persona1.datos.dirección);
// undefined
console.log(persona1.datos.otrodato);