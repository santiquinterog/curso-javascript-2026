// ==========================================
// EJEMPLOS DE ESTRUCTURAS DE CONTROL EN JS
// ==========================================

// ==========================================
// 1️⃣ IF
// ==========================================
// Se usa para ejecutar código solo si una condición es verdadera
console.log("=== IF ===");

let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// ==========================================
// 2️⃣ IF - ELSE
// ==========================================
// Permite ejecutar un bloque si la condición es verdadera
// y otro bloque si es falsa
console.log("\n=== IF - ELSE ===");

let numero = 7;

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// ==========================================
// 2️⃣ VALORES FALSOS EN JS
// ==========================================
console.log("\n=== FALSE VALUE IN JS ===");

let valor = 0; // Puedes cambiar este valor a: null, undefined, 0, "", false para probar diferentes casos

if (valor) {
  console.log("El valor es verdadero");
} else {
  console.log("El valor es falso");
}

// ==========================================
// 3️⃣ IF - ELSE IF - ELSE
// ==========================================
// Permite evaluar múltiples condiciones
console.log("\n=== IF - ELSE IF - ELSE ===");

let nota = 70;

if (nota >= 90 && nota <= 100) {
  console.log("Excelente");
} else if (nota >= 80 && nota < 90) {
  console.log("Bien");
} else if (nota >= 60 && nota < 80) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// ==========================================
// 4️⃣ OPERADOR TERNARIO
// ==========================================
// Es una forma corta de escribir un if-else
// Sintaxis: condición ? valorSiTrue : valorSiFalse
console.log("\n=== OPERADOR TERNARIO ===");

let esMayor = edad >= 18 ? "Sí es mayor" : "No es mayor";

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
