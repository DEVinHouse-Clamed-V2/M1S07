// Adicionando o atributo "src" à tag <img>
let imagem = document.getElementById("myImage");

// imagem.setAttribute("src", "img/clamed.jpg");
// imagem.setAttribute("alt", "Foto do kelvis");
// imagem.setAttribute("width", 200);
// imagem.setAttribute("height", 200);

// console.log(imagem.getAttributeNames());

let objImagem = {
  src: "img/clamed.jpg",
  alt: "Foto do kelvis",
  width: 200,
  height: 200,
};

for (const key in objImagem) {
  imagem.setAttribute(key, objImagem[key]);
}
