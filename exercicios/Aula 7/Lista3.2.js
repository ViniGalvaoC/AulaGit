let num = []
let numInv = []
for (i = 0; i < 5; i++) {
    num[i] = prompt('Insira um número')
    numInv[4 - i] = num[i]
}
console.log(num)
console.log(numInv)
