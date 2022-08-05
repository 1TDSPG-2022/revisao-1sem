
const tarefas = {

    nmTask:"",
    dtTask:0,
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
    let inputTask = document.querySelectorAll("input[type=text],input[type=date]")


    tarefas.cadastrar(inputTask[0].value, inputTask[1].value, inputTask[2].value)
    console.log(tarefas)
    
})
