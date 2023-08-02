function numeroe(){
    
    let numero = document.getElementById("verificarNumero").value;
    let texto;

    if (numero > 0){
        texto = "maior que zero, positivo";
        document.getElementById("saidaValidacao").innerText = texto;
       
    }

   else if (numero < 0){
        texto = "menor que zero, negativo";
        document.getElementById("saidaValidacao").innerText= texto;
    
    }

    else  {
        texto = "neutro = 0";
        document.getElementById("saidaValidacao").innerText= texto;  
    
    }
}
