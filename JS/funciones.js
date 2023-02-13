function sumar(a, b) {
    console.log(a + b);
}
// 5
sumar(2, 3);
// NaN (undefined + undefined)
sumar();
// 3
sumar(1, 2);
// 3
sumar(1, 2, 3, 4);
// 12
sumar('1', 2);
// 12
sumar(1, '2');

//Variable constante de tipo función
const suma = function(a, b) { 
    console.log(a + b);
};
// 5
suma(3, 4);

//Función método dentro de un objeto
const a = {
    f: function() {
        console.log('Hola');
    }
};
// invocación del método del objeto utilizando la notación punto
a.f();
// invocación utilizando la notación con corchetes
a['f']();

(function saludar() {
    console.log('Hola que tal?');
})();
// error
// saludar();


//Constructor de objetos
function hacerAlgo(a, b) {
    this.atr1 = a;
    this.atr2 = b;
}
// creación del objeto
const objetoAlgo = new hacerAlgo(1,2); //objetoAlgo {atr1:1,atr2:2}
const otroObjeto = new hacerAlgo(4,5); //otroObjeto {atr1:4,atr2:5}
// error porque objetoAlgo es un objeto
// objetoAlgo();
// 1
console.log(objetoAlgo.atr1);
// 2
console.log(objetoAlgo.atr2);
// undefined
console.log(this.atr1);
console.log(otroObjeto.atr2);

// función normal
function calculo(altura) {
    return 5 * altura / 2;
};
function triangulo(base,altura) {
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3,8));

// función de flecha
const funcion1 = (altura) => {
    return 5 * altura / 2;
};
console.log(funcion1(6));

// forma simplificada de la función de flecha
const funcion2 = altura => 5 * altura / 2;
console.log(funcion2(10));

setTimeout(() => {
    console.log('Hola');
    setTimeout(() => {
        console.log('Adiós');
    }, 2000);
}, 5000)
setTimeout(() => {
    console.log('Buenas tardes');
    }, 100)
console.log('Buenos días');
//_________________
setTimeout(() => {
    console.log('Esta instrucción se ejecuta después de 5 segundos');
    }, 5000);
setInterval(() => {
    console.log('Esta instrucción se ejecuta cada 5 segundos');
    }, 5000);