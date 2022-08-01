console.log("Olá Mundo!")

//Global
var nome = "Fabrizio";

//Local
let idade = 19;

//Constante
const nacionalidade = "Brasileiro";

//HOYSTING
console.log(nome + " tem " + idade + " anos")
//Interpolação
console.log(`${nome} tem ${idade} anos`)

//Objeto Literal
const usuario = {
    nome: "",
    idade: 0,
    nacionalidade: "",

    cadastrar : function(nome, idade, nacionalidade) {
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} está cadastrado`);
    }
}
usuario.cadastrar("Fabrizio", 19, "Brasileiro");
console.log(usuario);