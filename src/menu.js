const menuTab = () => {
    let div = document.createElement('div');
    div.id = 'menu-items';

    let menuOne = document.createElement('div');
    menuOne.style.textAlign = 'center';
    let itemOne = document.createElement('img');
    let itemOneText = document.createElement('p');
    itemOne.setAttribute('src', './menu1.jpg');    
    itemOne.classList.add('menu-item-position');
    itemOneText.textContent = "Stevie's Original Fries";

    menuOne.appendChild(itemOne);
    menuOne.appendChild(itemOneText);

    let menuTwo = document.createElement('div');
    menuTwo.style.textAlign = 'center';
    let itemTwo = document.createElement('img');
    let itemTwoText = document.createElement('p');
    itemTwo.setAttribute('src', './menu2.jpg');
    itemTwo.classList.add('menu-item-position');
    itemTwoText.textContent = "Original Fries with Ketchup";

    menuTwo.appendChild(itemTwo);
    menuTwo.appendChild(itemTwoText);

    let menuThree = document.createElement('div');
    menuThree.style.textAlign = 'center';
    let itemThree = document.createElement('img');
    let itemThreeText = document.createElement('p');
    itemThree.setAttribute('src', './menu3.jpg');
    itemThree.classList.add('menu-item-position');
    itemThreeText.textContent = "Original Fries with Gravy";

    menuThree.appendChild(itemThree);
    menuThree.appendChild(itemThreeText);
    
    div.appendChild(menuOne);
    div.appendChild(menuTwo);
    div.appendChild(menuThree);

    return div;
}

export default menuTab;