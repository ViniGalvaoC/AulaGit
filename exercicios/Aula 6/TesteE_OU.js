//Teste 1
let fome = prompt('Você está com fome? Digite 1 para sim')
let cash = prompt('Você tem dinheiro? Digite 1 para sim')
if (fome == 1 && cash == 1) {
    console.log('Passa na Burguer King para comer')
} else if (fome != 1 || cash != 1) {
    console.log('Melhor deixar para comer em casa')
}
//Teste2
alert('POV: Você se encontra parado no sinal  de trânsito dentro do carro')
let cinto = prompt('Você está com os cintos afivelados? Digite 1 para "sim"')
let drunk = prompt('Você fez o consumo de alguma bebida alcoólica? Digite 1 para "não"')
let sinal = prompt('O sinal está verde? Digite 1 para "sim"')

if (cinto == 1 && drunk == 1 && sinal == 1) {
    console.log('Pode prosseguir a viagem')
} else {
    console.log('Você não pode prosseguir a viagem')
}