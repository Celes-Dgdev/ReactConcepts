import { useState } from "react";
import Footer from "../components/Footer.jsx";
function LocalStorage() {

  const [nombre, setNombre] = useState("");
  const [nombreGuardado, setNombreGuardado] = useState("");

  // Guardar un dato
  function guardarNombre() {
    localStorage.setItem("nombre", nombre);
    setNombreGuardado(nombre);
  }

  // Obtener un dato
  function obtenerNombre() {
    const nombreGuardado = localStorage.getItem("nombre");

    if (nombreGuardado) {
      setNombreGuardado(nombreGuardado);
    } else {
      setNombreGuardado("No hay ningún nombre guardado");
    }
  }

  // Eliminar un dato
  function eliminarNombre() {
    localStorage.removeItem("nombre");
    setNombreGuardado("");
  }

  // Borrar todo el localStorage
  function borrarTodo() {
    localStorage.clear();
    setNombreGuardado("");
  }

  return (
    <div className="concepto">
      <Footer/>

      <h1>💾 localStorage</h1>

      {/* ============================= */}
      {/* ¿QUÉ ES? */}
      {/* ============================= */}

      <section>
        <h2>📖 ¿Qué es localStorage?</h2>

        <p>
          localStorage es una herramienta del navegador que permite
          guardar información de forma persistente.
        </p>

        <p>
          Los datos permanecen guardados aunque recarguemos o
          cerremos la página.
        </p>

        <p>
          En React podemos utilizar localStorage para guardar
          información que queremos conservar entre sesiones.
        </p>
      </section>

      {/* ============================= */}
      {/* ¿PARA QUÉ SIRVE? */}
      {/* ============================= */}

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Guardar preferencias del usuario.</li>
          <li>Guardar favoritos.</li>
          <li>Guardar configuraciones.</li>
          <li>Guardar información sencilla.</li>
          <li>Conservar datos después de recargar la página.</li>
          <li>Crear carritos o listas sencillas.</li>
        </ul>
      </section>

      {/* ============================= */}
      {/* SETITEM */}
      {/* ============================= */}

      <section>
        <h2>💾 1. setItem()</h2>

        <p>
          <strong>setItem()</strong> sirve para guardar información
          dentro de localStorage.
        </p>

        <pre>
          <code>
{`localStorage.setItem("nombre", "Celes");`}
          </code>
        </pre>

        <p>
          El primer valor es la <strong>clave</strong> y el segundo
          valor es el <strong>dato</strong>.
        </p>

        <pre>
          <code>
{`"nombre" → clave
"Celes"  → valor`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* GETITEM */}
      {/* ============================= */}

      <section>
        <h2>📥 2. getItem()</h2>

        <p>
          <strong>getItem()</strong> sirve para recuperar un dato
          que anteriormente guardamos.
        </p>

        <pre>
          <code>
{`const nombre = localStorage.getItem("nombre");

console.log(nombre);`}
          </code>
        </pre>

        <p>
          Si habíamos guardado "Celes", el resultado será:
        </p>

        <pre>
          <code>
{`"Celes"`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* REMOVEITEM */}
      {/* ============================= */}

      <section>
        <h2>🗑️ 3. removeItem()</h2>

        <p>
          <strong>removeItem()</strong> elimina un dato específico.
        </p>

        <pre>
          <code>
{`localStorage.removeItem("nombre");`}
          </code>
        </pre>

        <p>
          Esto elimina solamente el elemento cuya clave sea
          <strong> "nombre"</strong>.
        </p>
      </section>

      {/* ============================= */}
      {/* CLEAR */}
      {/* ============================= */}

      <section>
        <h2>🧹 4. clear()</h2>

        <p>
          <strong>clear()</strong> elimina todos los datos guardados
          en localStorage.
        </p>

        <pre>
          <code>
{`localStorage.clear();`}
          </code>
        </pre>

        <p>
          ⚠️ Hay que utilizarlo con cuidado porque elimina todo,
          no solamente un dato.
        </p>
      </section>

      {/* ============================= */}
      {/* SOLO STRINGS */}
      {/* ============================= */}

      <section>
        <h2>⚠️ localStorage guarda strings</h2>

        <p>
          Una característica importante de localStorage es que
          almacena los valores como texto.
        </p>

        <pre>
          <code>
{`localStorage.setItem("edad", 30);

const edad = localStorage.getItem("edad");

console.log(edad);`}
          </code>
        </pre>

        <p>
          Aunque guardamos el número <strong>30</strong>, al recuperarlo
          obtenemos un string.
        </p>
      </section>

      {/* ============================= */}
      {/* JSON */}
      {/* ============================= */}

      <section>
        <h2>📦 Guardar objetos y arrays</h2>

        <p>
          Para guardar objetos o arrays necesitamos convertirlos
          primero a texto utilizando <strong>JSON.stringify()</strong>.
        </p>

        <pre>
          <code>
{`const usuario = {
  nombre: "Celes",
  edad: 30
};

localStorage.setItem(
  "usuario",
  JSON.stringify(usuario)
);`}
          </code>
        </pre>

        <p>
          Después, para recuperar el objeto, utilizamos
          <strong> JSON.parse()</strong>.
        </p>

        <pre>
          <code>
{`const usuario = JSON.parse(
  localStorage.getItem("usuario")
);

console.log(usuario.nombre);`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* FLUJO JSON */}
      {/* ============================= */}

      <section>
        <h2>🧠 Flujo con JSON</h2>

        <pre>
          <code>
{`Objeto JavaScript
      ↓
JSON.stringify()
      ↓
String
      ↓
localStorage
      ↓
getItem()
      ↓
String
      ↓
JSON.parse()
      ↓
Objeto JavaScript`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* REACT */}
      {/* ============================= */}

      <section>
        <h2>⚛️ localStorage + React</h2>

        <p>
          En React podemos combinar localStorage con
          <strong> useState</strong> para mantener información
          en la interfaz y también guardarla en el navegador.
        </p>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

function guardar() {
  localStorage.setItem("nombre", nombre);
}`}
          </code>
        </pre>

        <p>
          El estado controla lo que ocurre dentro de React,
          mientras localStorage conserva el dato en el navegador.
        </p>
      </section>

      {/* ============================= */}
      {/* PRUÉBALO */}
      {/* ============================= */}

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <br />
        <br />

        <button onClick={guardarNombre}>
          💾 Guardar
        </button>

        <button onClick={obtenerNombre}>
          📥 Obtener
        </button>

        <button onClick={eliminarNombre}>
          🗑️ Eliminar
        </button>

        <button onClick={borrarTodo}>
          🧹 Borrar todo
        </button>

        <h3>
          {nombreGuardado}
        </h3>

        <pre>
          <code>
{`localStorage.setItem()
        ↓
      Guardar

localStorage.getItem()
        ↓
      Obtener

localStorage.removeItem()
        ↓
      Eliminar

localStorage.clear()
        ↓
    Borrar todo`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* FLUJO COMPLETO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Flujo completo</h2>

        <pre>
          <code>
{`Usuario escribe
      ↓
onChange
      ↓
setNombre()
      ↓
Estado actualizado
      ↓
Usuario presiona Guardar
      ↓
localStorage.setItem()
      ↓
💾 Dato guardado

-------------------------

Usuario presiona Obtener
      ↓
localStorage.getItem()
      ↓
Dato recuperado
      ↓
setNombreGuardado()
      ↓
React renderiza
      ↓
Dato mostrado`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* MAP + LOCALSTORAGE */}
      {/* ============================= */}

      <section>
        <h2>🔥 map() + localStorage</h2>

        <p>
          También podemos guardar arrays en localStorage y después
          recuperarlos para utilizar <strong>map()</strong> y
          mostrarlos en React.
        </p>

        <pre>
          <code>
{`const favoritos = [
  "React",
  "JavaScript",
  "CSS"
];

localStorage.setItem(
  "favoritos",
  JSON.stringify(favoritos)
);`}
          </code>
        </pre>

        <p>
          Después podemos recuperar el array:
        </p>

        <pre>
          <code>
{`const favoritos = JSON.parse(
  localStorage.getItem("favoritos")
);`}
          </code>
        </pre>

        <p>
          Y recorrerlo:
        </p>

        <pre>
          <code>
{`favoritos.map((favorito) => (
  <p key={favorito}>
    {favorito}
  </p>
))`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* RETO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un pequeño sistema que permita:
        </p>

        <ol>
          <li>Escribir un nombre.</li>
          <li>Guardar el nombre en localStorage.</li>
          <li>Recuperar el nombre.</li>
          <li>Mostrarlo en pantalla.</li>
          <li>Eliminarlo de localStorage.</li>
        </ol>

        <p>
          Utiliza:
        </p>

        <pre>
          <code>
{`useState
onChange
onClick
setItem()
getItem()
removeItem()`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* SOLUCIÓN */}
      {/* ============================= */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`import { useState } from "react";

function Nombre() {

  const [nombre, setNombre] = useState("");

  function guardar() {
    localStorage.setItem("nombre", nombre);
  }

  function obtener() {
    const nombreGuardado =
      localStorage.getItem("nombre");

    setNombre(nombreGuardado || "");
  }

  function eliminar() {
    localStorage.removeItem("nombre");
    setNombre("");
  }

  return (
    <div>

      <input
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      <button onClick={guardar}>
        Guardar
      </button>

      <button onClick={obtener}>
        Obtener
      </button>

      <button onClick={eliminar}>
        Eliminar
      </button>

      <p>{nombre}</p>

    </div>
  );
}

export default Nombre;`}
          </code>
        </pre>
      </section>
<Footer/>
    </div>
  );
}

export default LocalStorage;