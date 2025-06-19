// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto").toLowerCase();
let x = 0

for (let i = 0; i < texto.length && x === 0; i++) {
  let letra = texto[i];
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    document.writeln("La primera vocal esta en la posicion " + i);
    x ++
  }
}
