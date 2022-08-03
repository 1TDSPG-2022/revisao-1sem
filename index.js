const form = document.getElementById('form')
const nmTaskId = document.getElementById('nmTaskId')
const dtTaskId = document.getElementById('dtTaskId')
const descTaskId = document.getElementById('descTaskId')

btnEnviar.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nmTask = nmTask.value.trim()
    const dtTask = dtTask.value.trim()
    const descTask = descTask.value.trim()

    if(nmTask === ''){
        //mostrar erro
        //add class
        setErrorFor(nmTask, 'Preencha esse campo')
    }else{
        //adicionar a classe sucesso
        setSuccessFor(nmTask)
    }

    if(dtTask === ''){
        //mostrar erro
        //add class
        setErrorFor(dtTask, 'Preencha esse campo')
    }else{
        //adicionar a classe sucesso
        setSuccessFor(dtTask)
    }

    if(descTask === ''){
       //mostrar o erro
       //add class
       setErrorFor(dtTask, 'Preencha esse campo')
    }else{
        //adicionar a classe sucesso
        setSuccessFor(descTask)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}