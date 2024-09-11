/*Atividade usando programação orientada a objetos*/
/*Confesso que ainda não aprendi muito bem todos os conceitos de POO que foram ensinados até aqui,
então peço perdão por não ter usado tudo que foi passado nas aulas*/

class Profissionais { /*Criando uma classe 'pai' que vai servir como base para as outras classes criadas*/
    constructor (inicio, fim, profissao, salario){/*Usando esse elemento para definir as variáveis que eu vou usar no código*/
        this.inicio = inicio;
        this.fim = fim;
        this.profissao = profissao;
        this.salario = salario;
        /*transformando as variáveis em objetos usando o this*/
    }

    Empresa(){ /*nessa parte, criamos funcoes que definem o que os objetos vão "fazer"*/
        console.log(`${this.profissao} trabalham na empresa JCCG`) /*aqui está a atividade que os objetos vão realizar quando forem acionados*/
    }

    Expediente(){
        console.log(`${this.profissao} começam seu trabalho às ${this.inicio}:00 da manhã.`)
    }

    Largar(){
        console.log(`${this.profissao} vão embora às ${this.fim}:00 da tarde.`)
    }

    Pagamento(){
        console.log(`${this.profissao} recebem aproximadamente ${this.salario} reais de salário.`)
    }

}

class programacao extends Profissionais{ /*aqui nos usamos o extends que vai servir para herdar os objetos da primeira classe*/
    constructor(inicio, fim, profissao, salario, linguagem){ /*mais uma vez usando esse elemento para definir as variáveis*/
        super(inicio, fim, profissao, salario); /*Esse elemento serve para trazer os objetos da classe pai*/
        /*quando fiz a primeira versão desse codigo, alguns elementos apareciam como undefined, então o chatgpt me orientou a trazer
        todos os elementos da classe pai para dentro do super.*/
        this.linguagem = linguagem;
        /*Aqui temos um objeto criado exclusivamente para essa classe*/
    }

    Codar(){ /*Mais uma vez, funções que definem a atividade dos objetos, desta vez em uma classe herdeira*/
        console.log(`${this.profissao} codam o dia inteiro`)
    }

    Cafe(){
        console.log(`${this.profissao} são viciados em café`)
    }

    Odio(){
        console.log(`${this.profissao} odeiam programar em ${this.linguagem}`)
    }

    Pagamento(){
        console.log(`${this.profissao} sonham em receber ${this.salario} mil reais em salário`)
    }
}

class engenharia extends Profissionais{ /*por último, mais uma classe que vai herdar osatributos da classe pai*/
    constructor(inicio, fim, profissao, salario, construcao){
        super(inicio, fim, profissao, salario);
        this.construcao = construcao;/*objeto especifico da classe*/
        
    }

    Pagamento(){ /*funções que esse objeto deve realizar*/
        console.log(`${this.profissao} recebem em média ${this.salario} reais de salário`)
    }

    Obra(){
        console.log(`${this.profissao} às vezes passam o dia no canteiro de obras`)
    }

    Prazo(){
        console.log(`${this.profissao} prometem que a obra vai ficar pronta em uma semana`)
    }

    Construir(){
        console.log(`${this.profissao} adoram construir projetos de ${this.construcao}`)
    }
}

const administradores = new Profissionais(8, 17, 'Administradores', 3000);
/*aqui nos criamos uma variavel que vai armazenar todos os objetos da nossa classe*/

administradores.Empresa();
administradores.Expediente();
administradores.Largar();
administradores.Pagamento();
/*aqui eu chamo as funções para que elas realizem as atividades que estão dentro delas, nesse caso, mostrar os textos no console*/

console.log(' ')/*consolezinho maroto para dar um "espaço" nos atributos kkkkk*/

const programadores = new programacao(8, 17, 'Programadores', 20, 'Java');
/*aqui uma variavel pra armazenar os objetos da primeira classe herdeira*/

programadores.Codar();
programadores.Cafe();
programadores.Odio();
programadores.Pagamento();

console.log(' ')

const engenheiros = new engenharia(8, 17, 'Engenheiros', 8000, 'Hidráulica');
/*mais uma variavel, dessa vez para trabalhat com os objetos da segunda herdeira*/

engenheiros.Obra();
engenheiros.Prazo();
engenheiros.Construir();
engenheiros.Pagamento();
/*aqui eu finalizo a atividade, perdão se tiver feito algo errado. Vou continuar me focando em estudar o JS e o POO.*/