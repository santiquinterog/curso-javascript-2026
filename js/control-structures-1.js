// ==========================================
// EJEMPLOS DE ESTRUCTURAS DE CONTROL EN JS
// ==========================================

// ==========================================
// 1️⃣ IF
// ==========================================
// Se usa para ejecutar código solo si una condición es verdadera

let edad = 20;

console.log("=== IF ===");

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// ==========================================
// 2️⃣ IF - ELSE
// ==========================================
// Permite ejecutar un bloque si la condición es verdadera
// y otro bloque si es falsa

let numero = 7;

console.log("\n=== IF - ELSE ===");

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// ==========================================
// 3️⃣ IF - ELSE IF - ELSE
// ==========================================
// Permite evaluar múltiples condiciones

let nota = 85;

console.log("\n=== IF - ELSE IF - ELSE ===");

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// ==========================================
// 4️⃣ OPERADOR TERNARIO
// ==========================================
// Es una forma corta de escribir un if-else
// Sintaxis: condición ? valorSiTrue : valorSiFalse

let esMayor = edad >= 18 ? "Sí es mayor" : "No es mayor";

console.log("\n=== OPERADOR TERNARIO ===");
console.log(esMayor);

// ==========================================
// 5️⃣ SWITCH
// ==========================================
// Se usa cuando tenemos múltiples casos posibles
// y queremos comparar un mismo valor

let dia = 3;

console.log("\n=== SWITCH ===");

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Fin de semana o día inválido");
    break;
}

// ==========================================
// FIN DEL ARCHIVO
// ==========================================
