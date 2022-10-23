let fibo = []
let num = parseInt(prompt('Insira um número para a sequência de Fibonacci'))
console.log(num)
fibo[0] = num - 1
for(i=1;i<10;i++) {
  
    fibo[i] = num
    num = num + fibo[i - 1]
    
}
console.log(fibo)