// 1. Faça uma função que recebe uma string como parâmetro e faça a contagem de
// vogais (a,e,i,o,u) e retorne esse número.
// let palavra: string
// let totalVogais: number = 0
// let vogais: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// function ContarVogais(palavra: string): void {
//     for (var i = 0; i < palavra.length; i++) {
//         if (vogais.indexOf(palavra[i]) != -1) {
//             totalVogais++
//         }
//     }
//     console.log(totalVogais)
// }
// ContarVogais('abecedario')
// 2. Faça uma função que recebe uma palavra como parâmetro, você deve retornar o
// caractere do meio dessa palavra. Se o comprimento da palavra for ímpar, retorne o
// caractere do meio. Se o comprimento for par retorne os dois caracteres do meio.
// let palavra:string
// let saida:string
// let tamanho:number
// function RetornarMeio(palavra:string):void{
//     if(palavra.length%2 == 0){
//         tamanho = palavra.length / 2
//         saida = palavra[tamanho-1]+palavra[tamanho]
//         console.log(tamanho)
//     }else{
//         tamanho = (Math.round(palavra.length/2))-1
//         saida = palavra[tamanho]
//         console.log(tamanho)
//     }
//     console.log(saida)
// }
// RetornarMeio('código')
// RetornarMeio('jogando')
// 3. Faça uma função que receba um número qualquer inteiro e positivo como
// parâmetro. O objetivo é reorganizar os dígitos desse número em ordem decrescente,
// de maneira a formar o maior número possível e retornar esse número.
var numero;
function Decrescente(numero) {
    numero = numero.toString();
    numero = numero.split('');
    numero.sort(function (a, b) {
        return (a < b);
    });
    numero = numero.toString();
    numero = numero.replace(/[,]/g, '');
    console.log(parseInt(numero));
}
Decrescente(1443);
//->string ''
//split na string
