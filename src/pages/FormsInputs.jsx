import { useState } from "react";
import Footer from "../components/Footer";  
function FormsInputs() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // =============================
  // FORMULARIO SIMPLE
  // =============================

  function manejarSubmit(e) {
    e.preventDefault();

    console.log("Formulario enviado");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
  }

  // =============================
  // FORMULARIO CON VARIOS CAMPOS
  // =============================

  function manejarCambio(e) {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  }

  function manejarSubmitCompleto(e) {

    e.preventDefault();

    setError("");

    if (!formulario.nombre.trim()) {
      setError("El nombre es obligatorio");
      return;
    }

    if (!formulario.email.trim()) {
      setError("El email es obligatorio");
      return;
    }

    if (!formulario.password.trim()) {
      setError("La contraseña es obligatoria");
      return;
    }

    console.log("Formulario completo:", formulario);
  }

  return (
    <div className="concepto">

      <h1>📝 Forms & Inputs</h1>

      {/* ============================= */}
      {/* ¿QUÉ ES? */}
      {/* ============================= */}

      <section>
        <h2>📖 ¿Qué es un formulario?</h2>

        <p>
          Un formulario permite que el usuario introduzca información
          dentro de una aplicación.
        </p>

        <p>
          En React, normalmente utilizamos estados para controlar
          los valores de los campos del formulario.
        </p>
      </section>

      {/* ============================= */}
      {/* INPUTS */}
      {/* ============================= */}

      <section>
        <h2>⌨️ ¿Qué es un input?</h2>

        <p>
          Un input es un elemento que permite al usuario introducir
          información.
        </p>

        <pre>
          <code>
{`<input type="text" />

<input type="email" />

<input type="password" />

<input type="number" />`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* TIPOS */}
      {/* ============================= */}

      <section>
        <h2>📦 Tipos comunes de input</h2>

        <pre>
          <code>
{`<input type="text" />

<input type="email" />

<input type="password" />

<input type="number" />

<input type="date" />

<input type="checkbox" />

<input type="radio" />`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* CONTROLADO */}
      {/* ============================= */}

      <section>
        <h2>🎮 Input controlado</h2>

        <p>
          En React, un input controlado es un input cuyo valor está
          conectado a un estado.
        </p>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>`}
          </code>
        </pre>

        <p>
          El estado controla el valor que aparece dentro del input.
        </p>

        <pre>
          <code>
{`Estado
  ↓
value
  ↓
Input

Usuario escribe
  ↓
onChange
  ↓
setEstado()
  ↓
Estado actualizado`}
          </code>
        </pre>
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

        <p>
          Nombre: <strong>{nombre}</strong>
        </p>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* ONCHANGE */}
      {/* ============================= */}

      <section>
        <h2>🔄 onChange</h2>

        <p>
          onChange detecta cuando cambia el valor de un campo.
        </p>

        <pre>
          <code>
{`function manejarCambio(e) {
  setNombre(e.target.value);
}

<input onChange={manejarCambio} />`}
          </code>
        </pre>

        <p>
          <strong>e.target.value</strong> contiene lo que escribió
          el usuario.
        </p>
      </section>

      {/* ============================= */}
      {/* ONSUBMIT */}
      {/* ============================= */}

      <section>
        <h2>📨 onSubmit</h2>

        <p>
          onSubmit permite detectar cuando el usuario envía un formulario.
        </p>

        <pre>
          <code>
{`function manejarSubmit(e) {
  e.preventDefault();

  console.log("Formulario enviado");
}

<form onSubmit={manejarSubmit}>
  ...
</form>`}
          </code>
        </pre>

        <p>
          <strong>e.preventDefault()</strong> evita que el navegador
          recargue la página automáticamente.
        </p>
      </section>

      {/* ============================= */}
      {/* FORMULARIO REAL */}
      {/* ============================= */}

      <section>
        <h2>🧪 Formulario completo</h2>

        <form onSubmit={manejarSubmit}>

          <div>
            <label>Nombre</label>

            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Mensaje</label>

            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          <button type="submit">
            Enviar
          </button>

        </form>
      </section>

      {/* ============================= */}
      {/* VARIOS CAMPOS */}
      {/* ============================= */}

      <section>
        <h2>📦 Varios campos en un solo estado</h2>

        <p>
          Cuando tenemos muchos campos podemos guardarlos dentro
          de un mismo objeto.
        </p>

        <pre>
          <code>
{`const [formulario, setFormulario] = useState({
  nombre: "",
  email: "",
  password: ""
});`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* NAME */}
      {/* ============================= */}

      <section>
        <h2>🏷️ El atributo name</h2>

        <p>
          El atributo <strong>name</strong> permite saber qué propiedad
          del objeto debemos actualizar.
        </p>

        <pre>
          <code>
{`<input
  name="nombre"
/>

<input
  name="email"
/>

<input
  name="password"
/>`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* SPREAD */}
      {/* ============================= */}

      <section>
        <h2>📋 Actualizar varios campos</h2>

        <p>
          Utilizamos el operador spread para conservar los demás
          datos del objeto.
        </p>

        <pre>
          <code>
{`function manejarCambio(e) {

  setFormulario({
    ...formulario,
    [e.target.name]: e.target.value
  });

}`}
          </code>
        </pre>

        <p>
          La parte:
        </p>

        <pre>
          <code>
{`...formulario`}
          </code>
        </pre>

        <p>
          conserva los valores anteriores.
        </p>

        <p>
          Mientras que:
        </p>

        <pre>
          <code>
{`[e.target.name]: e.target.value`}
          </code>
        </pre>

        <p>
          actualiza solamente el campo que cambió.
        </p>
      </section>

      {/* ============================= */}
      {/* FORMULARIO MULTICAMPO */}
      {/* ============================= */}

      <section>
        <h2>🎮 Pruébalo tú mismo: formulario completo</h2>

        <form onSubmit={manejarSubmitCompleto}>

          <div>
            <label>Nombre</label>

            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
              placeholder="correo@email.com"
            />
          </div>

          <div>
            <label>Contraseña</label>

            <input
              type="password"
              name="password"
              value={formulario.password}
              onChange={manejarCambio}
              placeholder="Contraseña"
            />
          </div>

          <button type="submit">
            Crear cuenta
          </button>

        </form>

        {error && (
          <p>
            ❌ {error}
          </p>
        )}

        <pre>
          <code>
{`const [formulario, setFormulario] = useState({
  nombre: "",
  email: "",
  password: ""
});

function manejarCambio(e) {
  setFormulario({
    ...formulario,
    [e.target.name]: e.target.value
  });
}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* VALIDACIÓN */}
      {/* ============================= */}

      <section>
        <h2>✅ Validación</h2>

        <p>
          Antes de enviar información podemos comprobar que los
          campos sean correctos.
        </p>

        <pre>
          <code>
{`function manejarSubmit(e) {

  e.preventDefault();

  if (!formulario.nombre.trim()) {
    console.log("El nombre es obligatorio");
    return;
  }

  if (!formulario.email.trim()) {
    console.log("El email es obligatorio");
    return;
  }

  if (!formulario.password.trim()) {
    console.log("La contraseña es obligatoria");
    return;
  }

  console.log("Formulario enviado");
}`}
          </code>
        </pre>

        <p>
          <strong>trim()</strong> elimina espacios al principio y
          al final del texto.
        </p>

        <p>
          <strong>return</strong> detiene la función para evitar
          continuar con el envío.
        </p>
      </section>

      {/* ============================= */}
      {/* FLUJO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Flujo completo</h2>

        <pre>
          <code>
{`Usuario
  ↓
Escribe información
  ↓
onChange
  ↓
setFormulario()
  ↓
Estado actualizado
  ↓
Usuario presiona Enviar
  ↓
onSubmit
  ↓
preventDefault()
  ↓
Validación
  ↓
¿Todo correcto?
  ↓
Sí → enviar datos
No → mostrar error`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* FORM + API */}
      {/* ============================= */}

      <section>
        <h2>🌐 Formulario + API</h2>

        <p>
          En una aplicación real, después de validar el formulario
          normalmente enviamos los datos a una API.
        </p>

        <pre>
          <code>
{`Usuario
  ↓
Formulario
  ↓
React
  ↓
Validación
  ↓
API
  ↓
Servidor
  ↓
Base de datos`}
          </code>
        </pre>

        <p>
          Por ejemplo, un formulario de registro podría enviar:
        </p>

        <pre>
          <code>
{`{
  nombre: "Celes",
  email: "celes@email.com",
  password: "123456"
}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* RETO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un formulario con:
        </p>

        <ul>
          <li>Nombre</li>
          <li>Email</li>
          <li>Contraseña</li>
        </ul>

        <p>
          Guarda los tres valores en un solo estado llamado
          <strong> formulario</strong>.
        </p>

        <p>
          Después:
        </p>

        <ol>
          <li>Actualiza los campos con onChange.</li>
          <li>Evita que la página se recargue.</li>
          <li>Valida que ningún campo esté vacío.</li>
          <li>Si todo está correcto, muestra los datos.</li>
        </ol>
      </section>

      {/* ============================= */}
      {/* SOLUCIÓN */}
      {/* ============================= */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`import { useState } from "react";

function Registro() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  function manejarCambio(e) {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  }

  function manejarSubmit(e) {

    e.preventDefault();

    if (!formulario.nombre.trim()) {
      return;
    }

    if (!formulario.email.trim()) {
      return;
    }

    if (!formulario.password.trim()) {
      return;
    }

    console.log(formulario);
  }

  return (
    <form onSubmit={manejarSubmit}>

      <input
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
      />

      <input
        name="email"
        value={formulario.email}
        onChange={manejarCambio}
      />

      <input
        name="password"
        value={formulario.password}
        onChange={manejarCambio}
      />

      <button type="submit">
        Registrarse
      </button>

    </form>
  );
}

export default Registro;`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* REGLA MENTAL */}
      {/* ============================= */}

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>
{`¿El usuario escribe?
        ↓
    onChange

¿Quiero guardar lo escrito?
        ↓
     useState

¿Envió el formulario?
        ↓
    onSubmit

¿No quiero recargar?
        ↓
preventDefault()

¿Necesito comprobar datos?
        ↓
   Validación`}
          </code>
        </pre>
      </section>
<Footer />
    </div>
  );
}

export default FormsInputs;