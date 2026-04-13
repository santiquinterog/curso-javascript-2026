// URL base de la API. Todos los endpoints parten de aquí.
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// ─── Helpers ────────────────────────────────────────────────────────────────

// Muestra un spinner de carga dentro del contenedor indicado por su id.
// Se llama justo antes de lanzar cada petición para dar feedback visual al usuario.
function showLoading(boxId) {
  document.getElementById(boxId).innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <span>Cargando...</span>
    </div>`;
}

// Muestra la respuesta de la API formateada como JSON dentro del contenedor.
// - boxId: id del elemento HTML donde se pintará el resultado.
// - method: string con el verbo HTTP usado (GET, POST, PUT, DELETE).
// - data: objeto JavaScript con la respuesta de la API.
// JSON.stringify con indentación de 2 espacios hace la respuesta legible.
function showResult(boxId, method, data) {
  // Mapa de verbo HTTP → clase CSS para colorear la etiqueta de forma diferente.
  const labels = {
    GET: "label-get",
    POST: "label-post",
    PUT: "label-put",
    DELETE: "label-delete",
  };
  const box = document.getElementById(boxId);
  box.innerHTML = `
    <span class="label ${labels[method]}">${method}</span>
    <pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Muestra el mensaje de error capturado en el bloque catch dentro del contenedor.
// Se usa en todas las funciones async para manejar fallos de red o respuestas HTTP 4xx/5xx.
function showError(boxId, error) {
  document.getElementById(boxId).innerHTML = `
    <span class="label label-error">ERROR</span>
    <pre style="color:#fca5a5">${error.message}</pre>`;
}

// ─── GET /posts ──────────────────────────────────────────────────────────────

// GET /posts — Obtiene todos los posts de la API (devuelve un array de 100 objetos).
async function getPosts() {
  const resultBox = "result-get";
  const grid = document.getElementById("posts-grid");

  // Mostramos el spinner y limpiamos las tarjetas anteriores antes de la petición.
  showLoading(resultBox);
  grid.innerHTML = "";

  try {
    // fetch() devuelve una Promise; con await esperamos a que la respuesta llegue.
    const response = await fetch(BASE_URL);

    // response.ok es true cuando el status HTTP está entre 200–299.
    // Si hay un error (404, 500…) lo lanzamos manualmente para que lo capture el catch.
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    // response.json() también devuelve una Promise; await la resuelve al objeto JS.
    const posts = await response.json();

    // En el result-box mostramos solo los 3 primeros + un indicador del total
    // para no saturar la pantalla con los 100 registros completos.
    showResult(
      resultBox,
      "GET",
      posts.slice(0, 3).concat({ "...": `y ${posts.length - 3} más` }),
    );

    // Pintamos tarjetas solo con los primeros 12 posts para no sobrecargar el DOM.
    posts.slice(0, 12).forEach((post) => {
      const card = document.createElement("div");
      card.className = "post-card";
      // Interpolamos los datos del post dentro del HTML de la tarjeta.
      card.innerHTML = `
        <div class="post-id"># ${post.id} · userId: ${post.userId}</div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>`;
      grid.appendChild(card);
    });
  } catch (error) {
    // Capturamos errores de red (sin conexión) o los errores HTTP que lanzamos arriba.
    showError(resultBox, error);
  }
}

// ─── POST /posts ─────────────────────────────────────────────────────────────

// POST /posts — Crea un nuevo post enviando datos en el cuerpo de la petición.
async function createPost() {
  showLoading("result-post");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      // body debe ser un string JSON, por eso usamos JSON.stringify().
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      // Indicamos al servidor que estamos enviando JSON con el header Content-Type.
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const newPost = await response.json();
    // JSONPlaceholder devuelve el recurso creado con id: 101
    // (es una API de prueba; no persiste realmente el dato).
    showResult("result-post", "POST", newPost);
  } catch (error) {
    showError("result-post", error);
  }
}

// ─── PUT /posts/1 ─────────────────────────────────────────────────────────────

// PUT /posts/1 — Reemplaza completamente el post con id=1.
// A diferencia de PATCH (actualización parcial), PUT envía el recurso entero.
async function updatePost() {
  showLoading("result-put");

  try {
    // Añadimos el id del recurso a actualizar directamente en la URL: /posts/1
    const response = await fetch(`${BASE_URL}/1`, {
      method: "PUT",
      // Se envía el objeto completo incluyendo el id del post.
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    // La API devuelve el objeto tal como lo enviamos, confirmando la actualización.
    const updatedPost = await response.json();
    showResult("result-put", "PUT", updatedPost);
  } catch (error) {
    showError("result-put", error);
  }
}

// ─── DELETE /posts/1 ──────────────────────────────────────────────────────────

// DELETE /posts/1 — Elimina el post con id=1.
// No necesita body ni Content-Type; solo el método y la URL con el id.
async function deletePost() {
  showLoading("result-delete");

  try {
    // El id del recurso a eliminar va en la URL: /posts/1
    const response = await fetch(`${BASE_URL}/1`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    // JSONPlaceholder responde con status 200 y un objeto vacío {} al borrar.
    const result = await response.json();
    // Construimos un objeto descriptivo para mostrar en pantalla,
    // ya que la respuesta real ({}) no aporta mucha información al usuario.
    showResult("result-delete", "DELETE", {
      status: response.status,
      message: "Post eliminado correctamente",
      response: result,
    });
  } catch (error) {
    showError("result-delete", error);
  }
}

// ─── Event listeners ──────────────────────────────────────────────────────────

// Enlazamos cada botón del HTML con su función async correspondiente.
// Al hacer clic se dispara la petición y el resultado aparece en pantalla.
document.getElementById("btn-get").addEventListener("click", getPosts);
document.getElementById("btn-post").addEventListener("click", createPost);
document.getElementById("btn-put").addEventListener("click", updatePost);
document.getElementById("btn-delete").addEventListener("click", deletePost);
