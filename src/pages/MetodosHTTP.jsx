import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function MetodosHTTP() {

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioCreado, setUsuarioCreado] = useState(null);
  const [usuarioActualizado, setUsuarioActualizado] = useState(null);
  const [usuarioEliminado, setUsuarioEliminado] = useState("");


  /*
    ============================================================
    GET
    ============================================================

    GET se utiliza para obtener información de una API.
  */

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


  /*
    ============================================================
    POST
    ============================================================

    POST se utiliza para crear información nueva.
  */

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


  /*
    ============================================================
    PUT
    ============================================================

    PUT se utiliza para actualizar un recurso existente.
  */

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


  /*
    ============================================================
    DELETE
    ============================================================

    DELETE se utiliza para eliminar información.
  */

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

        <h1>🌐 GET / POST / PUT / DELETE</h1>


        {/* ================================================== */}
        {/* ¿QUÉ SON? */}
        {/* ================================================== */}

        <section>

          <h2>📖 ¿Qué son?</h2>

          <p>
            Cuando una aplicación necesita comunicarse con una API,
            utiliza peticiones HTTP para enviar o recibir información.
          </p>

          <p>
            Los cuatro métodos principales que vamos a estudiar son:
          </p>

          <ul>

            <li>
              <strong>GET</strong> → Obtener información
            </li>

            <li>
              <strong>POST</strong> → Crear información
            </li>

            <li>
              <strong>PUT</strong> → Actualizar información
            </li>

            <li>
              <strong>DELETE</strong> → Eliminar información
            </li>

          </ul>

        </section>


        {/* ================================================== */}
        {/* AXIOS */}
        {/* ================================================== */}

        <section>

          <h2>📦 ¿Qué tiene que ver Axios?</h2>

          <p>
            <strong>Axios</strong> es una librería de JavaScript
            que nos permite realizar peticiones HTTP.
          </p>

          <p>
            En React podemos utilizar Axios para comunicarnos
            con una API.
          </p>

          <p>
            Axios tiene métodos que corresponden directamente
            con los métodos HTTP:
          </p>

          <pre>
            <code>{`axios.get()
axios.post()
axios.put()
axios.delete()`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* MAPA GENERAL */}
        {/* ================================================== */}

        <section>

          <h2>🧠 Mapa general</h2>

          <pre>
            <code>{`GET
  ↓
Obtener información


POST
  ↓
Crear información


PUT
  ↓
Actualizar información


DELETE
  ↓
Eliminar información`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* GET */}
        {/* ================================================== */}

        <section>

          <h2>🔵 GET — Obtener información</h2>

          <h3>🎯 ¿Para qué sirve?</h3>

          <p>
            <strong>GET</strong> se utiliza para solicitar
            información a una API.
          </p>

          <p>
            Por ejemplo, podemos pedirle a una API
            que nos entregue todos sus usuarios.
          </p>


          <h3>💻 Sintaxis</h3>

          <pre>
            <code>{`const respuesta = await axios.get(URL);

console.log(respuesta.data);`}</code>
          </pre>


          <h3>🧪 Ejemplo</h3>

          <pre>
            <code>{`const respuesta = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(respuesta.data);`}</code>
          </pre>


          <h3>🔍 ¿Qué sucede?</h3>

          <pre>
            <code>{`React
  ↓
Axios
  ↓
GET
  ↓
API
  ↓
Usuarios
  ↓
respuesta.data`}</code>
          </pre>

          <p>
            La información que devuelve la API se encuentra
            normalmente dentro de <strong>respuesta.data</strong>.
          </p>

        </section>


        {/* ================================================== */}
        {/* POST */}
        {/* ================================================== */}

        <section>

          <h2>🟢 POST — Crear información</h2>

          <h3>🎯 ¿Para qué sirve?</h3>

          <p>
            <strong>POST</strong> se utiliza para crear
            un recurso nuevo.
          </p>

          <p>
            Imaginemos que Celes todavía no existe
            y queremos registrarlo.
          </p>


          <h3>💻 Sintaxis</h3>

          <pre>
            <code>{`const respuesta = await axios.post(
  URL,
  datos
);`}</code>
          </pre>

          <p>
            El segundo argumento contiene la información
            que queremos enviar a la API.
          </p>


          <h3>🧪 Ejemplo</h3>

          <pre>
            <code>{`const respuesta = await axios.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "Celes",
    age: 30,
    city: "Puebla"
  }
);

console.log(respuesta.data);`}</code>
          </pre>


          <h3>🧠 ¿Qué estamos enviando?</h3>

          <pre>
            <code>{`Nombre → Celes
Edad   → 30
Ciudad → Puebla`}</code>
          </pre>


          <p>
            Estamos diciendo:
          </p>

          <pre>
            <code>{`"API, crea este usuario."`}</code>
          </pre>


          <p>
            Por eso:
          </p>

          <pre>
            <code>{`POST → CREAR`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* PUT */}
        {/* ================================================== */}

        <section>

          <h2>🟡 PUT — Actualizar información</h2>

          <h3>🎯 ¿Para qué sirve?</h3>

          <p>
            <strong>PUT</strong> se utiliza para actualizar
            un recurso que ya existe.
          </p>


          <h3>🧠 Ejemplo</h3>

          <p>
            Imaginemos que Celes ya existe y actualmente
            vive en Puebla.
          </p>

          <pre>
            <code>{`Celes
Edad: 30
Ciudad: Puebla`}</code>
          </pre>

          <p>
            Después Celes se muda a Tijuana y queremos
            actualizar sus datos.
          </p>

          <p>
            Para eso utilizamos <strong>PUT</strong>.
          </p>


          <h3>💻 Sintaxis</h3>

          <pre>
            <code>{`const respuesta = await axios.put(
  URL,
  datos
);`}</code>
          </pre>


          <h3>🧪 Ejemplo</h3>

          <pre>
            <code>{`const respuesta = await axios.put(
  "https://jsonplaceholder.typicode.com/users/4",
  {
    name: "Celes",
    age: 31,
    city: "Tijuana"
  }
);

console.log(respuesta.data);`}</code>
          </pre>


          <h3>🔍 ¿Qué significa el /4?</h3>

          <pre>
            <code>{`https://jsonplaceholder.typicode.com/users/4
                                            ↑
                                         ID = 4`}</code>
          </pre>

          <p>
            El número 4 identifica el recurso que queremos actualizar.
          </p>


          <h3>🧠 Antes y después</h3>

          <pre>
            <code>{`ANTES

Celes
30 años
Puebla


        ↓ PUT


DESPUÉS

Celes
31 años
Tijuana`}</code>
          </pre>


          <p>
            Por eso:
          </p>

          <pre>
            <code>{`PUT → ACTUALIZAR`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* DELETE */}
        {/* ================================================== */}

        <section>

          <h2>🔴 DELETE — Eliminar información</h2>

          <h3>🎯 ¿Para qué sirve?</h3>

          <p>
            <strong>DELETE</strong> se utiliza para eliminar
            un recurso de una API.
          </p>


          <h3>💻 Sintaxis</h3>

          <pre>
            <code>{`const respuesta = await axios.delete(
  URL
);`}</code>
          </pre>


          <h3>🧪 Ejemplo</h3>

          <pre>
            <code>{`const respuesta = await axios.delete(
  "https://jsonplaceholder.typicode.com/users/4"
);

console.log(respuesta.data);`}</code>
          </pre>


          <p>
            En este ejemplo estamos solicitando
            eliminar el usuario con ID 4.
          </p>


          <pre>
            <code>{`React
  ↓
Axios
  ↓
DELETE
  ↓
API
  ↓
Eliminar usuario`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* POST VS PUT */}
        {/* ================================================== */}

        <section>

          <h2>🧠 POST vs PUT</h2>

          <p>
            Esta es una de las diferencias más importantes
            que debes recordar.
          </p>

          <pre>
            <code>{`POST
↓
El recurso todavía no existe
↓
CREAR


PUT
↓
El recurso ya existe
↓
ACTUALIZAR`}</code>
          </pre>


          <h3>🍎 Ejemplo con Celes</h3>

          <pre>
            <code>{`POST

"Crea a Celes."

Celes no existe
       ↓
     CREAR


PUT

"Modifica a Celes."

Celes ya existe
       ↓
   ACTUALIZAR`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* CRUD */}
        {/* ================================================== */}

        <section>

          <h2>🧩 ¿Qué es CRUD?</h2>

          <p>
            CRUD es un concepto que representa las cuatro
            operaciones básicas que podemos realizar
            sobre información.
          </p>

          <pre>
            <code>{`C → Create → Crear
R → Read   → Leer
U → Update → Actualizar
D → Delete → Eliminar`}</code>
          </pre>


          <p>
            Podemos relacionarlo con los métodos HTTP:
          </p>

          <pre>
            <code>{`CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* PRUÉBALO TÚ MISMO */}
        {/* ================================================== */}

        <section>

          <h2>🎮 Pruébalo tú mismo</h2>

          <p>
            Ahora vamos a interactuar directamente con los
            cuatro métodos HTTP.
          </p>

          <p>
            Presiona los botones y observa cómo la información
            aparece en la interfaz.
          </p>


          {/* ================= GET ================= */}

          <h3>🔵 GET — Obtener usuarios</h3>

          <p>
            Presiona el botón para solicitar una lista
            de usuarios a la API.
          </p>

          <button onClick={obtenerUsuarios}>
            📥 Obtener usuarios
          </button>


          {usuarios.length > 0 && (

            <div>

              <h4>👥 Usuarios recibidos</h4>

              {usuarios.map((usuario) => (

                <div key={usuario.id}>

                  <p>
                    <strong>
                      {usuario.name}
                    </strong>
                  </p>

                  <p>
                    📧 {usuario.email}
                  </p>

                  <p>
                    🏙️ {usuario.address.city}
                  </p>

                  <hr />

                </div>

              ))}

            </div>

          )}


          {/* CÓDIGO GET */}

          <h4>💻 Código utilizado</h4>

          <pre>
            <code>{`async function obtenerUsuarios() {

  try {

    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsuarios(respuesta.data);

  } catch (error) {

    console.error(
      "Error al obtener usuarios:",
      error
    );

  }
}`}</code>
          </pre>


          {/* ================= POST ================= */}

          <h3>🟢 POST — Crear usuario</h3>

          <p>
            Presiona el botón para enviar un usuario
            nuevo a la API.
          </p>

          <button onClick={crearUsuario}>
            ➕ Crear a Celes
          </button>


          {usuarioCreado && (

            <div>

              <h4>✅ Usuario creado</h4>

              <p>
                👤 Nombre:{" "}
                <strong>
                  {usuarioCreado.name}
                </strong>
              </p>

              <p>
                🎂 Edad:{" "}
                <strong>
                  {usuarioCreado.age}
                </strong>
              </p>

              <p>
                🏙️ Ciudad:{" "}
                <strong>
                  {usuarioCreado.city}
                </strong>
              </p>

            </div>

          )}


          {/* CÓDIGO POST */}

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

    console.error(
      "Error al crear usuario:",
      error
    );

  }
}`}</code>
          </pre>


          {/* ================= PUT ================= */}

          <h3>🟡 PUT — Actualizar usuario</h3>

          <p>
            Imaginemos que Celes vive en Puebla y ahora
            se muda a Tijuana.
          </p>

          <button onClick={actualizarUsuario}>
            ✏️ Mudar a Celes a Tijuana
          </button>


          {usuarioActualizado && (

            <div>

              <h4>🔄 Usuario actualizado</h4>

              <p>
                👤 Nombre:{" "}
                <strong>
                  {usuarioActualizado.name}
                </strong>
              </p>

              <p>
                🎂 Edad:{" "}
                <strong>
                  {usuarioActualizado.age}
                </strong>
              </p>

              <p>
                🏙️ Nueva ciudad:{" "}
                <strong>
                  {usuarioActualizado.city}
                </strong>
              </p>

            </div>

          )}


          {/* CÓDIGO PUT */}

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

    console.error(
      "Error al actualizar usuario:",
      error
    );

  }
}`}</code>
          </pre>


          {/* ================= DELETE ================= */}

          <h3>🔴 DELETE — Eliminar usuario</h3>

          <p>
            Presiona el botón para enviar una petición
            DELETE a la API.
          </p>

          <button onClick={eliminarUsuario}>
            🗑️ Eliminar usuario
          </button>


          {usuarioEliminado && (

            <div>

              <h4>✅ Resultado</h4>

              <p>
                {usuarioEliminado}
              </p>

            </div>

          )}


          {/* CÓDIGO DELETE */}

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

    console.error(
      "Error al eliminar usuario:",
      error
    );

  }
}`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* ¿QUÉ ESTÁ PASANDO? */}
        {/* ================================================== */}

        <section>

          <h2>🔍 ¿Qué está pasando cuando haces clic?</h2>

          <p>
            Cada botón llama una función diferente.
          </p>

          <pre>
            <code>{`Botón
  ↓
onClick
  ↓
función
  ↓
Axios
  ↓
petición HTTP
  ↓
API
  ↓
respuesta
  ↓
setState
  ↓
React actualiza la interfaz`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* FLUJO COMPLETO */}
        {/* ================================================== */}

        <section>

          <h2>🧠 Flujo completo</h2>

          <pre>
            <code>{`                    REACT
                      ↓
                   BOTÓN
                      ↓
                  onClick
                      ↓
                    Axios
                      ↓
              ┌───────┼────────┐
              ↓       ↓        ↓
             GET     POST      PUT
              ↓       ↓        ↓
           Obtener   Crear   Actualizar
              └───────┼────────┘
                      ↓
                     API
                      ↓
                  respuesta
                      ↓
                  setState
                      ↓
                   React
                      ↓
                  pantalla`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* JSONPLACEHOLDER */}
        {/* ================================================== */}

        <section>

          <h2>⚠️ Importante: JSONPlaceholder</h2>

          <p>
            Estamos utilizando JSONPlaceholder como API de prueba.
          </p>

          <p>
            Esto nos permite practicar GET, POST, PUT y DELETE
            sin crear nuestro propio servidor.
          </p>

          <p>
            Las peticiones funcionan como práctica, pero los cambios
            no se guardan permanentemente en una base de datos real.
          </p>

          <p>
            Por eso podemos utilizar esta API para aprender
            sin preocuparnos por modificar información real.
          </p>

        </section>


        {/* ================================================== */}
        {/* RESUMEN */}
        {/* ================================================== */}

        <section>

          <h2>📋 Resumen</h2>

          <pre>
            <code>{`GET
→ Obtener


POST
→ Crear


PUT
→ Actualizar


DELETE
→ Eliminar`}</code>
          </pre>

          <p>
            Y con Axios:
          </p>

          <pre>
            <code>{`axios.get()
axios.post()
axios.put()
axios.delete()`}</code>
          </pre>

        </section>


        {/* ================================================== */}
        {/* MAPA MENTAL */}
        {/* ================================================== */}

        <section>

          <h2>🧠 Mapa mental</h2>

          <pre>
            <code>{`                 API
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
       GET       POST      PUT
        │         │         │
     Obtener    Crear    Actualizar
        │         │         │
        └─────────┼─────────┘
                  │
                DELETE
                  │
               Eliminar


CRUD

Create → POST
Read   → GET
Update → PUT
Delete → DELETE`}</code>
          </pre>

        </section>

      </div>

      <Footer />

    </>
  );
}

export default MetodosHTTP;