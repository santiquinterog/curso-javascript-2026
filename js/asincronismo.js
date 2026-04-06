// ======================================================
// UTILIDAD PARA MOSTRAR MENSAJES EN PANTALLA
// ======================================================
const output = document.getElementById("output");

function log(message) {
  const p = document.createElement("p");
  p.textContent = message;
  output.appendChild(p);
}

function clearOutput() {
  output.innerHTML = "";
}

// ======================================================
// 1. CALLBACKS
// ======================================================

function obtenerDatosCallback(callback) {
  // (2) Se agenda una tarea asincrónica en el navegador (Web APIs)
  setTimeout(() => {
    // (5) Este bloque entra al CALL STACK cuando termina el tiempo

    const exito = true;

    if (exito) {
      callback(null, "Datos obtenidos (callback)");
    } else {
      callback("Error al obtener datos", null);
    }
  }, 2000);
}

function ejecutarCallbacks() {
  clearOutput();

  // (1) Se ejecuta inmediatamente
  log("Paso A");

  // (2) Se llama la función asincrónica
  obtenerDatosCallback((error, data) => {
    // (6) Este callback entra al call stack cuando setTimeout termina

    if (error) {
      log("Error: " + error);
      return;
    }

    // (7) Se ejecuta después de TODO lo síncrono
    log(data);
    log("Paso C");
  });

  // (3) Sigue ejecutando sin esperar
  log("Paso B (no espera)");

  // (4) El call stack queda libre → luego el event loop ejecuta lo pendiente
}

/*
FLUJO REAL:
1 → Paso A
2 → setTimeout se agenda
3 → Paso B
4 → termina código síncrono
5 → setTimeout termina (cola de tareas)
6 → callback entra al stack
7 → Paso C
*/

// ======================================================
// 2. PROMESAS (then / catch / finally)
// ======================================================

function obtenerDatosPromise() {
  return new Promise((resolve, reject) => {
    // (2) Se ejecuta inmediatamente el executor de la promesa

    setTimeout(() => {
      // (5) Se ejecuta después del delay

      const exito = true;

      if (exito) {
        resolve("Datos obtenidos (promesa)");
      } else {
        reject("Error al obtener datos");
      }
    }, 2000);
  });
}

function ejecutarPromesas() {
  clearOutput();

  // (1) Se ejecuta inmediatamente
  log("Paso A");

  obtenerDatosPromise()
    .then((data) => {
      // (6) Microtask queue (mayor prioridad que setTimeout)
      log(data);
      log("Paso C");
    })
    .catch((error) => {
      // (6) También microtask
      log("Error: " + error);
    })
    .finally(() => {
      // (7) Siempre se ejecuta al final
      log("Finalizó la operación (finally)");
    });

  // (3) NO espera la promesa
  log("Paso B (no espera)");

  // (4) Termina código síncrono
}

/*
FLUJO REAL:
1 → Paso A
2 → Se crea la promesa (executor corre)
3 → Paso B
4 → Fin del código síncrono
5 → setTimeout resuelve la promesa
6 → .then/.catch entran como microtasks
7 → finally se ejecuta
*/

// ======================================================
// 3. ASYNC / AWAIT (try / catch / finally)
// ======================================================

async function ejecutarAsyncAwait() {
  clearOutput();

  // (1) Se ejecuta inmediatamente
  log("Paso A");

  try {
    // (2) Se llama la promesa
    // (3) await pausa ESTA función (pero NO bloquea el hilo)
    const data = await obtenerDatosPromise();

    // (6) Cuando la promesa se resuelve, continúa aquí
    log(data);
    log("Paso C");
  } catch (error) {
    // (6) Si falla, entra aquí
    log("Error: " + error);
  } finally {
    // (7) Siempre se ejecuta
    log("Finalizó la operación (finally)");
  }

  // (8) Continúa después del await
  log("Paso B (después del await)");
}

/*
FLUJO REAL:
1 → Paso A
2 → Se llama promesa
3 → await pausa la función
4 → El hilo sigue libre (no bloquea)
5 → promesa se resuelve
6 → continúa ejecución
7 → finally
8 → Paso B
*/

// ======================================================
// EVENTOS
// ======================================================
document
  .getElementById("btn-callback")
  .addEventListener("click", ejecutarCallbacks);

document
  .getElementById("btn-promise")
  .addEventListener("click", ejecutarPromesas);

document
  .getElementById("btn-async")
  .addEventListener("click", ejecutarAsyncAwait);
