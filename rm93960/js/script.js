
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
const tarefas = {
    nmTask:"",
    dtTask:0,
    descTask:"",

    cadastrar : function(nmTask, dtTask, descTask){
        this.nmTask = nmTask
        this.dtTask = dtTask
        this.descTask = descTask
        console.log(`${this.nmTask} está cadastrada`);
        
    }
}

tarefas.cadastrar("João", "Passear com os Dogs!", "Brasileiro");
console.log(tarefas);

const btn = document.getElementById("btnenviar")

btn.addEventListener("click", function(){
    let inputTask = document.querySelectorAll("input{type=text},input{type=date}")

    tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputtask[2].value)
    console.log(tarefas)
    
    
})
//dentro do parenteses pode passr parametros na function