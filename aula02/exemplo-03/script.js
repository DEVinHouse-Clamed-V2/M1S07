// <ul>
//   <li>Antonio</li>
//   <li>Paty</li>
//   <li>Alvaro</li>
// </ul>

let nomes = ["Antonio", "Paty", "Alvaro", "Kelvis"];

let body = document.getElementsByTagName("body")[0];

let ulElement = document.createElement("ul");

// let liElement1 = document.createElement("li");
// console.log(ulElement, liElement1);
// ulElement.appendChild(liElement1);

function criarElemento(lista) {
  lista.forEach((n) => {
    let liElement = document.createElement("li");
    liElement.innerText = n;
    // console.log(liElement);
    ulElement.appendChild(liElement);
  });
}

// body.append(ulElement, pElement);

body.appendChild(ulElement);
// body.appendChild(pElement);

criarElemento(nomes);

// Adiciona um novo elemento <p> usando innerHTML
ulElement.innerHTML += `<li>Novo parágrafo adicionado</li>`;

// Filhos saber qual irmão será o "novo próximo"
// Novo elemento

let liElementBefore = document.createElement("li");
liElementBefore.innerText = "Entre Kelvis e Alvaro";
console.log(liElementBefore);

let itens = document.getElementsByTagName("li");
console.log(itens);
ulElement.insertBefore(liElementBefore, null);
