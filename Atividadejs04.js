//Uma calculadora básica. solicitar dois números e fazer a operação (Adição, Subtração, Multiplicação e Divisão)
let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: ")) //dois prompts pra que os usuários digitem os números
                         
let calculo = parseInt(prompt("1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão | Insira a operação: ")) //mais um prompt pra deixar a calculadora um pouco mais clara para o usuário
if (calculo === 1){
    resultado = n1 + n2
    console.log ("o resultado é: " + resultado)
} else if (calculo === 2){
    resultado = n1 - n2
    console.log ("o resultado é: " + resultado)
} else if (calculo === 3){
    resultado = n1 * n2
    console.log ("o resultado é: " + resultado)
} else if (calculo === 4){
    resultado = n1 / n2
    console.log ("o resultado é: " + resultado)
} else {
    console.log("Operação inválida")
} //metodo if pra decidir qual vai ser a saida do codigo de acordo com o usuário

console.log("  ")

//Verifique se um número dado pelo usuario é primo. (Número dividido por 1 ou por ele mesmo)
let primo = parseInt(prompt("Digite um número: ")); //usuario digita o numero para verificar se ele é primo


if (primo <= 1) { //número 1 e 0 não são primos
    console.log(primo + " não é um número primo");
} else if (primo === 2) { // 2 é o único número par que é primo
    console.log(primo + " é um número primo");
} else if (primo % 2 === 0) { //todo número par que não seja 2 não é primo
    console.log(primo + " não é um número primo")
} else { // tirando essas condições, os outros números são primos
    console.log(primo + " é um número primo");
}

console.log("  ")

//Conte quantas vezes caracteres especiais (como @, #, $, %, &) aparecem em uma string dada pelo usuario

let string = prompt("Digite uma string:"); // prompt para solicitar que o usuário insira uma string


let especiais = "=_,.|~:;+-*!^()[]{}@#$%&/?<>"; // aqui digitei quase todos os caracteres especiais que quero que o programa conte


let contador = 0; // cria a variavel do contador

// Percorre cada caractere da string do usuário
for (let i = 0; i < string.length; i++) {
    if (especiais.includes(string[i])) { //com o contador, pedi ajuda ao chatgpt e ele me recomendou o uso do includes para ver se a string tem algum dos caracteres
        contador++;
    }
}

console.log("Número de caracteres especiais na string: " + contador); // Exibe o número de caracteres especiais encontrados

console.log("  ")

//Solicite ao usuario 4 notas de provas, calcule a média e determine se o aluno foi aprovado (maior ou igual a 7), recuperação (entre 5 e 7), reprovado (abaixo de 5)

// Solicitando 4 notas ao usuário usando o parse float para que não seja apenas números inteiros
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));
        
let resultado = nota1 + nota2 + nota3 + nota4 // Calculando a média das notas
let media = resultado / 4;

if (media >= 7) { // Determinando o resultado com base na média
    console.log("Aprovado com média: " + media)
} else if (media >= 5) {
    console.log("Recuperação com média: " + media)
} else if (media < 5) {
    console.log("Reprovado com média: " + media)
}

console.log("  ")

//gere um número aleatorio entre 1 e 100 e permita que o usuario tente adivinhar o número, o programa deve dar dicas se o número é maior ou menor que a tentativa e só deve parar quando o usuario acertar


let numero = Math.floor(Math.random() * 101); //aqui pedi ajuda mais uma vez ao chatgpt para me explicar como fazer o computador gerar números aleatórios
let palpite = null;

while (palpite !== numero) { //aqui o while para manter o codigo rodando enquanto o usuario não acerte o número
    
    palpite = parseInt(prompt("Adivinhe um número entre 1 e 100:"));

    if (palpite < numero) { //por ultimo, o elemento if sendo usado para criar a estrutura do jogo de advinhação
        alert("O número é maior."); 
    } else if (palpite > numero) {
        alert("O número é menor.");
    } else if (palpite === numero) {
        alert("Parabéns! Você acertou!"); //neste codigo usei o alert pois por algum motivo, o console.log não estava funcionando
    } else {
        alert("Por favor, insira um número válido.");
    }
}