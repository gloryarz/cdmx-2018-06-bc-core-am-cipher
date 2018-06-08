let imprimir = document.getElementById('imprimir');

/*window.cipher = {
  // ...
};*/
/*
let string = "ABC";
let offset = 1;
let cifrado = " ";
let descifrado = " ";

const  cipher = (offset, string) => {
  for (let i = 0; i < string.length; i++) {
    let valorAscii = string.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii - 65 + offset) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  return cifrado;
}

cipher (offset, string); */

//Prompt funcional
/*
let string = prompt("Inserta tu nombre");
let offset = parseInt(prompt("Inserta un número"));
let cifrado = " ";
let descifrado = " ";

const  cipher = (offset, string) => {
  for (let i = 0; i < string.length; i++) {
    let valorAscii = string.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii - 65 + offset) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  return cifrado;
}

let resultado = cipher (offset, string);
imprimir.innerHTML = resultado;



const  decode = (offset, string) => {
  for (let i = 0; i < string.length; i++) {
    let valorAscii = string.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii + 65 - offset) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  return cifrado;
}

let resultado2 = decode (offset, string);
imprimir.innerHTML = resultado2;
*/




const  cipher = (offset, string) => {
  let txt = document.getElementById('txt');
  let string = txt.value;
  let offset = 1;
  let cifrado = " ";

  for (let i = 0; i < string.length; i++) {
    let valorAscii = string.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii - 65 + offset) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  console.log (cifrado);
}

let resultado = cipher (offset, string);
imprimir.innerHTML = resultado;
