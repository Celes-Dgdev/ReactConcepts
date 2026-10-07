import { useState } from "react";
import Footer from "../components/Footer";

function UseState() {
  // ============================================================
  // EJEMPLO 1: CONTADOR
  // ============================================================

  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  function reiniciar() {
    setContador(0);
  }

  // ============================================================
  // EJEMPLO 2: NOMBRE
  // ============================================================

  const [nombre, setNombre] = useState("");

  // ============================================================
  // EJEMPLO 3: MOSTRAR / OCULTAR
  // ============================================================

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // ============================================================
  // EJEMPLO 4: OBJETO
  // ============================================================

  const [usuario, setUsuario] = useState({
    nombre: "Celes",
    edad: 30
  });

  function aumentarEdad() {
    setUsuario({
      ...usuario,
      edad: usuario.edad + 1
    });
  }

  function cambiarNombre() {
    setUsuario({
      ...usuario,
      nombre: "Carlos"
    });
  }

  // ============================================================
  // EJEMPLO 5: ARRAY
  // ============================================================

  const [frutas, setFrutas] = useState([
    "Manzana",
    "Plátano",
    "Naranja"
  ]);

  function agregarFruta() {
    setFrutas([
      ...frutas,
      "Mango"
    ]);
  }

  return (
    <>
      <div className="concepto">

        <h1>⚛️ useState</h1>

        {/* =====================================================
            ¿QUÉ ES?
        ===================================================== */}

        <h2>📖 ¿Qué es useState?</h2>

        <p>
          <strong>useState</strong> es un Hook de React que permite
          agregar <strong>estado</strong> a un componente.
        </p>

        <p>
          El estado es información que puede cambiar durante la
          ejecución de nuestra aplicación y que, cuando cambia,
          puede provocar que React vuelva a renderizar el componente.
        </p>

        <p>
          Ejemplos de información que puede ser estado:
        </p>

        <ul>
          <li>🔢 Un contador.</li>
          <li>👤 El nombre de un usuario.</li>
          <li>🌙 Si el modo oscuro está activado.</li>
          <li>🛒 Productos de un carrito.</li>
          <li>📝 El contenido de un input.</li>
          <li>📋 Una lista de elementos.</li>
        </ul>

        <hr />

        {/* =====================================================
            ¿PARA QUÉ SIRVE?
        ===================================================== */}

        <h2>🎯 ¿Para qué sirve?</h2>

        <p>
          useState sirve para que un componente pueda
          <strong> recordar información</strong> y actualizar
          la interfaz cuando esa información cambia.
        </p>

        <pre>
          <code>
{`Estado
  ↓
cambia
  ↓
React detecta el cambio
  ↓
React vuelve a renderizar
  ↓
interfaz actualizada`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            SINTAXIS
        ===================================================== */}

        <h2>💻 Sintaxis</h2>

        <pre>
          <code>
{`const [estado, setEstado] = useState(valorInicial);`}
          </code>
        </pre>

        <p>
          Esta línea tiene varias partes.
        </p>

        <pre>
          <code>
{`const
 ↓
[estado, setEstado]
 ↓
useState(valorInicial)`}
          </code>
        </pre>

        <h3>1️⃣ Estado</h3>

        <p>
          Es el valor que queremos guardar.
        </p>

        <pre>
          <code>
{`const [contador, setContador] = useState(0);`}
          </code>
        </pre>

        <p>
          En este caso:
        </p>

        <pre>
          <code>
{`contador = 0`}
          </code>
        </pre>

        <h3>2️⃣ Setter</h3>

        <p>
          Es la función que utilizamos para cambiar el estado.
        </p>

        <pre>
          <code>
{`setContador(10);`}
          </code>
        </pre>

        <h3>3️⃣ Valor inicial</h3>

        <p>
          Es el valor con el que comienza el estado.
        </p>

        <pre>
          <code>
{`useState(0)`}
          </code>
        </pre>

        <p>
          Aquí el estado comienza en <strong>0</strong>.
        </p>

        <hr />

        {/* =====================================================
            LA IDEA DE LA CAJITA
        ===================================================== */}

        <h2>📦 La "cajita" de useState</h2>

        <p>
          Piensa en useState como una cajita que React administra
          por nosotros.
        </p>

        <pre>
          <code>
{`const [contador, setContador] = useState(0);

        React
          ↓
    ┌─────────────┐
    │ contador: 0 │
    └─────────────┘`}
          </code>
        </pre>

        <p>
          Cuando hacemos:
        </p>

        <pre>
          <code>
{`setContador(1);`}
          </code>
        </pre>

        <p>
          React actualiza la cajita:
        </p>

        <pre>
          <code>
{`    ┌─────────────┐
    │ contador: 1 │
    └─────────────┘`}
          </code>
        </pre>

        <p>
          Y vuelve a ejecutar el componente para actualizar
          lo que vemos en pantalla.
        </p>

        <hr />

        {/* =====================================================
            EJEMPLO 1 CONTADOR
        ===================================================== */}

        <h2>🎮 Pruébalo tú mismo: contador</h2>

        <p>
          Valor actual:
        </p>

        <h1>{contador}</h1>

        <button onClick={aumentar}>
          ➕ Aumentar
        </button>

        <button onClick={disminuir}>
          ➖ Disminuir
        </button>

        <button onClick={reiniciar}>
          🔄 Reiniciar
        </button>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [contador, setContador] = useState(0);

function aumentar() {
  setContador(contador + 1);
}

function disminuir() {
  setContador(contador - 1);
}

function reiniciar() {
  setContador(0);
}

<h1>{contador}</h1>

<button onClick={aumentar}>
  Aumentar
</button>

<button onClick={disminuir}>
  Disminuir
</button>

<button onClick={reiniciar}>
  Reiniciar
</button>`}
          </code>
        </pre>

        <p>
          Fíjate en algo importante:
        </p>

        <pre>
          <code>
{`contador
   ↓
valor actual

setContador()
   ↓
cambia el valor`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            NO MODIFICAR DIRECTAMENTE
        ===================================================== */}

        <h2>🚨 No modifiques el estado directamente</h2>

        <p>
          Esto está mal:
        </p>

        <pre>
          <code>
{`contador = contador + 1; ❌`}
          </code>
        </pre>

        <p>
          Debemos utilizar el setter:
        </p>

        <pre>
          <code>
{`setContador(contador + 1); ✅`}
          </code>
        </pre>

        <p>
          ¿Por qué?
        </p>

        <p>
          Porque React necesita recibir la actualización mediante
          el setter para programar el nuevo renderizado.
        </p>

        <hr />

        {/* =====================================================
            EJEMPLO 2 INPUT
        ===================================================== */}

        <h2>✏️ useState con un input</h2>

        <p>
          El estado no solamente sirve para números.
          También podemos guardar texto.
        </p>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />

        <p>
          Hola, <strong>{nombre || "visitante"}</strong> 👋
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Escribe tu nombre"
/>

<p>
  Hola, {nombre}
</p>`}
          </code>
        </pre>

        <p>
          Aquí tenemos el flujo:
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
estado actualizado
      ↓
React renderiza
      ↓
se actualiza el texto`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO 3 BOOLEAN
        ===================================================== */}

        <h2>👁️ useState con true / false</h2>

        <button
          onClick={() => setMostrarMensaje(!mostrarMensaje)}
        >
          {mostrarMensaje
            ? "🙈 Ocultar"
            : "👀 Mostrar"}
        </button>

        {mostrarMensaje && (
          <div className="tarjeta">
            <h3>🔥 ¡El mensaje está visible!</h3>

            <p>
              Estamos utilizando un estado booleano.
            </p>
          </div>
        )}

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [mostrarMensaje, setMostrarMensaje] =
  useState(false);

<button
  onClick={() =>
    setMostrarMensaje(!mostrarMensaje)
  }
>
  Mostrar / Ocultar
</button>

{mostrarMensaje && (
  <p>
    ¡El mensaje está visible!
  </p>
)}`}
          </code>
        </pre>

        <p>
          Aquí el estado solamente puede tener dos valores:
        </p>

        <pre>
          <code>
{`true
false`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO 4 OBJETO
        ===================================================== */}

        <h2>👤 useState con objetos</h2>

        <p>
          También podemos guardar un objeto completo en el estado.
        </p>

        <div className="tarjeta">

          <h3>{usuario.nombre}</h3>

          <p>
            Edad: {usuario.edad}
          </p>

          <button onClick={aumentarEdad}>
            🎂 Aumentar edad
          </button>

          <button onClick={cambiarNombre}>
            ✏️ Cambiar nombre
          </button>

        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [usuario, setUsuario] = useState({
  nombre: "Celes",
  edad: 30
});

