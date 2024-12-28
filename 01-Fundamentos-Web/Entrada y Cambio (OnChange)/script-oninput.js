var nameTag = document.querySelector("#name-tag");
var nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("input", function() {
    cambiarNombre(this.value);
});

function cambiarNombre(nombre) {
    nameTag.innerText = nombre;
}