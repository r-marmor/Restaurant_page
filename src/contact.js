export default function loadContact() {
    
    const main = document.querySelector('main');
    const contactPage = document.createElement('p');
    contactPage.textContent = "MDR je fais la même chose depuis contact.js"

    main.textContent = "";
    main.appendChild(contactPage);
}