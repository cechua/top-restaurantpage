function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());

  }

function createHome() {
  const element = document.createElement('div');
  element.innerHTML = "This is the homepage";

  return element;
}  


export default loadHome;