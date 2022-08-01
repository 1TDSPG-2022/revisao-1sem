// Comentário de uma linha
/*
 * Comentário de múltiplas linhas
 */
// console.log() Serve para imprimir na tela
// console.log('Olá Mundo!')

// Declaração de variáveis

// Escopo de variáveis:
// Global
// var nome = 'João'
// Local
// let idade = 20
// Constante
// const nacionalidade = 'Brasileiro'

// Hoysting
// console.log(nome + ' tem ' + idade + ' anos')
// Interpolação
// console.log(`${nome} tem ${idade} anos`)

// Objeto literal
const usuario = {
  nome: '',
  idade: 0,
  nacionalidade: '',

  cadastrar: function (nome, idade, nacionalidade) {
    this.nome = nome
    this.idade = idade
    this.nacionalidade = nacionalidade
    console.log(`${this.nome} está cadastrado`)
  }
}

usuario.cadastrar('João', 20, 'Brasileiro')
console.log(usuario)
