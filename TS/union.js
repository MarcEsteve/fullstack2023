function combinar(input1, input2) {
    if (typeof (input1) == "number" && typeof (input2) == "number") {
        // number.toString() y number.toString() pueden ser concatenados
        return input1.toString() + input2.toString();
    }
    else if (typeof (input1) == "string" && typeof (input2) == "string") {
        // string y string pueden ser concatenados
        return input1 + input2;
    }
    else if (typeof (input1) == "string" && typeof (input2) == "number") {
        // string y string pueden ser concatenados
        return input1 + input2.toString();
    }
    else if (typeof (input1) == "number" && typeof (input2) == "string") {
        // string y string pueden ser concatenados
        return input1.toString() + input2;
    }
    else {
        console.log("Tipos de valores incorrectos");
    }
}
console.log(combinar(3, 2));
