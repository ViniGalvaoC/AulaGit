let num = []
for (i = 0; i < 5; i++) {
    num[i]=parseInt(prompt('Insira um número'))
    if(num[i]<0){
        num[i]=false
    }else{
        num[i]= true
    }


}
console.log(num)