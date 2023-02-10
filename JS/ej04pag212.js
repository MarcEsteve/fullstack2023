const array1 = ["1", "2" , "3", "4"];
const array2 = ["4", "6", "1", "3"];
let contador = 0;
let posiciones =  [];

for (let i = 0; i < array1.length; i++) {
    for (let k = 0; k < array2.length; k++) {
        if(array1[i]==array2[k]){
           posiciones.push("La posicion del array1: "+ i + " y la posicion del array2: " + k + " son iguales." )
            contador++;
            console.log(array1[i],array2[k]);
        }
    }
}
console.log('La cantidad de elementos iguales son:' + contador);
console.log(posiciones);