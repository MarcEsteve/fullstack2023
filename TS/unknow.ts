let desconocida: unknown;
let cualquier: any;
let c: string;
desconocida = 'hola';
cualquier = 4;
c = 'a';
// correcto porque a la variable c se le asigna una variable de tipo any (cualquier valor)
c = cualquier;
// error porque a la variable c se le asigna una variable de tipo unknown
// c = desconocida;
// es necesario esta comprobación para que el transpilador de TypeScript no arroje un error
if (typeof (desconocida) === 'string') {
   c = desconocida;
}