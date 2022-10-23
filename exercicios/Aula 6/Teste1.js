let num = parseInt(prompt('Informe um número'))
let i = 1
let u = 1

while (i<=4) {
    console.log('Número:', num)
    while (u <= 10) {
        console.log(num, 'x', u, '=', num * u)
        u++
    }
    num++
    u = 1
    i++
}