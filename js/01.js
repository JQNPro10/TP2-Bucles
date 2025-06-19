// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir
// si la edad ingresada no es un número válido indicarlo en un mensaje. 

const edad = prompt("¿Cual es tu edad?")

if (edad >= 18){
    alert("Eres mayor de edad.")
} else if (edad >= 0 && edad < 18){
    alert("Eres menor de edad.")
}else {
    alert("La edad ingresada no es un número válido.")
}