function aumentarEdad() {
  setUsuario({
    ...usuario,
    edad: usuario.edad + 1
  });
}

function cambiarNombre() {
  setUsuario({
    ...usuario,
    nombre: "Carlos"
  });
}`}
          </code>
        </pre>

        <h3>🧠 ¿Por qué usamos ...usuario?</h3>

        <p>
          Porque queremos conservar las propiedades que no estamos
          modificando.
        </p>

        <pre>
          <code>
{`usuario
{
  nombre: "Celes",
  edad: 30
}

        ↓

{
  ...usuario,
  edad: 31
}

        ↓

{
  nombre: "Celes",
  edad: 31
}`}
          </code>
        </pre>

        <p>
          Esto se conoce como <strong>spread operator</strong>.
        </p>

        <hr />

        {/* =====================================================
            EJEMPLO 5 ARRAY
        ===================================================== */}

        <h2>📋 useState con arrays</h2>

        <p>
          También podemos guardar arreglos.
        </p>

        <div className="tarjeta">

          <h3>🍎 Frutas</h3>

          <ul>
            {frutas.map((fruta, index) => (
              <li key={index}>
                {fruta}
              </li>
            ))}
          </ul>

          <button onClick={agregarFruta}>
            🥭 Agregar mango
          </button>

        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [frutas, setFrutas] = useState([
  "Manzana",
  "Plátano",
  "Naranja"
]);

function agregarFruta() {
  setFrutas([
    ...frutas,
    "Mango"
  ]);
}`}
          </code>
        </pre>

        <p>
          Nuevamente utilizamos <code>...</code> para conservar
          los elementos anteriores.
        </p>

        <pre>
          <code>
{`frutas
  ↓
["Manzana", "Plátano", "Naranja"]

        ↓

[
  ...frutas,
  "Mango"
]

        ↓

["Manzana", "Plátano", "Naranja", "Mango"]`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            SETTER FUNCIONAL
        ===================================================== */}

        <h2>🔄 Actualizar usando el valor anterior</h2>

        <p>
          Cuando el nuevo estado depende del estado anterior,
          podemos utilizar una función dentro del setter.
        </p>

        <pre>
          <code>
{`setContador((valorAnterior) => {
  return valorAnterior + 1;
});`}
          </code>
        </pre>

        <p>
          También podemos escribirlo de forma corta:
        </p>

        <pre>
          <code>
{`setContador(
  (valorAnterior) => valorAnterior + 1
);`}
          </code>
        </pre>

        <p>
          Esto es especialmente útil cuando hacemos varias
          actualizaciones o cuando el nuevo valor depende del
          anterior.
        </p>

        <hr />

        {/* =====================================================
            ASINCRONÍA
        ===================================================== */}

        <h2>⏳ ¿Por qué el estado no cambia inmediatamente?</h2>

        <p>
          React administra las actualizaciones de estado y puede
          agrupar varias actualizaciones para hacer el renderizado
          más eficiente.
        </p>

        <p>
          Por eso no debemos pensar en el setter como una asignación
          normal de JavaScript.
        </p>

        <pre>
          <code>
{`setContador(contador + 1);`}
          </code>
        </pre>

        <p>
          No significa simplemente:
        </p>

        <pre>
          <code>
{`contador = contador + 1;`}
          </code>
        </pre>

        <p>
          Significa que estamos pidiendo a React actualizar el estado
          y volver a renderizar el componente.
        </p>

        <hr />

        {/* =====================================================
            FLUJO
        ===================================================== */}

        <h2>🧠 Flujo completo de useState</h2>

        <pre>
          <code>
{`useState(valorInicial)
        ↓
React crea el estado
        ↓
componente utiliza el estado
        ↓
usuario hace algo
        ↓
setEstado(...)
        ↓
React actualiza el estado
        ↓
React vuelve a ejecutar el componente
        ↓
nuevo JSX
        ↓
interfaz actualizada`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            TIPOS DE ESTADO
        ===================================================== */}

        <h2>🧠 ¿Qué puedo guardar en useState?</h2>

        <pre>
          <code>
{`useState(0)              → número

useState("")             → texto

useState(true)           → booleano

useState(null)           → null

useState([])             → array

useState({})             → objeto`}
          </code>
        </pre>

        <p>
          Incluso podemos guardar estructuras más complejas.
        </p>

        <hr />

        {/* =====================================================
            USESTATE VS VARIABLE NORMAL
        ===================================================== */}

        <h2>⚔️ Variable normal vs useState</h2>

        <div className="tarjeta">

          <h3>Variable normal</h3>

          <pre>
            <code>
{`let contador = 0;

contador++;`}
            </code>
          </pre>

          <p>
            JavaScript cambia la variable, pero React no recibe
            automáticamente una orden para actualizar la interfaz.
          </p>

        </div>

        <div className="tarjeta">

          <h3>useState</h3>

          <pre>
            <code>
{`const [contador, setContador] =
  useState(0);

setContador(contador + 1);`}
            </code>
          </pre>

          <p>
            React administra el estado y actualiza la interfaz.
          </p>

        </div>

        <hr />

        {/* =====================================================
            MAPA MENTAL
        ===================================================== */}

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>
{`                 useState
                    ↓
             guarda información
                    ↓
                [estado]
                    ↓
              usuario cambia algo
                    ↓
                setEstado()
                    ↓
             React actualiza
                    ↓
                 render
                    ↓
              nueva interfaz`}
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
{`const [contador, setContador] = useState(0);`}
          </code>
        </pre>

        <p>
          Queremos aumentar el contador en 5.
        </p>

        <details>
          <summary>👁️ Mostrar solución</summary>

          <pre>
            <code>
{`setContador(contador + 5);`}
            </code>
          </pre>

          <p>
            O utilizando el valor anterior:
          </p>

          <pre>
            <code>
{`setContador(
  (valorAnterior) => valorAnterior + 5
);`}
            </code>
          </pre>
        </details>

        <hr />

        {/* =====================================================
            RESUMEN
        ===================================================== */}

        <h2>📌 Resumen</h2>

        <ul>
          <li>✅ <code>useState</code> permite manejar estado.</li>
          <li>✅ Devuelve el valor y una función setter.</li>
          <li>✅ El setter actualiza el estado.</li>
          <li>✅ Actualizar estado provoca un nuevo render.</li>
          <li>✅ Podemos guardar números, textos, booleanos, arrays y objetos.</li>
          <li>✅ Para objetos usamos normalmente spread para conservar propiedades.</li>
          <li>✅ Para arrays podemos crear un nuevo array usando spread.</li>
          <li>✅ No debemos modificar el estado directamente.</li>
          <li>✅ Si dependemos del valor anterior, podemos usar la forma funcional.</li>
        </ul>

        <h2>🎯 La frase clave</h2>

        <pre>
          <code>
{`useState = "React, guarda este dato
             y avísame cuando cambie
             para actualizar la interfaz."`}
          </code>
        </pre>

      </div>

      <Footer />
    </>
  );
}

export default UseState;