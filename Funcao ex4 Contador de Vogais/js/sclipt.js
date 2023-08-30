function contarVogais() {
  // Obtém o elemento de entrada de texto
  let textoInput = document.getElementById("textoInput");

  // Obtém o valor inserido pelo usuário
  let texto = textoInput.value;

  // Converte a string para letras minúsculas para fazer a contagem de vogais sem distinção de maiúsculas e minúsculas
  texto = texto.toLowerCase();

  // Define uma variável para contar as vogais
  let contadorVogais = 0;

  // Loop através de cada caractere da string
  for (let i = 0; i < texto.length; i++) {
    // Verifica se o caractere atual é uma vogal (a, e, i, o, u)
    if ("aeiou".indexOf(texto[i]) !== -1) {
      contadorVogais++;
    }
  }

  // Exibe o número de vogais na página
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Número de vogais: " + contadorVogais;
}
  