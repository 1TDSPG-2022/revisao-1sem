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

const user = {
    name: '',
    oldyear: 0,
    nacionality: '',

    sing_up: (name, oldyear, nacionality) => {
        this.name = name;
        this.oldyear = oldyear;
        this.nacionality = nacionality;
        console.log(`${this.name} está cadastrado!`);
    }
};

user.sing_up('vitu', 18, 'Brasileiro');
console.log(user);