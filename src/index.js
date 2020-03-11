import homeTab from './home';
import contactUs from './contactus';
import menuTab from './menu';

const main = (function () {
    let content = document.querySelector('#content');
    let display = document.createElement('div');
    display.appendChild(homeTab());
    

    let tabs = document.createElement('ul');
    let home = document.createElement('button');
    home.textContent = "Home";
    home.style.backgroundColor = 'transparent';
    home.style.color = 'black';
    
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
    
    function updatePage (page) {
        if (page == homeTab) {
            display.removeChild(display.firstChild);
            display.appendChild(homeTab());
            home.style.backgroundColor = 'transparent';
            home.style.color = 'black';
            contact.style.backgroundColor = 'black';
            contact.style.color = 'white';
            menu.style.backgroundColor = 'black';
            menu.style.color = 'white';
        }
        else if (page == contactUs) {
            display.removeChild(display.firstChild);
            display.appendChild(contactUs());
            contact.style.backgroundColor = 'transparent';
            contact.style.color = 'black';
            home.style.backgroundColor = 'black';
            home.style.color = 'white';
            menu.style.backgroundColor = 'black';
            menu.style.color = 'white';
        }
        else if (page == menuTab) {
            display.removeChild(display.firstChild);
            display.appendChild(menuTab());
            menu.style.backgroundColor = 'transparent';
            menu.style.color = 'black';
            home.style.backgroundColor = 'black';
            home.style.color = 'white';
            contact.style.backgroundColor = 'black';
            contact.style.color = 'white';

        }
        
    }

    
    home.addEventListener('click', function() {updatePage(homeTab)});
    contact.addEventListener('click', function () {updatePage(contactUs)});
    menu.addEventListener('click', function() {updatePage(menuTab)});
})();