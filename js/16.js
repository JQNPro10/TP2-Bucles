// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Di algo");
let salida = "" , caracter;

for (let i = 0; i < cadena.length; i++) {
  caracter = cadena.charAt(i);
  salida = caracter + salida ;
}
document.writeln(salida);