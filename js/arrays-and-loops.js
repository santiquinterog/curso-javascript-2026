/* ======================================================
   EJEMPLOS DE ESTRUCTURAS DE CONTROL CICLOS EN JS
   ====================================================== */

/* ======================================================
   ARREGLOS (ARRAYS)
   ====================================================== */

// Un arreglo es una lista de elementos.
// Puede guardar números, textos, objetos, etc.

let frutas = ["manzana", "banana", "naranja"];

console.log("Arreglo inicial:", frutas);
console.log("frutas[1]:", frutas[1]); // Acceder al segundo elemento (banana)
console.log("Longitud del arreglo:", frutas.length); // Longitud del arreglo (3)

/* ======================================================
   MÉTODOS FUNDAMENTALES DE ARREGLOS
   ====================================================== */

/* -----------------------------
   push()
   -----------------------------
   Agrega un elemento al FINAL del arreglo
*/

frutas.push("mango");

console.log("Después de push:", frutas);
console.log("Longitud después de push:", frutas.length);

/* -----------------------------
   unshift()
   -----------------------------
   Agrega un elemento al INICIO del arreglo
*/

frutas.unshift("fresa");

console.log("Después de unshift:", frutas);

/* -----------------------------
   pop()
   -----------------------------
   Elimina el ÚLTIMO elemento del arreglo
*/

frutas.pop();

console.log("Después de pop:", frutas);

/* -----------------------------
   shift()
   -----------------------------
   Elimina el PRIMER elemento del arreglo
*/

frutas.shift();

console.log("Después de shift:", frutas);

/* -----------------------------
   indexOf()
   -----------------------------
   Devuelve la posición de un elemento
   Si no existe devuelve -1
*/

let posicion = frutas.indexOf("banana");

console.log("Posición de banana:", posicion);

/* -----------------------------
   includes()
   -----------------------------
   Devuelve true o false si el elemento existe
*/

let existe = frutas.includes("manzana");

console.log("¿Existe manzana?", existe);

/* -----------------------------
   slice()
   -----------------------------
   Crea una copia parcial del arreglo
   NO modifica el arreglo original
*/

let algunasFrutas = frutas.slice(0, 2);

console.log("Resultado de slice:", algunasFrutas);
console.log("Arreglo original:", frutas);

/* -----------------------------
   splice()
   -----------------------------
   Permite eliminar o agregar elementos
   SÍ modifica el arreglo original
*/

let numeros = [1, 2, 3, 4, 5];

// Elimina 2 elementos desde la posición 1
numeros.splice(1, 2);

console.log("Después de splice:", numeros);

/* ======================================================
   BUCLES
   ====================================================== */

/* -----------------------------
   while
   -----------------------------
   Ejecuta el código mientras la condición sea verdadera
*/

let contador = 0;

while (contador < 3) {
  console.log("while contador:", contador);
  contador++;
}

/* -----------------------------
   do while
   -----------------------------
   Se ejecuta al menos UNA vez
*/

let numero = 0;

do {
  console.log("do while número:", numero);
  numero++;
} while (numero < 3);

/* -----------------------------
   for
   -----------------------------
   Bucle más común cuando conocemos el número de iteraciones
*/

for (let i = 0; i < frutas.length; i++) {
  console.log("for fruta:", frutas[i]);
}

/* ======================================================
   MÉTODOS DE ITERACIÓN EN ARREGLOS
   ====================================================== */

/* -----------------------------
   forEach()
   -----------------------------
   Recorre cada elemento del arreglo
*/

frutas.forEach(function (fruta) {
  console.log("forEach:", fruta);
});

/* -----------------------------
   map()
   -----------------------------
   Crea un NUEVO arreglo transformando los elementos
*/

let numerosOriginales = [0, 1, 2, 3, 4];

let numerosDoble = numerosOriginales.map(function (num) {
  return num * 2;
});

console.log("map resultado:", numerosDoble);

/* -----------------------------
   filter()
   -----------------------------
   Crea un nuevo arreglo con los elementos
   que cumplan una condición
*/

let numerosFiltrados = numerosOriginales.filter(function (num) {
  return num % 2 === 0; // Devuelve solo los números pares
});

console.log("filter resultado:", numerosFiltrados);

// Ejercicio:
let frutasEjercicio = [
  "manzana",
  "coco",
  "naranja",
  "tomate",
  "mango",
  "uva",
  "kiwi",
];
console.log("Arreglo frutasEjercicio:", frutasEjercicio);
let frutasEjercicioResuelto = frutasEjercicio.filter(function (fruta) {
  return fruta.includes("o"); // Devuelve solo las frutas que contienen una letra
});

console.log("filter resultado:", frutasEjercicioResuelto);

/* ======================================================
   EJERCICIOS (ARRAYS)
   ====================================================== */

// Ejercicio 1:
// Dado el arreglo "edades", crea un nuevo arreglo con solo las edades
// mayores o iguales a 18 y muéstralo en consola.
let edades = [12, 18, 25, 9, 30, 16, 22];

let mayoresEdad = edades.filter(function (edad) {
  return edad >= 18;
});

console.log(mayoresEdad);

// Ejercicio 2:
// Dado el arreglo "precios", crea un nuevo arreglo con el 10% de descuento
// aplicado a cada precio y muéstralo en consola.
let precios = [100, 250, 80, 60, 400];

let descuentos = precios.map(function (precio) {
  return precio * 0.9;
});

console.log(descuentos);

// Ejercicio 3:
// Dado el arreglo "palabras", crea un nuevo arreglo con las palabras en
// mayusculas y luego muestra la longitud de ese nuevo arreglo.
let palabras = ["sol", "luna", "cielo", "mar"];

let mayusculas = palabras.map(function (palabra) {
  return palabra.toUpperCase();
});

console.log(mayusculas, mayusculas.length);
