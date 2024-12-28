convertirCelsiusAFahrenheit = (Celcius) => (Celcius*9/5) +32;
console.log(`24° celcius corresponden a ${convertirCelsiusAFahrenheit(24)} fahrenheit`);

mensajePersonalizado = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años.`;
console.log(mensajePersonalizado("Víctor Edu", 40));

convertirKilometrosAMillas = (km) => km * 0.621;
console.log(`10 km. corresponden a  ${convertirKilometrosAMillas(10)} millas`);

paraguasOSombrero = (estado) => estado === "lloviendo" ? "Lleva paraguas" : "lleva sombrero";
console.log(paraguasOSombrero("lloviendo"));