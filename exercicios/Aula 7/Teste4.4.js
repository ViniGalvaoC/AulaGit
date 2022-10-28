let array = []
let arrayFinal = []
let index = 0
let indexFinal = 0
let condicao = true
let continuar
while (condicao) {
    array[index] = parseInt(prompt('Insira um número'))

    if (array[index] != 0) {
        arrayFinal[indexFinal] = array[index]
        indexFinal++
    }

    continuar = prompt('Deseja continuar? s/n')
    if (continuar == 'n') {
        condicao = false
    }
    index++
}
console.log(array)
console.log(arrayFinal)