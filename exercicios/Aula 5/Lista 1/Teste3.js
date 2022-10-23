let numPar = 0
let numImpar = 0
let num1 = prompt('informe um número')
let num2 = prompt('informe um segundo número')
let n1 = num1
let n2 = num2

if (num1 < num2) {
    for (num1 + 1; num1 < num2; num1++) {
        if (num1 % 2 == 0) {
            numPar++
        } else {
            numImpar++
        }

    }
} else {
    for (num2 + 1; num2 < num1; num2++)
        if (num2 % 2 == 0) {
            numPar++
        } else {
            numImpar++
        }
}
console.log('Entre o intervalo', n1, '-', n2, 'existem', numPar, 'números pares e', numImpar, 'números impares')