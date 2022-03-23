//ToDo : replace pièce-1 par le nom de la pièce

//Verify if this item already exist
if (!localStorage.getItem("moteur")){
    localStorage.setItem("moteur",true);
}

document.getElementById("moteur").classList.add("active");

//verify all the items and fill the inventory
const parts = ["moteur","réacteur","other"];
var maching_content = new Map();
maching_content.set("moteur",["MO","Moteur"]);
maching_content.set("réacteur",["RE","Réacteur"]);

check = true
parts.forEach(element => {
    if (!localStorage.getItem(element)){
        check = false;
        const div = document.getElementById(element);
        div.classList.add("unknown-item");
        const h3 = document.getElementById(element+"_title");
        h3.textContent = "?";
        const p = document.getElementById(element+"_p");
        p.textContent = "";
    } else {
        document.getElementById(element).classList.add("found-item");
        const h3 = document.getElementById(element+"_title");
        h3.textContent = maching_content.get(element)[0];
        const p = document.getElementById(element+"_p");
        p.textContent = maching_content.get(element)[0];
    }
});
if (check){
    window.location = 'https://crashboris.h.minet.net/win.html';
}
