//verify all the items and fill the inventory
var parts = new Map();
parts.set("moteur",["MO","Moteur"]);
parts.set("réacteur",["RE","Réacteur"]);

check = true
for (var [key, value] of parts) {
    if (!localStorage.getItem(key)){
        check = false;
        const div = document.getElementById(key);
        div.classList.add("unknown-item");
        const h3 = document.getElementById(key+"_title");
        h3.textContent = "?";
        const p = document.getElementById(key+"_p");
        p.textContent = "";
    } else {
        document.getElementById(key).classList.add("found-item");
        const h3 = document.getElementById(key+"_title");
        h3.textContent = value[0];
        const p = document.getElementById(key+"_p");
        p.textContent = value[1];
    }
};
if (check){
    window.location = 'https://crashboris.h.minet.net/win.html';
}
