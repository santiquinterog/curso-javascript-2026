/* ======================================================
   LOCALSTORAGE + DOM
   ======================================================

   localStorage permite guardar datos en el navegador
   de forma persistente (no se borran al recargar).
*/

/* ============================
   1. OBTENER DATOS
   ============================ */

// Si no hay datos, usamos arreglo vacío
function obtenerUsuarios() {
  const data = localStorage.getItem("usuarios");

  if (data === null) {
    return [];
  }

  return JSON.parse(data);
}

/* ============================
   2. GUARDAR DATOS
   ============================ */

function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

/* ============================
   3. MOSTRAR EN EL DOM
   ============================ */

function renderUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  const usuarios = obtenerUsuarios();

  for (let i = 0; i < usuarios.length; i++) {
    const li = document.createElement("li");

    li.innerText = usuarios[i];

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "X";

    btnEliminar.addEventListener("click", function () {
      eliminarUsuario(i);
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }
}

/* ============================
   4. AGREGAR USUARIO
   ============================ */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("nombre");
  const nombre = input.value;

  if (nombre === "") {
    alert("Escribe un nombre");
    return;
  }

  const usuarios = obtenerUsuarios();

  usuarios.push(nombre);

  guardarUsuarios(usuarios);

  input.value = "";

  renderUsuarios();
});

/* ============================
   5. ELIMINAR USUARIO
   ============================ */

function eliminarUsuario(index) {
  const usuarios = obtenerUsuarios();

  usuarios.splice(index, 1);

  guardarUsuarios(usuarios);

  renderUsuarios();
}

function eliminarTodo() {
  localStorage.removeItem("usuarios");
  renderUsuarios();
}

/* ============================
   6. INICIALIZAR
   ============================ */

// Cargar datos al abrir la página
renderUsuarios();
