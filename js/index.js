function encriptar () {
  let contenedor1 = document.getElementById("mensajeEncriptado");
  let contenedor2 = document.getElementById("containerImagen");
  const mensaje = document.getElementById("mensaje");
  contenedor1.style.display = "block";
  contenedor2.style.display = "none";
  mensaje.style.display = "none";
  const texto = document.getElementById("texto").value;
  const textoCifrado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  document.getElementById("textoCifrado").innerHTML = textoCifrado;
}

function desencriptar() {
  let contenedor1 = document.getElementById("mensajeEncriptado");
  let contenedor2 = document.getElementById("containerImagen");
  const mensaje = document.getElementById("mensaje");
  contenedor1.style.display = "block";
  contenedor2.style.display = "none";
  mensaje.style.display = "none";
  const texto = document.getElementById("texto").value;
  const textoCifrado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  document.getElementById("textoCifrado").innerHTML = textoCifrado;
  console.log("Si entra");
}

function copiar () {
  let mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
  let contenido = document.getElementById("textoCifrado").value;
  clipboard.writeText(contenido);
}

let botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.onclick = encriptar;

let botonDesencriptar = document.querySelector(".desencriptar");
botonDesencriptar.onclick = desencriptar;

let botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;
