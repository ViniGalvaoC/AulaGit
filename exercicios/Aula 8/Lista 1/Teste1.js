let num1 = parseInt(prompt('Informe um número'))
let num2 = parseInt(prompt('Informe um número'))
let soma
let sub
let multi
let div
let continuar = true
let opcao
let again
let array = []
let index = 0
let resultado
while (continuar) {
    opcao = prompt('Qual operação deseja fazer? (s para soma, sub para subtração,m para multiplicação, d para divisão')
    if (opcao == 's') {
        SomaValores(num1, num2)
        console.log(soma)
        resultado = soma
    }
    if (opcao == 'sub') {
        SubValores(num1, num2)
        console.log(sub)
        resultado = sub
    }
    if (opcao == 'm') {
        MultiValores(num1, num2)
        console.log(multi)
        resultado = multi
    }
    if (opcao == 'd') {
        DivValores(num1, num2)
        console.log(div)
        resultado = div
    }
    again = prompt('Deseja fazer outra operação? s/n')
    if (again == 'n') {
        continuar = false
    }
    array[index]=resultado
    index++

}
Historico()
function SomaValores() {
    soma = num1 + num2
    return soma
}

function SubValores() {
    sub = num1 - num2
    return sub
}

function MultiValores() {
    multi = num1 * num2
    return multi
}

function DivValores() {
    div = num1 / num2
    return div
}
function Historico(){
    console.log(array)

}
