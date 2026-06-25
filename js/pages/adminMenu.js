import { menuItems } from "../../data/menuData.js";

document.addEventListener("DOMContentLoaded", () => {
  // Pasamos los menuItems que ya contienen sus IDs fijos
  inicializarAdministrador(menuItems);
});


let menuData = [];
let cargadaImagenBase64 = "";
let editImagenBase64 = "";
let editModal;

// Inicializa el administrador. 
function inicializarAdministrador() {

  menuData = JSON.parse(localStorage.getItem("menu"));

  if (!menuData) {
    menuData = [...menuItems];
    localStorage.setItem("menu", JSON.stringify(menuData));
  }

  renderTable();


  // Configurar la captura de imagen del formulario principal
  const imageIpt = document.getElementById("imageIpt");
  if (imageIpt) {
    imageIpt.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          cargadaImagenBase64 = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Configurar la captura de imagen del modal de edición
  const editImageIpt = document.getElementById("editImageIpt");
  if (editImageIpt) {
    editImageIpt.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          editImagenBase64 = event.target.result;
          document.getElementById("editImagePreview").innerHTML = `<img src="${editImagenBase64}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Asignar los eventos de click a los botones
  document.getElementById("btnAddFood")?.addEventListener("click", addPlatillo);
  document.getElementById("btnSaveEdit")?.addEventListener("click", saveEdit);
  document.getElementById("btnDeleteFood")?.addEventListener("click", deletePlatillo);
}

// Guarda el estado actual en el localStorage 
function guardarEnLocalStorage() {
  localStorage.setItem("menu", JSON.stringify(menuData));
}

// Renderiza la tabla en base a las propiedades 
function renderTable() {
  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  menuData.forEach((item) => {
    const tr = document.createElement("tr");

    const imgTag = item.img
      ? `<img src="${item.img}" alt="${item.name}">`
      : `<span class="no-image-placeholder">No disp.</span>`;

    tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td><div class="table-image-container">${imgTag}</div></td>
            <td><button class="btn-custom btn-editar" data-id="${item.id}">Editar</button></td>
        `;

    const btnEditar = tr.querySelector('.btn-editar');
    btnEditar.addEventListener('click', () => openEditModal(item.id));

    tableBody.appendChild(tr);
  });
}

// Añade un platillo
export function addPlatillo() {
  const platoInput = document.getElementById("foodIpt").value.trim();
  const precioInput = document.getElementById("priceIpt").value.trim();
  const catInput = document.getElementById("categoryIpt").value.trim();

  if (!platoInput || !precioInput || !catInput) {
    alert("Por favor llena los campos obligatorios (Nombre, Precio y Categoría).");
    return;
  }

  let precioFormateado = precioInput.startsWith("$") ? precioInput : `$${precioInput}`;

  const nuevoId = menuData.length > 0 ? Math.max(...menuData.map(item => item.id)) + 1 : 1;

  const nuevoPlatillo = {
    id: nuevoId,
    name: platoInput,
    category: catInput,
    price: precioFormateado,
    img: cargadaImagenBase64,
    description: ""
  };

  menuData.push(nuevoPlatillo);

  guardarEnLocalStorage();
  renderTable();


  document.getElementById("foodIpt").value = "";
  document.getElementById("priceIpt").value = "";
  document.getElementById("categoryIpt").value = "";
  document.getElementById("imageIpt").value = "";
  cargadaImagenBase64 = "";
}

// Carga los datos en el modal 
export function openEditModal(id) {
  const platillo = menuData.find(item => item.id === id);
  if (!platillo) return;

  if (!editModal) {
    const modalElement = document.getElementById('editModal');
    editModal = new bootstrap.Modal(modalElement);
  }

  document.getElementById("editId").value = platillo.id;
  document.getElementById("editFoodIpt").value = platillo.name;
  document.getElementById("editPriceIpt").value = platillo.price;
  document.getElementById("editCategoryIpt").value = platillo.category;

  document.getElementById("editImageIpt").value = "";
  editImagenBase64 = platillo.img;

  const previewContainer = document.getElementById("editImagePreview");
  if (platillo.img) {
    previewContainer.innerHTML = `<img src="${platillo.img}" alt="Preview">`;
  } else {
    previewContainer.innerHTML = `<span class="no-image-placeholder">Sin cambio</span>`;
  }

  editModal.show();
}

// Guarda los cambios modificando directamente el LocalStorage de la línea "menu"
export function saveEdit() {
  const id = parseInt(document.getElementById("editId").value);
  const platillo = menuData.find(item => item.id === id);

  if (platillo) {
    platillo.name = document.getElementById("editFoodIpt").value.trim();
    let precioInput = document.getElementById("editPriceIpt").value.trim();
    platillo.price = precioInput.startsWith("$") ? precioInput : `$${precioInput}`;
    platillo.category = document.getElementById("editCategoryIpt").value.trim();
    platillo.img = editImagenBase64;

    guardarEnLocalStorage();
    renderTable();
    editModal.hide();
  }
}

// Elimina el platillo
export function deletePlatillo() {
  const id = parseInt(document.getElementById("editId").value);

  const restaurarConfirmacion = confirm("¿Estás seguro de que deseas eliminar este platillo del menú?");
  if (!restaurarConfirmacion) return;

  menuData = menuData.filter(item => item.id !== id);

  // Reorganiza los IDs 
  menuData = menuData.map((platillo, index) => {
    platillo.id = index + 1;
    return platillo;
  });

  guardarEnLocalStorage();
  renderTable();
  editModal.hide();
}