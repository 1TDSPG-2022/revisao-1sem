//comentário de uma linha
/*
Comentário de multiplas linhas
*/ 

//Console.log para imprimir na tela
//console.log('Olá Mundo!')

//Declaração de Variaveis
//ESCOPO de variáveis
//Global
//var nome = 'João';
//Local
//let idade = 20;
//Constante
//const nacionalidade = 'brasileiro';
//HOYSTING
//console.log(nome + ' tem' + idade + ' anos')
//console.log(`${nome} tem ${idade} anos`)

//objeto Literal

const usuario = {
    nome: 'Pedro',
    Idade:0,
    nacionalidade: 'Brasileiro',

    cadastrar: function(nome, idade, nacionalidade) {
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        console.log(`${this.nome} está cadastrado`);
    }
}
usuario.cadastrar('Joao', 22, 'Alemão')
console.log(usuario)