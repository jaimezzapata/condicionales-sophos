/* 
Cronograma de actividades
    Primer momento 29 de septiembre
        Ciclos y Condicionales
    Segundo momento 13 de Octubre
        Funciones
        Objetos
        Arreglos
    Tercer momento 27 Octubre
        DOM
        JS Asíncrono
*/

/* 
Condicionales
    Estructura de decisión que permite seleccionar una de varias alternativas

    1 - Simple
    2 - Compuesto
    3 - Anidado
    4 - Múltiple

    Simple
        Solo evalua un único camino, siempre y cuado sea verdadero el resultado
    Compuesto
        Evaluación de una decisión en doble camino
    Condicional anidado
        Evaluacion de condiciones dependientes de otra
        
        ***************************
        F Y F = F           F O F = F
        F Y V = F           F O V = V
        V Y F = F           V O F = V
        V Y V = V           V O V = V
        conjunción          disyunción
    Condicional multiple
        Muchos condicionales
*/

/* 
    Comparadores lógicos
    == -> comparación
    <= -> menor o igual (incluyente)
    >= -> mayor o igual (incluyente)
    < -> menor (excluyente)
    > -> mayor (excluyente)
    != -> diferente
    ! -> negacion o diferente
*/
// var edad = Number(prompt("Ingrese su edad: "));
// if (edad >= 18) {
//   console.log("Accediendo al sitio XXX...");
//   console.log("Persona legal");
// } else {
//   console.log("No puede acceder al sitio");
//   console.log("Persona Ilegal");
// }

/* 
    Realizar un algoritmo que permita ingresar un valor hora y cantidad de horas para calcular el salario de un empleado.
    Teniendo en cuenta que si el empleado trabaja mas de 96 horas se le realiza un cargo adicional como valor hora extra al salario total
    Hora vale 0.25% sobre el valor de la hora ordinaria
*/

// /* Definiendo datos de entrada */
// var valorHora = Number(prompt("Ingrese un valor de hora: "));
// var cantidadHoras = Number(prompt("Ingrese las horas trabajadas: "));
// var horasExtras = 0
// /* Definiendo datos de proceso */
// if (cantidadHoras > 96) {
//   horasExtras = cantidadHoras - 96;
// }
// var valorHorasExtras = horasExtras * valorHora * 0.25;
// var salarioEmpleado = valorHora * cantidadHoras + valorHorasExtras;

// /* Definiendo datos de Salida */
// console.log(salarioEmpleado)

// var usuario = prompt("Ingrese su usuario: ");
// var contrasena = prompt("Ingrese su contraseña: ");
// if (usuario == "Jaime") {
//   if (contrasena == "1234") {
//     console.log("Inició sesión correctamente")
//   } else {
//     console.log("Error en la contraseña");
//   }
// } else {
//   console.log("Usuaro incorrecto");
// }
// if (usuario == "Jaime" && contrasena == "1234") {
//   console.log("Inició sesión correctamente");
// } else {
//   console.log("No pudo acceder al sistema");
// }

// var edad = Number(prompt('Ingrese su edad: '))
// if (edad < 5) {
//     console.log('Usted pertenece a la primera infancia')
// } else if (edad < 11) {
//     console.log('Usted pertenece a la infancia')
// } else if (edad < 18) {
//     console.log('Usted pertenece a la adolescencia')
// } else if(edad < 27){
//     console.log('Usted pertenece a la Juventud')
// } else if(edad < 59){
//     console.log('Usted pertenece a la adultes')
// } else {
//     console.log('Usted pertenece a la tercera edad')
// }

/* Un usuario desea registrarse en un gimnasio, pero se le pone la condicion de que primero debe calcular su indice de masa corporal para poder entrar en un plan de dieta y entrenamiento 
El gimnasio solo deja ingresar y registrar personas mayores de 19 años y menores de 45*.
IMC = peso/altura*altura
Desarrollar un algoritmo que dé solución a esta problemática*/

// var edad = Number(prompt("Ingrese la edad: "));
// if (edad > 19 && edad < 45) {
//   var peso = Number(prompt("Ingrese su peso: "));
//   var altura = Number(prompt("Ingrese su altura: "));
//   var imc = peso / (altura * altura);
// } else {
//   console.log("No pierda el tiempo");
// }


/* 
    Una institución universitaria desea calcular la nota de un estudiante bajo un plan de evaluación
    La nota final se divide en 3
        Parcial 40%
        Taller 20%
        Final 40%
    El Taller se divide en 2
        Primera entrega 50%
        Segunda entrega 50%
    Realizar un algoritmo que calcule si el estudiante gana o no la materia, teniendo en cuenta que debe tener una nota superior a 3.5.
    Todas la notas se deben ingresar por teclado    
*/