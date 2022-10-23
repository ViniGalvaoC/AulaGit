let idade = []
let altura = []
let idadeAtual
let alturaAtual
let contadorArrey = 0
let alturaTotal = 0
let mediaAltura
let qntCondicao = 0
for (i = 0; i < 3; i++) {
    idadeAtual = prompt('Insira a idade da pessoa')
    alturaAtual = parseInt(prompt('Insira a altura da pessoa em centímetros'))
    idade[contadorArrey] = idadeAtual
    altura[contadorArrey] = alturaAtual
    contadorArrey++
    alturaTotal = alturaAtual + alturaTotal
    console.log(idade[i], altura[i])
}
mediaAltura = alturaTotal / idade.length
console.log(mediaAltura)
for (i = 0; i < idade.length; i++) {
    if (idade[i] > 13 && altura[i] < mediaAltura) {
        qntCondicao++
    }
}
console.log(qntCondicao, 'aluno(s) tem mais de 13 anos e menos altura que a média')
