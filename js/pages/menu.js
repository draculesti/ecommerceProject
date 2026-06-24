
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