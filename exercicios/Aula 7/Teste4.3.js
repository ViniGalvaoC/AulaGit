let arrayA = []
let arrayB = []
let arrayC = []
let i = true
let u = 0
let libera
let c = 0
while (i) {
    arrayA[u] = parseInt(prompt('Informe um número pro array A'))
    arrayB[u] = parseInt(prompt('Informe um número pro array B'))
    u++
    libera = parseInt(prompt('Deseja digitar mais números? 1 p/ s 2 p/ n '))
    if (libera == 2) {
        i = false
    }
}
console.log(arrayA)
console.log(arrayB)
for (v = 0; v < arrayA.length; v++) {
    if (arrayB[v] % 2 != 0) {
        arrayC[c] = arrayB[v]
        c++
    }
    if (arrayA[v] % 2 != 0) {
        arrayC[c] = arrayA[v]
        c++
    }
    for (w = 0; w < arrayA.length; w++) {
        if (arrayA[v] == arrayB[w]) {
            arrayC[c] = arrayA[v]
            c++

        }
    }

}
console.log(arrayC)