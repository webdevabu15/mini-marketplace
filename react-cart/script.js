const APIurl = "https://fakestoreapi.com/products";
const productList = document.querySelector(".product-list");

function fetchProducts() {
  fetch(APIurl)
    .then((r) => r.json())
    .then((data) => renderProducts(data));
}

function renderProducts(data) {
  data.forEach((el) => {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img src="${el.image}" />
      <h3>${el.title}</h3>
      <p>${el.price}$</p>
      <button>Add to cart</button>
    `;

    product.querySelector("button").addEventListener("click", () => {
      if (window.__addToCart) window.__addToCart(el);
    });

    productList.appendChild(product);
  });
}

fetchProducts();
