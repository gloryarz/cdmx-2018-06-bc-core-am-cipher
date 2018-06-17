let imprimir = document.getElementById('imprimir');
/*
if (window.attachEvent){
  document.getElementById('encodeBtn').addEventListener("click, btn1, false")
} else if (window.attachEvent) {

}



const prueba = () => {
  let traeTexto = document.getElementById('txt');

}*/


let encodeBtn = document.getElementById("encodeBtn");
encodeBtn.addEventListener("click", cipher.encode);

let decodeBtn = document.getElementById("decodeBtn");
decodeBtn.addEventListener("click", cipher.decode);
