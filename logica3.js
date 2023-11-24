/* 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.*/
let end = prompt("Qual área você quer seguir? Front-End ou Back-End");
console.log("A área que você escolheu: " + end);
/*2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.*/
if (end === "Front-End") {
    let linguagemFront = prompt("Qual liguagem você quer aprender, React ou Vue? ")
    console.log("A linguagem que você escolheu: " + linguagemFront);
} else if (end === "Back-End") {
    let linguagemBack = prompt("Qual liguagem você quer aprender, C# ou Java?")
    console.log("A linguagem que você escolheu: " + linguagemBack);
} 
/*3. Depois, independente das escolhas anteriores, o usuário poderá escolher 
entre seguir se especializando na área escolhida ou seguir se desenvolvendo 
para se tornar Fullstack. Você deve exibir na tela uma mensagem específica 
para cada escolha.*/
let devWeb = prompt("Qual área você quer seguir? Front-End ou Back-End ou Fullstack?");
console.log("A área que você escolheu: " + devWeb);
if (devWeb === "Front-End") {
    alert("Então continue seus estudos em Front-End!!")
} else if (devWeb === "Back-End") {
    alert("Então continue seus estudos em Back-End!!")  
} else {
    alert("Então continue seus estudos para se tornar Fullstack!!");
  }
/*4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de 
se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, 
uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: 
“Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando 
para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo 
depois, apresente uma mensagem comentando algo sobre a linguagem inserida.*/

const tecnologias = [];
let continuar = true;
while (continuar) {
    const tecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
    tecnologias.push(tecnologia);
    const resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Sim ou Não?)");
    if (resposta !== 'Sim') {
        continuar = false;
    }
}
alert("As liguagens que você citou foram " + tecnologias)

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}