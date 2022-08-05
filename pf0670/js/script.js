//Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

//Console.log() Serve para imprimir na tela
//console.log("Olá Mundo!");

// //HOYSTING
// nome = "Hoysting";
// console.log(nome + " tem "  + " anos");
// //INTERPOLAÇÃO
// console.log(`${nome} tem anos`);

// //Declaração de variáveis

// //Escopo de variáveis
// //Global
// var nome = "João";
// //Local
// let idade = 20;
// //COSTANTE
// const nacionalidade = "Brasileiro";

//Objeto literal
const tarefas = {
    
    nmTask:"",
    dtTask:"",
    descTask:"",

    cadastrar : function(nmTask, dtTask, descTask){
        this.nmTask = nmTask
        this.dtTask = dtTask
        this.descTask = descTask
        console.log(`${this.nmTask} está cadastrada`);
    }
    
}

tarefas.cadastrar("Passear", "Passear com os Dogs!", "Brasileiro");
console.log(tarefas);

const btn = document.getElementById("teste")

btn.addEventListener("click",function(){
    let inputTask = document.querySelectorAll("input[type=text],input[type=date]")

     tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputTask[2].value)
    console.log(tarefas)
    
})




