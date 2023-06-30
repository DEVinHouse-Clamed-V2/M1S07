// Item 3

// removeChild -> pai e o elemento que quero deletar
let paiElement = document.querySelector("ul");
let filhoElement = document.querySelectorAll("li")[2];

console.log(paiElement);
console.log(filhoElement);

paiElement.removeChild(filhoElement);
