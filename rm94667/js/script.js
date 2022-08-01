//console.log("Olá Mundo!")

const usuario = {
    nome : "",
    idade : 0,
    nacionalidade : "",

    cadastrar : function(nome, idade, nacionalidade){
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade
        console.log('${this.nome} está cadastrado');
    }
}

usuario.cadastrar("Bueno", 18, "Brasileiro");
console.log(usuario);

