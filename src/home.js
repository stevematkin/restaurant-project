const homeTab = () => {
    let div = document.createElement('div');
    
    
    let h1 = document.createElement('h1');
    h1.id = 'h1-home';
    h1.textContent = "Welcome to Stevie's Fries!";

    let p = document.createElement('p');
    p.textContent = "At Stevie's Fries, we make the best fries on the planet. With fresh grown potatoes, a little salt and a metric tonne of oil, you can be sure these fries will leave you satisfied!";
    p.id = 'p-home';
    div.appendChild(h1);
    div.appendChild(p);
    return div;
}

export default homeTab;