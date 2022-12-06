//Parte 1
// 1. A propriedade Titular da classe PacoteViagem deve receber seu valor através da
// propriedade Passageiro da classe PassagemArea;
// 2. O método CalcularValor() da classe PassagemArea deve fazer um acréscimo de
// 50% no valor base caso a propriedade PrimeiraClasse seja “true”
// 3. O método ExibirResumo da classe PassagemArea deve exibir uma mensagem com
// as seguintes informações: “Passagem em nome de {nome do passageiro}, no
// assento {assento} do voo {número do voo}, com destino para {local de destino do
// voo}!”
//Parte 2
// 1. Encapsular as propriedades de todas as classes e criar seus respectivos métodos
// get/set (para definição e leitura dos valores dessa propriedade));
// 2. Na classe Cliente criar as seguintes validações no método set das respectivas
// propriedades:
// a. Nome deve conter no máximo 50 caracteres;
// b. Cpf deve conter no máximo 11 caracteres;
// 3. Na classe PassagemArea criar as seguintes validações no método set das
// respectivas propriedades:
// a. PrimeiraClasse deve aceitar somente um valor booleano;
// b. Valor deve ser sempre maior do que zero;

class Cliente {
    #Nome
    #Cpf
    #Nascimento

    constructor(nome, cpf, nascimento) {
        this.SetNome(nome)
        this.SetCpf(cpf)
        this.SetNascimento(nascimento)
    }
    SetNome(nome) {
        if (nome.length < 51) {
            this.#Nome = nome
            return true
        } else {
            return false
        }
    }
    SetCpf(cpf) {
        if (cpf.length < 12) {
            this.#Cpf = cpf
            return true
        } else {
            return false
        }
    }
    SetNascimento(nascimento) {
        this.#Nascimento = nascimento
    }
    GetNome() {
        return this.#Nome
    }
    GetCpf() {
        return this.#Cpf
    }
    GetNascimento() {
        return this.#Nascimento
    }

}


class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.SetEmpresa(empresa)
        this.SetNumero(numero)
        this.SetData(data)
        this.SetHorario(horario)
        this.SetLocalPartida(localPartida)
        this.SetLocalDestino(localDestino)
    }
    SetEmpresa(empresa) {
        this.#Empresa = empresa
    }
    GetEmpresa() {
        return this.#Empresa
    }
    SetNumero(numero) {
        this.#Numero = numero
    }
    GetNumero() {
        return this.#Numero
    }
    SetData(data) {
        this.#Data = data
    }
    GetData() {
        return this.#Data
    }
    SetHorario(horario) {
        this.#Horario = horario
    }
    GetHorario() {
        return this.#Horario
    }
    SetLocalPartida(localPartida) {
        this.#LocalPartida = localPartida
    }
    GetLocalPartida() {
        return this.#LocalPartida
    }
    SetLocalDestino(localDestino) {
        this.#LocalDestino = localDestino
    }
    GetLocalDestino() {
        return this.#LocalDestino
    }
}


class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.SetAssento(assento)
        this.SetPrimeiraClasse(primeiraClasse)
        this.SetValor(valor)
        this.SetPassageiro(passageiro) //recebe objeto cliente
        this.SetVoo(voo) //recebe objeto voo
    }


    SetAssento(assento) {
        this.#Assento = assento
    }
    GetAssento() {
        return this.#Assento
    }


    SetPrimeiraClasse(primeiraClasse) {
        this.#PrimeiraClasse = primeiraClasse
    }
    GetPrimeiraClasse() {
        return this.#PrimeiraClasse
    }


    SetValor(valor) {
        this.#Valor = valor
    }
    GetValor() {
        return this.#Valor
    }


    SetPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    GetPassageiro() {
        return this.#Passageiro
    }


    SetVoo(voo) {
        this.#Voo = voo
    }
    GetVoo() {
        return this.#Voo
    }

    CalcularValor() {
        if (this.#PrimeiraClasse) {
            this.#Valor = this.#Valor * 1.5
        }
        return this.#Valor
    }

    ExibirResumo() {
        console.log(`Passagem em nome de ${this.GetPassageiro().GetNome()}, no assento ${this.GetAssento()} do voo ${this.GetVoo().GetNumero()}, com destino para ${this.GetVoo().GetLocalDestino()} no valor de ${this.CalcularValor()}`)

    }
}

class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.SetTitular(titular) //recebe seu valor através da propriedade Passageiro da classe PassagemArea
        this.SetPassagemIda(passagemIda) //recebe objeto passagem aerea
        this.SetPassagemVolta(passagemVolta) //recebe objeto passagem aerea
        this.SetValorTotal(valorTotal)
    }


    SetTitular(titular) {
        this.#Titular = titular
    }
    GetTitular() {
        return this.#Titular
    }


    SetPassagemIda(passagemIda) {
        this.#PassagemIda = passagemIda
    }
    GetPassagemIda() {
        return this.#PassagemIda
    }


    SetPassagemVolta(passagemVolta) {
        this.#PassagemVolta = passagemVolta

    }
    GetPassagemVolta() {
        return this.#PassagemVolta
    }

    SetValorTotal(valorTotal) {
        this.#ValorTotal = valorTotal
    }
    GetValorTotal() {
        return this.#ValorTotal
    }


}


