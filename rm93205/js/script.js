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
const tarefas = {

    nmTask:"",
    dtTask:"",
    descTask:"",

    cadastrar : function(nmTask, dtTask, descTask){
        this.nome = nmTask
        this.idade = dtTask
        this.nacionalidade = descTask
        console.log(`${this.nmTask} esta cadastrada`);
    }
}

tarefas.cadastrar("Joao", 20, "Brasileiro")
console.log(usuario);

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", function(){
    let inputTask = document.querySelectorAll("input[type=text], input[type=date]")    
    tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputTask[2].value)
})

