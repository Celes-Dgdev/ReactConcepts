import { useState } from "react";
import Footer from "../components/Footer";

function AsyncAwait() {
  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // FUNCIÓN ASÍNCRONA
  // =========================

  async function saludar() {
    return "Hola Celes";
  }

  // =========================
  // ASYNC + AWAIT
  // =========================

  async function obtenerMensaje() {
    const resultado = await saludar();

    setMensaje(resultado);
  }

  // =========================
  // SIMULAR UNA PETICIÓN
  // =========================

  function esperar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("La espera terminó.");
      }, 2000);
    });
  }

  async function ejecutarEspera() {
    setMensaje("Esperando...");

    const resultado = await esperar();

    setMensaje(resultado);
  }

  // =========================
  // ASYNC + AWAIT + AXIOS
  // =========================

  async function obtenerUsuario() {
    try {
      setCargando(true);
      setError("");

      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo obtener el usuario.");
      }

      const datos = await respuesta.json();

      setUsuario(datos);
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <div className="concepto">

        <h1>⏳ Async / Await</h1>

        <h2>📖 ¿Qué es async / await?</h2>

        <p>
          <strong>async</strong> y <strong>await</strong> son palabras
          clave de JavaScript que nos permiten trabajar de una manera
          más sencilla con operaciones asíncronas.
        </p>

        <p>
          Son especialmente importantes cuando trabajamos con:
        </p>

        <ul>
          <li>🌐 APIs</li>
          <li>📡 Fetch</li>
          <li>🚀 Axios</li>
          <li>⏳ Promesas</li>
          <li>🗄️ Bases de datos</li>
        </ul>

        <h2>🎯 ¿Para qué sirve?</h2>

        <p>
          Normalmente JavaScript ejecuta instrucciones de arriba hacia
          abajo.
        </p>

        <p>
          Pero algunas operaciones tardan tiempo. Por ejemplo,
          pedir información a una API.
        </p>

        <p>
          JavaScript no puede quedarse bloqueado esperando durante
          toda la petición. Por eso existen las operaciones
          asíncronas.
        </p>

        <div className="ejemplo">
          <p>⚛️ React inicia una petición.</p>
          <p>↓</p>
          <p>🌐 La API procesa la solicitud.</p>
          <p>↓</p>
          <p>⏳ Tarda cierto tiempo.</p>
          <p>↓</p>
          <p>📦 Regresa la respuesta.</p>
          <p>↓</p>
          <p>⚛️ React utiliza los datos.</p>
        </div>

        <h2>🧠 Primero: ¿qué significa async?</h2>

        <p>
          Cuando colocamos <strong>async</strong> delante de una
          función, estamos indicando que esa función es asíncrona.
        </p>

        <pre>
          <code>{`async function saludar() {
  return "Hola";
}`}</code>
        </pre>

        <p>
          Una función <strong>async</strong> siempre devuelve una
          <strong> Promise</strong>.
        </p>

        <p>
          Aunque nosotros escribamos directamente un texto:
        </p>

        <pre>
          <code>{`return "Hola";`}</code>
        </pre>

        <p>
          JavaScript lo convierte conceptualmente en una Promesa
          resuelta.
        </p>

        <h2>🧠 ¿Qué es una Promise?</h2>

        <p>
          Una Promise representa un resultado que estará disponible
          ahora o en algún momento futuro.
        </p>

        <p>Puede estar en tres estados:</p>

        <ul>
          <li>⏳ Pending → todavía está esperando</li>
          <li>✅ Fulfilled → terminó correctamente</li>
          <li>❌ Rejected → terminó con error</li>
        </ul>

        <div className="ejemplo">
          <p>
            Promise = "Te prometo que después te voy a entregar
            un resultado."
          </p>
        </div>

        <h2>⏳ ¿Qué hace await?</h2>

        <p>
          <strong>await</strong> espera a que una Promise termine
          antes de continuar con esa función.
        </p>

        <pre>
          <code>{`const resultado = await saludar();`}</code>
        </pre>

        <p>
          Podemos imaginarlo como:
        </p>

        <div className="ejemplo">
          <p>
            "Espera el resultado de esta operación y después
            continúa."
          </p>
        </div>

        <p>
          Importante: <strong>await</strong> solamente puede utilizarse
          dentro de una función <strong>async</strong> en este contexto.
        </p>

        <h2>💻 Sintaxis básica</h2>

        <pre>
          <code>{`async function obtenerDatos() {

  const resultado = await algunaOperacion();

  console.log(resultado);
}`}</code>
        </pre>

        <p>El flujo sería:</p>

        <div className="ejemplo">
          <p>1️⃣ Entra a la función.</p>
          <p>2️⃣ Ejecuta la operación.</p>
          <p>3️⃣ await espera su resultado.</p>
          <p>4️⃣ Guarda el resultado.</p>
          <p>5️⃣ Continúa con la siguiente línea.</p>
        </div>

        <h2>🔍 Ejemplo sencillo</h2>

        <p>Tenemos una función:</p>

        <pre>
          <code>{`async function saludar() {
  return "Hola Celes";
}`}</code>
        </pre>

        <p>
          Y otra función que utiliza <strong>await</strong>:
        </p>

        <pre>
          <code>{`async function obtenerMensaje() {
  const resultado = await saludar();

  console.log(resultado);
}`}</code>
        </pre>

        <p>
          Primero se ejecuta <strong>saludar()</strong>.
        </p>

        <p>
          Después <strong>await</strong> espera su resultado.
        </p>

        <p>
          Finalmente guardamos el resultado en
          <strong> resultado</strong>.
        </p>

        <h2>🎮 Pruébalo tú mismo</h2>

        <h3>🟢 Ejemplo 1 — async + await</h3>

        <p>
          Dale clic y observa cómo el resultado de una función
          asíncrona llega a otra función.
        </p>

        <button onClick={obtenerMensaje}>
          Obtener mensaje
        </button>

        {mensaje && (
          <div className="resultado">
            <p>
              📦 Resultado: <strong>{mensaje}</strong>
            </p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function saludar() {
  return "Hola Celes";
}

async function obtenerMensaje() {
  const resultado = await saludar();

  setMensaje(resultado);
}`}</code>
        </pre>

        <h3>⏳ Ejemplo 2 — esperar una operación</h3>

        <p>
          Aquí vamos a simular una operación que tarda
          <strong> 2 segundos</strong>.
        </p>

        <p>
          Esto nos ayuda a visualizar qué significa realmente
          <strong> await</strong>.
        </p>

        <button onClick={ejecutarEspera}>
          Esperar resultado
        </button>

        {mensaje === "Esperando..." && (
          <div className="resultado">
            <p>⏳ Esperando respuesta...</p>
          </div>
        )}

        {mensaje === "La espera terminó." && (
          <div className="resultado">
            <p>✅ {mensaje}</p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`function esperar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("La espera terminó.");
    }, 2000);
  });
}

