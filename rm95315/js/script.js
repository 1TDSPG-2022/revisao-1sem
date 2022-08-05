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
/*const usuario = {
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
*/
var item1 = document.getElementById("nmTaskId")
var item2 = document.getElementById("dtTaskId")
var item3 = document.getElementById("descTaskId")
var botao = document.getElementById("btnEnviar")
var resultado = document.getElementById("resultado")
botao.addEventListener("click", function() {
    if (item1.value == "" || item2.value == "" || item3.value == ""){
        alert("preencha todos os itens")
    }
    else{
     resultado.innerHTML = (`o nome é ${item1.value} a data é ${item2.value} e a descrição é ${item3.value}`)
    }
})