let fem = 0
let masc = 0
let media = 0
let maiorSete = 0
let maiorMasc = 0
for (i = 0; i < 10; i++) {
    let nota = parseInt(prompt('informe a nota do aluno(a) de 0 a 10'))
    let sexo = prompt('informe o sexo do aluno da nota anterior informada(f ou m)')
    if (sexo == 'f') {
        fem++
        if (nota > 7) {
            maiorSete++
        }
    } else {
        masc++
        if (nota > maiorMasc) {
            maiorMasc = nota
        }
    }
    media = nota + media
}
console.log('A media geral foi:', media / 10)
console.log(masc, 'homens enviaram as notas')
console.log(maiorSete, 'mulheres ficaram acima da nota 7')
console.log('A maior nota entre os homens foi:', maiorMasc)
