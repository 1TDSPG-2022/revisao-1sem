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
// const usuario = {
    
//     nome:"",
//     idade:0,
//     nacionalidade:"",

//     cadastrar : function(nome, idade, nacionalidade){
//         this.nome = nome
//         this.idade = idade
//         this.nacionalidade = nacionalidade
//         console.log(`${this.nome} está cadastrado`);
//     }
    
// }

// usuario.cadastrar("João", 20, "Brasileiro");
// console.log(usuario);



const botaoSubmit = document.getElementById("btnEnviar")
const eleTarefa = document.getElementById("objTarefa")


let tarefa = {
    nmTask:"",
    dtTask:"", 
    nmTaskDesc:"",
    validaCampo: () => {
        console.log("Validando campos");
        const campos = document.querySelectorAll("input[type='text'],input[type='date']")
        for(let x = 0; x < campos.length ; x++){
            if(campos[x].value == ''){
                alert('O CAMPO ' + campos[x].name + ' não foi preenchido!')
                return 
            }else{
                tarefa[campos[x].name] = campos[x].value;
                eleTarefa.textContent = JSON.stringify(tarefa, null, " ");
            }
        }
    }
}

eleTarefa.textContent = JSON.stringify(tarefa, null, " ");

//ATRELAR UM EVENTO AO BOTÃO CAPTURADO
botaoSubmit.addEventListener("click", tarefa.validaCampo); 