//Parte 3
// 1. Com base no exercício anterior, organize a execução do código da seguinte
// maneira:
// a. Dê a opção de cadastrar um cliente e salve esse objeto em um array;
// b. Faça também a opção de cadastrar um Voo e salve esse objeto em um
// array;
// c. Por último, dê a opção de cadastrar um Pacote de Viagem e salve em um
// array;
// 2. Considere as seguintes validações na hora de montar esse sistema:
// a. Quando for cadastrar um pacote de viagem, na hora de escolher a
// passagem de Ida mostra uma lista com todos os Voo cadastrados;
// b. Na hora de cadastrar a passagem de Volta, exibir apenas os Voo que tem o
// local de partida igual ao local de destino do Voo de Ida escolhido;
// c. Na hora de escolher um assento na passagem aérea, verifique se esse
// assento já não foi escolhido nesse voo, em caso positivo peça para escolher
// outro assento;

let clientes = []
function CadastrarCliente() {
    let novoCliente = new Cliente(prompt('nome cliente'), prompt('cpf cliente'), prompt('data nascimento cliente'))
    clientes.push(novoCliente)
}
let cliente1 = new Cliente('Vinícius Galvão Carvalho', '08802101418', '18/04/2000')
clientes.push(cliente1)

let voos = []
function CadastrarVoo() {
    let novoVoo = new Voo(prompt('nome empresa'), prompt('numero voo'), prompt('data do voo'), prompt('horario voo'), prompt('local de partida'), prompt('local de destino'))
    voos.push(novoVoo)
}
let voo1 = new Voo('TAM', '157', '25/11/2022', '11:11', 'Recife', 'Frankfurt')
let voo2 = new Voo('TAM', '751', '20/02/2023', '01:00', 'Frankfurt', 'Recife')
voos.push(voo1)
voos.push(voo2)

let pacotes = []
function CadastrarPacote() {
    let titularPacote = prompt('insira o nome do titular')
    for (i = 0; i < clientes.length; i++) {
        if (titularPacote == clientes[i].GetNome()) {
            titularPacote = clientes[i]
        }
    }
    for (let i = 0; i < voos.length; i++) {
        console.log(voos[i].GetEmpresa(), voos[i].GetNumero(), voos[i].GetData(), voos[i].GetHorario(), voos[i].GetLocalPartida(), voos[i].GetLocalDestino())
    }
    let vooPacote = parseInt(prompt('insira o numero do voo'))
    let x
    let y
    for (let i = 0; i < voos.length; i++) {
        if (vooPacote == voos[i].GetNumero()) {
            x = voos[i].GetLocalPartida()
            y = voos[i]
        }

    }
    let pedirAssento = true
    let assentoPacote
    while (pedirAssento) {
        assentoPacote = parseInt(prompt('insira o assento que deseja sentar'))
        let testarIf = 0
        for (let i = 0; i < passagens.length; i++) {
            if (assentoPacote == passagens[i].GetAssento()) {
                console.log('Assento já escolhido, tente outro')
                testarIf++
            }
        }
        if (testarIf == 0) {
            pedirAssento = false
        }
    }
    let primeiraClasse = prompt('primeira classe? true or false')
    let passagemIdaPacote = new PassagemAerea(assentoPacote, primeiraClasse, 5000, titularPacote, y)

    for (let i = 0; i < voos.length; i++) {
        if (voos[i].GetLocalDestino() == x) {
            console.log(voos[i].GetEmpresa(), voos[i].GetNumero(), voos[i].GetData(), voos[i].GetHorario(), voos[i].GetLocalPartida(), voos[i].GetLocalDestino())
        }
    }
    let passagemVoltaPacoteSup = prompt('insira o voo de volta')
    let passagemVoltaPacote = new PassagemAerea(assentoPacote, primeiraClasse, 5000, titularPacote, '')
    for (let i = 0; i < voos.length; i++) {
        if (passagemVoltaPacoteSup == voos[i].GetNumero()) {
            passagemVoltaPacote.SetVoo(voos[i])
        }
    }
    let valorTotalPacote = passagemIdaPacote.CalcularValor() + passagemVoltaPacote.CalcularValor()
    let novoPacote = new PacoteViagem(titularPacote, passagemIdaPacote, passagemVoltaPacote, valorTotalPacote)
    pacotes.push(novoPacote)
}

let passagens = []
let passagem1 = new PassagemAerea(1, true, 5000, cliente1, voo1)
let passagem2 = new PassagemAerea(2, false, 1500, cliente1, voo2)
let pacoteMilhas = new PacoteViagem(cliente1, passagem1, passagem2, 9000)
pacotes.push(pacoteMilhas)
passagens.push(passagem1, passagem2)


let continuar = true
while (continuar) {
    let condicao = prompt('Cadastrar cliente:1/Cadastrar Voo:2/Cadastrar Pacote de Viagem:3')
    switch (condicao) {
        case '1':
            CadastrarCliente()
            break;

        case '2':
            CadastrarVoo()
            break;

        case '3':
            CadastrarPacote()
            break;
        default:
            continuar = false
            break;
    }
}

