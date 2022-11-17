/*
1. Crie uma classe Carro com as seguintes propriedades:
● Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
● Potência - número de cavalos de potência do carro;
● Velocidade Máxima - qual a maior velocidade que o carro pode alcançar;
● Aceleração - o tempo em segundos que o carro leva para ir de 0 a 100 km/h
2. Adicione na classe carro um método que recebe como parâmetro uma distância em
metros e calcula o tempo em segundos para percorrer essa distância. Use a
seguinte fórmula para o cálculo: resultado = distância / (Velocidade Máxima /
Aceleração). A função deve retornar esse resultado.
3. Crie alguns objetos da classe Carro e adicione-os em um array
4. Crie uma classe Corrida com as seguintes propriedades:
● Nome - nome do local da corrida;
● Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
● Distância - o total em metros da corrida;
● Vencedor - qual a equipe que ganhou a corrida;
5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
nome da equipe que fez o menor tempo na propriedade “Vencedor”.
6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
corrida.
7. Crie um objeto da classe Corrida e chame seus métodos.
*/
let resultado = []
class Carro {
    Nome
    Potencia
    Velocidade
    Aceleracao
    Resultado() {
        for (i = 0; i < 3; i++) {
            resultado[i] = distancia / (this.Velocidade[i] / this.Aceleracao[i])
        }
        return resultado
    }
}

let carros = new Carro()
carros.Nome = ['Ferrari', 'Mercedes', 'Uno escada']
carros.Potencia = [200, 180, 300]
carros.Velocidade = [250, 220, 290]
carros.Aceleracao = [3, 5, 2]

let i = 0
let distancia = 0
let comparador = 1000
class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor
    ComecarCorrida() {
        distancia = this.Distancia
        console.log('Corrida de', this.Nome, 'começou')
    }
    VerificarVencedor() {
        for (i = 0; i < 3; i++) {
            if (resultado[i] < comparador) {
                comparador = resultado[i]
                this.Vencedor = carros.Nome[i]
            }
        }
    }
    ExibirVencedor() {
        console.log('O vencedor foi:', this.Vencedor)
    }
}

let corrida = new Corrida()
corrida.Nome = 'Interlagos'
corrida.Tipo = 'Carro de rua'
corrida.Distancia = 100



