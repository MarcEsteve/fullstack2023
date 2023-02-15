// la variable color únicamente puede tomar el valor rojo, verde o azul
let color: 'rojo' | 'verde' | 'azul';
// correcto
color = 'rojo';
color = 'verde';
// error porque el amarillo no es uno de los literales considerados en la declaración de la variable
// color = 'amarillo';