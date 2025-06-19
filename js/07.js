// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)

const numero = parseInt(prompt("Di un número del 1 al 50"));

if (numero >= 1 && numero <= 50) {
  for (let i = numero; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write(i);
    }
    document.write("<br>");
  }
} else {
  alert("Número no válido");
}
