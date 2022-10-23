let contagem = 0
let num
for (let index = 0; index < 5; index++) {
    num=parseInt(prompt('informe um número'))
    
    if(num>=1 && num<=10){
        contagem++
    }
    
}
console.log(contagem, 'número(s) estão entre 1 e 10')