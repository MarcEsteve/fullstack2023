let edades = [];

for (let i = 0; i < 6; i++) {
    // edades.push(i);
    edades.push(Math.floor(Math.random() * 100));
}
console.log(edades);
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
}
for (const edad of edades) {
    console.log(edad);
}