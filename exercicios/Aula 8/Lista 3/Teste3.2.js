let nomes = []
let senhas = []
let indexCadastro = 0

function Cadastrar() {

    nomes[indexCadastro] = prompt('Informe seu login para cadastro')
    senhas[indexCadastro] = prompt('Informe a senha de cadastro')
    indexCadastro++

}

function Iniciar() {
    let inicio = prompt('Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 0 para encerrar o programa')
    return inicio
}

function FazerLogin(nome, senha) {
    for (i = 0; i < nomes.length; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
            return true

        }
    }
}
let nomesSup = []
let senhasSup = []
let indexExcluir = 0
function ExcluirCadastro(nome) {
    for (i = 0; i < nomes.length; i++) {
        if (nome == nomes[i]) {
            nomes[i] = 0
            senhas[i] = 0
        }
    }
    for (i = 0; i < nomes.length; i++) {
        if (nomes[i] != 0) {
            nomesSup[indexExcluir] = nomes[i]
            senhasSup[indexExcluir] = senhas[i]
            indexExcluir++
        }
    }
    nomes = nomesSup
    senhas = senhasSup
}

let continuar = 's'

while (continuar == 's') {
    let opcao = Iniciar()
    if (opcao == '1') {

        Cadastrar()
        console.log('Cadastro realizado com sucesso')

    } else if (opcao == '2') {

        let nome = prompt('Insira seu login')
        let senha = prompt('Insira sua senha')
        let fazerLogin = FazerLogin(nome, senha)

        if (fazerLogin == true) {
            console.log('Login efetuado com sucesso')
        } else {
            console.log('Login ou senha incorretos')
        }

    } else if (opcao == '3') {

        let nome = prompt('Insira o login que deseja excluir')
        ExcluirCadastro(nome)
        console.log('Cadastro excluido com sucesso')

    } else if (opcao == '0') {

        continuar = 'n'
        console.log('O programa será encerrado')

    }
    if (continuar == 's') {
        continuar = prompt('Deseja continuar o programa? s/n')
    }
}