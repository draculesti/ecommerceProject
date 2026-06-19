import { menuItems } from "../../data/menuData.js";



const menuContainer = document.getElementById("menuContainer");

window.onload = () => {
  filtrarMenu("Comidas");
};

function renderMenu(lista = menuItems) {

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

function filtrarMenu(categoria) {

  const filtrados = menuItems.filter(
    item => item.categoria === categoria
  );

  renderMenu(filtrados);

}


window.filtrarMenu = filtrarMenu;