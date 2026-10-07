import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function Axios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioCreado, setUsuarioCreado] = useState(null);
  const [usuarioActualizado, setUsuarioActualizado] = useState(null);
  const [usuarioEliminado, setUsuarioEliminado] = useState("");

  // =========================
  // GET
  // =========================

  async function obtenerUsuarios() {
    try {
      const respuesta = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsuarios(respuesta.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }

  // =========================
  // POST
  // =========================

  async function crearUsuario() {
    try {
      const respuesta = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Celes",
          age: 30,
          city: "Puebla"
        }
      );

      setUsuarioCreado(respuesta.data);
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }

  // =========================
  // PUT
  // =========================

  async function actualizarUsuario() {
    try {
      const respuesta = await axios.put(
        "https://jsonplaceholder.typicode.com/users/4",
        {
          name: "Celes",
          age: 31,
          city: "Tijuana"
        }
      );

      setUsuarioActualizado(respuesta.data);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  }

  // =========================
  // DELETE
  // =========================

  async function eliminarUsuario() {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/4"
      );

      setUsuarioEliminado(
        "El usuario con ID 4 fue eliminado correctamente."
      );
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  }

  return (
    <>
      <div className="concepto">

        <h1>🚀 Axios</h1>

        <h2>📖 ¿Qué es Axios?</h2>

        <p>
          Axios es una biblioteca de JavaScript que permite hacer
          solicitudes HTTP desde una aplicación.
        </p>

        <p>
          En pocas palabras, Axios permite que nuestro frontend
          se comunique con una API.
        </p>

        <p>
          Por ejemplo, React puede utilizar Axios para pedir
          usuarios, enviar información, actualizar datos o eliminar
          registros.
        </p>

        <div className="ejemplo">
          <strong>React → Axios → API → Servidor</strong>
        </div>

        <h2>🎯 ¿Para qué sirve?</h2>

        <p>
          Axios se utiliza principalmente para realizar solicitudes
          HTTP.
        </p>

        <ul>
          <li>📥 GET → obtener información</li>
          <li>📤 POST → crear información</li>
          <li>✏️ PUT → actualizar información</li>
          <li>🗑️ DELETE → eliminar información</li>
        </ul>

        <h2>📦 Instalación</h2>

        <p>
          Axios no viene incluido automáticamente en React.
          Primero tenemos que instalarlo.
        </p>

        <pre>
          <code>npm install axios</code>
        </pre>

        <p>
          Después podemos importarlo en nuestro componente:
        </p>

        <pre>
          <code>{`import axios from "axios";`}</code>
        </pre>

        <h2>💻 Sintaxis básica</h2>

        <h3>GET</h3>

        <pre>
          <code>{`const respuesta = await axios.get("URL");`}</code>
        </pre>

        <h3>POST</h3>

        <pre>
          <code>{`const respuesta = await axios.post(
  "URL",
  datos
);`}</code>
        </pre>

        <h3>PUT</h3>

        <pre>
          <code>{`const respuesta = await axios.put(
  "URL",
  datos
);`}</code>
        </pre>

        <h3>DELETE</h3>

        <pre>
          <code>{`await axios.delete("URL");`}</code>
        </pre>

        <h2>🔍 ¿Cómo funciona Axios?</h2>

        <p>
          Axios hace una solicitud HTTP hacia una API y recibe
          una respuesta.
        </p>

        <div className="ejemplo">
          <p>1️⃣ React ejecuta una función.</p>
          <p>2️⃣ Axios hace la solicitud.</p>
          <p>3️⃣ La API recibe la solicitud.</p>
          <p>4️⃣ El servidor responde.</p>
          <p>5️⃣ Axios entrega la respuesta a React.</p>
          <p>6️⃣ React utiliza los datos para actualizar la interfaz.</p>
        </div>

        <h2>🧠 Una diferencia importante con Fetch</h2>

        <p>
          Con Fetch normalmente tenemos que convertir manualmente
          la respuesta a JSON:
        </p>

        <pre>
          <code>{`const respuesta = await fetch(url);

const datos = await respuesta.json();`}</code>
        </pre>

        <p>
          Con Axios, los datos JSON normalmente ya están disponibles
          directamente en:
        </p>

        <pre>
          <code>{`respuesta.data`}</code>
        </pre>

        <p>
          Esa es una de las razones por las que Axios suele resultar
          más cómodo para trabajar con APIs.
        </p>

        <h2>📥 GET con Axios</h2>

        <p>
          GET sirve para solicitar información.
        </p>

        <pre>
          <code>{`const respuesta = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

setUsuarios(respuesta.data);`}</code>
        </pre>

        <p>
          Aquí Axios hace una petición GET y la respuesta queda
          almacenada en la variable <strong>respuesta</strong>.
        </p>

        <p>
          Los datos que devuelve la API están en:
        </p>

        <pre>
          <code>{`respuesta.data`}</code>
        </pre>

        <h2>📤 POST con Axios</h2>

        <p>
          POST sirve para enviar información al servidor para crear
          un nuevo recurso.
        </p>

        <pre>
          <code>{`const respuesta = await axios.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "Celes",
    age: 30,
    city: "Puebla"
  }
);`}</code>
        </pre>

        <p>
          El segundo argumento de <strong>axios.post()</strong>
          contiene los datos que queremos enviar.
        </p>

        <h2>✏️ PUT con Axios</h2>

        <p>
          PUT sirve para actualizar un recurso existente.
        </p>

        <pre>
          <code>{`const respuesta = await axios.put(
  "https://jsonplaceholder.typicode.com/users/4",
  {
    name: "Celes",
    age: 31,
    city: "Tijuana"
  }
);`}</code>
        </pre>

        <p>
          El <strong>/4</strong> indica qué usuario queremos
          actualizar.
        </p>

        <h2>🗑️ DELETE con Axios</h2>

        <p>
          DELETE sirve para solicitar la eliminación de un recurso.
        </p>

        <pre>
          <code>{`await axios.delete(
  "https://jsonplaceholder.typicode.com/users/4"
);`}</code>
        </pre>

        <h2>🎮 Pruébalo tú mismo</h2>

        <p>
          Aquí no hay ejercicio que resolver.
          Tú simplemente interactúas con el componente y ves
          qué hace Axios.
        </p>

        {/* =========================
            GET INTERACTIVO
        ========================= */}

        <h3>📥 GET — Obtener usuarios</h3>

        <button onClick={obtenerUsuarios}>
          Obtener usuarios
        </button>

        {usuarios.length > 0 && (
          <div className="resultado">
            <h4>Usuarios recibidos:</h4>

            {usuarios.map((usuario) => (
              <div key={usuario.id}>
                <p>
                  <strong>{usuario.name}</strong>
                </p>

                <p>{usuario.email}</p>

                <p>{usuario.address.city}</p>

                <hr />
              </div>
            ))}
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function obtenerUsuarios() {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsuarios(respuesta.data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}`}</code>
        </pre>

        {/* =========================
            POST INTERACTIVO
        ========================= */}

        <h3>➕ POST — Crear usuario</h3>

        <button onClick={crearUsuario}>
          Crear a Celes
        </button>

        {usuarioCreado && (
          <div className="resultado">
            <h4>Usuario creado:</h4>

            <p>
              Nombre: {usuarioCreado.name}
            </p>

            <p>
              Edad: {usuarioCreado.age}
            </p>

            <p>
              Ciudad: {usuarioCreado.city}
            </p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function crearUsuario() {
  try {
    const respuesta = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: "Celes",
        age: 30,
        city: "Puebla"
      }
    );

    setUsuarioCreado(respuesta.data);
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
}`}</code>
        </pre>

        {/* =========================
            PUT INTERACTIVO
        ========================= */}

        <h3>✏️ PUT — Actualizar usuario</h3>

        <button onClick={actualizarUsuario}>
          Mudar a Celes a Tijuana
        </button>

        {usuarioActualizado && (
          <div className="resultado">
            <h4>Usuario actualizado:</h4>

            <p>
              Nombre: {usuarioActualizado.name}
            </p>

            <p>
              Edad: {usuarioActualizado.age}
            </p>

            <p>
              Ciudad: {usuarioActualizado.city}
            </p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function actualizarUsuario() {
  try {
    const respuesta = await axios.put(
      "https://jsonplaceholder.typicode.com/users/4",
      {
        name: "Celes",
        age: 31,
        city: "Tijuana"
      }
    );

    setUsuarioActualizado(respuesta.data);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
  }
}`}</code>
        </pre>

        {/* =========================
            DELETE INTERACTIVO
        ========================= */}

        <h3>🗑️ DELETE — Eliminar usuario</h3>

        <button onClick={eliminarUsuario}>
          Eliminar usuario
        </button>

        {usuarioEliminado && (
          <div className="resultado">
            <p>{usuarioEliminado}</p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`async function eliminarUsuario() {
  try {
    await axios.delete(
      "https://jsonplaceholder.typicode.com/users/4"
    );

    setUsuarioEliminado(
      "El usuario con ID 4 fue eliminado correctamente."
    );
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
}`}</code>
        </pre>

        <h2>🧠 Axios + React</h2>

        <p>
          Axios no reemplaza a React.
        </p>

        <p>
          Cada uno tiene una responsabilidad diferente:
        </p>

        <div className="ejemplo">
          <p>⚛️ React → construye la interfaz.</p>
          <p>📡 Axios → realiza solicitudes HTTP.</p>
          <p>🌐 API → proporciona o recibe información.</p>
          <p>🗄️ Servidor → procesa los datos.</p>
        </div>

        <h2>🧠 Flujo completo</h2>

        <div className="ejemplo">
          <p>
            👤 Usuario hace clic
          </p>

          <p>↓</p>

          <p>
            ⚛️ React ejecuta la función
          </p>

          <p>↓</p>

          <p>
            📡 Axios realiza la petición
          </p>

          <p>↓</p>

          <p>
            🌐 API procesa la petición
          </p>

          <p>↓</p>

          <p>
            📦 API devuelve información
          </p>

          <p>↓</p>

          <p>
            📡 Axios entrega respuesta
          </p>

          <p>↓</p>

          <p>
            ⚛️ React actualiza el estado
          </p>

          <p>↓</p>

          <p>
            🖥️ La interfaz cambia
          </p>
        </div>

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>{`AXIOS
  │
  ├── GET
  │    └── Obtener datos
  │
  ├── POST
  │    └── Crear datos
  │
  ├── PUT
  │    └── Actualizar datos
  │
  └── DELETE
       └── Eliminar datos

Axios
  ↓
HTTP Request
  ↓
API
  ↓
Response
  ↓
respuesta.data
  ↓
setState()
  ↓
React actualiza la interfaz`}</code>
        </pre>

        <h2>⚠️ Importante: JSONPlaceholder</h2>

        <p>
          Estamos utilizando JSONPlaceholder como API de práctica.
        </p>

        <p>
          Es una API falsa diseñada para practicar solicitudes HTTP.
          Por eso podemos hacer POST, PUT y DELETE sin estar
          modificando una base de datos real nuestra.
        </p>

        <h2>📌 Resumen</h2>

        <ul>
          <li>Axios es una biblioteca para realizar solicitudes HTTP.</li>
          <li>Se instala con <code>npm install axios</code>.</li>
          <li><code>axios.get()</code> obtiene información.</li>
          <li><code>axios.post()</code> crea información.</li>
          <li><code>axios.put()</code> actualiza información.</li>
          <li><code>axios.delete()</code> elimina información.</li>
          <li>La respuesta normalmente se encuentra en <code>respuesta.data</code>.</li>
          <li>Axios puede trabajar junto con React y sus estados.</li>
        </ul>

      </div>

      <Footer />
    </>
  );
}

export default Axios;