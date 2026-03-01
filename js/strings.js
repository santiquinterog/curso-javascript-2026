// ==========================================
// EJEMPLOS DE MÉTODOS IMPORTANTES DE STRING EN JAVASCRIPT
// ==========================================

// Texto base para los ejemplos
let texto = "  Hola Mundo JS  ";

// 1️⃣ length
// Devuelve la cantidad de caracteres (incluyendo espacios)
console.log("1️⃣ length:");
console.log(texto.length);
// Cuenta también los espacios al inicio y al final

// 2️⃣ toUpperCase()
// Convierte todo el texto a mayúsculas
console.log("\n2️⃣ toUpperCase():");
console.log(texto.toUpperCase());

// 3️⃣ toLowerCase()
// Convierte todo el texto a minúsculas
console.log("\n3️⃣ toLowerCase():");
console.log(texto.toLowerCase());

// 4️⃣ includes()
// Verifica si una palabra o texto existe dentro del string
console.log("\n4️⃣ includes():");
console.log(texto.includes("Mundo")); // true
console.log(texto.includes("Python")); // false

// 5️⃣ indexOf()
// Devuelve la posición donde empieza un texto
// Si no lo encuentra devuelve -1
console.log("\n5️⃣ indexOf():");
console.log(texto.indexOf("Mundo"));
console.log(texto.indexOf("Python"));

// 6️⃣ slice()
// Extrae una parte del texto indicando posición inicial y final
console.log("\n6️⃣ slice():");
console.log(texto.slice(2, 6));
// Empieza en posición 2 y termina antes de 6

// 7️⃣ substring()
// Similar a slice, pero no acepta índices negativos
console.log("\n7️⃣ substring():");
console.log(texto.substring(2, 6));

// 8️⃣ replace()
// Reemplaza una parte del texto por otra
console.log("\n8️⃣ replace():");
console.log(texto.replace("Mundo", "JavaScript"));

// 9️⃣ split()
// Divide el texto en un arreglo usando un separador
console.log("\n9️⃣ split():");
let palabras = texto.split(" ");
console.log(palabras);
// Divide el texto cada vez que encuentra un espacio

// 🔟 trim()
// Elimina espacios al inicio y al final
console.log("\n🔟 trim():");
console.log(texto.trim());

// 1️⃣1️⃣ startsWith()
// Verifica si el texto empieza con cierto valor
console.log("\n1️⃣1️⃣ startsWith():");
console.log(texto.trim().startsWith("Hola"));

// 1️⃣2️⃣ endsWith()
// Verifica si el texto termina con cierto valor
console.log("\n1️⃣2️⃣ endsWith():");
console.log(texto.trim().endsWith("JS"));

// ==========================================
// FIN DEL ARCHIVO
// ==========================================
