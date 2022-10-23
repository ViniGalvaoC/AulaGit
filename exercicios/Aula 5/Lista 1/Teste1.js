let numMaior = 0
let num
for (let contador = 0; contador < 5; contador++) {
    num=parseInt(prompt('informe um número'))
    console.log(num)
    if(num > numMaior){
        numMaior=num
    }
    console.log(numMaior)
}
console.log('O maior número informado foi',numMaior)
