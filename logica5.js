let Carnes = [];
let Vegetais = [];
let Grãos = [];
let Bebidas = [];

let adicionar = "Sim";
while (adicionar != "Não") {
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Não");
    if (adicionar === "Não") {
        break;
    }

    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt("Em qual categoria essa comida se encaixa? Carnes, Vegetais, Grãos e Bebidas ");
    if (categoria === "Carnes") {
        Carnes.push(comida);
    } else if (categoria === "Vegetais") {
        Vegetais.push(comida);
    } else if (categoria === "Grãos") {
        Grãos.push(comida);
    } else if (categoria === "Bebidas")
        Bebidas.push(comida);
    else {
        alert = ("Essa categoria não foi pré-definida.");
    }
}
alert = ("A lista de compra é: Carnes: " + Carnes + " Vegetais: " + Vegetais + " Grãos: " + Grãos + " Bebidas: " + Bebidas);
