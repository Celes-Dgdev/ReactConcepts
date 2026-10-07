import { useState } from "react";
import Footer from "../components/Footer";

function OnChange() {
  // ============================================================
  // EJEMPLO 1: INPUT DE TEXTO
  // ============================================================

  const [nombre, setNombre] = useState("");

  // ============================================================
  // EJEMPLO 2: INPUT DE EDAD
  // ============================================================

  const [edad, setEdad] = useState("");

  // ============================================================
  // EJEMPLO 3: SELECT
  // ============================================================

  const [pais, setPais] = useState("");

  // ============================================================
  // EJEMPLO 4: CHECKBOX
  // ============================================================

  const [acepta, setAcepta] = useState(false);

  // ============================================================
  // EJEMPLO 5: TEXTAREA
  // ============================================================

  const [mensaje, setMensaje] = useState("");

  // ============================================================
  // EJEMPLO 6: BUSCADOR
  // ============================================================

  const productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Audífonos",
    "Laptop"
  ];

  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) =>
    producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  // ============================================================
  // EJEMPLO 7: FORMULARIO
  // ============================================================

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: ""
  });

  function manejarFormulario(e) {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return (
    <>
      <div className="concepto">

        <h1>✏️ onChange</h1>

        {/* =====================================================
            ¿QUÉ ES?
        ===================================================== */}

        <h2>📖 ¿Qué es onChange?</h2>

        <p>
          <strong>onChange</strong> es un evento de React que detecta
          cuando cambia el valor de un elemento de formulario.
        </p>

        <p>
          Principalmente lo utilizamos con:
        </p>

        <ul>
          <li>⌨️ input</li>
          <li>📝 textarea</li>
          <li>🔽 select</li>
          <li>☑️ checkbox</li>
          <li>🔘 radio</li>
        </ul>

        <p>
          En React, <code>onChange</code> normalmente se combina con
          <code>useState</code>.
        </p>

        <hr />

        {/* =====================================================
            SINTAXIS
        ===================================================== */}

        <h2>💻 Sintaxis</h2>

        <pre>
          <code>
{`<input
  onChange={(e) => {
    console.log(e.target.value);
  }}
/>`}
          </code>
        </pre>

        <p>
          Cada vez que el usuario modifica el input, React ejecuta
          la función que colocamos en <code>onChange</code>.
        </p>

        <hr />

        {/* =====================================================
            EVENTO
        ===================================================== */}

        <h2>🎯 ¿Qué es e?</h2>

        <p>
          La letra <code>e</code> representa el
          <strong> evento</strong>.
        </p>

        <p>
          También podemos llamarlo:
        </p>

        <pre>
          <code>
{`event`}
          </code>
        </pre>

        <p>
          Por ejemplo:
        </p>

        <pre>
          <code>
{`onChange={(e) => {
  console.log(e);
}}`}
          </code>
        </pre>

        <p>
          El evento contiene información sobre lo que ocurrió.
        </p>

        <hr />

        {/* =====================================================
            TARGET
        ===================================================== */}

        <h2>🎯 e.target</h2>

        <p>
          <code>e.target</code> representa el elemento HTML que
          provocó el evento.
        </p>

        <pre>
          <code>
{`e
↓
evento

e.target
↓
elemento que cambió`}
          </code>
        </pre>

        <p>
          Por ejemplo:
        </p>

        <pre>
          <code>
{`<input onChange={(e) => {
  console.log(e.target);
}} />`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            VALUE
        ===================================================== */}

        <h2>💡 e.target.value</h2>

        <p>
          Esta es una de las cosas más importantes de
          <code>onChange</code>.
        </p>

        <p>
          <code>e.target.value</code> obtiene el valor actual
          del input.
        </p>

        <pre>
          <code>
{`e.target.value`}
          </code>
        </pre>

        <p>
          Si el usuario escribe:
        </p>

        <pre>
          <code>
{`Celes`}
          </code>
        </pre>

        <p>
          entonces:
        </p>

        <pre>
          <code>
{`e.target.value

↓

"Celes"`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO 1
        ===================================================== */}

        <h2>🎮 Pruébalo tú mismo: input de texto</h2>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />

        <p>
          Nombre actual:
          <strong> {nombre || "..."}</strong>
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

<input
  type="text"
  value={nombre}
  onChange={(e) =>
    setNombre(e.target.value)
  }
  placeholder="Escribe tu nombre"
/>

<p>
  Nombre actual: {nombre}
</p>`}
          </code>
        </pre>

        <p>
          El flujo es:
        </p>

        <pre>
          <code>
{`Usuario escribe
      ↓
onChange
      ↓
e.target.value
      ↓
setNombre()
      ↓
nombre cambia
      ↓
React renderiza
      ↓
pantalla actualizada`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            CONTROLLED INPUT
        ===================================================== */}

        <h2>🎛️ Input controlado</h2>

        <p>
          Cuando el valor del input está conectado a un estado de
          React, tenemos un <strong>controlled input</strong>.
        </p>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={(e) =>
    setNombre(e.target.value)
  }
/>`}
          </code>
        </pre>

        <p>
          Aquí React controla el valor del input.
        </p>

        <pre>
          <code>
{`useState
   ↓
value
   ↓
<input>

<input>
   ↓
onChange
   ↓
setState
   ↓
useState`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO 2 EDAD
        ===================================================== */}

        <h2>🔢 Pruébalo tú mismo: input numérico</h2>

        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Escribe tu edad"
        />

        <p>
          Edad:
          <strong> {edad || "..."}</strong>
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [edad, setEdad] = useState("");

<input
  type="number"
  value={edad}
  onChange={(e) =>
    setEdad(e.target.value)
  }
/>`}
          </code>
        </pre>

        <p>
          ⚠️ Aunque el input tenga <code>type="number"</code>,
          <code>e.target.value</code> normalmente llega como texto.
        </p>

        <p>
          Si necesitamos un número podemos convertirlo:
        </p>

        <pre>
          <code>
{`const numero = Number(e.target.value);`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            SELECT
        ===================================================== */}

        <h2>🔽 Pruébalo tú mismo: select</h2>

        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        >
          <option value="">
            Selecciona un país
          </option>

          <option value="México">
            México
          </option>

          <option value="Estados Unidos">
            Estados Unidos
          </option>

          <option value="Canadá">
            Canadá
          </option>
        </select>

        <p>
          País seleccionado:
          <strong> {pais || "ninguno"}</strong>
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [pais, setPais] = useState("");

<select
  value={pais}
  onChange={(e) =>
    setPais(e.target.value)
  }
>
  <option value="">
    Selecciona un país
  </option>

  <option value="México">
    México
  </option>

  <option value="Estados Unidos">
    Estados Unidos
  </option>

  <option value="Canadá">
    Canadá
  </option>
</select>`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            CHECKBOX
        ===================================================== */}

        <h2>☑️ Pruébalo tú mismo: checkbox</h2>

        <label>
          <input
            type="checkbox"
            checked={acepta}
            onChange={(e) => setAcepta(e.target.checked)}
          />

          Acepto los términos
        </label>

        <p>
          Estado:
          <strong>
            {acepta ? " Aceptado ✅" : " No aceptado ❌"}
          </strong>
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [acepta, setAcepta] = useState(false);

