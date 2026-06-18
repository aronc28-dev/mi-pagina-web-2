/*=========================
    CALCULADORA IMC
==========================*/

function calcularIMC(){

let peso = parseFloat(document.getElementById("peso").value);
let altura = parseFloat(document.getElementById("altura").value);

if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){

document.getElementById("resultado").innerHTML="⚠️ Ingresa datos válidos.";
document.getElementById("clasificacion").innerHTML="";
return;

}

let imc = peso / (altura * altura);

document.getElementById("resultado").innerHTML =
"Tu IMC es: <strong>" + imc.toFixed(2) + "</strong>";

let clasificacion="";

if(imc < 18.5){

clasificacion="Bajo peso";

}else if(imc < 25){

clasificacion="Peso saludable";

}else if(imc < 30){

clasificacion="Sobrepeso";

}else{

clasificacion="Obesidad";

}

document.getElementById("clasificacion").innerHTML =
"Clasificación: <strong>" + clasificacion + "</strong>";

}

/*=========================
 MENSAJE DEL FORMULARIO
==========================*/

document.addEventListener("DOMContentLoaded", function(){

const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit", function(event){

event.preventDefault();

alert("✅ Gracias por responder la encuesta.");

});

}

});