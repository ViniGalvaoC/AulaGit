let arreyNum = []
let num
for (i = 0; i < 10; i++) {
    arreyNum[i] = parseInt(prompt('Insira um número'))

}
num = parseInt(prompt('Insira um número de comparação'))
for (u = 0; u < arreyNum.length; u++) {
    if(arreyNum[u]==num){
        console.log('O número',num,'aparece no índice:',u)
    }
}