/* ======================================================
   EJEMPLOS DE JAVASCRIPT
   Arreglos y Bucles
   ====================================================== */

/* ======================================================
   ARREGLOS (ARRAYS)
   ====================================================== */

// Un arreglo es una lista de elementos.
// Puede guardar números, textos, objetos, etc.

let frutas = ["manzana", "banana", "naranja"];

console.log("Arreglo inicial:", frutas);

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

let numerosOriginales = [1, 2, 3, 4];

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
  return num > 2;
});

console.log("filter resultado:", numerosFiltrados);
