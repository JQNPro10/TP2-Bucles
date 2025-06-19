//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let edad1 = parseInt(prompt("ingrese la primera edad"));
let nombre1 = prompt("ingrese el primer nombre");

let edad2 = parseInt(prompt("ingrese la segunda edad"));
let nombre2 = prompt("ingrese el segundo nombre");

let edad3 = parseInt(prompt("ingrese la tercera edad"));
let nombre3 = prompt("ingrese el tercer nombre");

//max calcula el numero mayor
let mayor = Math.max(edad1, edad2, edad3);

//para mostrar el nombre del mayor

if ( mayor == edad1 && mayor == edad2 && mayor == edad3) {
    document.writeln(nombre1 + ", " + nombre2 + " y " + nombre3 + " tienen la misma edad" )
}else if (mayor == edad1) {
  document.write("La persona con mayor edad es : " + nombre1);
}else if (mayor == edad2) {
  document.write("La persona con mayor edad es : " + nombre2);
}else if (mayor == edad3) {
  document.write("La persona con mayor edad es : " + nombre3);
}