//Comentário de uma linha
/**
 * Comentário de multiplas linhas
 */

//console.log('Serve para imprimir na tela')

//console.log('Olá mundo! ');

//Hoysting
//console.log(nome + " tem " + idade + " anos");
//Interpolação
//console.log(`${nome} tem ${idade} anos`);

//Declaração de variáveis

//Global
//var nome = "João";
//Local: util dentro de funções, loops e etc
//let idade = 20;
//Constante, que não irá mudar com o programa
//const nacionalidade = "brasileiro";

//Objeto literal
const usuario = {
    nome:"",
    idade: 0,
    nacionalidade: "",

    cadastrar: function(nome, idade, nacionalidade){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade 
        console.log(`${this.nome} está cadastrado`);
    }
}
usuario.cadastrar("João", 20, "Brasileiro");

console.log(usuario);