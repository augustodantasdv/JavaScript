var numeroSecreto = parseInt(Math.random()*11);

function Chutar(){
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto){
        elementoResultado.innerHTML = "Acertou!!"
    } else if (chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10"
    } else {
        elementoResultado.innerHTML = "Errou!! O número secreto era "+ numeroSecreto;
    }
}