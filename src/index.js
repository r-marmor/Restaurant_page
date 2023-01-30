import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Chez la mama";
    
    const navBar = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('homeBtn', 'navBtn');

    homeBtn.addEventListener('click',  (e) => {
        if (e.target.classList.contains('active')) return; 
        setActiveButton(homeBtn);
        loadHome();
    });
    

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('menuBtn', 'navBtn');
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn', 'navBtn');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        loadContact();
    });
    
    navBar.append(homeBtn, menuBtn, contactBtn);
    header.append(restaurantName, navBar);
    

    return header;

}

function createMain() {
    const main = document.createElement('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    
    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © moi  ${new Date().getFullYear()} Rafikidu37`;

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/r-marmor/Restaurant_page";

    const githubIcon = document.createElement("img");
    githubIcon.src = "images/github_logo2.png";

    githubLink.appendChild(githubIcon);


    footer.append(copyright, githubLink);

    return footer;
}


// Utility functions 
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.navBtn');

    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

(function initializeHomepage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    
    setActiveButton(document.querySelector('.homeBtn'));
    loadHome();
    
    
})();