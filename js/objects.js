/* ======================================================
   OBJETOS EN JAVASCRIPT
   ======================================================

   Un objeto es una estructura que permite almacenar
   información en pares clave:valor.

   clave -> nombre de la propiedad
   valor -> dato almacenado

   Ejemplo real:
   Un usuario, un producto, un carro, etc.
*/

/* ======================================================
   1. CREAR UN OBJETO
   ====================================================== */

let persona = {
  nombre: "Santiago",
  edad: 30,
  ciudad: "Medellín",
};

console.log(persona);

/* ======================================================
   2. ACCEDER A PROPIEDADES
   ====================================================== */

// Forma 1: notación con punto
console.log(persona.nombre);

// Forma 2: notación con corchetes
console.log(persona["edad"]);

/* ======================================================
   3. MODIFICAR PROPIEDADES
   ====================================================== */

persona.edad = 31;

console.log("Nueva edad:", persona.edad);

/* ======================================================
   4. AGREGAR NUEVAS PROPIEDADES
   ====================================================== */

persona.profesion = "Desarrollador";

console.log(persona);

/* ======================================================
   5. ELIMINAR PROPIEDADES
   ====================================================== */

delete persona.ciudad;

console.log(persona);

/* ======================================================
   6. OBJETOS CON ARREGLOS
   ====================================================== */

let estudiante = {
  nombre: "Ana",
  cursos: ["HTML", "CSS", "JavaScript"],
};

console.log(estudiante.cursos);
console.log(estudiante.cursos[1]);

/* ======================================================
   7. OBJETOS CON FUNCIONES (MÉTODOS)
   ====================================================== */

let usuario = {
  nombre: "Carlos",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

usuario.saludar();

/* ======================================================
   8. RECORRER OBJETOS CON FOR...IN
   ====================================================== */

let producto = {
  nombre: "Laptop",
  precio: 3000,
  marca: "Dell",
};

for (let propiedad in producto) {
  console.log(propiedad + ": " + producto[propiedad]);
}

/* ======================================================
   9. OBJECT.KEYS()
   ====================================================== */

// Devuelve un arreglo con las claves del objeto

let llaves = Object.keys(producto);

console.log(llaves);

/* ======================================================
   10. OBJECT.VALUES()
   ====================================================== */

// Devuelve un arreglo con los valores del objeto

let valores = Object.values(producto);

console.log(valores);

/* ======================================================
   11. ARREGLO DE OBJETOS
   ====================================================== */

let usuarios = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Laura", edad: 28 },
  { nombre: "Pedro", edad: 35 },
];

console.log(usuarios[0].nombre);

/* ======================================================
   12. USAR MAP CON OBJETOS
   ====================================================== */

let nombres = usuarios.map(function (usuario) {
  return usuario.nombre;
});

console.log(nombres);
