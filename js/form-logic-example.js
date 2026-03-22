/* ======================================================
   FORMULARIO CON SELECTORES BÁSICOS
   ====================================================== */

// Obtener formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  /* ============================
     1. INPUT TEXT
     ============================ */
  const nombreInput = document.getElementById("nombre");
  const nombre = nombreInput.value;

  /* ============================
     2. RADIO BUTTON
     ============================ */
  const radios = document.getElementsByName("genero");

  let genero = "No seleccionado";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      genero = radios[i].value;
      break;
    }
  }

  /* ============================
     3. CHECKBOX
     ============================ */
  const checkboxes = document.getElementsByName("intereses");

  let intereses = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      intereses.push(checkboxes[i].value);
    }
  }

  /* ============================
     4. SELECT
     ============================ */
  const selectPais = document.getElementById("pais");
  const pais = selectPais.value;

  /* ============================
     5. VALIDACIÓN SIMPLE
     ============================ */
  if (nombre === "" || pais === "") {
    alert("Completa nombre y país");
    return;
  }

  /* ============================
     6. MOSTRAR RESULTADO
     ============================ */
  const resultado = document.getElementById("resultado");

  resultado.innerHTML =
    "<p><strong>Nombre:</strong> " +
    nombre +
    "</p>" +
    "<p><strong>Género:</strong> " +
    genero +
    "</p>" +
    "<p><strong>Intereses:</strong> " +
    intereses.join(", ") +
    "</p>" +
    "<p><strong>País:</strong> " +
    pais +
    "</p>";

  /* ============================
     7. LIMPIAR FORMULARIO
     ============================ */
  formulario.reset();
});
