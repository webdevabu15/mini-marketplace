let APIurl = `https://fakestoreapi.com/products`
const productList = document.querySelector('.product-list')

function fetchUrl() {
  fetch(APIurl).then(response => response.json()).then(data => render(data))
}

function render(data) {
  console.log(data);
  data.map(el => {
    let product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `
    <img src=${el.image} alt="rasmi">
    <h3>${el.title}</h3>
    <p>${el.price}$</p>
    <button>add to cart</button>
  `
    productList.appendChild(product)
  })
}

fetchUrl()