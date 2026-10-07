import { useState } from "react";
import Footer from "../components/Footer";

function ApisRest() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  async function obtenerUsuarios() {
    try {
      setCargando(true);
      setError("");

      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!respuesta.ok) {
        throw new Error("Error al obtener los usuarios");
      }

      const datos = await respuesta.json();

      setUsuarios(datos);
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="concepto">

      <h1>🌐 APIs / REST</h1>

      <section>
        <h2>📖 ¿Qué es una API?</h2>

        <p>
          Una <strong>API</strong> es una forma de comunicación que permite
          que diferentes aplicaciones puedan intercambiar información.
        </p>

        <p>
          API significa:
        </p>

        <pre>
          <code>{`Application Programming Interface`}</code>
        </pre>

        <p>
          Por ejemplo, nuestro frontend de React puede pedir información
          a un servidor.
        </p>

        <pre>
          <code>{`React
  ↓
API
  ↓
Servidor
  ↓
Base de datos
  ↓
Respuesta
  ↓
React`}</code>
        </pre>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve una API?</h2>

        <ul>
          <li>📦 Obtener información.</li>
          <li>➕ Crear información.</li>
          <li>✏️ Actualizar información.</li>
          <li>🗑️ Eliminar información.</li>
          <li>🔐 Comunicarse con sistemas externos.</li>
          <li>💾 Trabajar con bases de datos mediante un servidor.</li>
        </ul>

        <p>
          Una aplicación de React normalmente no habla directamente con
          una base de datos.
        </p>

        <pre>
          <code>{`React
  ↓
API / Backend
  ↓
Base de datos`}</code>
        </pre>
      </section>

      <section>
        <h2>🌐 ¿Qué significa REST?</h2>

        <p>
          <strong>REST</strong> es un estilo de arquitectura utilizado
          para diseñar APIs que trabajan con recursos a través de HTTP.
        </p>

        <p>
          REST significa:
        </p>

        <pre>
          <code>{`Representational State Transfer`}</code>
        </pre>

        <p>
          En una API REST normalmente trabajamos con recursos.
        </p>

        <p>Por ejemplo:</p>

        <pre>
          <code>{`/usuarios
/productos
/posts
/pedidos`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 API vs REST</h2>

        <p>
          No son exactamente lo mismo.
        </p>

        <pre>
          <code>{`API
 ↓
Forma de comunicación


REST
 ↓
Estilo para diseñar APIs`}</code>
        </pre>

        <p>
          Una API puede existir sin seguir REST.
        </p>

        <p>
          Cuando una API utiliza principios REST, hablamos de una
          <strong> API REST</strong>.
        </p>
      </section>

      <section>
        <h2>📍 ¿Qué es un endpoint?</h2>

        <p>
          Un <strong>endpoint</strong> es una dirección específica de una
          API donde podemos realizar una operación.
        </p>

        <pre>
          <code>{`https://jsonplaceholder.typicode.com/users`}</code>
        </pre>

        <p>
          En este caso:
        </p>

        <pre>
          <code>{`https://jsonplaceholder.typicode.com
                         ↓
                       servidor

/users
   ↓
recurso usuarios`}</code>
        </pre>
      </section>

      <section>
        <h2>📨 Métodos HTTP</h2>

        <p>
          Las APIs REST normalmente utilizan métodos HTTP para indicar
          qué queremos hacer.
        </p>

        <pre>
          <code>{`GET
 ↓
Obtener


POST
 ↓
Crear


PUT / PATCH
 ↓
Actualizar


DELETE
 ↓
Eliminar`}</code>
        </pre>
      </section>

      <section>
        <h2>🔎 GET</h2>

        <p>
          <strong>GET</strong> se utiliza para obtener información.
        </p>

        <pre>
          <code>{`GET /users`}</code>
        </pre>

        <p>
          En React podemos utilizar:
        </p>

        <pre>
          <code>{`fetch("https://api.com/users")`}</code>
        </pre>
      </section>

      <section>
        <h2>➕ POST</h2>

        <p>
          <strong>POST</strong> se utiliza normalmente para crear
          información.
        </p>

        <pre>
          <code>{`POST /users`}</code>
        </pre>

        <p>
          Por ejemplo, podemos enviar:
        </p>

        <pre>
          <code>{`{
  "nombre": "Celes",
  "email": "celes@test.com"
}`}</code>
        </pre>
      </section>

      <section>
        <h2>✏️ PUT y PATCH</h2>

        <p>
          Se utilizan para actualizar información.
        </p>

        <pre>
          <code>{`PUT /users/5

PATCH /users/5`}</code>
        </pre>

        <p>
          La diferencia principal es que <strong>PUT</strong> suele
          utilizarse para reemplazar un recurso completo, mientras que
          <strong> PATCH</strong> suele utilizarse para modificar
          solamente una parte.
        </p>
      </section>

      <section>
        <h2>🗑️ DELETE</h2>

        <p>
          <strong>DELETE</strong> se utiliza para eliminar información.
        </p>

        <pre>
          <code>{`DELETE /users/5`}</code>
        </pre>
      </section>

      <section>
        <h2>📦 JSON</h2>

        <p>
          Las APIs frecuentemente utilizan <strong>JSON</strong> para
          enviar y recibir información.
        </p>

        <pre>
          <code>{`{
  "id": 1,
  "name": "Leanne Graham",
  "email": "test@test.com"
}`}</code>
        </pre>

        <p>
          JSON significa:
        </p>

        <pre>
          <code>{`JavaScript Object Notation`}</code>
        </pre>
      </section>

      <section>
        <h2>🔄 La petición completa</h2>

        <pre>
          <code>{`React
  ↓
fetch()
  ↓
HTTP Request
  ↓
API
  ↓
Servidor
  ↓
Procesa petición
  ↓
HTTP Response
  ↓
JSON
  ↓
React`}</code>
        </pre>
      </section>

      <section>
        <h2>💻 Sintaxis básica con fetch</h2>

        <pre>
          <code>{`const respuesta = await fetch(
  "https://api.com/users"
);

const datos = await respuesta.json();`}</code>
        </pre>

        <p>
          Aquí tenemos dos pasos importantes.
        </p>

        <pre>
          <code>{`fetch()
   ↓
obtiene la respuesta HTTP

respuesta.json()
   ↓
convierte el cuerpo de la respuesta
a un objeto JavaScript`}</code>
        </pre>
      </section>

      <section>
        <h2>🔍 ¿Qué es response?</h2>

        <p>
          Cuando hacemos:
        </p>

        <pre>
          <code>{`const respuesta = await fetch(url);`}</code>
        </pre>

        <p>
          <strong>respuesta</strong> contiene información sobre la
          respuesta HTTP.
        </p>

        <p>Por ejemplo:</p>

        <pre>
          <code>{`respuesta.ok
respuesta.status
respuesta.headers`}</code>
        </pre>
      </section>

      <section>
        <h2>✅ response.ok</h2>

        <p>
          <strong>response.ok</strong> nos indica si la respuesta HTTP
          fue exitosa.
        </p>

        <pre>
          <code>{`if (!respuesta.ok) {
  throw new Error("Error en la petición");
}`}</code>
        </pre>

        <p>
          Esto nos permite detectar errores antes de procesar los datos.
        </p>
      </section>

      <section>
        <h2>🔢 response.status</h2>

        <p>
          <strong>response.status</strong> contiene el código HTTP.
        </p>

        <pre>
          <code>{`200
201
400
401
403
404
500`}</code>
        </pre>

        <p>
          Algunos ejemplos:
        </p>

        <pre>
          <code>{`200 → OK
201 → Creado
400 → Petición incorrecta
401 → No autorizado
403 → Prohibido
404 → No encontrado
500 → Error del servidor`}</code>
        </pre>
      </section>

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <button onClick={obtenerUsuarios}>
          👥 Obtener usuarios
        </button>

        {cargando && (
          <p>⏳ Cargando usuarios...</p>
        )}

        {error && (
          <p>
            ❌ {error}
          </p>
        )}

        {usuarios.length > 0 && (
          <div>

            <h3>Usuarios obtenidos:</h3>

            {usuarios.map((usuario) => (
              <div key={usuario.id}>

                <h4>{usuario.name}</h4>

                <p>Email: {usuario.email}</p>

                <p>
                  Ciudad: {usuario.address.city}
                </p>

              </div>
            ))}

          </div>
        )}
      </section>

      <section>
        <h2>🧠 Flujo del ejemplo</h2>

        <pre>
          <code>{`Click
  ↓
obtenerUsuarios()
  ↓
setCargando(true)
  ↓
fetch()
  ↓
API
  ↓
respuesta
  ↓
respuesta.json()
  ↓
datos
  ↓
setUsuarios(datos)
  ↓
React renderiza
  ↓
map()
  ↓
usuarios en pantalla`}</code>
        </pre>
      </section>

      <section>
        <h2>⚠️ Manejo de errores</h2>

        <p>
          Cuando trabajamos con APIs debemos contemplar que algo puede
          salir mal.
        </p>

        <pre>
          <code>{`try {
  // petición
} catch (error) {
  // error
} finally {
  // terminar proceso
}`}</code>
        </pre>

        <p>
          En nuestro ejemplo:
        </p>

        <pre>
          <code>{`try
 ↓
fetch()


catch
 ↓
error


finally
 ↓
dejar de cargar`}</code>
        </pre>
      </section>

      <section>
        <h2>⏳ Loading</h2>

        <p>
          Mientras esperamos la respuesta de la API podemos mostrar
          un mensaje de carga.
        </p>

        <pre>
          <code>{`const [cargando, setCargando] = useState(false);`}</code>
        </pre>

        <p>
          Antes de hacer la petición:
        </p>

        <pre>
          <code>{`setCargando(true);`}</code>
        </pre>

        <p>
          Cuando termina:
        </p>

        <pre>
          <code>{`setCargando(false);`}</code>
        </pre>
      </section>

      <section>
        <h2>🌐 APIs y React</h2>

        <p>
          Una aplicación React puede utilizar APIs para obtener
          información dinámica.
        </p>

        <pre>
          <code>{`React
 ↓
useEffect
 ↓
fetch
 ↓
API
 ↓
JSON
 ↓
useState
 ↓
map
 ↓
Interfaz`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 API REST + CRUD</h2>

        <p>
          CRUD representa las cuatro operaciones principales sobre datos:
        </p>

        <pre>
          <code>{`C → Create  → POST
R → Read    → GET
U → Update  → PUT / PATCH
D → Delete  → DELETE`}</code>
        </pre>

        <p>
          Este concepto aparece constantemente cuando trabajas con
          aplicaciones reales.
        </p>
      </section>

      <section>
        <h2>🎯 Ejemplo de una API de productos</h2>

        <pre>
          <code>{`GET     /productos
POST    /productos
GET     /productos/10
PUT     /productos/10
PATCH   /productos/10
DELETE  /productos/10`}</code>
        </pre>

        <p>
          Aquí <strong>productos</strong> es el recurso.
        </p>

        <p>
          El número <strong>10</strong> identifica un producto específico.
        </p>
      </section>

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Modifica el ejemplo para mostrar solamente:
        </p>

        <ul>
          <li>Nombre del usuario.</li>
          <li>Ciudad.</li>
        </ul>

        <p>
          Después intenta mostrar solamente los usuarios cuyo
          <strong> id</strong> sea menor o igual a 5.
        </p>

        <p>
          Puedes combinar los conceptos que ya conoces:
        </p>

        <pre>
          <code>{`fetch()
↓
JSON
↓
filter()
↓
map()`}</code>
        </pre>
      </section>

      <section>
        <h2>👁️ Solución</h2>

        <pre>
          <code>{`{usuarios
  .filter((usuario) => usuario.id <= 5)
  .map((usuario) => (
    <div key={usuario.id}>
      <h3>{usuario.name}</h3>
      <p>{usuario.address.city}</p>
    </div>
  ))}`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>{`API
 ↓
"Quiero comunicarme con otro sistema"


REST
 ↓
"Una forma de organizar esa API"


Endpoint
 ↓
"¿A dónde hago la petición?"


HTTP
 ↓
"¿Qué quiero hacer?"


GET
 ↓
obtener

POST
 ↓
crear

PUT/PATCH
 ↓
actualizar

DELETE
 ↓
eliminar`}</code>
        </pre>
      </section>

      <Footer />

    </div>
  );
}

export default ApisRest;