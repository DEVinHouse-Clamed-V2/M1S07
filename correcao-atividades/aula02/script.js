// Exericio 1 - parte 1
let itens = document.querySelectorAll("li");

// itens.forEach((item) => {
//   console.log(item);
//   console.log(item.innerText);
// });

// Exericio 1 - parte 2
// let maisVendidoElement = document.querySelector(".mais-vendido");
let maisVendidoElement = document.getElementsByClassName("mais-vendido")[0];
// console.log(maisVendidoElement);
// console.log(maisVendidoElement.innerText);

// Exercicio 2
let itensBaby = [
  "BEPANTOL BABY 100G + 20G CREME TOALHA UMEDECIDA NATURAL BABY LEVE 100",
  "PAGUE 80 ESPECIAL FRALDA HUGGIES TRIPLA PROTEÇÃO COM 78 LEVE + PAGUE -",
  "TAMANHO G HIPER ESPECIAL",
];

let lista = document.querySelector("#lista");

itensBaby.forEach((item) => {
  // criar elementos
  criarElementoDOM(item);
});

function criarElementoDOM(titulo) {
  let itemElement = document.createElement("li");
  itemElement.innerText = titulo;
  lista.appendChild(itemElement);
}

maisVendidoElement.remove();

// BEPANTOL BABY 100G + 20G CREME TOALHA UMEDECIDA NATURAL BABY LEVE 100
// PAGUE 80 ESPECIAL FRALDA HUGGIES TRIPLA PROTEÇÃO COM 78 LEVE + PAGUE -
// TAMANHO G HIPER ESPECIAL
