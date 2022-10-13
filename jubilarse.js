let edad =Number(prompt("Ingrese su edad"));
let sexo=prompt("¿Eres hombre o mujer? (H - M");
if (sexo=="M" || sexo=="m"){
    if (edad>=60){
        alert("Ya puede jubilarse");
    }
    else{
        alert("Debe seguir trabajando");
    }
}
else if (sexo=="H" || sexo=="h"){
    if (edad>=65){
        alert("Ya puede jubilarse");
    }
    else{
        alert("Debe seguir trabajando");
    }
}
else{
    alert("Parámetro incorrecto. Recargue la página para continuar");
}