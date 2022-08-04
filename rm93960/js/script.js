
//Comentário de uma linha
/**
 * Comentário de multiplas linhas 
 */

//Console.log() Serve para imprimir na tela
//console.log("Olá mundo!");

//HOYSTING
//nome = "Hoysting"
//console.log(nome + " tem " + " anos ");
//INTERPOLAÇÃO
//console.log(`${nome} tem anos`);

//Declaração de variaveis 

//Escopo das variaveis 
//Global
//var nome = "João";
//Local
//let idade = 20; //Usa em escopo fechados
//Constante
//const nacionalidade = "Brasileiro";

//Objeto literal
const usuario = {
    nome:"",
    idade:0,
    nacionaliadade:"",

    cadastrar : function(nome, idade, nacionaliadade){
        this.nome = nome
        this.idade = idade
        this.nacionaliadade = nacionaliadade
        console.log(`${this.nome} está cadastrado`);
        
    }
}

usuario.cadastrar("João", 20, "Brasileiro");
console.log(usuario);


