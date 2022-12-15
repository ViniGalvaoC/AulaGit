var Torre = /** @class */ (function () {
    function Torre(nome, ataque, alcance, nivel, valor) {
        this.Nome = nome;
        this.Ataque = ataque;
        this.Alcance = alcance;
        this.Nivel = nivel;
        this.Valor = valor;
    }
    Torre.prototype.Atacar = function (nome) {
        return nome.Ataque;
    };
    return Torre;
}());
var Inimigo = /** @class */ (function () {
    function Inimigo(nome, vida) {
        this.Nome = nome;
        this.Vida = vida;
    }
    Inimigo.prototype.ReceberDano = function (danoCausado) {
        this.Vida = this.Vida - danoCausado;
    };
    return Inimigo;
}());
var arrayTorres = [];
arrayTorres.length = 10;
function AdicionarTorre(nome, posicao) {
    arrayTorres[posicao] = nome;
}
var torre1 = new Torre('torre1', 2, 2, 3, 100);
var torre2 = new Torre('torre2', 3, 1, 2, 120);
var inimigo1 = new Inimigo('troll', 20);
var arrayInimigosSup = [];
var arrayStatusInimigo = [];
var vida = 3;
var inimigosVivos = 0;
AdicionarTorre(torre1, 3);
AdicionarTorre(torre2, 6);
var arrayPosicaoInimigos = [];
var indexPosicaoInimigo = 0;
var inimigosVivosTeste = true;
var rodadas = 15;
function ComecarGame() {
    while (vida > 0 && inimigosVivosTeste) {
        if (indexPosicaoInimigo < 4) {
            arrayPosicaoInimigos[indexPosicaoInimigo] = 9;
            indexPosicaoInimigo++;
            arrayInimigosSup.push(new Inimigo('troll', 6));
            inimigosVivos++;
            arrayStatusInimigo.push(true);
        }
        for (var i = 0; i < arrayTorres.length; i++) {
            if (arrayTorres[i] != undefined) {
                for (var u = 0; u < arrayPosicaoInimigos.length; u++) {
                    if (arrayTorres[i].Alcance == 1) {
                        if (arrayPosicaoInimigos[u] == i && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]));
                        }
                    }
                    if (arrayTorres[i].Alcance == 2) {
                        if (arrayPosicaoInimigos[u] == i - 1 && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]));
                            u = 100;
                        }
                        if (arrayPosicaoInimigos[u] == i && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]));
                            u = 100;
                        }
                        if (arrayPosicaoInimigos[u] == i + 1 && arrayStatusInimigo[u] == true) {
                            arrayInimigosSup[u].ReceberDano(arrayTorres[i].Atacar(arrayTorres[i]));
                        }
                    }
                }
            }
        }
        for (var i = 0; i < arrayInimigosSup.length; i++) {
            if (arrayInimigosSup[i].Vida <= 0 && arrayStatusInimigo[i] == true) {
                inimigosVivos--;
                arrayStatusInimigo[i] = false;
                console.log('Inimigo abatido');
            }
        }
        for (var i = 0; i < arrayPosicaoInimigos.length; i++) {
            if (arrayStatusInimigo[i] == true) {
                arrayPosicaoInimigos[i] = arrayPosicaoInimigos[i] - 1;
            }
            if (arrayPosicaoInimigos[i] == 0) {
                vida--;
                console.log('Inimigo passou');
            }
        }
        if (vida == 0) {
            console.log('Vida zerada');
        }
        if (inimigosVivos == 0) {
            console.log('Todos inimigos abatidos, você venceu!');
            inimigosVivosTeste = false;
        }
        rodadas--;
        if (rodadas == 0) {
            inimigosVivosTeste = false;
            console.log('Inimigos acabaram e você está vivo, parabéns!');
        }
    }
}
