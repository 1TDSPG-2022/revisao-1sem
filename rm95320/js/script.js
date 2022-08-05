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