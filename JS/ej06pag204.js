const palindromo = "aibofobia";
let inverso = "";

console.log(palindromo.charAt(palindromo.length-1));
console.log(palindromo.length-1);

for (let i = palindromo.length-1; i >=0; i--) {
    inverso += palindromo.charAt(i);
}
console.log(inverso);

if (palindromo == inverso) {
    console.log("La variable palindromo: " + palindromo + " es un palindromo");
} else {
    console.log("La variable palindromo: " + palindromo + " NO es un palindromo");
}