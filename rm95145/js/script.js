//Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

//Console.log() Serve para imprimir na tela
//console.log("Olá Mundo!");

//Hoysting
//console.log(nome + " tem " + " anos ");
//Interpolação
//console.log(`${nome} tem anos`);

//Declaraçõ de variáveis

//Escope de variáveis
//Global
//var nome = "João";
//Local
//let idade = 20;
//Constante
//const nacionalidade = "Brasileiro";

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






