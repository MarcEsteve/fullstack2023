const persona = {
    nombre: 'José',
    mayorDeEdad: true,
    edad: 23,
    numeroGrande: 100n,
    domicilio: null,
    localidad: undefined,
    aficiones: ['Fútbol', 'Baloncesto'],
    hola: () => {
        console.log('hola');
    }
};
// string
console.log(typeof (persona.nombre));
// boolean
console.log(typeof (persona.mayorDeEdad));
// number
console.log(typeof (persona.edad));
// bigint
console.log(typeof (persona.numeroGrande));
// object porque null es considerado como un objeto
console.log(typeof (persona.domicilio));
// undefined
console.log(typeof (persona.localidad));
// object porque los arrays son considerados como objetos
console.log(typeof (persona.aficiones));
// function
console.log(typeof (persona.hola));
// object
console.log(typeof (persona));