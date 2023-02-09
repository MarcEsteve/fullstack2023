let txt1="pepito" , text2 = "xinganito";

if (txt1.charAt(0) === text2[0]){
    console.log("SI tienen la misma letra inicial");
} else {
    console.log("NO tienen la misma letra incial");
}

if (txt1.charAt(txt1.length-1) === text2[text2.length-1]){
    console.log("y SI tienen la misma letra final");
} else {
    console.log("y NO tienen la misma letra final");
}