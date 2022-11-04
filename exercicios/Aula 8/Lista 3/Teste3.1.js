function Retorno() {
    let num = parseInt(prompt('Insira um número'))
    if (num > 0) {
        return 1
    } else if (num < 0) {
        return -1
    } else {
        return 0
    }



}
console.log(Retorno())