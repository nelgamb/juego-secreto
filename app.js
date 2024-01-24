let resultTexto = document.getElementById("resultTexto");
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// pone las condiciones iniciales de la aplicacion
condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `ACERTASTE el numero en el intento #${intentos}`);
    resultTexto.setAttribute(
      "style",
      "color: #2ECC71; font-weight: 700; border: solid 4px #2ECC71;  text-align: center; padding: 5px; font-size: 25px"
    );

    //elimina el parametro disable del boton nuevo huego
    document.getElementById("btn-playAgain").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es MENOR");
      resultTexto.setAttribute(
        "style",
        "color: #F4D03F; font-weight: 700; border: solid 4px #F4D03F;  text-align: center; padding: 5px; font-size: 25px"
      );
    } else {
      asignarTextoElemento("p", "El numero secreto es MAYOR");
      resultTexto.setAttribute(
        "style",
        "color: #F4D03F; font-weight: 700; border: solid 4px #F4D03F;  text-align: center; padding: 5px; font-size: 25px"
      );
    }
    intentos++;
    limpiarCaja();
  }
  return;
} // fin de la funcion intentoUsuario()

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(`Numero Generado ${numeroGenerado}`);
  console.log(`Lista de numero => [${listaNumerosSorteados}]`);

  // si ya sorteamos todos los numero
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", `Ya se sortearon todos los numeros posibles`);
    resultTexto.setAttribute(
      "style",
      "color: #1D8348; font-weight: 700; border: solid 4px #1D8348;  text-align: center; padding: 5px; font-size: 25px"
    );
  } else {
    // si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
} //  fin de la funcion generarNumeroSecreto()

function limpiarCaja() {
  document.getElementById("numeroUsuario").value = "";
}

function condicionesIniciales() {
  // indicar mensaje de inicio
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  //generar el numero aleatorio
  numeroSecreto = generarNumeroSecreto();
  // console.log(`el numero secreto es: ${numeroSecreto}`);
  //inicializar numero de intentos
  intentos = 1;
  //deahabilidar el boton de nuevo juegos
  document.getElementById("btn-playAgain").setAttribute("disabled", "true");
  // se elimina el style de la etiqueta resultado para que se muestre el mensaje original
  document.getElementById("resultTexto").removeAttribute("style");
}

function reiniciarJuego() {
  // limpiar el campo de texto
  limpiarCaja();
  // indicar mensaje de inicio
  condicionesIniciales();
  //generar el numero aleatorio
  //inicializar numero de intentos
}
