//Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

//Console.log() Serve para imprimir na tela
//console.log("Olá Mundo!");

// //HOYSTING
// nome = "Hoysting";
// console.log(nome + " tem "  + " anos");
// //INTERPOLAÇÃO
// console.log(`${nome} tem anos`);

// //Declaração de variáveis

// //Escopo de variáveis
// //Global
// var nome = "João";
// //Local
// let idade = 20;
// //COSTANTE
// const nacionalidade = "Brasileiro";

//Objeto literal
const usuario = {
    
    nome:"",
    idade:0,
    nacionalidade:"",

    cadastrar : function(nome, idade, nacionalidade){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} está cadastrado`);
    }
    
}

usuario.cadastrar("João", 20, "Brasileiro");
console.log(usuario);







