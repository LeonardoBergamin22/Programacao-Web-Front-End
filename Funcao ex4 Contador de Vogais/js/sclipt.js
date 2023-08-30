function contarVogais() {
    // Solicita ao usuário que insira uma string
    let texto = prompt("Digite uma palavra ou frase:");
  
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
  
    // Exibe o número de vogais na tela
    alert("Número de vogais: " + contadorVogais);
  }
  
  // Chama a função para que o usuário possa inserir a string
  contarVogais();
  