let arrayA = []
let arrayB = []
let arrayC = []
let v = 0
for (i = 0; i < 10; i++) {
    arrayA[i] = parseInt(prompt('Insira um número pro vetor A'))
    arrayB[i] = parseInt(prompt('Insira um número pro vetor B'))
}
for (i = 0; i < 10; i++) {
    for (u = 0; u < 10; u++) {
        if (arrayA[i] == arrayB[u] && arrayA[i] > 5) {
            arrayC[v] = arrayA[i]
            v++
        }
    }
}
console.log(arrayA)
console.log(arrayB)
console.log(arrayC)