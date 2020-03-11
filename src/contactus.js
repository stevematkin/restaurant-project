const contactUs = () => {
    let div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginTop = '150px';
    let contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";
    let email = document.createElement('p');
    email.textContent = "email@steviesfries.com";

    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = "(012)-345-6789";
    let address = document.createElement('p');
    address.textContent = "111 Fries Blvd SE, Fry County, Canada";

    div.appendChild(contactHeader);
    div.appendChild(email);
    div.appendChild(phoneNumber);
    div.appendChild(address);

    return div;
}

export default contactUs;