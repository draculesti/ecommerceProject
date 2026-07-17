import { menuCard } from "../components/menuCard.js";
import { addProductToCart } from "../services/cartApi.js";
import { loadMenu } from "../services/menuService.js";

const menuContainer = document.querySelector("#menuContainer");
const filtersContainer = document.querySelector("#menuFilters");


let menuData = [];

document.addEventListener("DOMContentLoaded", async () => {
    menuData = await loadMenu();
    console.log(menuData);
    menuFilter("Comidas");
});
console.log(menuData);
const renderMenu = (list = menuData) => {
  const html = list.map((item) => menuCard(item)).join("");
  menuContainer.innerHTML = html;
};

const menuFilter = (category) => {
  const filteredMenu = menuData.filter((item) => item.categoria === category);
  renderMenu(filteredMenu);
};

filtersContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".filtro-btn");
  if (!button) return;
  menuFilter(button.dataset.category);
});



menuContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-ordenar");
  if (!button) return;
  const card = button.closest(".menu-card");
  const id = card.dataset.id;
  const product = menuData.find(  (item) => String(item.idPlatillo) === id);
  if (!product) return;

  addProductToCart(product);
  alert(`${product.nombre} agragado al carrito!`);
});