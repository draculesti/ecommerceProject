
export const renderFooter = () => {
  const footer = `
  <div class="container">
     <div class="row align-items-center">
       <div class="col-12 col-md-5  mt-5 mb-5 text-center">
         <img id="imgFooter" src="../assets/logo.png" alt="LogoMixtecatl">
         <p class="fw-bold mt-3 fs-5">Rapidito llegamos a tu mesa!</p>
         <p class="fw-bold mt-3">Para brindarte el servicio que mereces, y <br>
           una experiencia de sabor.</p>
       </div>
       <div class="col-12 col-md-2 mt-5 mb-5 text-center text-md-start mx-auto">
         <p class="fw-bold mt-5 fs-5">Accesos Rápidos</p>
         <ul class="list-unstyled mt-3 text-center text-md-start">
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Menu</a></li>
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Ordenar</a></li>
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Contactanos</a>
           </li>
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Iniciar
               Sesion</a></li>
         </ul>

         <p class="fw-bold mt-5 fs-5">Información</p>

         <ul class="list-unstyled mt-3 mb-5 text-center text-md-start">
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Nuestra
               historia</a></li>
           <li><a id="linkFooter" href="" class="fw-bold text-white text-decoration-none">Novedades</a>
           </li>
         </ul>

       </div>
       <div class="col-12 col-md-5 mt-5">

         <P class="fw-bold fs-1 text-center"> Siguenos</P>
         <div class="d-flex justify-content-center gap-2">
           <a id="redesFooter" href="https://www.facebook.com/"
             class="text-dark bg-white rounded-circle d-flex align-items-center justify-content-center" target="_blank">
             <i class="bi bi-facebook fs-3"></i></a><!--Link Facebook-->
           <a id="redesFooter" href="https://www.facebook.com/"
             class="text-dark bg-white rounded-circle d-flex align-items-center justify-content-center" target="_blank">
             <i class="bi bi-instagram fs-3"></i></a><!--Link Instagram-->
           <a id="redesFooter" href="https://www.facebook.com/"
             class="text-dark bg-white rounded-circle d-flex align-items-center justify-content-center" target="_blank">
             <i class="bi bi-whatsapp fs-3"></i></a><!--Link Whatsapp-->
         </div>
         
         <div class="row mt-5">
           <div class="col text-center text-md-end">
             <p class="fw-bold mb-0">
               © 2026 Mixtecatl - All rights reserved.
             </p>
           </div>
         </div>

       </div>
     </div>
    </div>
  </div>
  `;
  document.getElementById('footer').innerHTML = footer;
}






