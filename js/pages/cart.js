// const CART_STORAGE_KEY = "mixtecaltCart";

import { addProductToCart, getCart } from "../services/cartApi.js";

const cartItemsContainer = document.getElementById("cart-items");
const emptyCartContainer = document.getElementById("empty-cart");
const productsCount = document.getElementById("products-count");

const subtotalElement = document.getElementById("subtotal");
const ivaElement = document.getElementById("iva");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");

const clearCartButton = document.getElementById("clear-cart-btn");
const checkoutButton = document.getElementById("checkout-btn");

// function getCart() {
//   return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
// }

// function saveCart(cart) {
//   localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
// }

getCart();
const saveCart = addProductToCart(product);


function formatCurrency(amount) {
  return Number(amount).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN"
  });
}

function renderCart() {
  const cart = getCart();

  cartItemsContainer.innerHTML = "";

  const totalProducts = cart.reduce((total, product) => {
    return total + product.cantidad;
  }, 0);

  productsCount.textContent = `${totalProducts} producto${totalProducts !== 1 ? "s" : ""}`;

  if (cart.length === 0) {
    emptyCartContainer.classList.remove("d-none");
    updateSummary();
    return;
  }

  emptyCartContainer.classList.add("d-none");

  cart.forEach(product => {
    const item = document.createElement("article");
    item.classList.add("cart-list-item");

    item.innerHTML = `
      <div class="cart-img-box">
        ${
          product.imagen
            ? `<img src="${product.imagen}" alt="${product.nombre_platillo}" class="cart-img">`
            : `<span class="cart-placeholder">🍽️</span>`
        }
      </div>

      <div class="cart-info-box">
        <h3>${product.nombre_platillo}</h3>
        <p>${product.descripcion}</p>
        <span>${formatCurrency(product.precio)}</span>
      </div>

      <div class="cart-quantity-box">
        <button class="decrease-btn" data-id="${product.id_platillo}">−</button>
        <strong>${product.cantidad}</strong>
        <button class="increase-btn" data-id="${product.id_platillo}">+</button>
      </div>

      <div class="cart-subtotal-box">
        ${formatCurrency(product.precio * product.cantidad)}
      </div>

      <button class="cart-delete-btn" data-id="${product.id_platillo}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    cartItemsContainer.appendChild(item);
  });

  updateSummary();
}

function updateSummary() {
  const cart = getCart();

  const subtotal = cart.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);

  const iva = subtotal * 0.16;
  const shipping = subtotal > 0 ? 35 : 0;
  const total = subtotal + iva + shipping;

  subtotalElement.textContent = formatCurrency(subtotal);
  ivaElement.textContent = formatCurrency(iva);
  shippingElement.textContent = formatCurrency(shipping);
  totalElement.textContent = formatCurrency(total);
}

function increaseQuantity(productId) {
  const cart = getCart();

  const updatedCart = cart.map(product => {
    if (String(product.id_platillo) === String(productId)) {
      return {
        ...product,
        quantity: product.cantidad + 1
      };
    }

    return product;
  });

  saveCart(updatedCart);
  renderCart();
}

function decreaseQuantity(productId) {
  const cart = getCart();

  const updatedCart = cart.map(product => {
    if (String(product.id_platillo) === String(productId) && product.cantidad > 1) {
      return {
        ...product,
        quantity: product.cantidad - 1
      };
    }

    return product;
  });

  saveCart(updatedCart);
  renderCart();
}

function removeProduct(productId) {
  const cart = getCart();

  const updatedCart = cart.filter(product => {
    return String(product.id_platillo) !== String(productId);
  });

  saveCart(updatedCart);
  renderCart();
}

function clearCart() {
  saveCart([]);
  renderCart();
}

function checkout() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  alert("Gracias por tu compra. Tu pedido ha sido registrado.");
}

cartItemsContainer.addEventListener("click", event => {
  const button = event.target.closest("button");

  if (!button) return;

  const productId = button.dataset.id;

  if (button.classList.contains("increase-btn")) {
    increaseQuantity(productId);
  }

  if (button.classList.contains("decrease-btn")) {
    decreaseQuantity(productId);
  }

  if (button.classList.contains("cart-delete-btn")) {
    removeProduct(productId);
  }
});

clearCartButton.addEventListener("click", clearCart);
checkoutButton.addEventListener("click", checkout);

renderCart();