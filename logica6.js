let Carnes = [];
let Vegetais = [];
let Graos = [];
let Bebidas = [];

let adicionar = "Sim";
while (adicionar !== "Não") {
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Não ou Remover");
    
    if (adicionar === "Não") {
        break;
    } else if (adicionar === "Remover") {
        if (Carnes.length === 0 && Vegetais.length === 0 && Graos.length === 0 && Bebidas.length === 0) {
            alert(`A lista está vazia!`);
        } else {
            let remover = prompt("A lista de compra é:\n Carnes: " + Carnes + " Vegetais: " + Vegetais + " Grãos: " + Graos + " Bebidas: " + Bebidas + " Qual produto você deseja remover?");

            if(Carnes.indexOf(remover) !== -1){
                Carnes.splice(Carnes.indexOf(remover), 1);
                alert("O item " + remover + " foi removido com sucesso!");
            } else if(Vegetais.indexOf(remover) !== -1){
                Vegetais.splice(Vegetais.indexOf(remover), 1);
                alert("O item " + remover + " foi removido com sucesso!");
            } else if (Graos.indexOf(remover) !== -1){
                Graos.splice(Graos.indexOf(remover), 1);
                alert("O item " + remover + " foi removido com sucesso!");
            } else if (Bebidas.indexOf(remover) !== -1){
                Bebidas.splice(Bebidas.indexOf(remover), 1);
                alert("O item " + remover + " foi removido com sucesso!");
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`);
            }
        }
    } else {
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = prompt("Em qual categoria essa comida se encaixa? Carnes, Vegetais, Grãos e Bebidas ");

        if (categoria === "Carnes") {
            Carnes.push(comida);
        } else if (categoria === "Vegetais") {
            Vegetais.push(comida);
        } else if (categoria === "Grãos") {
            Graos.push(comida);
        } else if (categoria === "Bebidas") {
            Bebidas.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.");
        }
    }
}
alert("A lista de compra é:\n Carnes: " + Carnes + " Vegetais: " + Vegetais + " Grãos: " + Graos + " Bebidas: " + Bebidas);

