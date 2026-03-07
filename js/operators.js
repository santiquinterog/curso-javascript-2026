// ==========================================
// EJEMPLOS DE OPERADORES EN JAVASCRIPT
// ==========================================

// ==========================================
// 1️⃣ OPERADORES ARITMÉTICOS
// ==========================================

let a = 10;
let b = 5;

console.log("=== OPERADORES ARITMÉTICOS ===");

// Suma
console.log("Suma:", a + b); // 15

// Resta
console.log("Resta:", b - a); // -5

// Multiplicación
console.log("Multiplicación:", a * b); // 50

// División
console.log("División:", a / b); // 2

// Módulo (residuo de la división)
console.log("Módulo:", a % b); // 0

// Exponente
console.log("Potencia:", a ** b); // 10^5 = 100000

// Incremento
a++; // a = a + 1
console.log("Incremento:", a); // 11

// Decremento
b--; // b = b - 1
console.log("Decremento:", b); // 4

/* Operaciones con números y strings */
const numero1 = 10;
const numero2 = 20;
const resultado = numero1 + numero2;
console.log("Resultado suma:", resultado);

const nombre = "Juan";
const saludo = "Hola, " + numero2 + "!";
console.log("Resultado concatenación:", saludo);

console.log("Curiosidad: concatenación, no suma", numero1 + "2");
console.log("Curiosidad: resta, no concatenación", numero1 - "2");

const numero = 50;
const texto = "100";
console.log("Número " + numero + " convertido a string:", String(numero));
console.log("Texto " + texto + " convertido a número:", Number(texto));

// ==========================================
// 2️⃣ OPERADORES DE ASIGNACIÓN COMPUESTOS
// ==========================================

console.log("\n=== OPERADORES DE ASIGNACIÓN COMPUESTOS ===");
let x = 20;

console.log("Valor inicial de x:", x);

// Suma y asigna
x += 5; // x = x + 5
console.log("x += 5:", x);

// Resta y asigna
x -= 3; // x = x - 3
console.log("x -= 3:", x);

// Multiplica y asigna
x *= 2; // x = x * 2
console.log("x *= 2:", x);

// Divide y asigna
x /= 4; // x = x / 4
console.log("x /= 4:", x);

// Módulo y asigna
x %= 3; // x = x % 3
console.log("x %= 3:", x);

// Exponente y asigna
x **= 2; // x = x ** 2
console.log("x **= 2:", x);

// ==========================================
// 3️⃣ OPERADORES DE COMPARACIÓN
// ==========================================

let num1 = 10;
let num2 = "10";

console.log("\n=== OPERADORES DE COMPARACIÓN ===");
console.log("num1:", num1, "| Tipo:", typeof num1);
console.log("num2:", num2, "| Tipo:", typeof num2);

// Igualdad (compara solo valor)
console.log("num1 == num2:", num1 == num2); // true

// Igualdad estricta (valor y tipo)
console.log("num1 === num2:", num1 === num2); // false

// Diferente
console.log("num1 != num2:", num1 != num2); // false

// Diferente estricto
console.log("num1 !== num2:", num1 !== num2); // true

// Mayor que
console.log("num1 > 5:", num1 > 5); // true

// Menor que
console.log("num1 < 5:", num1 < 5); // false

// Mayor o igual
console.log("num1 >= 10:", num1 >= 10); // true

// Menor o igual
console.log("num1 <= 9:", num1 <= 9); // false

// ==========================================
// 4️⃣ OPERADORES LÓGICOS
// ==========================================

let edad = 20;
let tieneLicencia = true;

console.log("\n=== OPERADORES LÓGICOS ===");

console.log("Edad:", edad);
console.log("Tiene licencia:", tieneLicencia);
// AND (&&)
// Devuelve true si ambas condiciones son verdaderas
console.log(
  "Puede conducir edad >= 18 y tiene licencia:",
  edad >= 18 && tieneLicencia,
);

// OR (||)
// Devuelve true si al menos una condición es verdadera
console.log(
  "Tiene beneficio edad < 18 o tiene licencia:",
  edad < 18 || tieneLicencia,
);

// NOT (!)
// Invierte el valor booleano
console.log("No tiene licencia:", !tieneLicencia);

// ==========================================
// Operadores aritméticos y de comparación
console.log("\n=== OPERADORES ARITMÉTICOS Y DE COMPARACIÓN ===");
console.log("Suma y comparación (7 + 3 == 10):", 7 + 3 == 10); // true
console.log("Suma y comparación (7 < 5 + 3):", 7 < 5 + 3); // true

// ==========================================
// FIN DEL ARCHIVO
// ==========================================
