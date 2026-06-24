
export const renderNavbar = ()=>{
  
  const navbar = `
   <nav class="navbar navbar-expand-lg navbarCustom">
     <div class="container-fluid">
       <a class="navbar-brand fw-bold" href="../pages/index.html">
         <div class="logo">
           <img src="../assets/logo.png" alt="Mixtecatl_Logo">
         </div>
       </a>
       <button
         class="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#menu"
         aria-controls="menu"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span class="navbar-toggler-icon"></span>
 
       </button>
       <div class="collapse navbar-collapse" id="menu">
         <div class="nav-buttons ms-auto">
           <a href="../index.html" class="btn custom-btn">Inicio</a>
           <a href="../pages/menu.html" class="btn custom-btn">Menu</a>
           <a href="../pages/aboutUs.html" class="btn custom-btn">Sobre nostroso</a>
           <a href="../pages/contact.html" class="btn custom-btn">Contacto</a>
           <a href="../pages/reservation.html" class="btn custom-btn">Resevar</a>
           <a href="../pages/login.html" class="btn custom-btn">Login</a>
           <a href="../pages/cart.html" class="btn custom-btn"> <i class="fa-solid fa-cart-shopping"></i>
           </a>
         </div>
       </div>
     </div>
   </nav>
 `;
  document.getElementById("navbar-container").innerHTML = navbar;
}


