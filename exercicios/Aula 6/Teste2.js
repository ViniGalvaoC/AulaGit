let parar = 0
let loop = 0
let saldo = 20000
let nome = prompt('Informe seu nome')
let cpf = prompt('Informe seu cpf')
let maiorValor = 0
let somaValores = 0
alert('Você tem: R$20.000 reais na sua conta')
while (parar != 2) {

    let action = prompt('Deseja sacar ou depositar?(s/d)')
    let valor = parseInt(prompt('Qual quantia?'))

    if (action == 'd' && valor >= 0) {
        saldo = saldo + valor
        somaValores = valor + somaValores
        loop++
        if (valor > maiorValor) {
            maiorValor = valor
        }
    } else if (action == 's' && valor <= saldo && valor >= 0) {
        saldo = saldo - valor
        somaValores = valor + somaValores
        loop++
        if (valor > maiorValor) {
            maiorValor = valor
        }
    } else {
        console.log('Insira um valor válido para continuar')
        parar = 0
    }
    parar = prompt('Digite 1 para continuar ou 2 para parar')
    
}
if (parar = 2) {
    console.log('Olá',nome+', usuário do cpf:',cpf+'. Seja bem vindo')
    console.log('Seu saldo é atualmente: R$' + saldo + ' reais')
    console.log('Sua maior ação de retirada ou depósito foi: R$' + maiorValor, 'reais')
    console.log('A média de retirada mais depósito foi: R$' + somaValores / loop, 'reais')
}
