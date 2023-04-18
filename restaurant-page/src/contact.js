function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());

  }

function createContact() {
  const element = document.createElement('div');
  element.innerHTML = "This is the contact";

  return element;
}  


export default loadContact;