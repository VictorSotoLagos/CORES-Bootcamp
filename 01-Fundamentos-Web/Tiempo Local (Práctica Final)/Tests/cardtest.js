/*let botonDesaparecer = document.querySelector("#santiago");
let cajaSantiago = document.querySelector(".santiago");

botonDesaparecer.addEventListener("click", function(){
        if (cajaSantiago.style.display != "none") {
            cajaSantiago.style.display = "none"
    } else {
        cajaSantiago.style.display = "block";
    }
    ;
}
)

window.addEventListener("load", function(){
    alert("¡Esta página ha cargado");
});
*/

/*

const links = document.querySelectorAll("#ciudad");
const fichaciudad = document.querySelectorAll(".fichaciudad");

fichaciudad.forEach(fichaciudad => fichaciudad.style.display = "none");

links.forEach(function(checkClick, index) {

    checkClick.addEventListener("click", function() {
        if (fichaciudad[index].style.display == "block") {
            fichaciudad[index].style.display = "none";
        } else {
        // Primero oculta todas las fichas
        fichaciudad.forEach(fichaciudad => fichaciudad.style.display = "none");// Antes de cualquier selección, se ocultan todas las fichas        
        fichaciudad[index].style.display = "block";     
        }
    });

});

/* QUERY SELECTOR ALL */

// const links = document.querySelectorAll("#ciudad");
// const fichaciudad = document.querySelectorAll(".fichaciudad");


/*FORMA FÁCIL - REPEAT FOR EACH LINK -> CARD*/
/*
let buenosAires = document.querySelector("#buenos-aires");
let fichaBaires = document.querySelector("#fichaciudad-baires");

buenosAires.addEventListener("click", function() {


    if (fichaBaires.style.display == "block") {
        fichaBaires.style.display = "none";
    } else {
        fichaBaires.style.display = "block";
        buenosAires.style.display = "none";
    }
}
);
*/




/*
const ciudades = document.querySelectorAll("#ciudad");
const fichas = document.querySelectorAll("#fichaciudad");


for (ciudad of ciudades) {
ciudad.addEventListener("click", function() {
    //console.log(this.dataset.id2); 
    let linkCiudad = this.dataset.id2;
    //    console.log(linkFicha); 
    for (ficha of fichas) {
        let linkFicha = this.dataset.id2;
        if (linkCiudad == linkFicha) {
            if (ficha.style.display == "block") {
                ficha.style.display = "none"
            } else {
                ficha.style.display = "block";

                }
            }
    }
}
);
}


*/




/*window.addEventListener("load", function(){
    alert("¡Esta página ha cargado");
});
*/


    /*checkClick.addEventListener("click", function() {
        // Encuentra la ficha correspondiente usando el índice
     
            // Alterna la visibilidad de la ficha
            if (fichaciudad[index].style.display !== "none") {
                fichaciudad[index].style.display = "none";
            } else {                
                fichaciudad[index].style.display = "block";
                fichaciudad.forEach(ficha => ficha.style.display = "none");
            }
        
    });*/

