let nome = prompt('Informe seu nome')
let idade = prompt('Informe sua idade')
let salario = parseInt(prompt('Informe seu salário atual'))
let novoSalario = salario
let anoAtual = 2022
console.log('Olá', nome, ',você tem', idade, 'anos, e seu salário atual é: R$' + salario, 'reais')
let dados1 = prompt('Seus dados estão certos? (s/n)')
let libera
if (dados1 == 'n') {
    for (i = 0; i < 3; i++) {
        let nome = prompt('Informe seu nome')
        let idade = prompt('Informe sua idade')
        let salario = prompt('Informe seu salário atual')
        let novoSalario = salario
        let anoAtual = 2022
        console.log('Olá', nome, ',você tem', idade, 'anos, e seu salário atual é: R$' + salario, 'reais')
        let dados2 = prompt('Seus dados estão certos? (s/n)')
        if (dados2 == 's') {
            i = 4
            libera = 0
        }
        if(i==2){
            console.log('O programa será encerrado')
        }
    }
} else {
    libera = 0
}
let aumento = 0.015
if (libera == 0) {
    console.log('Seus salários nos próximos anos será aproximadamente:')
    for (i = 0; i < 10; i++) {
        anoAtual++
        novoSalario = novoSalario + (novoSalario * (aumento))
        let arredondado = parseFloat(novoSalario.toFixed(2))
        console.log(anoAtual, '-', arredondado)
        aumento = aumento*2
    }
}
