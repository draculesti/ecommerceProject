const menuItems = [
{
name: "Pambazos",
price: "$55.00",
categoria: "Comidas",
img: "https://s.yimg.com/ny/api/res/1.2/hm05HQSQyAyzCcCGips86w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/es/animal_gourmet_468/c7c6dc94c305f1ad9c13f206f6a4da6e",
description: "Bolillo bañado en salsa roja relleno de papa con chorizo."
},
{
name: "Pancita",
price: "$150.00",
categoria: "Comidas",
img: "https://www.cocinavital.mx/wp-content/uploads/2024/03/pancita-de-res-634x420.jpg",
description: "Panza de res en chile huajillo acompañado de oregano y limon."
},
{
name: "Quesadillas",
price: "$50.00",
categoria: "Comidas",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwYHmg4ruV0Cc0CB7SC4HDwjhkkqDGSadHw&s",
description: "Tortillas rellenas de queso y diferentes guisados."
},
{
name: "Sopes",
price: "$80.00 orden",
categoria: "Comidas",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kY0V3myW1OPtR1htLG3Y3KEq2Sfl1WrtYA&s",
description: "Base de maíz con frijoles, carne, crema y queso."
},
{
name:"Pozole",
price:"$150.00",
categoria: "Comidas",
img: "https://i.ytimg.com/vi/13EIQSqRDNs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVbArRWB4J8sv0GtqkqH2UTymLsg",
description: "Caldo tradicional con maíz cacahuazintle y carne."
},
{
name: "Gorditas",
price:"$60.00",
categoria: "Comidas",
img: "https://www.dondeir.com/wp-content/uploads/2017/11/festival-la-gordita-2017-en-hidalgo-barbacoa-01.jpg",
description: "Masa de maíz rellena de guisos tradicionales."
},
{
name: "Tacos",
price: "$90.00 orden",
categoria: "Comidas",
img: "https://i.pinimg.com/736x/74/09/47/740947ccab0c9912d273a0b7d3e2cf3a.jpg",
description: "Tortillas de maíz con diferentes tipos de carne."
},
{
name: "Enchiladas",
price: "$150.00",
categoria: "Comidas",
img: "https://familiakitchen.com/wp-content/uploads/2023/09/iStock-1037098226-red-enchiladas-cheese-onion-v2.jpg",
description: "Tortillas bañadas en salsa o mole rellenas de pollo."
},
{
name: "Mole con pollo",
price: "$100.00",
categoria: "Comidas",
img: "https://cdn7.kiwilimon.com/articuloimagen/32326/450x450/32486.jpg.webp",
description: "Piezas de pollo cocidas, bañadas en una salsa espesa, aromática a base de especias y semillas."
},
{
name: "Agua de piña",
price: "$60.00L",
categoria: "Bebidas",
img: "https://www.muydelish.com/wp-content/uploads/2022/05/pineapple-water-recipe.jpg",
description: "Bebida refrescante preparada con fruta de piña natural."
},
{
name: "Agua de mango",
price: "$60.00L",
categoria: "Bebidas",
img: "https://www.cocinadelirante.com/sites/default/files/styles/gallerie/public/agua-de-mango-receta-michoacana.jpg",
description: "Bebida refrescante preparada con fruta de mango natural."
},
{
name: "Tepache",
price: "$60.00L",
categoria: "Bebidas",
img: "https://i0.wp.com/tradicionescultura.com.mx/wp-content/uploads/2022/07/elTepache1068new.jpg?fit=1068%2C713&ssl=1&w=640",
description: "Bebida tradicional fermentada a base de piña."
},
{
name: "Café",
price: "$45.00",
categoria: "Desayunos",
img: "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
description: "Café recién preparado para acompañar el desayuno."
},
{
name: "Atole de maiz",
price: "$45.00",
categoria: "Desayunos",
img: "https://mmmole.com/wp-content/uploads/2017/11/atole-almendrado-4-500x500.jpg",
description: "Bebida caliente hecha a base de maiz endulzada con piloncillo o azucar."
},
{
name: "Pan de Dulce",
price: "25.00 pza",
categoria: "Desayunos",
img: "https://www.eluniversal.com.mx/resizer/p31EtGbV_iTqoWEtHZTUPIYhUnI=/arc-photo-eluniversal/arc2-prod/public/SCL3UUDQSZESPN42KWECGYBDAY.jpg",
description: "Variedad de panes tradicionales mexicanos."
},
{
name: "Huevos a la Mexicana",
price: "$60.00",
categoria: "Desayunos",
img: "https://i.pinimg.com/736x/60/6f/11/606f114d282a496486616b0ec40533e6.jpg",
description: "Combinacion de huevos revueltos con tomate, cebolla y chile con frijoles."
},
{
name: "Guajolotas",
price: "$60.00",
categoria: "Desayunos",
img: "https://editorialtelevisa.brightspotcdn.com/dims4/default/b953a6b/2147483647/strip/true/crop/900x507+0+47/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F07%2Ftamales.jpg",
description: "Tamal de maiz de sabor al gusto puede ir acompañado de bolillo."
},
{
name: "Chilaquiles",
price: "$80.00",
categoria: "Desayunos",
img: "https://eldiariony.com/wp-content/uploads/sites/2/2024/01/DALL%C2%B7E-2024-01-16-19.56.17-A-photo-realistic-close-up-image-of-a-dish-of-chilaquiles-on-a-table-with-a-traditional-Mexican-style.-The-scene-is-in-a-horizontal-format-with-a-high.png?w=1200",
description: "Totopos bañados en salsa verde o roja acompañados con crema y queso."
},
{
name: "Dulce de Camote",
price: "$60.00",
categoria: "Postres",
img: "https://comidasmexicanas.net/wp-content/uploads/2023/11/Receta-de-Dulce-de-Camote.jpg",
description: "Postre típico elaborado con camote dulce."
},
{
name: "Arroz con leche",
price: "$50.00",
categoria: "Postres",
img: "https://gastronomadas.com.mx/wp-content/uploads/2019/11/delicioso-arroz-con-leche-y-canela.jpg",
description: "Arroz a coccion lenta en leche con azucar y canela."
},
{
name: "Dulce de Calabaza",
price: "$60.00",
categoria: "Postres",
img: "https://i.ytimg.com/vi/h60BZoHLysE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvKz_9P3MUJA0Fabo6LvEwmRuJhw",
description: "Calabaza cocida en piloncillo y canela."
}
];
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
<div><h5 class="card-title">${item.name}</h5>

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