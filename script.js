const productContainer = document.querySelector(".products");

const fetchApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const showProducts = async () => {
  const products = await fetchApi();

  productContainer.innerHTML = ""; 

  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-cards");

    card.innerHTML = `
      <img src="${item.image}" class="image" />
      <p class="product-name">${item.title}</p>
      <p class="price">₹ ${item.price}</p>
      <button class="btn">Add To Cart</button>
    `;

    productContainer.appendChild(card);
  });
};

showProducts();