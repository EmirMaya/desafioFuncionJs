// let usuarioIngresado;
// let contraseniaIngresada;

// function solicitarCredenciales() {
//     usuarioIngresado = prompt(`Ingrese usuario`);
//     contraseniaIngresada = prompt(`Ingrese contraseña`);
// }

// function loginUsuario(usuario, contrasenia) {
//     if (usuario == 'Sora' && contrasenia == 'amigo'){
//         console.log('Ingreso exitoso al sistema');
//     } else {
//         console.error("credenciales incorrectas");
//     }
// }

// function cambioDeContrasenia(usuario) {
//     if (usuario == 'Pedro' || usuario == 'Sora' || usuario == 'Candela'){
//         let solicitaContraseniaNueva = prompt(`ingrese nueva contraseña`);
//         contraseniaIngresada = solicitaContraseniaNueva;
//         return 'Cambio de contraseña exitoso';
//     } else {
//         return 'al usuario ingresado no se le puede cambiar su contraseña';
//     }
// }

// solicitarCredenciales();
// loginUsuario(usuarioIngresado, contraseniaIngresada);
// console.log(cambioDeContrasenia(usuarioIngresado));

// const suma = function (num1, num2) {
//     return num1 + num2;
//  };



// const suma =  (num1, num2) => {
//    return num1 + num2;
// };

// console.log(suma(10,30));

// let boton = document.getElementById('buttonSaludar');

// boton.addEventListener('click', () => {
//    console.log("hola");
// });

// Agregar la primer letra al princip y al final de la palabra

// function agregarLetra(palabra) {
//     let primerLetra = palabra.substr(0, 1);
//   return `${primerLetra}${palabra}${primerLetra}`;  
// };

// console.log(agregarLetra(`banana`));

function convertirAEth(usdt) {
  //1eth ------ 4000 usdt
  // x eth ---- tantos usdt
  //100% --- son la cant de usdt que queremos convertir.
  // 0.5%--- tantos usdt
  let eth = 4000;
  comision = (usdt * 0.5) / 100;
  return (usdt - comision) / eth;
};

function convertirABtc(usdt) {
  //1btc ------ 40000 usdt
  // x eth ---- tantos usdt

  //vamos a cobrar 0.5% de comision por conversion
  //100% --- son la cant de usdt que queremos convertir.
  // 0.5%--- tantos usdt
  let btc = 40000;
  comision = (usdt * 0.5) / 100;
  return (usdt - comision) / btc;
};


let comision;
let usdt;
let convertir = prompt(`a que desea convertir sus usdt? eth o btc`).toLowerCase();

switch (convertir) {
  case `eth`:
    usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a eth`));
    alert(`${convertirAEth(usdt)} ETH con una comisión de ${comision} usdt`);
    break;

  case `btc`:
    usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a btc`));
    alert(`${convertirABtc(usdt)} BTC con una comisión de ${comision} usdt`);
    break;

  default:
    alert(`¡Error, no ha seleccionado nada!`)
    break;
};


;



// boton.addEventListener('click', () => {
//    console.log("hola");
// });