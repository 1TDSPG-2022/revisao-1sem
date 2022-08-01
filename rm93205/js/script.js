//Comentario de uma linha
/**
 * Comentario de multiplas linhas
 */

//Console.log() Serve para imprimir na tela
//console.log("Ola mundo!")

//HOYSTING 
//console.log(nome + " tem " + idade + " anos");
//INTERPOLACAO
//console.log(`${nome} tem ${idade} anos`);

//Declaracao de variaves

//Escopo de variaveis
//Global
//var nome = "Joao";
//Local
//let idade = 20;
//Constante 
//const nacionalidade = "Brasileiro";

//Objeto literal 
const usuario = {

    nome:'',
    idade:'',
    nacionalidade:'',

    cadastrar : function(nome, idade, nacionalidade){
        this.nome = 'Luis'
        this.idade = 20
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} esta cadastrado`);
    }
}

usuario.cadastrar("Joao", 20, "Brasileiro")

console.log(usuario);

//