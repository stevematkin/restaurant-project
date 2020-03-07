import homeTab from './home';
import contactUs from './contactus';

const main = (function () {
    let content = document.querySelector('#content');
    let display = document.createElement('div');
    //display.appendChild(contactUs());
    

    let tabs = document.createElement('ul');
    let home = document.createElement('button');
    home.textContent = "Home";
    
    let menu = document.createElement('button');
    menu.textContent = "Menu";
    let contact = document.createElement('button');
    contact.textContent = "Contact Us";
    let companyName = document.createElement('li');
    companyName.textContent = "Stevie's Fries Inc.";
    companyName.id = 'company-name';

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    tabs.appendChild(companyName);
    content.appendChild(tabs);
    content.appendChild(display);
    
    const currentPage = (page) => {
        return display.appendChild(page);
    }
    //change pages
    home.addEventListener('click', currentPage(homeTab()));
    contact.addEventListener('click', currentPage(contactUs()));
})();