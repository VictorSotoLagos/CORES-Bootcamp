const linksCiudades = document.querySelectorAll("#link");
const todasLasFichas = document.querySelectorAll(".fichas-ciudades");

for (fichas of todasLasFichas) {
    fichas.style.display = "none";
}

linksCiudades.forEach((link, index) => {
    link.addEventListener("click", function() {

        todasLasFichas.forEach(fichas => fichas.style.display = "none");
        todasLasFichas[index].style.display = "block";
/*
        if (todasLasFichas[index].style.display !="none") {
            todasLasFichas[index].style.display ="none";
        } else {
            for (fichas of todasLasFichas) {
                fichas.style.display = "none";
            }
           todasLasFichas[index].style.display ="block";
           }
 */          
        
    });
});

const footer = document.querySelector(".footer");
const botonFooter = document.querySelector("#boton-footer");

botonFooter.addEventListener("click", function(){

    footer.style.display = "none";

});

// Temperaturas



let temperaturas = document.querySelectorAll("#temp");
let escalaGrados = document.querySelector("#seleccion-temp");
let caracterGrados = document.querySelectorAll("#grado");

escalaGrados.addEventListener("change", function() {
    let valor = escalaGrados.value;
    console.log(valor);
    
    //Conversión de °C a °F
    if (valor === "farenheit") {
    for (temp of temperaturas) {
        console.log(temp);
        let numerotemp = temp.innerText;
        console.log(numerotemp);
        nuevatemp = (numerotemp*(9/5));
        nuevatemp += 32;
        console.log(nuevatemp);
        nuevatemp = Math.floor(nuevatemp);
        console.log (nuevatemp);
        temp.innerText = nuevatemp;
       }
    for (grados of caracterGrados) 
        {
        nuevoGrado = grados.innerText;
        nuevoGrado = "°F";
        grados.innerText = nuevoGrado;
        }  
       //Conversión de °F a °C
       } else {
        for (temp of temperaturas) {
        let numerotemp = temp.innerText;
        nuevatemp = (numerotemp-32)*5;
        nuevatemp = nuevatemp / 9;
        nuevatemp = Math.ceil(nuevatemp);
        temp.innerText = nuevatemp;
        }

        for (grados of caracterGrados) 
            {
            nuevoGrado = grados.innerText;
            nuevoGrado = "°C";
            grados.innerText = nuevoGrado;
            }  

       }
});


window.addEventListener("load", function(){
    
    alert("Cargando Reporte del Clima");

});