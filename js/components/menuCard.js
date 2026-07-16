
export const menuCard = (item) =>`
  <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
    <div class="card shadow h-100 menu-card" data-id="${item.id_platillo}">
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="overlay">
        <div>
          <h5 class="card-title">${item.nombre}</h5>
          <p class="price">${item.precio}</p>
          <p class="card-text">
            ${item.descripcion}
          </p>
        </div>
        <div class="card-buttons">
          <button class="btn-ordenar">
            Ordenar
          </button>
        </div>
      </div>
    </div>
      <h2 class="text-center">${item.nombre}</h2>
  </div>
`; 