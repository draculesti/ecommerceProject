
const menuContainer = document.getElementById("menuContainer");

window.onload = () => {
  menuFilter("Comidas");
};

let menuData = JSON.parse(localStorage.getItem("menu"));

function renderMenu(lista = menuData) {

  menuContainer.innerHTML = "";

  lista.forEach(item => {

   menuContainer.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-4">
  
    <div class="card shadow h-100 menu-card">
      <img src="${item.img}" alt="${item.name}">
  
      <div class="overlay">
        <div>
          <h5 class="card-title">${item.name}</h5>
  
          <p class="price">${item.price}</p>
          <p class="card-text">${item.description} </p>
        </div>
  
        <div class="card-buttons">
          <button class="btn-ordenar" onclick="alert('Pedido agregado')"> Ordenar </button>
        </div>
      </div>
    </div>
  </div>
`;

  });

}

function menuFilter(category) {
  const categoryFilter = menuData.filter(item => item.category === category);
  renderMenu(categoryFilter);
}


window.menuFilter = menuFilter;


// ===============================
// AGREGAR PRODUCTOS AL CARRITO
// ===============================

const CART_STORAGE_KEY = "mixtecaltCart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function cleanPrice(price) {
  if (typeof price === "number") {
    return price;
  }

  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
}

function addProductToCart(product) {
  const cart = getCart();

  const productToAdd = {
    id: product.id || product.name,
    name: product.name,
    description: product.description,
    price: cleanPrice(product.price),
    img: product.img,
    category: product.category,
    quantity: 1
  };

  const existingProduct = cart.find(item => item.id === productToAdd.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(productToAdd);
  }

  saveCart(cart);
}

menuContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-ordenar");

  if (!button) return;

  const card = button.closest(".menu-card");
  const productName = card.querySelector(".card-title").textContent.trim();

  const selectedProduct = menuData.find(item => item.name === productName);

  if (!selectedProduct) return;

  addProductToCart(selectedProduct);
});