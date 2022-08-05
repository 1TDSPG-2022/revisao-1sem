/*
Console.log() - Serve para imprimir na tela
*/

// Objeto Literal
const tarefas = {

    nmTask:"",
    dtTask:"",
    descTask:"",

    cadastrar: function(nmTask, dtTask, descTask) {
        this.nmTask = nmTask
        this.dtTask = dtTask
        this.descTask = descTask
        console.log(`${this.nmTask} está cadastrada`);
    }
}

tarefas.cadastrar("João","Passear com os dogs","Brasileiro");
console.log(tarefas);

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", function() {
    let inputTask = document.querySelectorAll("input[type]=text,input[type]=date")
    
        tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputTask[2].value)
        console.log(tarefas)
        
})