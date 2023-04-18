function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());

  }

function createMenu() {
  const element = document.createElement('div');
  element.innerHTML = "This is the menu";

  return element;
}  


export default loadMenu;