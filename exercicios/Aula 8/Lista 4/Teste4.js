let id = []
let nome = []
let valor = []
let nota = []
let indexCadastro = 0
let indexId = 0

let idSup = []
let nomeSup = []
let valorSup = []
let notaSup = []
let indexSup = 0

function AdicionarProduto() {
    id[indexCadastro] = indexId + 1
    nome[indexCadastro] = prompt('Informe o nome do produto')
    valor[indexCadastro] = parseInt(prompt('Informe o valor do produto'))
    nota[indexCadastro] = parseInt(prompt('Informe a nota do produto'))
    indexCadastro++
    indexId++

}
function BuscarIdProduto(buscaID) {
    for (i = 0; i < id.length; i++) {
        if (buscaID == id[i]) {
            console.log(id[i], nome[i], valor[i], nota[i])
        }
    }
}

function BuscarNomeProduto(buscaNome) {
    for (i = 0; i < id.length; i++) {
        if (buscaNome == nome[i]) {
            console.log('Produto', nome[i], 'com ID de número', id[i])
        }
    }
}

let maiorId = 0

function ExibirOrdemId() {
    idSup = []
    nomeSup = []
    valorSup = []
    notaSup = []

    for (i = 0; i < id.length; i++) {

        maiorId = 0

        for (u = 0; u < id.length; u++) {
            if (id[u] > maiorId) {
                maiorId = id[u]
            }

        }

        for (w = 0; w < id.length; w++ && id[w] != 0) {
            if (maiorId == id[w]) {
                idSup[indexSup] = id[w]
                nomeSup[indexSup] = nome[w]
                valorSup[indexSup] = valor[w]
                notaSup[indexSup] = nota[w]
                id[w] = 0
                indexSup++
            }
        }
    }
    id = idSup
    nome = nomeSup
    valor = valorSup
    nota = notaSup
    indexSup = 0

    for (i = 0; i < id.length; i++) {
        console.log(id[i], nome[i], valor[i], nota[i])
    }

}

let maiorValor = 0

function ExibirOrdemValor() {
    idSup = []
    nomeSup = []
    valorSup = []
    notaSup = []

    for (i = 0; i < id.length; i++) {

        maiorValor = 0

        for (u = 0; u < id.length; u++) {
            if (valor[u] > maiorValor) {
                maiorValor = valor[u]
            }
        }

        for (w = 0; w < id.length; w++) {
            if (maiorValor == valor[w]) {
                idSup[indexSup] = id[w]
                nomeSup[indexSup] = nome[w]
                valorSup[indexSup] = valor[w]
                notaSup[indexSup] = nota[w]
                indexSup++

                valor[w] = 0
            }
        }
    }
    id = idSup
    nome = nomeSup
    valor = valorSup
    nota = notaSup
    indexSup = 0

    for (i = 0; i < id.length; i++) {
        console.log(id[i], nome[i], valor[i], nota[i])
    }
}

let maiorNota = 0

function ExibirOrdemNota() {

    idSup = []
    nomeSup = []
    valorSup = []
    notaSup = []

    for (i = 0; i < id.length; i++) {

        maiorNota = 0

        for (u = 0; u < id.length; u++) {
            if (nota[u] > maiorNota) {
                maiorNota = nota[u]
            }
        }

        let x = 0

        for (w = 0; w < id.length; w++) {

            if (maiorNota == nota[w] && x == 0) {
                idSup[indexSup] = id[w]
                nomeSup[indexSup] = nome[w]
                valorSup[indexSup] = valor[w]
                notaSup[indexSup] = nota[w]
                indexSup++
                nota[w] = 0
                x++
            }
        }
    }

    id = idSup
    nome = nomeSup
    valor = valorSup
    nota = notaSup
    indexSup = 0

    for (i = 0; i < id.length; i++) {
        console.log(id[i], nome[i], valor[i], nota[i])
    }
}


function AtualizarValor(idBusca, novoValor) {
    for (i = 0; i < id.length; i++) {
        if (idBusca == id[i]) {
            valor[i] = novoValor
        }
    }
}



function DeletarProduto() {

    idSup = []
    nomeSup = []
    valorSup = []
    notaSup = []

    let idDel = parseInt(prompt('Informe o ID do produto que deseja exluir'))

    for (i = 0; i < id.length; i++) {
        if (idDel == id[i]) {
            id[i] = 0
        }
    }

    for (w = 0; w < id.length; w++) {
        if (id[w] != 0) {
            idSup[indexSup] = id[w]
            nomeSup[indexSup] = nome[w]
            valorSup[indexSup] = valor[w]
            notaSup[indexSup] = nota[w]
            indexSup++
        }
    }
    id = idSup
    nome = nomeSup
    valor = valorSup
    nota = notaSup
    indexSup = 0
    indexCadastro--

}

