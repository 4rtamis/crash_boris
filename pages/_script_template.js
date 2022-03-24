//Verify if this item already exist
if (!localStorage.getItem("moteur")){
    localStorage.setItem("moteur",true);
}
document.getElementById("moteur").classList.add("active");