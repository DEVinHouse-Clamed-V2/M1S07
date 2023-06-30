// Seleção por ID, Class, TAG, querySelector

// Selecionar por NAME

// let h1 = document.querySelector("[class='ab']");

let formElement = document.querySelector('[name="formularioCadastro"]');
console.log(formElement.nome);
formElement.nome.value = "Alvaro";

console.log(formElement.nome.value);

// console.log(formElement.sobrenome);
// console.log(formElement.btnCadastrar);

// console.log(inputElement);
// let inputElement = document
//   .querySelector('[name="formularioCadastro"]')
//   .querySelectorAll('[name="nome"]');
// console.log(inputElement);