<input
  type="checkbox"
  checked={acepta}
  onChange={(e) =>
    setAcepta(e.target.checked)
  }
/>`}
          </code>
        </pre>

        <p>
          Aquí cambia algo importante:
        </p>

        <pre>
          <code>
{`input normal
      ↓
e.target.value


checkbox
      ↓
e.target.checked`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            TEXTAREA
        ===================================================== */}

        <h2>📝 Pruébalo tú mismo: textarea</h2>

        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          rows="4"
        />

        <p>
          Caracteres:
          <strong> {mensaje.length}</strong>
        </p>

        <p>
          Mensaje:
          <strong> {mensaje}</strong>
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [mensaje, setMensaje] = useState("");

<textarea
  value={mensaje}
  onChange={(e) =>
    setMensaje(e.target.value)
  }
  placeholder="Escribe un mensaje..."
/>

<p>
  Caracteres: {mensaje.length}
</p>`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            BUSCADOR
        ===================================================== */}

        <h2>🔍 Pruébalo tú mismo: buscador</h2>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar producto..."
        />

        <div>
          {productosFiltrados.map((producto) => (
            <div
              key={producto}
              className="tarjeta"
            >
              <p>{producto}</p>
            </div>
          ))}
        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const productos = [
  "Teclado",
  "Mouse",
  "Monitor",
  "Audífonos",
  "Laptop"
];

