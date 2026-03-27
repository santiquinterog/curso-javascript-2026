/* ======================================================
   FORMULARIO CON SELECTORES BÁSICOS
   ====================================================== */

/* ======================================================
   CARGA DE DATOS: DEPARTAMENTOS Y CIUDADES
   ====================================================== */
let departamentosData = [];
let ciudadesData = [];

fetch("/db/departamentos-ciudades.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    departamentosData = data.departamentos;
    ciudadesData = data.ciudades;
    popularDepartamentos();
  });

function popularDepartamentos() {
  const selectDep = document.getElementById("departamento");
  departamentosData.forEach(function (dep) {
    const option = document.createElement("option");
    option.value = dep.id;
    option.textContent = dep.nombre;
    selectDep.appendChild(option);
  });
}

document.getElementById("departamento").addEventListener("change", function () {
  const depId = parseInt(this.value);
  const selectCiudad = document.getElementById("ciudad");

  selectCiudad.innerHTML = '<option value="">Seleccione</option>';

  if (depId) {
    const ciudadesFiltradas = ciudadesData.filter(function (city) {
      return city.departamento_id === depId;
    });
    ciudadesFiltradas.forEach(function (ciudad) {
      const option = document.createElement("option");
      option.value = ciudad.nombre;
      option.textContent = ciudad.nombre;
      selectCiudad.appendChild(option);
    });
  }
});

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
     4. SELECT DEPARTAMENTO Y CIUDAD
     ============================ */
  const selectDepartamento = document.getElementById("departamento");
  const departamentoNombre =
    selectDepartamento.options[selectDepartamento.selectedIndex].text;

  const selectCiudad = document.getElementById("ciudad");
  const ciudad = selectCiudad.value;

  /* ============================
     5. VALIDACIÓN SIMPLE
     ============================ */
  if (
    nombre === "" ||
    !selectDepartamento.value ||
    ciudad === "" ||
    genero === "No seleccionado" ||
    intereses.length === 0
  ) {
    alert("Debes completar todos los campos");
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
    "<p><strong>Departamento:</strong> " +
    departamentoNombre +
    "</p>" +
    "<p><strong>Ciudad:</strong> " +
    ciudad +
    "</p>";

  /* ============================
     7. LIMPIAR FORMULARIO
     ============================ */
  formulario.reset();
  document.getElementById("ciudad").innerHTML =
    '<option value="">Seleccione</option>';
});
