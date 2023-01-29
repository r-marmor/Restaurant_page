export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const cookImg = document.createElement('img');
    cookImg.classList.add('cookImg');
    cookImg.src = "images/cook.jpg";
    
    home.appendChild(createPara("The best french cuisine you'll ever taste!"));
    home.appendChild(createPara("Made with love since 1975"));
    home.appendChild(cookImg);
    home.appendChild(createPara("Once you go french you never go back"));
    
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(home);
}

function createPara(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}
