const arregloObjetos = [
    {nombre: "Alejandra", apellido: "Pardo", email: "1", password: "1"},
    {nombre: "Victor", apellido: "Antoniette", email: "2", password: "2"},
]

const Objeto2 = [...arregloObjetos, {nombre: "Carla", apellido: "Poblete", email: "3", password: "3"}]


const Objeto3 = [{nombre: "Ernesto", apellido: "Codima", email: "aplaplac@gmail.com", password: "aplaplac@gmail"}, ...arregloObjetos];



const mapeo = Objeto3.map((index) => (index));
console.log(mapeo);