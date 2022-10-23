let num = []
let numPar = []
let numImpar = []
let numAtual
let contadorArreyPar = 0
let contadorArreyImpar = 0
for (i = 0; i < 6; i++) {
    numAtual = prompt('Insira um número')
    num[i] = numAtual
    if (numAtual % 2 == 0) {
        numPar[contadorArreyPar] = numAtual
        contadorArreyPar++
    } else {
        numImpar[contadorArreyImpar] = numAtual
        contadorArreyImpar++
    }
}
console.log(num)
console.log(numPar)
console.log(numImpar)