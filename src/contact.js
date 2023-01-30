export default function loadContact() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');
    
    const contactTel = document.createElement('p');
    contactTel.textContent = "📞 INSERT RDM NUMBER HERE";
    
    const contactAdress = document.createElement('p');
    contactAdress.textContent = "🏠 INSERT RDM ADRESS HERE";
    
    const contactImg = document.createElement('img');
    contactImg.src = "images/contact.png";

    contactPage.append(contactTel, contactAdress, contactImg);  

    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(contactPage);
}