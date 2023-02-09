let palabra = "zzzabczzz";;
console.log(palabra.indexOf("abc"));
console.log(palabra.indexOf("abc",palabra.length-3));

if (palabra.indexOf("abc") == 0) {
    console.log("NO VÁLIDA");
} else if (palabra.indexOf("abc",palabra.length-3) == palabra.length-3) {
    console.log("NO VÁLIDA");
} else if (palabra.indexOf("abc") == -1) {
    console.log("NO VÁLIDA");
} else {
    console.log("VÁLIDA");
}