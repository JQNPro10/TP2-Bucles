// 15 - Realiza un script que cuente el número de vocales que tiene un texto

let texto = prompt("Ingrese un texto").toLowerCase();
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i];
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contador++;
  }
}

document.write(`La cantidad de vocales del texto es: ${contador}`);
