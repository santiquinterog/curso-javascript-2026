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

/* ======================================================
   13. ACCEDER A VALORES DE ARREGLOS Y OBJETOS ANIDADOS
   ====================================================== */
console.log("--------------------------------------------------");

// 1. Dificultad baja
const usuarioEjericio = {
  nombre: "Laura",
  edad: 28,
  direccion: {
    ciudad: "Medellín",
    pais: "Colombia",
  },
};
/*Accede al valor de nombre. Accede al valor de ciudad. Accede al valor de pais. */
console.log(
  "Ejercicio 1: ",
  usuarioEjericio.nombre,
  usuarioEjericio.direccion.ciudad,
  usuarioEjericio.direccion.pais,
);

// 2. Dificultad media

const tienda = {
  nombre: "TechStore",
  productos: [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 },
  ],
};

/* Accede al nombre del segundo producto. Accede al precio del tercer producto. Accede al precio del primer producto. */
console.log(
  "Ejercicio 2: ",
  tienda.productos[1].nombre,
  tienda.productos[2].precio,
  tienda.productos[0].precio,
);

// 3. Dificultad alta
const empresa = {
  nombre: "DevSolutions",
  departamentos: [
    {
      nombre: "Frontend",
      empleados: [
        { nombre: "Ana", habilidades: ["HTML", "CSS", "React"] },
        { nombre: "Luis", habilidades: ["Vue", "JavaScript"] },
      ],
    },
    {
      nombre: "Backend",
      empleados: [
        { nombre: "Carlos", habilidades: ["Node", "MongoDB"] },
        { nombre: "Sofia", habilidades: ["Python", "Django", "PostgreSQL"] },
      ],
    },
  ],
};

/* Accede al nombre del primer empleado del departamento Frontend. Accede a la segunda habilidad de Luis. 
Accede a la tercera habilidad de Sofia. Accede al nombre del segundo departamento. */
console.log(
  "Ejercicio 3: ",
  empresa.departamentos[0].empleados[0].nombre,
  empresa.departamentos[0].empleados[1].habilidades[1],
  empresa.departamentos[1].empleados[1].habilidades[2],
  empresa.departamentos[1].nombre,
);
