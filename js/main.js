
import { renderFooter } from './components/footer.js';
import { renderNavbar } from './components/navbar.js';
import { menuItems } from '../data/menuData.js';


document.addEventListener('DOMContentLoaded', () => {
  let menuData = JSON.parse(localStorage.getItem("menu"));
  if (!menuData) {
      localStorage.setItem("menu", JSON.stringify(menuItems));
  }
  renderNavbar();
  renderFooter();
  

  
});