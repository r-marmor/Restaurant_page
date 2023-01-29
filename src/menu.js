export default function loadMenu() {
    
    const main = document.querySelector('main');
    const menuPage = document.createElement('p');
    menuPage.textContent = "J'efface et j'injecte du texte dans main depuis menu.js";

    main.textContent = "";
    main.appendChild(menuPage);
}