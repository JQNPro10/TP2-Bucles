// 4- Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = 0;
while (true) {
    let input = prompt("Pon un número (o cancelar para salir)");
    if (input === null) {
        break;
    }
    let numero = Number(input);
    if (isNaN(numero)) {
        alert(input + " no es un número válido");        
    }
    total += numero;
}
alert("La suma total es: " + total);