async function ejecutarEspera() {
  setMensaje("Esperando...");

  const resultado = await esperar();

  setMensaje(resultado);
}`}</code>
        </pre>

        <h2>🌐 Async / Await con una API</h2>

        <p>
          Aquí es donde este concepto empieza a conectar directamente
          con lo que ya vimos de Fetch y Axios.
        </p>

        <p>
          Una petición HTTP tarda cierto tiempo en regresar.
          Por eso utilizamos <strong>async / await</strong>.
        </p>

        <pre>
          <code>{`async function obtenerUsuario() {

  const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const datos = await respuesta.json();

  console.log(datos);
}`}</code>
        </pre>

        <p>
          Observa que aquí tenemos <strong>dos await</strong>.
        </p>

        <div className="ejemplo">
          <p>
            <strong>await fetch()</strong>
          </p>

          <p>
            ↓
          </p>

          <p>
            Esperamos la respuesta HTTP.
          </p>

          <p>
            ↓
          </p>

          <p>
            <strong>await respuesta.json()</strong>
          </p>

          <p>
            ↓
          </p>

          <p>
            Esperamos convertir la respuesta a JSON.
          </p>

          <p>
            ↓
          </p>

          <p>
            📦 Obtenemos los datos.
          </p>
        </div>

        <h3>🎮 Ejemplo 3 — API real</h3>

        <p>
          Ahora sí: hacemos una petición a una API y mostramos
          el usuario que recibimos.
        </p>

        <button onClick={obtenerUsuario}>
          Obtener usuario
        </button>

        {cargando && (
          <div className="resultado">
            <p>⏳ Cargando usuario...</p>
          </div>
        )}

        {error && (
          <div className="resultado">
            <p>❌ {error}</p>
          </div>
        )}

        {usuario && (
          <div className="resultado">
            <h4>👤 Usuario recibido</h4>

            <p>
              <strong>Nombre:</strong> {usuario.name}
            </p>

            <p>
              <strong>Email:</strong> {usuario.email}
            </p>

            <p>
              <strong>Ciudad:</strong> {usuario.address.city}
            </p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function obtenerUsuario() {
  try {
    setCargando(true);
    setError("");

    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!respuesta.ok) {
      throw new Error("No se pudo obtener el usuario.");
    }

    const datos = await respuesta.json();

    setUsuario(datos);
  } catch (error) {
    setError(error.message);
  } finally {
    setCargando(false);
  }
}`}</code>
        </pre>

        <h2>🚀 Async / Await con Axios</h2>

        <p>
          Esto conecta directamente con el tema anterior.
        </p>

        <p>
          Con Axios podemos hacer:
        </p>

        <pre>
          <code>{`async function obtenerUsuarios() {

  const respuesta = await axios.get(url);

  setUsuarios(respuesta.data);
}`}</code>
        </pre>

        <p>
          Aquí <strong>await</strong> espera a que Axios reciba
          la respuesta.
        </p>

        <p>
          Después podemos utilizar:
        </p>

        <pre>
          <code>{`respuesta.data`}</code>
        </pre>

        <div className="ejemplo">
          <p>👤 Usuario hace clic</p>
          <p>↓</p>
          <p>⚛️ React ejecuta función async</p>
          <p>↓</p>
          <p>📡 Axios / Fetch realiza petición</p>
          <p>↓</p>
          <p>⏳ await espera la Promise</p>
          <p>↓</p>
          <p>📦 llega la respuesta</p>
          <p>↓</p>
          <p>⚛️ React actualiza el estado</p>
          <p>↓</p>
          <p>🖥️ aparece el resultado</p>
        </div>

        <h2>⚠️ ¿Por qué usamos try / catch?</h2>

        <p>
          Las operaciones asíncronas pueden fallar.
        </p>

        <p>
          Por ejemplo:
        </p>

        <ul>
          <li>❌ La API puede estar caída.</li>
          <li>❌ Puede existir un error de red.</li>
          <li>❌ La URL puede ser incorrecta.</li>
          <li>❌ El servidor puede responder con un error.</li>
        </ul>

        <p>
          Por eso podemos combinar:
        </p>

        <pre>
          <code>{`try {
  const respuesta = await fetch(url);
} catch (error) {
  console.error(error);
}`}</code>
        </pre>

        <h2>🧠 async / await vs .then()</h2>

        <p>
          Antes de async / await también podemos trabajar con
          <strong> .then()</strong>.
        </p>

        <pre>
          <code>{`fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.error(error);
  });`}</code>
        </pre>

        <p>
          Con async / await podemos escribir una lógica equivalente
          de una forma que suele resultar más fácil de leer:
        </p>

        <pre>
          <code>{`async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}`}</code>
        </pre>

        <p>
          No significa que <strong>.then()</strong> esté mal.
          Son diferentes formas de trabajar con Promesas.
        </p>

        <h2>🧠 Algo MUY importante</h2>

        <p>
          <strong>await no hace que JavaScript entero se congele.</strong>
        </p>

        <p>
          await pausa la ejecución de esa función asíncrona mientras
          espera el resultado de la Promise.
        </p>

        <p>
          El resto de la aplicación puede continuar funcionando.
        </p>

        <div className="ejemplo">
          <p>
            🧠 Imagina que tú haces un pedido en un restaurante.
          </p>

          <p>
            El mesero dice: "Espera mientras preparo tu comida."
          </p>

          <p>
            Tú esperas tu comida...
          </p>

          <p>
            🍽️ Pero el restaurante no deja de atender a las demás
            personas.
          </p>
        </div>

        <h2>🧠 Flujo completo</h2>

        <pre>
          <code>{`async
 ↓
La función puede trabajar con Promesas
 ↓
await
 ↓
Espera el resultado de una Promise
 ↓
La Promise termina
 ↓
await recibe el resultado
 ↓
La función continúa
 ↓
React actualiza el estado
 ↓
La interfaz cambia`}</code>
        </pre>

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>{`ASYNC / AWAIT
      │
      ├── async
      │     └── convierte la función en asíncrona
      │
      └── await
            └── espera una Promise
                  │
                  ↓
             resultado
                  │
                  ↓
              setState()
                  │
                  ↓
             React renderiza


API
 ↓
fetch / axios
 ↓
Promise
 ↓
await
 ↓
respuesta
 ↓
datos
 ↓
estado
 ↓
interfaz`}</code>
        </pre>

        <h2>📌 Resumen</h2>

        <ul>
          <li>
            <strong>async</strong> convierte una función en asíncrona.
          </li>

          <li>
            Una función <strong>async</strong> devuelve una Promise.
          </li>

          <li>
            <strong>await</strong> espera el resultado de una Promise.
          </li>

          <li>
            await hace que el código sea más fácil de leer.
          </li>

          <li>
            async / await se utiliza muchísimo con Fetch y Axios.
          </li>

          <li>
            <strong>try / catch</strong> permite manejar errores.
          </li>
        </ul>

      </div>

      <Footer />
    </>
  );
}

export default AsyncAwait;