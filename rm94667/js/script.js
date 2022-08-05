//console.log("Olá Mundo!")

const tarefas = {
    nmTask : "",
    dtTask : "",
    descTask : "",

    cadastrar : function(nmTask, dtTask, descTask){
        this.nmTask = nmTask
        this.dtTask = dtTask;
        this.descTask = descTask
        console.log('${this.nmTask} está cadastrado');
    }
}

tarefas.cadastrar("Bueno", "Passear com os Dogs!", "Brasileiro");
console.log(tarefas);

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", function(){
    let inputTask = document.querySelectorAll("input[type=text], input[type=date]")
    
    for(let x = 0; x < inputTask.length ; x ++){
        tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputTask[2].value)
        console.log(tarefas) 
    }

})