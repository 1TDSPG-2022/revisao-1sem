/*
// comentário XD

//Escopo de variáveis


//Hoysting
console.log(`${nome} tem ${oldyear} anos.`) // vai dar erro

//Global
var nome = 'Vitu';
//Local
let oldyear = 18;
//Constantes
const nacionality = 'Brasileiro';

//Hoysting
console.log(`${nome} tem ${oldyear} anos.`)
*/

const campos = document.querySelectorAll('input[type="text"], input[type="date"]');
const btnEnv = document.querySelector('#btnEnviar');

btnEnv.addEventListener('click', ()=> {
    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == '') {
            alert(`O Campo ${campos[i].name} NÃO foi preenchido!`);
            return;
        }
    }
    alert('Formulário enviado com sucesso!');
})