let txt1="pepito" , text2 = "pinganito";

if (txt1.charAt(0) === text2[0]){
    console.log("SI tienen la misma letra inicial");
} else {
    console.log("NO tienen la misma letra incial");
}

if (txt1.slice(0,2) === text2.slice(0,2)){
    console.log("SI tienen las dos primeras letras iguales");
} else {
    console.log("NO tienen las mismas dos primeras letras");
}