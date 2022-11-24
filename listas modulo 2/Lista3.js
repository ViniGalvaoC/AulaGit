// Parte 1
// 1. Criar uma classe Funcionário que possui as propriedades Nome e Salário;
// 2. Criar a classe Gerente que herda da classe Funcionário e possui a propriedade
// Departamento;
// 3. Criar a classe Vendedor que também herda de Funcionário e possui a propriedade
// PercentualComissao;
// 4. Na classe Gerente implementar um método ExibirInformacoes() que deve exibir no
// console todas as propriedades de um gerente: Nome, Salário e Departamento;
// 5. Na classe Vendedor implementar um método CalcularSalario() que deve retornar o
// valor do Salário acrescido do PercentualComissao;
// 6. Na classe Vendedor implementar o método ExibirInformacoes() que deve exibir no
// console as seguintes informações do Vendedor: Nome, Salario, Salario com
// comissão e o PercentualComissao.

// Parte 2 
// 1. Criar uma classe Produto com as propriedades Nome e Valor;
// 2. Criar a classe Venda com as propriedades Vendedor que deve ser um objeto da
// classe Vendedor criada anteriormente, ListaDeProdutos que deve ser um array e
// ValorTotal;
// 3. Na classe Venda implementar um método AdicionarProduto(), esse método deve
// criar um novo Produto e adicionar ele na propriedade ListaDeProdutos;
// 4. Na classe Venda implementar um método CalcularTotal() que deve somar os valores
// de todos os Produtos na ListaDeProdutos e salvar na propriedade ValorTotal o
// resultado dessa soma;
// 5. Na classe Venda implementar um método FinalizarVenda() que deve exibir no
// console o nome do Vendedor e o ValorTotal da venda.

class Funcionario {
    Nome
    Salario
    constructor(nome, salario) {
        this.Nome = nome
        this.Salario = salario
    }
}

class Gerente extends Funcionario {

    Departamento

    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.Departamento = departamento
    }

    ExibirInformacoes() {
        console.log(this.Nome, this.Salario, this.Departamento)
    }
}

class Vendedor extends Funcionario {
    PercentualComissao

    constructor(nome, salario, percentualComissao) {
        super(nome, salario)
        this.PercentualComissao = percentualComissao
    }
    CalcularSalario() {
        let salarioNovo = this.Salario + (this.Salario * (this.PercentualComissao/100))
        return salarioNovo
    }
    ExibirInformacoes() {
        console.log(this.Nome, this.Salario, vendedor.CalcularSalario(), this.PercentualComissao)
    }
}

class Produto {
    Nome
    Valor

    constructor(nome, valor) {
        this.Nome = nome
        this.Valor = valor
    }

}

class Venda {
    Vendedor
    ListaDeProdutos = []
    ValorTotal = 0

    constructor(vendedor) {
        this.Vendedor = vendedor
    }

    AdicionarProduto(produto) {
        this.ListaDeProdutos.push(produto)
    }

    CalcularTotal() {
        for (let i = 0; i < this.ListaDeProdutos.length; i++) {
            this.ValorTotal = this.ValorTotal + this.ListaDeProdutos[i].Valor
        }
        return this.ValorTotal
    }
    FinalizarVenda() {
        console.log(this.Vendedor.Nome, venda1.CalcularTotal())
    }
}

let gerente = new Gerente('vinicius',5000,'vendas')

let vendedor = new Vendedor('roger', 800, 25)

let produto1 = new Produto('mouse',100)
let produto2 = new Produto('teclado',300)
let produto3 = new Produto('mousepad',20)

let venda1 = new Venda(vendedor)

