let fecha = new Date();
let dia = fecha.getDay(); //Va del 0 domingo al 6 sábado, miercoles 3 
let mes = fecha.getMonth(); //Va del 0 enero al 11 diciembre
// mes = 8;
// dia= 5;

switch (dia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break; 
    case 3:
        dia = "Miércoles";
        break; 
    case 4:
        dia = "Jueves";
        break; 
    case 5:
        dia = "Viernes";
        break; 
    case 6:
        dia = "Sábado";
        break; 
    default:
        dia = "Domingo";
        break;
}

switch (mes) {
    case 0:
        mes = "Enero";
        break;
    case 1:
        mes = "Febrero";
        break; 
    case 2:
        mes = "Marzo";
        break; 
    case 3,8:
        mes = "más alla de marzo";
        break; 
    default:
        mes = "Diciembre";
        break;
}

console.log("Es un bonito "+ dia + " de " + mes);