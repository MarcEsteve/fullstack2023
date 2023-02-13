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

// obligatorio utilizar function para posteriomente crear objetos con new
const Person = function(name) {
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo privado porque está declarado con const
    const lastname = 'González';
    // atributo privado porque está declarado con const
    const myName = this.name;
    // método privado porque está declarado con const
    const fullName = () => {
        return myName + ' ' + lastname;
    };
    // método público porque está declarado con this
    this.introduce = () => {
        return 'Hola, mi nombre es ' + fullName();
    };
};
const oscar = new Person('Óscar');
// Óscar
console.log(oscar.name);
// Hola, mi nombre es Óscar González
console.log(oscar.introduce());
// undefined porque el atributo es privado
console.log(oscar.lastname);
console.log(oscar.myName);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocar a undefined genera un error
// console.log(oscar.fullName());

const marc = new Person('Marc'); //Creación del objeto marc del tipo Person
console.log(marc.name); //Marc
console.log(marc.introduce()); //Hola, mi nombre es Marc González