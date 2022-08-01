// ASSIM È O COMENTÁRIO DE UMA LINHA
/**
 * 
 * COMENTÁRIO DE MUITAS LINHAS RAPAZ KKKKKKK
 * 
 */
//Console.log() Serve para imprimir na tela
//console.log("Olá Mundo!");

//Declaração de variáveis
//var nome = "João"
//let idade = 20;
//const nacionalidade = "Brasileiro";

// Escopo de variáveis
// Global
//var nome = "João";
//Local
//let idade = 20;
//CONSTANTE
//const nacionalidade = "Brasileiro";

//HOYSTING
//console.log(nome + " tem " + idade + " anos ");
//console.log(`${nome} tem ${idade} anos`);

// Objeto literal
const usuario = {
    nome: "José",
    idade: 20,
    nacionalidade: "Angolaino",

    cadastrar : function(nome, idade, nacionalidade){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} está cadastrado`);
    }

}

usuario.cadastrar("José", 20, "Angolaino");

console.log(usuario);