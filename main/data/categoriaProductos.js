const categorias = [

    {id:1,nombre:"Hamburguesas"},
    {id:2,nombre:"Pizzas"},
    {id:3,nombre:"Empanadas"},
    {id:4,nombre:"Postres"},
    

]

const dataUsuarios = []

//Creamos class
class Usuarios{
    constructor(nombre, apellido, edad, ciudad){
        //Elegimos y creamos nuestros atributos/propiedas
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.ciudad = ciudad
    }
}
function nuevoObjeto(){
    let nombreIngresado = prompt("Ingrese el nombre")
    let apellidoIngresado = prompt("Ingrese el titulo")
    let edadIngresada = parseInt(prompt("Ingrese el año"))
    let ciudadIngresada = prompt("Ingrese el precio")
    let nuevoObjeto = new Libros(nombreIngresado, apellidoIngresado, edadIngresada, ciudadIngresada)
    console.log(nuevoObjeto);
    dataUsuarios.push(nuevoObjeto)

    console.log(dataUsuarios);
    
}

