import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Al Ristorante";
    
    const navBar = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('homeBtn', 'navBtn');
    homeBtn.addEventListener('click', loadHome);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('menuBtn', 'navBtn');
    menuBtn.addEventListener('click', loadMenu);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn', 'navBtn');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', loadContact);
    
    navBar.append(homeBtn, menuBtn, contactBtn);
    header.append(restaurantName, navBar);

    return header;
}

function createMain() {

}

function createFooter() {

}

// Utility function : creating a paragraph
function createPara(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

(function initializeHomepage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
})();