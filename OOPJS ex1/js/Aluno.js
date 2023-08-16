export default class Aluno {

    #nome;
    #idade;
    #numero;
    constructor(nome, idade, numero) {
        this.#nome = nome;
        this.#idade = idade;
        this.#numero = numero;
    }

    
    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get numero() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;


    }

    set idade(idade) {
        this.#idade = idade;


    }

    set numero(numero) {
        this.#numero = numero;
    }


    exibirConteudo(){
        console.log(this.#nome);
        console.log(this.#idade);
        console.log(this.#numero)
    }
      
}
