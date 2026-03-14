/* ======================================================
   FUNCIONES EN JAVASCRIPT
   ======================================================

   Una función es un bloque de código reutilizable
   que ejecuta una tarea específica.

   Ventajas:
   - Reutilizar código
   - Organizar mejor el programa
   - Evitar repetir lógica
*/

/* ======================================================
   1. FUNCIÓN BÁSICA
   ====================================================== */

// Declaración de una función

function saludar() {
  console.log("Hola mundo");
}

// Ejecutar (invocar) la función
saludar();

/* ======================================================
   2. FUNCIONES CON PARÁMETROS
   ====================================================== */

// Los parámetros son valores que recibe la función

function saludarPersona(nombre) {
  console.log("Hola, " + nombre);
}

saludarPersona("Santiago");
saludarPersona("Ana");

/* ======================================================
   3. FUNCIONES CON VARIOS PARÁMETROS
   ====================================================== */

function sumar(a, b) {
  console.log(a + b);
}

sumar(5, 3);
sumar(10, 20);

/* ======================================================
   4. FUNCIONES QUE RETORNAN VALORES
   ====================================================== */

// return devuelve un valor desde la función

function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 5);

console.log("Resultado:", resultado);

/* ======================================================
   5. DIFERENCIA ENTRE IMPRIMIR Y RETORNAR
   ====================================================== */

function imprimirSuma(a, b) {
  console.log(a + b);
}

let resultadoSuma = imprimirSuma(2, 3); // no guarda nada
console.log(resultadoSuma); // undefined porque la función no retorna nada

function retornarSuma(a, b) {
  return a + b;
}

let suma = retornarSuma(2, 3); // guarda el resultado
console.log("Suma guardada:", suma);

/* ======================================================
   6. PARÁMETROS POR DEFECTO
   ====================================================== */

// Permiten definir valores si no se envían argumentos

function saludarUsuario(nombre = "Invitado") {
  console.log("Hola, " + nombre);
}

saludarUsuario("Carlos");
saludarUsuario();

/* ======================================================
   7. FUNCTION EXPRESSION
   ====================================================== */

// Una función también se puede guardar en una variable

const restar = function (a, b) {
  return a - b;
};

console.log("Resta:", restar(10, 4));

/* ======================================================
   8. ARROW FUNCTIONS (FUNCIONES FLECHA)
   ====================================================== */

// Forma moderna y más corta de escribir funciones

const dividir = (a, b) => {
  return a / b;
};

console.log("División:", dividir(10, 2));
