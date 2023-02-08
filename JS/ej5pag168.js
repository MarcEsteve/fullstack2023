let num1=432874, num2=58423975, num3=4328974;

if (num1>num2 && num1>num3) {
    console.log("El num1 es el mayor");
} else {
    if (num2>num3) {
        console.log("El num2 es el mayor");
    } else {
        console.log("El num3 es el mayor");
    }
}

//Otro forma correcta de estructura de IF
// if (num1>num2 && num1>num3) {
//     console.log("El num1 es el mayor");
// } else if (num2>num3){
//     console.log("El num2 es el mayor");
// }
// else {
//     console.log("El num3 es el mayor");
// }