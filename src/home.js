export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const cookImg = document.createElement('img');
    cookImg.classList.add('cookImg');
    cookImg.src = "images/cook2.jpg";
    
    home.appendChild(createPara("The best french cuisine in town!"));
    home.appendChild(createPara("Made with love since 1975"));
    home.appendChild(cookImg);
    home.appendChild(createPara("L'essayer c'est l'adopter !"));
    
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(home);
}

function createPara(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}
