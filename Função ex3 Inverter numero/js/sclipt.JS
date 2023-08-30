function inverterNumero() {
  // Obtém o valor do campo de entrada
  let numero = document.getElementById("numero").value;

  // Converte o número em uma string para facilitar a inversão
 let numeroString = numero.toString();

  // Inverte a string
  let numeroInvertido = numeroString.split('').reverse().join('');

  // Exibe o número invertido na tela
  document.getElementById("resultado").innerHTML = "Número invertido: " + numeroInvertido;
}