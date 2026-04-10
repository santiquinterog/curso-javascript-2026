// ======================================================
// FETCH CON PROMESAS — Rick & Morty API
// ======================================================

const fetchOutput = document.getElementById("fetch-output");

function logFetch(message) {
  const p = document.createElement("p");
  p.textContent = message;
  fetchOutput.appendChild(p);
}

function clearFetchOutput() {
  fetchOutput.innerHTML = "";
  document.getElementById("cards-container").innerHTML = "";
}

function renderCards(characters) {
  const container = document.getElementById("cards-container");

  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "card";

    const statusClass = character.status.toLowerCase().replace(" ", "-");

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;

    const body = document.createElement("div");
    body.className = "card-body";

    const name = document.createElement("h3");
    name.textContent = character.name;

    const status = document.createElement("p");
    status.className = `status ${statusClass}`;
    const dot = document.createElement("span");
    dot.className = "status-dot";
    status.appendChild(dot);
    status.append(` ${character.status} — ${character.species}`);

    const gender = document.createElement("p");
    gender.textContent = `Género: ${character.gender}`;

    const origin = document.createElement("p");
    origin.textContent = `Origen: ${character.origin.name}`;

    body.appendChild(name);
    body.appendChild(status);
    body.appendChild(gender);
    body.appendChild(origin);

    card.appendChild(img);
    card.appendChild(body);
    container.appendChild(card);
  });
}

// --- Método 1: Promesas (.then / .catch / .finally) ---

function cargarPersonajesPromesa() {
  clearFetchOutput();
  logFetch("Iniciando petición con Promesas...");

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      logFetch(`✅ ${data.results.length} personajes obtenidos (Promesas)`);
      renderCards(data.results);
    })
    .catch((error) => {
      logFetch("❌ Error: " + error.message);
    })
    .finally(() => {
      logFetch("Petición finalizada (Promesas)");
    });
}

// --- Método 2: Async / Await (try / catch / finally) ---

async function cargarPersonajesAsync() {
  clearFetchOutput();
  logFetch("Iniciando petición con Async/Await...");

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    logFetch(`✅ ${data.results.length} personajes obtenidos (Async/Await)`);
    renderCards(data.results);
  } catch (error) {
    logFetch("❌ Error: " + error.message);
  } finally {
    logFetch("Petición finalizada (Async/Await)");
  }
}

// ======================================================
// EVENTOS
// ======================================================
document
  .getElementById("btn-fetch-promise")
  .addEventListener("click", cargarPersonajesPromesa);

document
  .getElementById("btn-fetch-async")
  .addEventListener("click", cargarPersonajesAsync);
