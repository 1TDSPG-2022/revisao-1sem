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
const tarefas = {

    nmTask:"",
    dtTask:"",
    descTask:"",

    cadastrar : function(nmTask, dtTask, descTask){
        this.nmTask = nmTask
        this.dtTask = dtTask
        this.descTask = descTask
        console.log(`${this.nmTask} está cadastrado`);
    }
}

tarefas.cadastrar("João", "Passear com os Dogs!", "Brasileiro");
console.log(tarefas);

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click",function(){
    let inputTask = document.querySelectorAll("input[type=text], input[type=date]")
    tarefas.cadastrar(inputTask[0].ariaValueMax, inputTask[1].ariaValueMax, inputTask[2].value)
    console.log(tarefas)
})
    









