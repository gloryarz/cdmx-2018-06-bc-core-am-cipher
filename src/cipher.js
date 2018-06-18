window.cipher = {
  encode : (offset, string) => {
    //Valores de texto
    let txt = document.getElementById('txt');
    string = (txt.value);
    num = document.getElementById("num");
    offset = parseInt(num.value);
    // variable vacía para resultado
    let cifrado = " ";
    let devuelve = "";
    let valorAscii ="";
    let conversion = 0;

    for (let i = 0; i < string.length; i++) {
      valorAscii = string.charCodeAt(i);
      if (valorAscii >= 97 && valorAscii <= 122) {
        conversion = (valorAscii - 97 + offset) % 26 + 97;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

      else if (valorAscii >= 65 && valorAscii <= 90) {
        conversion = (valorAscii - 65 + offset) % 26 + 65;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

      else {
        conversion = valorAscii;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

    }
    console.log(cifrado);
    //return cifrado;
    imprimir.innerHTML = cifrado;

    // Imprime en el HTML
  },

  decode : (offset, string) => {
    // variables para guardar los valores insertados en HTML
    let txt = document.getElementById('txt');
    string = (txt.value);
    num = document.getElementById("num");
    offset = parseInt(num.value);
    // variable vacía para resultado
    let cifrado = " ";
    let devuelve = "";
    let valorAscii ="";
    let conversion = 0;

    for (let i = 0; i < string.length; i++) {
      valorAscii = string.charCodeAt(i);
      if (valorAscii >= 97 && valorAscii <= 122) {
        conversion = (valorAscii - 122 - offset) % 26 + 122;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

      else if (valorAscii >= 65 && valorAscii <= 90) {
        conversion = (valorAscii + 65 - offset) % 26 + 65;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

      else {
        conversion = valorAscii;
        devuelve = String.fromCharCode (conversion);
        cifrado += devuelve;
      }

    }
    console.log(cifrado);
    // Imprime en el HTML
    imprimir.innerHTML = cifrado;
  }
};
