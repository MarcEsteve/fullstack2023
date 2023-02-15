// creación del tipo Combinable, que admite valores de tipo string, number y el literal true
type Combinable = "texto" | number | boolean;
// declaración de una variable de tipo Combinable
let cosa: Combinable;
// correcto porque esta variable admite todos estos tipos de valores
cosa = 'rojo';
cosa = 2;
cosa = true;
// error porque la variable no admite el valor false
cosa = false;