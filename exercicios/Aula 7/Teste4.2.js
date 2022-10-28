let num = []
let numero = 0
let valido = false
for (i = 0; i < 5; i++) {
    valido = false
    while (!valido) {
        numero = parseInt(prompt('Insira um número'))
        valido = true
        for (u = 0; u < 5; u++) {
            if (num[u] == numero) {
                valido = false
            }
        }
        if (valido) {
            num[i] = numero
        } else {
            console.log('Número já inserido')
        }
    }
}
console.log(num)