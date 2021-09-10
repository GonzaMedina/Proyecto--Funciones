//DECLARACION DE VARIABLES (var, let, const)
var buttonClasificaciones = document.querySelector("#Clasificaciones");
var buttonClasificaciones2 = document.querySelector("#Clasificaciones2");

//DECLARACION DE FUNCIONES
function obtenerClasificacion(){

var Clasificacion = prompt("CUAL ES TU CALIFICACION?");

if (isNaN(Clasificacion)){
    alert("INGRESE UN NUMERO")
}
else{
    var redondear = Math.round (Clasificacion)
    alert("Tu calificacion es= " + redondear)

}
} 
//-----------------------------------------------------------------------------------
function adivinanumero(){
    
            var n1 = prompt("ingresa un numero")
            var  calificacion = Math.random();
            var aleatorio = Math.round(calificacion*10)
    
            if(isNaN (n1)){
                alert("ingresa un numero")

             }
            if(n1 == aleatorio){
                alert("los numeros son iguales "+n1+"!!!!!!!!!!!")
             }
            else{
                alert("los numeros son: el aleatorio "+aleatorio+" y el numero ingresado "+n1 )
            }
}
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
buttonClasificaciones.addEventListener("click",obtenerClasificacion);
buttonClasificaciones2.addEventListener("click",adivinanumero);
//-----------------------------------------------------------------------------------

//DELEGACION DE EVENTOS
window.addEventListener ("load", cargarDocumento);