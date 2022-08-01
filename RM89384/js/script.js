//Cometário de uma linha 
/**
 * Comentário de multiplas linhas
 */

//Console.log() - Serve para imprimir telas
//console.log("Olá,Mundo")

//HOYSTING
//console.log(nome + " tem " + " anos");
//INTERPOLAÇÃO
//console.log(`${Nnome} tem anos`)

//Declaração de varaveis 

//Escopo de variáveis 
//Global 
//var nome = "João";
//Local
//let idade = 20;
//Constante 
//const nacionalidade = "Brasileiro"

//Objeto literal
const usuario = {
    nome: "",
    idade: 0,
    nacionalidade: "",

    cadastrar: function(nome, idade, nacionalidade){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade        
        console.log(`${this.nome} está cadastrado`);
    }
}

console.log(usuario);