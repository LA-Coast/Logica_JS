/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 
para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você
acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.*/

// Exemplo de um loop while que itera enquanto uma condição é verdadeira
let contador = 0; /*Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)*/
const num = 3

while (contador < 3) {
    let adv = prompt("Chute um número!!");
    if (parseInt(adv) !== num) {
        alert("Chute outro número!!");
    } else {
        alert("Parabén você acertou!!");
        break;
    }
    contador++;
    if (contador === 3){
        alert("O número era " + num);
    }
}




