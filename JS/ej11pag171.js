let numeroEntero = prompt("Escribe un número entero positivo");
for (let i = numeroEntero; i >= 0; i--) {
    if (i>0) {
        document.write(i + ", ");
    } else {
        document.write(i);
    }
}