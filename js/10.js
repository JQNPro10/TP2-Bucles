// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


let filas = parseInt(prompt("Ingrese número de filas"));
let columnas = parseInt(prompt("Ingrese número de columnas"));

let numero = filas * columnas;

document.writeln('<table class="table table-bordered table-striped text-center">');

for (let i = 0; i < filas; i++) {
    document.writeln("<tr>");
    for (let j = 0; j < columnas; j++) {
        document.write("<td>");
        document.write(numero < 10 ? "0" + numero : numero);
        document.writeln("</td>");
        numero--;
    }
    document.writeln("</tr>");
}

document.writeln("</table>");
