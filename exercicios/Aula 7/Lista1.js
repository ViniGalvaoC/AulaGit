let nomes = []
let notas = []
let continuar = true
let nomeAlunoAtual
let notaAlunoAtual
let contadorArrey = 0
let desejaContinuar
let notasTotal = 0
let qntAlunos = 0
while (continuar) {
    nomeAlunoAtual = prompt('Insira o nome do aluno')
    notaAlunoAtual = parseInt(prompt('Insira a nota desse aluno'))
    nomes[contadorArrey] = nomeAlunoAtual
    notas[contadorArrey] = notaAlunoAtual
    contadorArrey++
    desejaContinuar = prompt('Se deseja parar, digite 1')
    if (desejaContinuar == 1) {
        continuar = false
    }
    console.log(nomes)
    console.log(notas)
    notasTotal = notasTotal + notaAlunoAtual
    qntAlunos++
}
for (i = 0; i < nomes.length; i++) {
    console.log('A nota do aluno', nomes[i], 'foi:', notas[i])

}
console.log('Soma total das notas:', notasTotal)
console.log('Média da turma:', notasTotal / qntAlunos)