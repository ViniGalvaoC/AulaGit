// 1. Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
// function QuebrarBarra(num1:number, num2:number):number {
//     if (num1 > 0 && num2 > 0) {
//         let saida:number = (num1 * num2)-1
//         return saida
//     }else{
//         return 0
//     }
// }
// let numero1:number = parseInt(prompt())
// let numero2:number = parseInt(prompt())
// console.log(QuebrarBarra(numero1,numero2))
// 2. Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
// const regex1 = /[A-Z]/g
// const regex2 = /[a-z]/g
// function RetornarString(palavra) {
//     let maiusculas = palavra.match(/[A-Z]/g)
//     let minusculas = palavra.match(/[a-z]/g)
//     if (maiusculas.length > minusculas.length) {
//         console.log(palavra.toUpperCase())
//     } else if (minusculas.length > maiusculas.length) {
//         console.log(palavra.toLowerCase())
//     } else {
//         console.log(palavra.toLowerCase())
//     }
// }
// 3. Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.
// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
var lutador1 = new Lutador('Darius', 2000, 350);
var lutador2 = new Lutador('Riven', 1800, 400);
function Combate(lutador1, lutador2, firstAttack) {
    var first;
    var second;
    if (firstAttack == lutador1.Nome) {
        first = lutador1;
        second = lutador2;
    }
    else {
        first = lutador2;
        second = lutador1;
    }
    console.log(first, second);
    while (first.Vida > 0 && second.Vida > 0) {
        second.Vida = second.Vida - first.Ataque;
        if (second.Vida > 0) {
            console.log(first.Nome, 'ataca', second.Nome, ';', second.Nome, 'agora tem', second.Vida, 'de vida');
        }
        else {
            console.log(first.Nome, 'ataca', second.Nome, ';', second.Nome, 'agora tem', second.Vida, 'de vida e caiu.', first.Nome, 'ganhou!');
        }
        var primeiro = first;
        first = second;
        second = primeiro;
    }
}
Combate(lutador1, lutador2, lutador1.Nome);
