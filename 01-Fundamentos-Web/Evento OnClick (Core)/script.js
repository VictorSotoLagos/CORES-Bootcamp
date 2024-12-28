// Obtenemos el botón por su id
var cambioSesion = document.getElementById("init-session");

// Agregamos un evento 'click' al botón
cambioSesion.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    if (this.innerText!="Cerrar Sesión") {
        this.innerText = "Cerrar Sesión";
    } else {
        this.innerText = "Iniciar Sesión";
    }
    
});


// Obtenemos el botón por su id
var botonDefinicion = document.getElementById("agregardefinicion");

// Agregamos un evento 'click' al botón
botonDefinicion.addEventListener("click", function() {
    // Eliminamos botón
    this.remove();
});

// MODALS (código adaptado de W3 Schools)

//Modals para ambos likes: Gato Atigrado y Golden Retriever
// Get the modal
var modal = document.getElementById("Modal-1");
var modal2 = document.getElementById("Modal-2");
// Get the button that opens the modal
var btn = document.getElementById("like-gatoatigrado");
var btn2 = document.getElementById("like-goldenretriever");

// Agarra el primer y segundo elemento <span> que cierra el modal 
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1]; 

// Se abre el modal una vez que el usuario hace click en el botón like correspondiente
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
  }

// Cuando el usuario hace click en OK, se cierra el modal.
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
  }
  

// Cuando el usuario hace click afuera del modal, también se cierra.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

//Funciones para aumentar secuencialmente el n°de likes, según cada like

var botonCambiar = document.getElementById("like-gatoatigrado");
var likesGatoAtigrado = 22; //N de likes actuales

// Agregamos un evento 'click' al botón
botonCambiar.addEventListener("click", function() {
    // Cambiamos los likes utilizando this y innerText
    likesGatoAtigrado += 1; 
    this.innerText = likesGatoAtigrado + " me gusta";
});


var botonCambiar2 = document.getElementById("like-goldenretriever");
var likesGoldenRetriever = 45; //N de likes actuales

// Agregamos un evento 'click' al botón
botonCambiar2.addEventListener("click", function() {
    // Cambiamos los likes utilizando this y innerText
    likesGoldenRetriever += 1; 
    this.innerText = likesGoldenRetriever + " me gusta";
});


/*
//Modal Original para Gato Atigrado
// Get the modal
var modal = document.getElementById("Modal-1");

// Get the button that opens the modal
var btn = document.getElementById("like-gatoatigrado");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

var botonCambiar = document.getElementById("like-gatoatigrado");
var likesGatoAtigrado = 22; //N de likes actuales

// Agregamos un evento 'click' al botón
botonCambiar.addEventListener("click", function() {
    // Cambiamos los likes utilizando this y innerText
    likesGatoAtigrado += 1; 
    this.innerText = likesGatoAtigrado + " me gusta";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/