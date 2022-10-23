let valor
let notas100
let notas50
let notas10
let notas5
let notas1
valor = prompt('Qual valor você deseja dividir em notas de 100,50,10,5 e 1 reais?')
//100
notas100 = valor/100
console.log(Math.trunc(notas100), 'nota(s) de 100')
//50
valor = (valor - (Math.trunc(notas100)*100))
notas50 = valor/50
console.log(Math.trunc(notas50), 'nota(s) de 50')
//10
valor = (valor - (Math.trunc(notas50)*50))
notas10 = valor/10
console.log(Math.trunc(notas10), 'nota(s) de 10')
//5
valor = (valor - (Math.trunc(notas10)*10))
notas5 = valor/5
console.log(Math.trunc(notas5), 'nota(s) de 5')
//1
valor = (valor - (Math.trunc(notas5)*5))
notas1 = valor
console.log(Math.trunc(notas1), 'nota(s) de 1')