class Torre {
    Nome: string
    Ataque: number
    Alcance: number
    Nivel: number
    Valor: number
    constructor(nome: string, ataque: number, alcance: number, nivel: number, valor: number) {
        this.Nome = nome
        this.Ataque = ataque
        this.Alcance = alcance
        this.Nivel = nivel
        this.Valor = valor
    }
    Atacar(nome: Torre): number {
        return nome.Ataque
    }
}

class Inimigo {
    Nome: string
    Vida: number
    constructor(nome: string, vida: number) {
        this.Nome = nome
        this.Vida = vida
    }
    ReceberDano(danoCausado: number) {
        this.Vida = this.Vida - danoCausado

    }
}

let arrayTorres: Torre[] = []
arrayTorres.length = 10

function AdicionarTorre(nome: Torre, posicao: number) {
    arrayTorres[posicao] = nome
}

let torre1 = new Torre('torre1', 2, 2, 3, 100)
let torre2 = new Torre('torre2', 3, 1, 2, 120)
let inimigo1 = new Inimigo('troll', 20)
let arrayInimigosSup: Inimigo[] = []
let arrayStatusInimigo: boolean[] = []

let vida: number = 3
let inimigosVivos = 0
AdicionarTorre(torre1, 3)
AdicionarTorre(torre2, 6)
let arrayPosicaoInimigos: number[] = []
let indexPosicaoInimigo: number = 0
let inimigosVivosTeste: boolean = true
let rodadas = 15
function ComecarGame() {
    while (vida > 0 && inimigosVivosTeste) {
        if (indexPosicaoInimigo < 4) {
            arrayPosicaoInimigos[indexPosicaoInimigo] = 9
            indexPosicaoInimigo++
            arrayInimigosSup.push(new Inimigo('troll', 6))
            inimigosVivos++
            arrayStatusInimigo.push(true)
        }
        for (let i = 0; i < arrayTorres.length; i++) {
            if (arrayTorres[i] != undefined) {
                for (let u = 0; u < arrayPosicaoInimigos.length; u++) {
                    if (arrayTorres[i].Alcance == 1) {
                        if (arrayPosicaoInimigos[u] == i && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]))
                        }
                    }
                    if (arrayTorres[i].Alcance == 2) {
                        if (arrayPosicaoInimigos[u] == i - 1 && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]))
                            u = 100
                        }
                        if (arrayPosicaoInimigos[u] == i && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]))
                            u = 100
                        }
                        if (arrayPosicaoInimigos[u] == i + 1 && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]))
                        }
                    }
                }

            }
        }
        for (let i = 0; i < arrayInimigosSup.length; i++) {
            if (arrayInimigosSup[i].Vida <= 0 && arrayStatusInimigo[i] == true) {
                inimigosVivos--
                arrayStatusInimigo[i] = false
                console.log('Inimigo abatido')
            }
        }
        for (let i = 0; i < arrayPosicaoInimigos.length; i++) {
            if (arrayStatusInimigo[i] == true) {
                arrayPosicaoInimigos[i] = arrayPosicaoInimigos[i] - 1
            }
            if (arrayPosicaoInimigos[i] == 0) {
                vida--
                console.log('Inimigo passou')
            }
        }

        if (vida == 0) {
            console.log('Vida zerada')
        }
        if (inimigosVivos == 0) {
            console.log('Todos inimigos abatidos, você venceu!')
            inimigosVivosTeste = false
        }
        rodadas--
        if(rodadas==0){
            inimigosVivosTeste = false
            console.log('Inimigos acabaram e você está vivo, parabéns!')
        }

    }
}

