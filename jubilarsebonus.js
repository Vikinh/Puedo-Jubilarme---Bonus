let edad =Number(prompt("Ingrese su edad"));
let sexo=prompt("¿Eres hombre o mujer? (H - M)");
if (((sexo=="M" || sexo=="m") && edad>=60) || ((sexo=="H" || sexo=="h") && edad>=65)){
    alert("Ya puede jubilarse");
}
else{
     alert("Debe seguir trabajando");
}