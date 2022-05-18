function saludar() {
  
  swal({
     title: 'Bienvenid@ a BurgerCoder !',
      text: '🕖MARTES A DOMINGOS DE 19:00hs a 23:30hs 🕚',
      icon: 'success',
     })  
    }

      
//TOAST-NOTIFICACION
Toastify({

  text: "📱 Abierto, hacenos tu pedido al 221-0123456 📞",
    duration: 9000,
    destination: 'https://www.whatsapp.com/',
    newWindow: true,
    close: true,
    gravity: "bottom", //
    position: 'right', 
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    
  
  }).showToast();


let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

// VALIDAR FORM:

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    swal({
      title: 'Consulta / Mensaje',
      text: 'ENVIADO',
      icon: 'success',
      })  
}

////

const dataUsuarios = []

class Usuarios{
    constructor(nombre, apellido, edad, ciudad){
        
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.ciudad = ciudad
    }
}
function nuevoObjeto(){
    let nombreIngresado = prompt("Ingrese su nombre")
    let apellidoIngresado = prompt("Ingrese su apellido")
    let edadIngresada = parseInt(prompt("Ingrese su edad"))
    let ciudadIngresada = prompt("Ingrese ciudad donde vive")
    let nuevoObjeto = new Usuarios(nombreIngresado, apellidoIngresado, edadIngresada, ciudadIngresada)
    console.log(nuevoObjeto);
    dataUsuarios.push(nuevoObjeto)

    console.log(dataUsuarios);
    
}
// const btn = document.querySelector('boton-comprar')
// btn.addEventListener('click', () => {

//     Swal({
//         title: 'Genial!',
//         text: 'Haz clickeado el botón!',
//         icon: 'success',
//         confirmButtonText: 'Cool'
// })
// })


    