let quantidadeCart = []
let idCart = []
let nomeCart = []
let valorCart = []
let indexCart = 0
let dentro = false
let existe = false


function AdicionarNoCarrinho() {

    let addCart = prompt('Informe o nome do produto que deseja adicionar no carrinho')
    let qntProduto = parseInt(prompt('Informe a quantidade de itens do produto'))



    for (i = 0; i < id.length; i++) {
        if (addCart == nome[i]) {
            existe = true


        }
        if (addCart == nomeCart[i]) {
            dentro = true
        }
    }
    if (existe && dentro) {


        for (u = 0; u < id.length; u++) {
            if (addCart == nomeCart[u]) {

                quantidadeCart[u] = quantidadeCart[u] + qntProduto

            }
        }
    }
    if (existe == true && dentro == false) {
        quantidadeCart[indexCart] = qntProduto
        nomeCart[indexCart] = addCart
        indexCart++
    }


    existe = false
    dentro = false

    console.log(nomeCart, quantidadeCart)

}

let quantidadeCartSup = []
let valorProdutoCartSup = []

function ExcluirDoCarrinho() {

    nomeSup = []
    quantidadeCartSup = []

    let excluirCart = prompt('Informe o nome do produto que deseja excluir no carrinho')
    let excluirQnt = parseInt(prompt('Informe a quantidade de itens do produto'))

    for (i = 0; i < nomeCart.length; i++) {
        if (excluirCart == nomeCart[i] && excluirQnt == quantidadeCart[i]) {
            nomeCart[i] = 0


        } else if (excluirCart == nomeCart[i]) {
            quantidadeCart[i] = quantidadeCart[i] - excluirQnt

        }
    }

    for (u = 0; u < nomeCart.length; u++) {
        if (nomeCart[u] != 0) {
            nomeSup[indexSup] = nomeCart[u]
            quantidadeCartSup[indexSup] = quantidadeCart[u]
            indexSup++
        }

    }
    indexCart--
    nomeCart = nomeSup
    quantidadeCart = quantidadeCartSup
    indexSup = 0

    console.log(nomeCart, quantidadeCart)


}

let valorTotal = 0

function CalcularTotalCarrinho() {

    valorTotal = 0

    for (i = 0; i < nome.length; i++) {
        for (u = 0; u < nomeCart.length; u++) {
            if (nome[i] == nomeCart[u]) {
                valorTotal = valorTotal + (quantidadeCart[u] * valor[i])
            }
        }
    }

    console.log('Valor total no carrinho: R$' + valorTotal)
}

let valorParcialTotal = []

function MostrarCarrinho() {

    valorParcialTotal = []

    for (i = 0; i < nome.length; i++) {
        for (u = 0; u < nomeCart.length; u++) {
            if (nome[i] == nomeCart[u]) {
                valorParcialTotal[u] = quantidadeCart[u] * valor[i]
            }
        }
    }
    console.log(nomeCart, quantidadeCart, valorParcialTotal)
}

let continuar = 's'

while (continuar == 's') {

    let menu = prompt('Cliente: 1 / Administrador: 2')

    if (menu == 1) {

        let cliente = prompt('Adicionar no carrinho:1 / Excluir do carrinho:2 / Ver valor total:3 / Ver carrinho:4')

        if (cliente == '1') {

            AdicionarNoCarrinho()

        } else if (cliente == '2') {

            ExcluirDoCarrinho()

        } else if (cliente == '3') {

            CalcularTotalCarrinho()

        } else {

            MostrarCarrinho()

        }
        continuar = prompt('Deseja continuar?s/n')
    }

    if (menu == 2) {

        let iniciar = prompt('Cadastrar:1 / Buscar por ID:2 / Buscar ID por nome:3 / Ordenar ID|Valor|nota:4|5|6 / Alterar valor:7 / Deletar produto:8')


        if (iniciar == '1') {

            AdicionarProduto()
            console.log('Produto adicionado com sucesso')


        } else if (iniciar == '2') {

            let buscaID = parseInt(prompt('Informe o ID do produto que deseja buscar'))
            BuscarIdProduto(buscaID)


        } else if (iniciar == '3') {

            let buscaNome = prompt('Informe o nome do produto que deseja saber o ID')
            BuscarNomeProduto(buscaNome)


        } else if (iniciar == '4') {

            ExibirOrdemId()


        } else if (iniciar == '5') {

            ExibirOrdemValor()


        } else if (iniciar == '6') {

            ExibirOrdemNota()


        } else if (iniciar == '7') {

            let idBusca = parseInt(prompt('Insira o ID do produto que deseja alterar o valor'))
            let novoValor = parseInt(prompt('Insira o novo valor do produto'))
            AtualizarValor(idBusca, novoValor)
            console.log('Valor atualizado com sucesso')


        } else {

            DeletarProduto()
            console.log('Produto deletado com sucesso')

        }
        continuar = prompt('Deseja continuar?s/n')
    }

}
