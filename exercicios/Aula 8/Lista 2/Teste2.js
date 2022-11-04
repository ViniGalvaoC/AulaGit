let nome
let salario
let aumento
let salarioAumentado
let porcentAumento
let continuar = true
let again

function DadosUsuario() {
    nome = prompt('Informe seu nome')
    salario = parseInt(prompt('Informe seu salário'))
    if (salario <= 1500) {
        aumento = 1.20
        porcentAumento = '20%'
    } else if (salario > 1500 && salario <= 2000) {
        aumento = 1.15
        porcentAumento = '15%'
    } else if (salario > 2000 && salario <= 3000) {
        aumento = 1.1
        porcentAumento = '10%'
    } else if (salario > 3000) {
        aumento = 1.05
        porcentAumento = '5%'
    }
    
}
function AumentoSalarial() {
    salarioAumentado = salario * aumento
    return salarioAumentado.toFixed(2)

}
function Console(){
    console.log('Olá', nome, 'seu salário atual é:R$'+ salario, 'com o aumento de',porcentAumento,'ficará:R$'+ AumentoSalarial(salario,aumento))
}
DadosUsuario()
AumentoSalarial(salario,aumento)
Console(nome,salario,porcentAumento,salarioAumentado)


function RepetirProcesso(){
    while(continuar){
        again = prompt('Deseja calcular novamente com novas informações? s/n')
        if(again=='s'){
            DadosUsuario()
            AumentoSalarial(salario,aumento)
            Console(nome,salario,porcentAumento,salarioAumentado)
        }else{
            continuar = false
        }

    }
}
RepetirProcesso()