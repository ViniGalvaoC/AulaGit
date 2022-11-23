// 1. Crie uma classe Livro com as seguintes propriedades:
// ● Titulo - qual o nome do livro;
// ● Autor- quem escreveu o livro;
// ● Editora - qual empresa que publicou o livro;
// ● Ano de publicação - o ano em que o livro foi publicado
// ● Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);
// 2. Crie alguns objetos da classe Livro e adicione-os em um array;
// 3. Crie uma classe Biblioteca com as seguintes propriedades:
// ● Nome - nome da biblioteca;
// ● Endereco - onde a biblioteca fica localizada;
// ● Telefone - telefone de contato da biblioteca
// 4. Adicione na classe Biblioteca um método para buscar um livro específico, deve
// passar como parâmetro o nome do livro e exibir no console todas as informações
// de um livro;
// 5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
// passado como parâmetro o nome do livro, então verificar a disponibilidade e se
// estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
// não estiver disponível retornar false.
// 6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
// passado como parâmetro o nome do livro, então trocar o valor da propriedade de
// disponibilidade desse livro para true;
// 7. Crie um objeto da classe Biblioteca e chame seus métodos.


// Parte 2
// 1. Crie um método construtor para a classe Livro que recebe como parâmetro as
// informações que serão atribuídas as propriedades, com exceção de
// “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado;
// 2. Na classe Biblioteca, adicione uma nova propriedade “this.AcervoDeLivros” que deve
// ser um array;
// 3. Crie um método construtor para a classe Biblioteca que deve receber como
// parâmetro as informações que serão atribuídas as propriedades, com exceção da
// “this.AcervoDeLivros”;
// 4. Na classe Biblioteca crie um método para adicionar um novo Livro na propriedade
// “this.AcervoDeLivros”;

let titulo
let autor
let editora
let ano
let nome
let endereco
let telefone
class Livro {
    Titulo
    Autor
    Editora
    Ano
    Disponivel
    constructor(titulo, autor, editora, ano) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.Ano = ano
        this.Disponivel = true
    }
}


let buscar
let emprestar
let devolver

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []

    constructor(nome,endereco,telefone) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone

    }

    AdicionarLivro(livro) {
        this.AcervoDeLivros.push(livro)
        console.log('livro adicionado')

    }

    BuscarLivro(titulo) {

        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (titulo == this.AcervoDeLivros[i].Titulo) {
                console.log(this.AcervoDeLivros[i].Titulo, this.AcervoDeLivros[i].Autor, this.AcervoDeLivros[i].Editora, this.AcervoDeLivros[i].Ano)
            }
        }
    }

    EmprestarLivro(titulo) {

        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (titulo == this.AcervoDeLivros[i].Titulo) {
                if (this.AcervoDeLivros[i].Disponivel == true) {
                    this.AcervoDeLivros[i].Disponivel = false
                    return true
                } else {
                    return false
                }
            }
        }

    }

    DevolverLivro(titulo) {

        for (let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (titulo == this.AcervoDeLivros[i].Titulo) {
                this.AcervoDeLivros[i].Disponivel = true
                console.log('Vc devolveu o livro')
            }
        }
    }
}

let biblio = new Biblioteca('Biblioteca UFPE', 'UFPE', '(81)3257-3465')

let livro1 = new Livro('hp', 'A', 'Fulana', 2000)
let livro2 = new Livro('snow','B','Cicrana',1997)
let livro3 = new Livro('pj','C','Beltrana',2003)