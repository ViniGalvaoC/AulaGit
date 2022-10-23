let frase = ''
let palavra 
for (let contador = 0; contador < 4 ; contador++) {
palavra=prompt('informe uma das 4 palavras que irão formar a frase')
frase = frase + ' ' + palavra
}   
console.log('A frase informada foi:', frase)
