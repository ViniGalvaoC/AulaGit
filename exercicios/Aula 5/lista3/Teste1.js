let nome = prompt('Qual seu nome?')
let idade = parseInt(prompt('Qual sua idade?'))
let profissao = prompt('Qual sua profissão?')
let peso = parseInt(prompt('Qual seu peso?'))
let altura = parseFloat(prompt('Qual sua altura?'))
console.log('Olá', nome, 'você tem', idade, 'anos, é', profissao, ',tem', altura
    , 'metros de altura e pesa', peso, 'quilos')

if (idade >= 18) {
    console.log('Está liberado para tomar umas geladas')
} else {
    console.log('Sem gelada para você')
}

let meses = idade * 12
let semanas = Math.trunc((idade * 365) / 7)
let dias = idade * 365

console.log('Você tem', dias, 'dias de vida')
console.log('Você tem aproximadamente', semanas, 'semanas de vida')
console.log('Você tem', meses, 'meses de vida')

let IMC = peso / (altura * altura)
let indice
if (IMC < 18.5) {
    indice = 'Magreza'
}
if (IMC >= 18.5 && IMC < 24.9) {
    indice = 'Normal'
}
if (IMC >= 24.9 && IMC < 30) {
    indice = 'Sobrepeso'
}
if (IMC >= 30) {
    indice = 'Obesidade'
}
console.log('Seu indice corporal é', indice)

let anoNasc = 2022 - idade
console.log('Você nasceu no ano:', anoNasc)

for (i = 0; i <= idade; i++) {
    if (i != idade) {
        console.log('No ano de:', anoNasc, 'você tinha', i, 'ano(s)')
    } else {
        console.log('No ano de:', anoNasc, 'você tem', i, 'anos')
    } anoNasc++
}