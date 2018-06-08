// Div de mi HTML en el que se imprime el cifrado/descifrado
let imprimir = document.getElementById('imprimir');

// Funcion para cifrar
const  cipher = (offsets, strings) => {
  // variables para guardar los valores insertados en HTML
  let txt = document.getElementById('txt');
  strings = (txt.value).toUpperCase();
  num = document.getElementById("num");
  offsets = parseInt(num.value);
  // variable vacía para resultado
  let cifrado = " ";

  /* Loop toma los valores insertados por el usuario, repite el código
  según el largo de la palabra, hace la conversión al código ASCII, suma offsets
  regresa el valor convertido.
  */
  for (let i = 0; i < strings.length; i++) {
    let valorAscii = strings.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii - 65 + offsets) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  console.log(cifrado);
  // Imprime en el HTML
  imprimir.innerHTML = cifrado;
}

// Funcion para descifrar
const  decode = (offsets, strings) => {
  // variables para guardar los valores insertados en HTML
  let txt = document.getElementById('txt');
  strings = (txt.value).toUpperCase();
  num = document.getElementById("num");
  offsets = parseInt(num.value);
  let cifrado = " ";


  /* Loop toma los valores insertados por el usuario, repite el código
  según el largo de la palabra, hace la conversión al código ASCII, suma offsets
  regresa el valor convertido.
  */
  for (let i = 0; i < strings.length; i++) {
    let valorAscii = strings.toUpperCase().charCodeAt(i);
    let conversion = (valorAscii + 65 - offsets) % 26 + 65;
    let devuelve = String.fromCharCode (conversion);
    cifrado += devuelve;

  }
  console.log(cifrado);
  // Imprime en el HTML
  imprimir.innerHTML = cifrado;
}
