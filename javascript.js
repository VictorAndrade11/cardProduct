const duplicateBtn = document.getElementById("duplicate-btn");
const productContainer = document.getElementById("product-container");

duplicateBtn.addEventListener("click", () => {
  // cria um novo elemento com o mesmo conteúdo do original
  const newProductContainer = productContainer.cloneNode(true);
  
  // adiciona a classe "cloned-card" ao novo elemento
  newProductContainer.classList.add("cloned-card");

  // adiciona o novo elemento abaixo do original
  productContainer.after(newProductContainer);
});
