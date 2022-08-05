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
const tarefas = {
  nmTask: '',
  dtTask: 0,
  dsTask: '',

  cadastrar: function (nmTask, dtTask, dsTask) {
    this.nmTask = nmTask
    this.dtTask = dtTask
    this.dsTask = dsTask
    console.log(`${this.nmTask} está cadastrada`)
  }
}

tarefas.cadastrar('João', '2022-05-08', 'Passear comm os Dogs!')
console.log(tarefas)

const btn = document.getElementById('btnEnviar')

btn.addEventListener('click', function () {
  let inputTask = document.querySelectorAll(
    'input[type=text], input[type=date]'
  )

  let count = 0
  for (let x = 0; x < inputTask.length; x++) {
    if (inputTask[x].value == '') {
      count++
    }
  }
  count > 0 ? alert('Preencha todos os campos') : ''
})
