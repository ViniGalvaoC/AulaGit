let num = []
let numInv = []
let quantidade = parseInt(prompt('Quantos números dejesa popular o vetor?'))
for (i = 1; i <= quantidade; i++) {
    num[i - 1] = prompt('Insira um número')
    numInv[quantidade - i] = num[i - 1]
}
console.log(num)
console.log(numInv)