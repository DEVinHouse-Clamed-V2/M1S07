// Adicionando o atributo "src" à tag <img>
let imagem = document.getElementById("myImage");
imagem.setAttribute("src", "img/clamed.jpg");
imagem.setAttribute("alt", "Foto do kelvis");
imagem.setAttribute("width", 200);
imagem.setAttribute("height", 500);

// Adicionar em massa os atributos e valores

// busca o valor do atributo alt
console.log(imagem.getAttribute("alt"));

// remove a propriedade height
imagem.removeAttribute("height");

let button = document.querySelector("button");

// remove um atributo

// button.removeAttribute("disabled");
button.setAttribute("disabled", true);
