function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

let operacao;

do {
    operacao = prompt("As opções disponíveis são: soma, subtração, multiplicação, divisão, e sair.\nQual operação você gostaria de fazer?");

    if (operacao === "soma") {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        let resultado = soma(num1, num2);
        alert("O resultado da soma é: " + resultado);
    } else if (operacao === "subtração") {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        let resultado = subtracao(num1, num2);
        alert("O resultado da subtração é: " + resultado);
    } else if (operacao === "multiplicação") {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        let resultado = multiplicacao(num1, num2);
        alert("O resultado da multiplicação é: " + resultado);
    } else if (operacao === "divisão") {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        let resultado = divisao(num1, num2);
        alert("O resultado da divisão é: " + resultado);
    } else if (operacao !== "sair") {
        alert("Operação inválida! Por favor, escolha entre soma, subtração, multiplicação, divisão ou sair.");
    }
} while (operacao !== "sair");

alert(`Até a próxima!`);
