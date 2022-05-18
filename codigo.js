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

function pagar() {
    window.alert(products.join(", \n"));
    swal({
      title: "Desea realizar la compra?",
      text: "En caso de haber realizado la compra, tiene 60 min para cancelar la misma",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Su compra ha sido realizada!", {
          icon: "success",
        });
      } else {
        swal("La compra no se realizo!", {
          icon: "error"
        });
      }
    });
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

const dataUsuarios = [];

class Usuarios{
    constructor(nombre, apellido, edad, ciudad){
        
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.ciudad = ciudad
    }
}
function muestraInfoUsuario(){
    let nombreIngresado = prompt("Ingrese su nombre")
    let apellidoIngresado = prompt("Ingrese su apellido")
    let edadIngresada = parseInt(prompt("Ingrese su edad"))
    let ciudadIngresada = prompt("Ingrese ciudad")
    let direccionIngresada = prompt("Ingrese direccion donde vive")
    //let nuevoObjeto = swal(`Bienvenid@ ${nombreIngresado} ${apellidoIngresado}, usted se encuentra en ${ciudadIngresada}`)
   //let nuevoObjeto = (nombreIngresado+apellidoIngresado+edadIngresada+ciudadIngresada);
   
   let nuevoObjeto = swal(`Bienvenid@ ${nombreIngresado} ${apellidoIngresado} (${edadIngresada}), usted se encuentra en ${ciudadIngresada} con direccion en ${direccionIngresada}`);
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


    


