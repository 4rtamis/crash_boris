//verify all the items and fill the inventory
var parts = new Map();
parts.set("coque_principale", ["CO", "Coque Principale"]);
parts.set("réacteur", ["RE", "Réacteur"]);
parts.set("gravitateur", ["GR", "Gravitateur"]);
parts.set("hublot", ["HU", "Hublot"]);
parts.set("atterrisseur", ["AT", "Atterrisseur"]);
parts.set("batte_interstellaire", ["BA", "Batte Interstellaire"]);

check = true;
for (var [key, value] of parts) {
  if (!localStorage.getItem(key)) {
    check = false;
    const div = document.getElementById(key);
    div.classList.add("unknown-item");
    const h3 = document.getElementById(key + "_title");
    h3.textContent = "?";
    const p = document.getElementById(key + "_p");
    p.textContent = "";
  } else {
    document.getElementById(key).classList.add("found-item");
    const h3 = document.getElementById(key + "_title");
    h3.textContent = value[0];
    const p = document.getElementById(key + "_p");
    p.textContent = value[1];
  }
}
if (check) {
  const inventory_container = document.getElementsByClassName(
    "inventory-container"
  )[0];
  inventory_container.innerHTML = `<button onclick="window.location='./proof_of_victory-iucIp5A9Gh.html'">Obtenir ma récompense</button>`;
  const inventory_header =
    document.getElementsByClassName("inventory-header")[0];
  inventory_header.textContent = "Vous avez tout trouvé !";
}
