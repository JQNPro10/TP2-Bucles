// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
// Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

const entrada = prompt("Dime una nota del 0 al 10");
const nota = Number(entrada);

if (isNaN(nota)) {
    alert("Introduce un número válido");
} else if (nota < 0 || nota > 10) {
    alert("Número erróneo");
} else if (nota >= 0 && nota <= 2) {
    alert(nota + ": Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
    alert(nota + ": Insuficiente");
} else if (nota >= 5 && nota <= 6) {
    alert(nota + ": Suficiente");
} else if (nota === 7) {
    alert(nota + ": Bien");
} else if (nota >= 8 && nota <= 9) {
    alert(nota + ": Notable");
} else if (nota === 10) {
    alert(nota + ": Sobresaliente");
}