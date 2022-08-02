//comentario de linha
/* 
comentario de multiplaslinhas
*/
//console.log() serve para imprimir na tela
//cosole.log(Olá Mundo!);

//HOYSTING
//console.log(nome + " tem " + " anos");
//INTERPOLAÇÃO
//console.log(`${nome} tem anos`);

//Declaração de variáveis

//Escopo de variáveis
//Global
//var nome = "João";
//Local
//let idade= 20;
//Constante
//const nacionalidade = "Brasileiro";

//Objeto litral
const usuario = {
    nome:"",
    idade: 0,
    nacionalidade:"",

    cadastrar : function(){
        this.nome = nome
        this.idade= idade
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} está cadastrado`);
    }
}
usuario.cadastrar("joão", 20, "Brasileiro")
console.log(usuario)
