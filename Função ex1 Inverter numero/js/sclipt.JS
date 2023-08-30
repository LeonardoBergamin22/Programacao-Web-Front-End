function inverterNumero() {
    // Solicita ao usuário que insira um número
    let numero = prompt("Digite um número:");
  
    // Converte o número para uma string para facilitar a inversão
    let numeroString = numero.toString();
  
    // Inverte a string
    let numeroInvertido = numeroString.split('').reverse().join('');
  
    // Exibe o número invertido na tela
    alert("Número invertido: " + numeroInvertido);
  }
  
  // Chama a função para que o usuário possa inserir o número
  inverterNumero();
  