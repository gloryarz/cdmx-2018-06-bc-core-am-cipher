let imprimir = document.getElementById('imprimir');

// Guardar los valores insertados en HTML
/*
const encoder = (offset, string) => {
  let txt = document.getElementById('txt');
  string = (txt.value);
  num = document.getElementById("num");
  offset = parseInt(num.value);
  imprimir.innerHTML = cipher.encode();

}



// Junta las funciones del DOM, Des/Cifrado
const decoder = () => {
  let txt = document.getElementById('txt');
  string = (txt.value);
  num = document.getElementById("num");
  offset = parseInt(num.value);
  console.log(offset, string);
  imprimir.innerHTML = cipher.decode();
}
*/

let encodeBtn = document.getElementById("encodeBtn");
encodeBtn.addEventListener("click", cipher.encode);

let decodeBtn = document.getElementById("decodeBtn");
decodeBtn.addEventListener("click", cipher.decode);