const [busqueda, setBusqueda] =
  useState("");

const productosFiltrados =
  productos.filter((producto) =>
    producto
      .toLowerCase()
      .includes(
        busqueda.toLowerCase()
      )
  );

<input
  value={busqueda}
  onChange={(e) =>
    setBusqueda(e.target.value)
  }
/>

{productosFiltrados.map((producto) => (
  <p key={producto}>
    {producto}
  </p>
))}`}
          </code>
        </pre>

        <p>
          Aquí estamos conectando varios conceptos:
        </p>

        <pre>
          <code>
{`onChange
   ↓
useState
   ↓
busqueda
   ↓
filter()
   ↓
map()
   ↓
resultados`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            FORMULARIO
        ===================================================== */}

        <h2>📋 onChange con un objeto</h2>

        <p>
          Cuando tenemos varios campos podemos guardar todo el
          formulario dentro de un solo objeto.
        </p>

        <input
          name="nombre"
          value={formulario.nombre}
          onChange={manejarFormulario}
          placeholder="Nombre"
        />

        <br />
        <br />

        <input
          name="correo"
          value={formulario.correo}
          onChange={manejarFormulario}
          placeholder="Correo"
        />

        <div className="tarjeta">

          <p>
            Nombre: {formulario.nombre}
          </p>

          <p>
            Correo: {formulario.correo}
          </p>

        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [formulario, setFormulario] = useState({
  nombre: "",
  correo: ""
});

function manejarFormulario(e) {
  const { name, value } = e.target;

  setFormulario({
    ...formulario,
    [name]: value
  });
}

<input
  name="nombre"
  value={formulario.nombre}
  onChange={manejarFormulario}
/>

<input
  name="correo"
  value={formulario.correo}
  onChange={manejarFormulario}
/>`}
          </code>
        </pre>

        <p>
          Aquí aparece una técnica muy importante:
        </p>

        <pre>
          <code>
{`[name]: value`}
          </code>
        </pre>

        <p>
          Los corchetes permiten utilizar el valor de
          <code>name</code> como propiedad dinámica.
        </p>

        <pre>
          <code>
{`name = "nombre"

↓

[name]: value

↓

{
  nombre: "Celes"
}`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            ONCHANGE VS ONCLICK
        ===================================================== */}

        <h2>⚔️ onChange vs onClick</h2>

        <div className="tarjeta">

          <h3>onChange</h3>

          <p>
            Detecta cambios en elementos de formulario.
          </p>

          <pre>
            <code>
{`<input
  onChange={manejarCambio}
/>`}
            </code>
          </pre>

        </div>

        <div className="tarjeta">

          <h3>onClick</h3>

          <p>
            Detecta un clic.
          </p>

          <pre>
            <code>
{`<button
  onClick={manejarClick}
>
  Guardar
</button>`}
            </code>
          </pre>

        </div>

        <hr />

        {/* =====================================================
            ONCHANGE VS ONKEYDOWN
        ===================================================== */}

        <h2>⌨️ onChange vs onKeyDown</h2>

        <p>
          No son lo mismo.
        </p>

        <pre>
          <code>
{`onChange
   ↓
cambió el valor


onKeyDown
   ↓
se presionó una tecla`}
          </code>
        </pre>

        <p>
          Por ejemplo, para detectar cada letra que escribe
          el usuario usamos normalmente <code>onChange</code>.
        </p>

        <hr />

        {/* =====================================================
            ERROR COMÚN
        ===================================================== */}

        <h2>🚨 Error común</h2>

        <p>
          No debemos escribir:
        </p>

        <pre>
          <code>
{`onChange={setNombre(e.target.value)} ❌`}
          </code>
        </pre>

        <p>
          Eso ejecutaría la función inmediatamente.
        </p>

        <p>
          Debemos pasar una función:
        </p>

        <pre>
          <code>
{`onChange={(e) =>
  setNombre(e.target.value)
} ✅`}
          </code>
        </pre>

        <p>
          Recuerda la regla que ya vimos con <code>onClick</code>:
        </p>

        <pre>
          <code>
{`onChange={funcion}
       ↓
pasamos la función


onChange={funcion()}
       ↓
ejecutamos inmediatamente`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            FLUJO
        ===================================================== */}

        <h2>🧠 Flujo completo de onChange</h2>

        <pre>
          <code>
{`Usuario escribe
      ↓
se produce el evento
      ↓
onChange
      ↓
(e)
      ↓
e.target
      ↓
e.target.value
      ↓
setEstado()
      ↓
estado actualizado
      ↓
React renderiza
      ↓
interfaz actualizada`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            MAPA MENTAL
        ===================================================== */}

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>
{`                 onChange
                    ↓
              detecta cambios
                    ↓
                 evento
                    ↓
                e.target
                    ↓
             e.target.value
                    ↓
                setState()
                    ↓
                  estado
                    ↓
                 render
                    ↓
                interfaz`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            RETO
        ===================================================== */}

        <h2>🧠 Reto conceptual</h2>

        <p>
          Tenemos:
        </p>

        <pre>
          <code>
{`const [correo, setCorreo] = useState("");`}
          </code>
        </pre>

        <p>
          Queremos guardar lo que el usuario escribe en un input.
        </p>

        <details>
          <summary>👁️ Mostrar solución</summary>

          <pre>
            <code>
{`<input
  value={correo}
  onChange={(e) =>
    setCorreo(e.target.value)
  }
/>`}
            </code>
          </pre>

          <p>
            El dato viaja así:
          </p>

          <pre>
            <code>
{`input
 ↓
onChange
 ↓
e.target.value
 ↓
setCorreo()
 ↓
correo`}
            </code>
          </pre>
        </details>

        <hr />

        {/* =====================================================
            RESUMEN
        ===================================================== */}

        <h2>📌 Resumen</h2>

        <ul>
          <li>✅ <code>onChange</code> detecta cambios.</li>
          <li>✅ Se utiliza principalmente con formularios.</li>
          <li>✅ <code>e</code> representa el evento.</li>
          <li>✅ <code>e.target</code> representa el elemento.</li>
          <li>✅ <code>e.target.value</code> obtiene el valor.</li>
          <li>✅ Checkbox utiliza normalmente <code>e.target.checked</code>.</li>
          <li>✅ Se combina muchísimo con <code>useState</code>.</li>
          <li>✅ Permite crear inputs controlados.</li>
          <li>✅ Es fundamental para formularios y búsquedas.</li>
        </ul>

        <h2>🎯 Frase clave</h2>

        <pre>
          <code>
{`onChange
   ↓
"Algo cambió en este campo."
   ↓
e.target.value
   ↓
setState()
   ↓
React actualiza la interfaz`}
          </code>
        </pre>

      </div>

      <Footer />
    </>
  );
}

export default OnChange;