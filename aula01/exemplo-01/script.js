let itens = document.getElementsByTagName("li");
let ultimo = document.getElementsByClassName("ultimo");
let botaoSalvar = document.getElementById("btn-salvar");

let itensQ = document.querySelectorAll("li");
let botaoSalvarQ = document.querySelector("#btn-salvar");

// console.log(itens);
// console.log(itensQ);
// console.log(ultimo);
// console.log(botaoSalvar);
// console.log(botaoSalvarQ);

// somente o texto
// console.log(itens[1].innerText);

// texto e os espaços - formatação
// console.log(itens[1].textContent);

// texto e os espaços, formatação e ESTRUTURA HTML
// console.log(itens[1].innerHTML);

// let labelContador = itensQ.getElementsByClassName("contador");

// HTML Collection
for (const item of itens) {
  console.log(item.innerText);
}

// Converte uma Coleção em um Objeto Iteravel
let lista = Array.from(itens);
lista.forEach((item) => console.log(item.innerText));

// Node List
itensQ.forEach((item) => console.log(item.innerText));
