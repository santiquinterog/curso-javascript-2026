/* Diferencias entre tipos de variables */

// --------------- Scope-Ámbito-Alcance de variables en JavaScript ---------------------------------------------------
function ejemploScope() {
  if (true) {
    var variableVar = "Soy var";
    let variableLet = "Soy let";
    const variableConst = "Soy const";
  }

  console.log(variableVar); // ✅ Funciona (scope de función)
  // console.log(variableLet); // ❌ Error (scope de bloque)
  // console.log(variableConst); // ❌ Error (scope de bloque)
}

ejemploScope();

// --------------- Redeclaración de variables en JavaScript ---------------------------------------------------
// VAR permite redeclarar
var x = 10;
var x = 20; // ✅ No hay error
console.log("var:", x);

// LET no permite redeclarar en el mismo scope
let y = 10;
// let y = 20; ❌ Error

// CONST tampoco permite redeclarar
const z = 10;
// const z = 20; ❌ Error

// --------------- Reasignación de variables en JavaScript ---------------------------------------------------
var a = 1;
a = 2; // ✅ Permitido

let b = 1;
b = 2; // ✅ Permitido

const c = 1;
// c = 2; ❌ Error: No se puede reasignar

// ---------------- Constantes con objetos o arrays ------------------------------------------------
// const protege la referencia de la variable, no el contenido del objeto.
const persona = {
  nombre: "Juan",
  rh: "O+",
};

// ❌ No puedes hacer que persona apunte a otro objeto.
// persona = {}; ❌ Error

//✅ Pero sí puedes modificar el contenido del objeto al que apunta.
persona.nombre = "Pedro"; // ✅ Permitido
persona.edad = 30; // ✅ Permitido

console.log(persona);

/* Tipado de variables */
let camaleon;

console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es número
camaleon = 42;
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es string
camaleon = "Hola mundo";
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es boolean
camaleon = false;
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es null
camaleon = null;
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);
// Ojo: typeof null devuelve "object"

// 🔹 Ahora es un objeto
camaleon = { nombre: "Ana" };
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es un array
camaleon = [1, 2, 3];
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);

// 🔹 Ahora es una función
camaleon = function () {
  return "Soy función";
};
console.log("Valor:", camaleon, "| Tipo:", typeof camaleon);
