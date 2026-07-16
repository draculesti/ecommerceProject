import { loadMenu, addMenuItem, editMenuItem, removeMenuItem} from "../services/menuService.js";

let menuData = [];
let cargadaImagenBase64 = "";
let editImagenBase64 = "";
let editModal;

document.addEventListener("DOMContentLoaded", () => {
  inicializarAdministrador();
});

async function inicializarAdministrador() {
  menuData = await loadMenu();
  renderTable();

  const imageIpt = document.getElementById("imageIpt");

  if (imageIpt) {
    imageIpt.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        cargadaImagenBase64 = event.target.result;
      };

      reader.readAsDataURL(file);
    });
  }


  const editImageIpt = document.getElementById("editImageIpt");

  if (editImageIpt) {
    editImageIpt.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        editImagenBase64 = event.target.result;
        document.getElementById("editImagePreview").innerHTML =
          `<img src="${editImagenBase64}" alt="Preview">`;
      };

      reader.readAsDataURL(file);
    });
  }

  document.getElementById("btnAddFood")
    ?.addEventListener("click", addPlatillo);

  document.getElementById("btnSaveEdit")
    ?.addEventListener("click", saveEdit);

  document.getElementById("btnDeleteFood")
    ?.addEventListener("click", deletePlatillo);
}

function renderTable() {

  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return;
  tableBody.innerHTML = "";
  menuData.forEach((item) => {
    const tr = document.createElement("tr");
    const imgTag = item.img
      ? `<img src="${item.img}" alt="${item.name}" width="80">`
      : `<span>No image</span>`;

    tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${imgTag}</td>
            <td>
                <button
                    class="btn-custom btn-editar"
                    data-id="${item.id}">
                    Editar
                </button>
            </td>
        `;

    tr.querySelector(".btn-editar")
      .addEventListener("click", () => openEditModal(item.id));
    tableBody.appendChild(tr);
  });
}

async function addPlatillo() {

  const platoInput = document.getElementById("foodIpt").value.trim();
  const precioInput = document.getElementById("priceIpt").value.trim();
  const catInput = document.getElementById("categoryIpt").value.trim();

  if (!platoInput || !precioInput || !catInput) {
    alert("Complete all required fields.");
    return;
  }

  const nuevoPlatillo = {
    name: platoInput,
    category: catInput,
    price: precioInput,
    img: cargadaImagenBase64,
    description: ""
  };

  try {
    await addMenuItem(nuevoPlatillo);
    menuData = await loadMenu();
    renderTable();

    document.getElementById("foodIpt").value = "";
    document.getElementById("priceIpt").value = "";
    document.getElementById("categoryIpt").value = "";
    document.getElementById("imageIpt").value = "";

    cargadaImagenBase64 = "";
    alert("Product created.");

  } catch (error) {
    console.error(error);
    alert("Error creating product.");
  }
}

export function openEditModal(id) {

  const product = menuData.find(item => item.id === id);

  if (!product) return;

  if (!editModal) {

    editModal = new bootstrap.Modal(
      document.getElementById("editModal")
    );
  }

  document.getElementById("editId").value = product.id;
  document.getElementById("editFoodIpt").value = product.name;
  document.getElementById("editPriceIpt").value = product.price;
  document.getElementById("editCategoryIpt").value = product.category;

  editImagenBase64 = product.img;

  const preview = document.getElementById("editImagePreview");

  preview.innerHTML = product.img
    ? `<img src="${product.img}" alt="Preview">`
    : "<span>No image</span>";

  editModal.show();
}

async function saveEdit() {
  const id = Number(document.getElementById("editId").value);
  const updatedProduct = {
    name: document.getElementById("editFoodIpt").value.trim(),
    price: document.getElementById("editPriceIpt").value.trim(),
    category: document.getElementById("editCategoryIpt").value.trim(),
    img: editImagenBase64,
    description: ""
  };

  try {

    await editMenuItem(id, updatedProduct);
    menuData = await loadMenu();
    renderTable();
    editModal.hide();
    alert("Product updated.");

  } catch (error) {
    console.error(error);
    alert("Error updating product.");
  }
}

async function deletePlatillo() {

  const id = Number(document.getElementById("editId").value);
  if (!confirm("Delete this product?")) {
    return;
  }
  try {

    await removeMenuItem(id);
    menuData = await loadMenu();
    renderTable();
    editModal.hide();
    alert("Product deleted.");

  } catch (error) {
    console.error(error);
    alert("Error deleting product.");
  }
}