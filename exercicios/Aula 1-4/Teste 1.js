let nome
let idade
let anoNascimento
let idadePI
let anoPI
nome= prompt('Qual seu nome?')
idade=prompt('Qual sua idade?')

anoNascimento = 2022 - idade

if(idade%2 == 0){
    idadePI = 'par'
}else{
    idadePI = 'impar'
}

if(anoNascimento%2 == 0){
    anoPI = 'par'
}else{
    anoPI = 'impar'
}

console.log('Olá', nome ,', você tem', idade ,'ano(s), que é um número', idadePI, 'e nasceu no ano:', anoNascimento, ',que é um número', anoPI )

if(idade>=18){
    console.log('Está liberado o consumo de bebidas alcoólicas')
}else{
    console.log('Ainda não está liberado consumo de bebidas alcoólicas')
}

