const sumar = (op1, op2, callback) => {
    callback (op1 + op2);
};
sumar (2,4,(resultado) => {
    console.log(resultado);
});
const restar = (op1, op2, callback) => {
    callback (op1 - op2);
};
restar (2,4,(resultado) => {
    console.log(resultado);
});
const multiplicar = (op1, op2, callback) => {
    callback (op1 * op2);
};
multiplicar (2,4,(resultado) => {
    console.log(resultado);
});
const dividir = (op1, op2, callback) => {
    callback (op1 / op2);
};
dividir (2,4,(resultado) => {
    console.log(resultado);
});