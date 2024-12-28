document.getElementById("comidaSelect").addEventListener("change", function() {
    elegirComida(this.value);
});

function elegirComida(comida) {
    alert("¡Has elegido " + comida + "!");
}