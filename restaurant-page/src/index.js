import './index.css';
import loadHome  from './home'
import loadMenu from './menu';
import loadContact from './contact';


function headerComponent() {
    const element = document.createElement('ul');
    element.setAttribute("id","navlist")
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.innerHTML = 'Home'
    menu.innerHTML = 'Menu'
    contact.innerHTML = 'Contact'

    home.setAttribute("id","nav-home")
    menu.setAttribute("id","nav-menu")
    contact.setAttribute("id","nav-contact")

    home.setAttribute("class","navlist-item navlist-item-active")
    menu.setAttribute("class","navlist-item")
    contact.setAttribute("class","navlist-item")

    home.onclick = function () {navMenuOnClick(home,'home')};
    menu.onclick = function () {navMenuOnClick(menu,'menu')};
    contact.onclick = function () {navMenuOnClick(contact,'contact')};
    element.append(home,menu,contact)

    return element;
}


function navMenuOnClick(element,menuName) {
    
    const activeClassName = "navlist-item-active"
    const active = document.querySelector(".navlist-item-active")
    if(active)
        active.classList.remove(activeClassName)
    if(menuName == 'home')
    {
        element.classList.add(activeClassName)
        loadHome();
    }
    else if (menuName == 'menu'){
        element.classList.add(activeClassName)
        loadMenu();
    }
    else if (menuName == 'contact'){
        element.classList.add(activeClassName)
        loadContact();
    }
}

 function component() {
    const element = document.createElement('div');
    const mainElement = document.createElement('div');
    mainElement.setAttribute("id","main")
    element.appendChild(headerComponent())
    element.appendChild(mainElement)
    
    return element;
 }

 document.body.appendChild(component());
 loadHome();