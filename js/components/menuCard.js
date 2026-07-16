
export const menuCard = (item) =>`
  <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
    <div class="card shadow h-100 menu-card" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}">
      <div class="overlay">
        <div>
          <h5 class="card-title">${item.name}</h5>
          <p class="price">${item.price}</p>
          <p class="card-text">
            ${item.description}
          </p>
        </div>
        <div class="card-buttons">
          <button class="btn-ordenar">
            Ordenar
          </button>
        </div>
      </div>
    </div>
      <h2 class="text-center">${item.name}</h2>
  </div>
`; 