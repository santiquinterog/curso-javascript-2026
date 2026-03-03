// ==========================================
// EJEMPLOS DE MÉTODOS IMPORTANTES DE STRING EN JAVASCRIPT
// ==========================================

// Texto base para los ejemplos
let texto = "  Hola Mundo JS  ";
let texto2 = "Hola  Mundo JS";
let textoAuxiliar = "Mundo";

// 1️⃣ length
// Devuelve la cantidad de caracteres (incluyendo espacios)
console.log("1️⃣ length: " + texto.length);
// Cuenta también los espacios al inicio y al final

// 2️⃣ toUpperCase()
// Convierte todo el texto a mayúsculas
console.log("\n2️⃣ toUpperCase(): " + texto.toUpperCase());

// 3️⃣ toLowerCase()
// Convierte todo el texto a minúsculas
console.log("\n3️⃣ toLowerCase(): " + texto.toLowerCase());

// 4️⃣ includes()
// Verifica si una palabra o texto existe dentro del string
console.log("\n4️⃣ includes():");
console.log("Incluye 'Mundo': " + texto.includes(textoAuxiliar)); // true
console.log("Incluye 'Python': " + texto.includes("Python")); // false

// 5️⃣ indexOf()
// Devuelve la posición donde empieza un texto
// Si no lo encuentra devuelve -1
console.log("\n5️⃣ indexOf():");
console.log("Posición de 'Mundo': " + texto.indexOf(textoAuxiliar));
console.log("Posición de 'Python': " + texto.indexOf("Python"));

// 6️⃣ slice()
// Extrae una parte del texto indicando posición inicial y final
console.log("\n6️⃣ slice(): " + texto.slice(7, 12));
// Empieza en posición 7 y termina antes de 12

// 7️⃣ substring()
// Similar a slice, pero no acepta índices negativos
console.log("\n7️⃣ substring(): " + texto.substring(2, 6));

// 8️⃣ replace()
// Reemplaza una parte del texto por otra
console.log("\n8️⃣ replace(): " + texto.replace(" ", "-"));
console.log("\n8️⃣ replaceAll(): " + texto.replaceAll(" ", "-"));

// 9️⃣ split()
// Divide el texto en un arreglo usando un separador
console.log("\n9️⃣ split():");
console.log(texto2);
let palabras = texto2.split(" ");
console.log(palabras);
// Divide el texto cada vez que encuentra un espacio

// 🔟 trim()
// Elimina espacios al inicio y al final
console.log("\n🔟 trim() para texto: " + texto.trim());
console.log("\n🔟 trim() para texto2: " + texto2.trim());

// 1️⃣1️⃣ startsWith()
// Verifica si el texto empieza con cierto valor
console.log("\n1️⃣1️⃣ startsWith(): " + texto.startsWith("  Hola"));

// 1️⃣2️⃣ endsWith()
// Verifica si el texto termina con cierto valor
console.log("\n1️⃣2️⃣ endsWith(): " + texto.endsWith("JS  "));

// Métodos combinados
console.log("\nMétodos combinados:");
// Primero se eliminan los espacios, luego se convierte a mayúsculas y finalmente se reemplaza "MUNDO" por "JS"
console.log(texto.trim().toUpperCase().replace("MUNDO", "JS")); // Resultado: "HOLA JS JS"

// Primero se convierte a mayúsculas, luego se reemplaza "MUNDO" por "JS" y finalmente se eliminan los espacios
console.log(texto.toUpperCase().replace("MUNDO", "JS").trim()); // Resultado: "HOLA JS JS"

// Primero se eliminan los espacios, luego se reemplaza "MUNDO" por "JS" y finalmente se convierte a mayúsculas
console.log(texto.trim().replace("MUNDO", "JS").toUpperCase()); // Resultado: "HOLA MUNDO JS"

// ==========================================
// DIFERENCIA ENTRE slice() Y substring() CON ÍNDICES NEGATIVOS
// ==========================================
console.log("\n📌 DIFERENCIA CON ÍNDICES NEGATIVOS:");
let ejemplo = "JavaScript";

// slice() CON ÍNDICES NEGATIVOS
// Los índices negativos cuentan desde el FINAL del string
console.log("\n🔹 slice() con índices negativos:");
console.log("Texto original: " + ejemplo);
console.log("slice(-6): " + ejemplo.slice(-6)); // "Script" - últimos 6 caracteres
console.log("slice(-6, -2): " + ejemplo.slice(-6, -2)); // "Scri" - desde -6 hasta -2 (excluyendo -2)
console.log("slice(4, -2): " + ejemplo.slice(4, -2)); // "Scri" - desde posición 4 hasta 2 desde el final

// substring() CON ÍNDICES NEGATIVOS
// Los índices negativos se tratan como 0
console.log("\n🔹 substring() con índices negativos:");
console.log("substring(-6): " + ejemplo.substring(-6)); // "JavaScript" - trata -6 como 0
console.log("substring(-6, -2): " + ejemplo.substring(-6, -2)); // "" (vacío) - ambos negativos = 0
console.log("substring(4, -2): " + ejemplo.substring(4, -2)); // "Java" - trata -2 como 0, luego invierte (0, 4)

console.log("\n💡 CONCLUSIÓN:");
console.log("✅ slice() → Acepta índices negativos (cuenta desde el final)");
console.log("❌ substring() → Trata índices negativos como 0");

// ==========================================
// FIN DEL ARCHIVO
// ==========================================
