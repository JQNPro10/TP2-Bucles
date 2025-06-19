// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let frase = ("")
let n = (0)
do {
    let palabra = prompt("Pon una palabra")
    if (n === 0) {
        frase += palabra
        n++
    } else {
        frase += ("-") + palabra
    }
} while (confirm("¿Quieres concatenar mas palabras?"))

document.writeln(frase)