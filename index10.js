function cadastrar(nome){
    validarCadastro(nome)

    //continuar o meu cadastro
}

function validarCadastro(nome) {
    if(nome === "gabriel"){
        console.log("Cadastro valido")
    }else {
        console.log("Não é possivel cadastrar")
    }
}

const nomeCadastro = "gabriel"
cadastrar(nomeCadastro)