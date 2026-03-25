/* ======================================================
   MANIPULACIÓN DEL DOM EN JAVASCRIPT
   ======================================================

   El DOM (Document Object Model) representa la estructura
   de una página HTML como un árbol de elementos.

   Con JavaScript podemos:
   - Obtener elementos
   - Modificar contenido
   - Cambiar atributos
   - Manipular clases
   - Crear o eliminar elementos
*/

/* ======================================================
   1. OBTENER ELEMENTOS DEL DOM
   ====================================================== */

// Obtener elemento por ID
const titulo = document.getElementById("titulo");

// Obtener elementos por clase (devuelve HTMLCollection)
const items = document.getElementsByClassName("item");

// Obtener elementos por etiqueta (tag)
const parrafos = document.getElementsByTagName("p");

// Selector CSS (devuelve el primer elemento que coincide)
const contenedor = document.querySelector(".contenedor");

// Selector CSS (devuelve una lista de elementos)
const botones = document.querySelectorAll(".btn");

console.log(titulo);
console.log(items);
console.log(parrafos);
console.log(contenedor);
console.log(botones);

/* ======================================================
   2. MODIFICAR CONTENIDO
   ====================================================== */

// innerText -> cambia el texto visible
titulo.innerText = "Nuevo título con JavaScript";

// innerHTML -> permite insertar HTML
contenedor.innerHTML = "<p>Este párrafo fue agregado con innerHTML</p>";

/* ======================================================
   3. OBTENER Y MODIFICAR ATRIBUTOS
   ====================================================== */

const enlace = document.querySelector("a");

// Obtener atributo
let url = enlace.getAttribute("href");
console.log("URL:", url);

// Modificar atributo
enlace.setAttribute("href", "https://google.com");

// Crear un nuevo atributo
enlace.setAttribute("target", "_blank");

// Eliminar atributo
enlace.removeAttribute("target");

/* ======================================================
   4. MANIPULAR CLASES
   ====================================================== */

const caja = document.querySelector(".caja");

// Agregar clase
caja.classList.add("activa");

// Eliminar clase
caja.classList.remove("activa");

// Alternar clase (si existe la quita, si no existe la agrega)
caja.classList.toggle("destacada");

// Verificar si tiene una clase
let tieneClase = caja.classList.contains("destacada");

console.log("¿Tiene clase destacada?", tieneClase);

// También se pueden manipular clases directamente
caja.className = "caja nueva-clase";

/* ======================================================
   5. CREAR ELEMENTOS
   ====================================================== */

// Crear un elemento
const nuevoParrafo = document.createElement("p");

// Agregar contenido
nuevoParrafo.innerText = "Este es un párrafo creado con JavaScript";

// Agregar clase
nuevoParrafo.classList.add("parrafo-dinamico");

// Agregarlo al DOM
document.body.appendChild(nuevoParrafo);

/* ======================================================
   6. INSERTAR ELEMENTOS EN UN CONTENEDOR
   ====================================================== */

const lista = document.querySelector("#lista");

// Crear elemento
const nuevoItem = document.createElement("li");

nuevoItem.innerText = "Nuevo elemento de lista";

// Insertar dentro de la lista
lista.appendChild(nuevoItem);

// Insertar al inicio
const primerItem = document.createElement("li");
primerItem.innerText = "Primer elemento";

lista.prepend(primerItem);

/* ======================================================
   7. ELIMINAR ELEMENTOS
   ====================================================== */

const elementoEliminar = document.querySelector(".eliminar");

// Forma 1
elementoEliminar.remove();

// Forma 2 (desde el padre)

const padre = document.querySelector("#lista");
const hijo = document.querySelector("#lista li");

padre.removeChild(hijo);

/* ======================================================
   8. EVENTOS
   ====================================================== */

/* -----------------------------
   EVENTO INPUT
   -----------------------------
   Muestra en tiempo real lo que el usuario escribe
*/

const inputNombre = document.getElementById("inputNombre");
const textoNombre = document.getElementById("textoNombre");

inputNombre.addEventListener("input", () => {
  textoNombre.innerText = "Hola, " + inputNombre.value;
});

/* -----------------------------
   EVENTO MOUSEOVER - MOUSEOUT
   -----------------------------
   Cambia el estilo al pasar el mouse
*/

const boxHover = document.getElementById("boxHover");

boxHover.addEventListener("mouseover", function () {
  boxHover.style.backgroundColor = "lightblue";
});

boxHover.addEventListener("mouseout", () => {
  boxHover.style.backgroundColor = "#ccc";
});

/* -----------------------------
   EVENTO CLICK
   -----------------------------
*/

// Crear un botón dinámicamente

const boton = document.createElement("button");

boton.innerText = "Haz clic 2";
boton.classList.add("btn");

document.body.appendChild(boton);

// Cambiar texto al hacer clic

// Forma 1: desde JavaScript
boton.addEventListener("click", function () {
  boton.innerText = "¡Clic detectado!";
});

// Forma 2: desde HTML (onclick)
function cambiarTexto(event) {
  console.log(event); // muestra el evento completo

  event.target.innerText = "¡Clic detectado desde HTML!";
}
