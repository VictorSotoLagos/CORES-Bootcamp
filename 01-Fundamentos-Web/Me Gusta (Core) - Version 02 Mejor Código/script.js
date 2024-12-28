/* --> Propuesta Inicial Sin Let: No funciona 

var todosBotones = ["#botonlike1", "#botonlike2", "#botonlike3"];
var todosDisplay = ["#numerolikes1", "#numerolikes2", "#numerolikes3"];
var likes = 0; //N de likes actuales

for (i=0; i<todosBotones.length; i++) {
    var botonlikes = document.querySelector(todosBotones[i]);
    var displaylikes = document.querySelector(todosDisplay[i]);
    botonlikes.addEventListener("click", function() {
        // Cambiamos los likes utilizando this y innerText
        likes += 1; 
        displaylikes.innerText = likes + " like(s)";
    });

}
*/

//Propuesta Final Con Let: se mantienen variables focalizadas a la función (no se confunden en el bucle)
/*
var todosBotones = ["#botonlike1", "#botonlike2", "#botonlike3"];
var todosDisplay = ["#numerolikes1", "#numerolikes2", "#numerolikes3"];
var likes = [0, 0, 0]; //N de likes actuales

for (let i=0; i<todosBotones.length; i++) {
    let botonlikes = document.querySelector(todosBotones[i]);
    let displaylikes = document.querySelector(todosDisplay[i]);
    botonlikes.addEventListener("click", function() {
        // Cambiamos los likes utilizando this y innerText
        likes[i] += 1; 
        displaylikes.innerText = likes[i] + " like(s)";
    });

}
function darclick(elemento){
console.dir(elemento.innerText);
};
*/


//Propuesta última considerando lo visto en la clase de ayer (miércoles 28 ago.) 

var botonesLike = document.querySelectorAll(".botonlike");

for (boton of botonesLike) { 
    boton.addEventListener("click", function(){
        let selector = this.parentElement; //Creamos una var selector a la cual le asignamos el "elemento padre" actual.
        //console.log("Este es el elemento padre: "); 
        //console.log(selector); //console log mostrará el padre actual en la consola.
        let displayLikes = selector.querySelector("#numerolikes"); //Creamos una var displayLikes a la que le asginamos el span ID correspondiente, según padre.
        //console.log("DisplayLikes actual es: ");
        
        //console.log(displayLikes); //console log mostrará el innerText (número de likes) actual.
        let contador = parseInt(displayLikes.innerText); //Convierte el innerText del displayLike (span ID) en número entero.
        displayLikes.innerText = contador + 1; //Aumenta en 1 el número entero convertido y lo refleja en el innerText.
    });
    
}
