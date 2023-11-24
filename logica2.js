/* 
Para imprimir e receber valores, você pode tanto usar console.log, 
prompt e alert, quanto usar HTML e CSS caso já tenha conhecimento 
nessas duas tecnologias. 

console.log:
O console.log é usado para exibir informações no console do navegador, 
o que é útil para depuração e registro de mensagens. Você pode usá-lo 
da seguinte forma:

console.log("Isso é uma mensagem no console");

Isso exibirá a mensagem no console do navegador. Você pode usar console.log
para exibir variáveis, resultados de funções e depurar seu código.

let numero = 42;
console.log("O valor da variável 'numero' é: " + numero);

alert:
O alert é usado para exibir uma caixa de diálogo modal com uma mensagem para o usuário. 
A caixa de diálogo bloqueia a interação com a página até que o usuário a feche.

alert("Isso é um alerta para o usuário.");


prompt:
O prompt é usado para exibir uma caixa de diálogo com um campo de entrada de texto, onde o
usuário pode inserir informações. Você pode capturar a entrada do usuário da seguinte maneira:

let nome = prompt("Por favor, digite seu nome:");
console.log("Seu nome é: " + nome);

Neste exemplo, o usuário insere seu nome na caixa de diálogo do prompt, e o valor é armazenado 
na variável nome.

/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

*/

let nome = prompt("Qual seu nome?");
console.log("Seu nome é: " + nome); 

let idade = prompt("Quantos anos você tem?");
console.log("Sua idade é:" + idade);

let linguagem = prompt("Qual linguagem de programação você está estudando?");
console.log("Sua linguagem é: " + linguagem);

alert("Olá ," + nome + " você tem " + idade + " e já está aprendendo " + linguagem + "!");

