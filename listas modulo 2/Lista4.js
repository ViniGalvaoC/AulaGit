// Parte 1
// Crie as seguintes classes: Imóvel e Pessoa;
// Um Imóvel deve ter os seguintes atributos: endereço, cep, area em metros, quantidade de
// banheiros, quantidade de quartos, as pessoas que moram neste imóvel e o valor do
// mesmo;
// Uma pessoa deve ter os seguintes atributos: nome, cpf e uma data de nascimento;
// Criar três classes filhas que herdam de Imóvel: Casa, Apartamento e Kitnet;
// Uma Casa deve ter um atributo “ComQuintal” que recebe um valor booleano;
// Um Apartamento deve ter os atributos: andar e o valor do condomínio;
// Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover
// uma pessoa como morador;
// Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma
// casa pode ter até cinco banheiros;
// Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes
// especificações:
// Uma casa com quintal tem um acréscimo de 30% no seu valor;
// Um apartamento deve ter o valor do seu condomínio somado ao valor base;
// Uma Kitnet não tem alterações no seu valor base;
class Imovel {
    Endereco
    Cep
    Area
    Banheiros
    Quartos
    Moradores = []
    Valor
    constructor(endereco, cep, area, banheiros, quartos, moradores, valor) {
        this.Endereco = endereco
        this.Cep = cep
        this.Area = area
        this.Banheiros = banheiros
        this.Quartos = quartos
        this.Moradores = moradores
        this.Valor = valor
    }
    AdicionarMorador(nome) {
        this.Moradores.push(nome)
    }

    RemoverMorador(nome) {
        let moradoresSup = []
        for (let i = 0; i < this.Moradores.length; i++) {
            if (nome == this.Moradores[i]) {
                this.Moradores[i] = 0
            }
            
        }
        for (let i = 0; i < this.Moradores.length; i++) {
            if (this.Moradores[i] != 0) {
                moradoresSup.push(this.Moradores[i])
            }
            
        }
        this.Moradores = moradoresSup

    }
}

class Pessoa {
    Nome
    Cpf
    Nascimento
    constructor(nome, cpf, nascimento) {
        this.Nome = nome
        this.Cpf = cpf
        this.Nascimento = nascimento
    }
}

class Casa extends Imovel {
    ComQuintal //true or false
    constructor(endereco, cep, area, banheiros, quartos, moradores, valor, comQuintal) {
        super(endereco, cep, area, banheiros, quartos, moradores, valor)
        this.ComQuintal = comQuintal
    }

    VerificarBanheiros() {
        if (this.Banheiros > 5) {
            return false
        } else {
            return true
        }
    }

    CalcularValor() {
        if (this.ComQuintal == true) {
            this.Valor = this.Valor * 1.30
        }
        return this.Valor
    }
}

class Apartamento extends Imovel {
    Andar
    ValorCondominio
    constructor(endereco, cep, area, banheiros, quartos, moradores, valor, andar, valorCondominio) {
        super(endereco, cep, area, banheiros, quartos, moradores, valor)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
    }

    VerificarBanheiros() {
        if (this.Banheiros > 3) {
            return false
        } else {
            return true
        }
    }
    CalcularValor() {
        this.Valor = this.Valor + this.ValorCondominio
        return this.Valor
    }
}

class Kitnet extends Imovel {
    constructor(endereco, cep, area, banheiros, quartos, moradores, valor) {
        super(endereco, cep, area, banheiros, quartos, moradores, valor)
    }

    VerificarBanheiros() {
        if (this.Banheiros > 2) {
            return false
        } else {
            return true
        }
    }

}
let pessoa1 = new Pessoa('Vinicius', 08802101418, '18/04/2000')
let pessoa2 = new Pessoa('joao', 540302010, '20/12/2000')


let imovel1 = new Casa('Visconde de Araguaya', '52061220', '100m²', 3, 4, [pessoa1], 5000, true)
let imovel2 = new Apartamento('a', '555', '50m²', 4, 2, [], 2500, 'quinto andar', 200)
let imovel3 = new Kitnet('b', '222', '20m²', 1, 1, [], 600)

