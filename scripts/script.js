var cantidad = 0;
var valor = 0;
var descuento =0;
var total = 0;
var valord = 0;

function Calcular(){

    cantidad = document.getElementById("cantidad").value;
    valor = cantidad * 820000;
    /* document.getElementById("container-p").style.display = "none"; */


    if (valor>= 1640000 && valor<=3280000){

        descuento = valor *0.15;
        total = valor - descuento;
        valord = "15%"

        document.getElementById("valor-compra").value= valor;
        document.getElementById("valor-descuento").value= descuento;
        document.getElementById("total").value= total;
        document.getElementById("msj-d").innerHTML = "Su descuento fue del";
        document.getElementById("vd").innerHTML = valord;


    }else if(valor>= 3280000 && valor<=6560000){

        descuento = valor *0.25;
        total = valor - descuento;
        valord = "25%"

        document.getElementById("valor-compra").value= valor;
        document.getElementById("valor-descuento").value= descuento;
        document.getElementById("total").value= total;
        document.getElementById("msj-d").innerHTML = "Su descuento fue del";
        document.getElementById("vd").innerHTML = valord;

    } else if(valor>= 6560000 && valor<=9840000){

        descuento = valor *0.35;
        total = valor - descuento;
        valord = "35%"

        document.getElementById("valor-compra").value= valor;
        document.getElementById("valor-descuento").value= descuento;
        document.getElementById("total").value= total;
        document.getElementById("msj-d").innerHTML = "Su descuento fue del";
        document.getElementById("vd").innerHTML = valord;

    }else{

        valord= "0%"
        document.getElementById("valor-compra").value= valor;
        document.getElementById("valor-descuento").value= 0;
        document.getElementById("total").value= valor;
        document.getElementById("msj-d").innerHTML = "No hay descuento para esta compra";
    }
}


