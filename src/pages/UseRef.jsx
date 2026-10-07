import { useRef, useState } from "react";
import Footer from "../components/Footer";

function UseRef() {

  // =========================================================
  // EJEMPLO 1 — useRef como "cajita" para guardar un valor
  // =========================================================

  const numeroRef = useRef(0);
  const [render, setRender] = useState(0);

  function aumentarRef() {
    numeroRef.current = numeroRef.current + 1;
    setRender(render + 1);
  }


  // =========================================================
  // EJEMPLO 2 — useRef para acceder a un elemento del DOM
  // =========================================================

  const inputRef = useRef(null);

  function enfocarInput() {
    inputRef.current.focus();
  }


  // =========================================================
  // EJEMPLO 3 — guardar el valor anterior
  // =========================================================

  const [nombre, setNombre] = useState("");
  const nombreAnterior = useRef("");

  const valorAnterior = nombreAnterior.current;

  nombreAnterior.current = nombre;


  // =========================================================
  // EJEMPLO 4 — guardar un intervalo
  // =========================================================

  const intervaloRef = useRef(null);
  const [segundos, setSegundos] = useState(0);

  function iniciarTemporizador() {

    if (intervaloRef.current !== null) {
      return;
    }

    intervaloRef.current = setInterval(() => {
      setSegundos((valorAnterior) => valorAnterior + 1);
    }, 1000);
  }

  function detenerTemporizador() {

    clearInterval(intervaloRef.current);

    intervaloRef.current = null;
  }

  function reiniciarTemporizador() {

    clearInterval(intervaloRef.current);

    intervaloRef.current = null;

    setSegundos(0);
  }


  return (
    <>
      <div className="concepto">

        {/* ================================================= */}
        {/* TÍTULO */}
        {/* ================================================= */}

        <h1>📦 useRef</h1>


        {/* ================================================= */}
        {/* ¿QUÉ ES? */}
        {/* ================================================= */}

        <section>

          <h2>📖 ¿Qué es useRef?</h2>

          <p>
            <strong>useRef</strong> es un Hook de React que permite guardar
            un valor que permanece entre renders sin provocar un nuevo render
            cuando ese valor cambia.
          </p>

          <p>
            Se utiliza principalmente para dos cosas:
          </p>

          <ul>

            <li>
              📦 Guardar valores persistentes que no necesitan actualizar
              la interfaz inmediatamente.
            </li>

            <li>
              🎯 Acceder directamente a elementos del DOM.
            </li>

          </ul>

          <p>
            Su sintaxis básica es:
          </p>

          <pre>
            <code>{`const referencia = useRef(valorInicial);`}</code>
          </pre>

          <p>
            El valor se encuentra dentro de:
          </p>

          <pre>
            <code>{`referencia.current`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* LA CAJITA */}
        {/* ================================================= */}

        <section>

          <h2>📦 La idea de la "cajita"</h2>

          <p>
            Una forma sencilla de entender <strong>useRef</strong> es
            imaginar que React nos entrega una cajita.
          </p>

          <pre>
            <code>{`useRef(0)

     ↓

┌───────────────┐
│ current: 0    │
└───────────────┘`}</code>
          </pre>

          <p>
            Podemos cambiar lo que hay dentro:
          </p>

          <pre>
            <code>{`referencia.current = 10;`}</code>
          </pre>

          <p>
            Y la cajita ahora contiene:
          </p>

          <pre>
            <code>{`┌───────────────┐
│ current: 10   │
└───────────────┘`}</code>
          </pre>

          <p>
            Lo importante es que cambiar <strong>current</strong> no provoca
            automáticamente un nuevo render.
          </p>

        </section>


        {/* ================================================= */}
        {/* EJEMPLO 1 */}
        {/* ================================================= */}

        <section>

          <h2>🎮 Pruébalo tú mismo: guardar un valor</h2>

          <p>
            Cada vez que presiones el botón, aumentaremos un valor guardado
            dentro de <strong>useRef</strong>.
          </p>

          <div className="ejemplo-interactivo">

            <p>
              Valor guardado en useRef:
              <strong> {numeroRef.current}</strong>
            </p>

            <p>
              Render actual:
              <strong> {render}</strong>
            </p>

            <button onClick={aumentarRef}>
              Aumentar useRef
            </button>

          </div>


          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const numeroRef = useRef(0);
const [render, setRender] = useState(0);

function aumentarRef() {
  numeroRef.current = numeroRef.current + 1;

  setRender(render + 1);
}`}</code>
          </pre>

          <p>
            Aquí tenemos dos cosas diferentes:
          </p>

          <ul>

            <li>
              <strong>numeroRef.current</strong> guarda el valor.
            </li>

            <li>
              <strong>render</strong> provoca que React vuelva a pintar
              la interfaz.
            </li>

          </ul>

          <p>
            El cambio de <strong>numeroRef.current</strong> por sí solo
            no provoca el render.
          </p>

        </section>


        {/* ================================================= */}
        {/* USESTATE VS USEREF */}
        {/* ================================================= */}

        <section>

          <h2>⚔️ useState vs useRef</h2>

          <pre>
            <code>{`useState
   ↓
cambia el estado
   ↓
React renderiza nuevamente


useRef
   ↓
cambia .current
   ↓
React NO renderiza automáticamente`}</code>
          </pre>

          <p>
            Por eso no debemos utilizar <strong>useRef</strong> como sustituto
            de <strong>useState</strong>.
          </p>

          <p>
            Si el usuario necesita ver inmediatamente el nuevo valor en la
            interfaz, normalmente necesitamos <strong>useState</strong>.
          </p>

        </section>


        {/* ================================================= */}
        {/* DOM */}
        {/* ================================================= */}

        <section>

          <h2>🎯 useRef y el DOM</h2>

          <p>
            Otro uso muy importante de <strong>useRef</strong> es obtener
            una referencia directa a un elemento HTML.
          </p>

          <p>
            Por ejemplo, podemos crear una referencia:
          </p>

          <pre>
            <code>{`const inputRef = useRef(null);`}</code>
          </pre>

          <p>
            Después conectamos esa referencia con un elemento:
          </p>

          <pre>
            <code>{`<input ref={inputRef} />`}</code>
          </pre>

          <p>
            Ahora React coloca el elemento HTML dentro de:
          </p>

          <pre>
            <code>{`inputRef.current`}</code>
          </pre>

          <p>
            Por lo tanto podemos hacer cosas como:
          </p>

          <pre>
            <code>{`inputRef.current.focus();`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* EJEMPLO 2 */}
        {/* ================================================= */}

        <section>

          <h2>🎮 Pruébalo tú mismo: enfocar un input</h2>

          <div className="ejemplo-interactivo">

            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe algo..."
            />

            <button onClick={enfocarInput}>
              🎯 Enfocar input
            </button>

          </div>


          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const inputRef = useRef(null);

function enfocarInput() {
  inputRef.current.focus();
}

<input
  ref={inputRef}
  type="text"
  placeholder="Escribe algo..."
/>

<button onClick={enfocarInput}>
  Enfocar input
</button>`}</code>
          </pre>

          <p>
            Aquí <strong>inputRef.current</strong> representa directamente
            al elemento HTML <strong>&lt;input&gt;</strong>.
          </p>

        </section>


        {/* ================================================= */}
        {/* USE REF Y EL DOM */}
        {/* ================================================= */}

        <section>

          <h2>🧠 ¿Qué está pasando?</h2>

          <pre>
            <code>{`useRef(null)
      ↓
crea la referencia
      ↓
ref={inputRef}
      ↓
React conecta la referencia
      ↓
inputRef.current
      ↓
<input>
      ↓
.focus()`}</code>
          </pre>

          <p>
            Esto es especialmente útil cuando necesitamos realizar una acción
            directamente sobre un elemento del navegador.
          </p>

          <p>
            Ejemplos:
          </p>

          <ul>

            <li>Enfocar un input.</li>

            <li>Seleccionar texto.</li>

            <li>Reproducir o pausar un video.</li>

            <li>Controlar elementos multimedia.</li>

            <li>Medir dimensiones de un elemento.</li>

          </ul>

        </section>


        {/* ================================================= */}
        {/* VALOR ANTERIOR */}
        {/* ================================================= */}

        <section>

          <h2>🕐 Guardar el valor anterior</h2>

          <p>
            Como <strong>useRef</strong> conserva su valor entre renders,
            también podemos utilizarlo para guardar información anterior.
          </p>

          <p>
            Por ejemplo, podemos guardar el nombre anterior.
          </p>

          <pre>
            <code>{`const nombreAnterior = useRef("");

const valorAnterior = nombreAnterior.current;

nombreAnterior.current = nombre;`}</code>
          </pre>

          <p>
            La idea es:
          </p>

          <pre>
            <code>{`Render anterior
      ↓
nombreAnterior.current
      ↓
nuevo render
      ↓
nombre actual`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* EJEMPLO 3 */}
        {/* ================================================= */}

        <section>

          <h2>🎮 Pruébalo tú mismo: valor anterior</h2>

          <div className="ejemplo-interactivo">

            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre"
            />

            <p>
              Valor actual:
              <strong> {nombre || "—"}</strong>
            </p>

            <p>
              Valor anterior:
              <strong> {valorAnterior || "—"}</strong>
            </p>

          </div>


          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const [nombre, setNombre] = useState("");

const nombreAnterior = useRef("");

const valorAnterior = nombreAnterior.current;

nombreAnterior.current = nombre;

<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>

<p>
  Valor actual: {nombre}
</p>

<p>
  Valor anterior: {valorAnterior}
</p>`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* TIMER */}
        {/* ================================================= */}

        <section>

          <h2>⏱️ useRef y temporizadores</h2>

          <p>
            También podemos utilizar <strong>useRef</strong> para guardar
            identificadores de temporizadores.
          </p>

          <p>
            Por ejemplo:
          </p>

          <pre>
            <code>{`const intervaloRef = useRef(null);`}</code>
          </pre>

          <p>
            Cuando creamos un intervalo:
          </p>

          <pre>
            <code>{`intervaloRef.current = setInterval(() => {

  // código

}, 1000);`}</code>
          </pre>

          <p>
            Después podemos detenerlo utilizando:
          </p>

          <pre>
            <code>{`clearInterval(intervaloRef.current);`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* EJEMPLO 4 */}
        {/* ================================================= */}

        <section>

          <h2>🎮 Pruébalo tú mismo: temporizador</h2>

          <div className="ejemplo-interactivo">

            <h3>
              ⏱️ {segundos} segundos
            </h3>

            <button onClick={iniciarTemporizador}>
              ▶️ Iniciar
            </button>

            <button onClick={detenerTemporizador}>
              ⏸️ Detener
            </button>

            <button onClick={reiniciarTemporizador}>
              🔄 Reiniciar
            </button>

          </div>


          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const intervaloRef = useRef(null);
const [segundos, setSegundos] = useState(0);

function iniciarTemporizador() {

  if (intervaloRef.current !== null) {
    return;
  }

  intervaloRef.current = setInterval(() => {

    setSegundos(
      (valorAnterior) => valorAnterior + 1
    );

  }, 1000);
}

function detenerTemporizador() {

  clearInterval(intervaloRef.current);

  intervaloRef.current = null;
}

function reiniciarTemporizador() {

  clearInterval(intervaloRef.current);

  intervaloRef.current = null;

  setSegundos(0);
}`}</code>
          </pre>

          <p>
            Aquí <strong>useRef</strong> guarda el identificador del intervalo.
          </p>

          <p>
            Mientras que <strong>useState</strong> guarda los segundos porque
            esos segundos sí necesitamos mostrarlos en pantalla.
          </p>

        </section>


        {/* ================================================= */}
        {/* CUÁNDO USARLO */}
        {/* ================================================= */}

        <section>

          <h2>🎯 ¿Cuándo usar useRef?</h2>

          <p>
            Usa <strong>useRef</strong> cuando necesitas conservar información
            entre renders pero cambiar esa información no debería provocar
            automáticamente otro render.
          </p>

          <p>
            También úsalo cuando necesites una referencia directa a un
            elemento del DOM.
          </p>

          <h3>Ejemplos:</h3>

          <ul>

            <li>🎯 Enfocar inputs.</li>

            <li>⏱️ Guardar identificadores de timers.</li>

            <li>🕐 Guardar valores anteriores.</li>

            <li>🎬 Controlar elementos multimedia.</li>

            <li>📦 Guardar valores persistentes que no necesitan render.</li>

          </ul>

        </section>


        {/* ================================================= */}
        {/* ERROR COMÚN */}
        {/* ================================================= */}

        <section>

          <h2>⚠️ Error común</h2>

          <p>
            No hagas esto esperando que React actualice la pantalla:
          </p>

          <pre>
            <code>{`numeroRef.current = numeroRef.current + 1;`}</code>
          </pre>

          <p>
            El valor sí cambia, pero React no vuelve a renderizar simplemente
            porque cambiaste <strong>current</strong>.
          </p>

          <p>
            Si necesitas actualizar la interfaz:
          </p>

          <pre>
            <code>{`setNumero(numero + 1);`}</code>
          </pre>

          <p>
            Recuerda:
          </p>

          <pre>
            <code>{`useState → interfaz

useRef → referencia / memoria persistente`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* USEREF VS VARIABLE NORMAL */}
        {/* ================================================= */}

        <section>

          <h2>🧠 useRef vs variable normal</h2>

          <p>
            Una variable normal puede perder su valor cuando React vuelve
            a ejecutar el componente.
          </p>

          <p>
            En cambio, un ref conserva su valor entre renders.
          </p>

          <pre>
            <code>{`let numero = 0;

const numeroRef = useRef(0);`}</code>
          </pre>

          <p>
            El segundo está diseñado específicamente para conservar ese valor
            entre renders del componente.
          </p>

        </section>


        {/* ================================================= */}
        {/* MAPA MENTAL */}
        {/* ================================================= */}

        <section>

          <h2>🗺️ Mapa mental</h2>

          <pre>
            <code>{`useRef()
   ↓
crea una referencia
   ↓
.current
   ↓
┌──────────────────────┐
│ guarda un valor      │
│ entre renders        │
└──────────────────────┘
   │
   ├── no provoca render
   │
   └── puede apuntar al DOM


useState()
   ↓
cambia el estado
   ↓
React renderiza
   ↓
actualiza la interfaz`}</code>
          </pre>

        </section>


        {/* ================================================= */}
        {/* RESUMEN */}
        {/* ================================================= */}

        <section>

          <h2>✅ Resumen</h2>

          <ul>

            <li>
              <strong>useRef</strong> crea una referencia persistente.
            </li>

            <li>
              El valor se guarda en <strong>.current</strong>.
            </li>

            <li>
              Cambiar <strong>.current</strong> no provoca automáticamente
              un render.
            </li>

            <li>
              Puede utilizarse para acceder directamente al DOM.
            </li>

            <li>
              Puede guardar valores entre renders.
            </li>

            <li>
              Puede almacenar identificadores de timers.
            </li>

            <li>
              Puede utilizarse para conservar valores anteriores.
            </li>

          </ul>

        </section>


        {/* ================================================= */}
        {/* RETO */}
        {/* ================================================= */}

        <section>

          <h2>🧠 Reto mental</h2>

          <p>
            Observa:
          </p>

          <pre>
            <code>{`const contador = useRef(0);

contador.current = contador.current + 1;`}</code>
          </pre>

          <p>
            Pregunta:
          </p>

          <p>
            ¿Cambiar <strong>contador.current</strong> provoca automáticamente
            un nuevo render?
          </p>

          <details>

            <summary>👁️ Mostrar solución</summary>

            <p>
              ❌ No.
            </p>

            <p>
              <strong>useRef</strong> conserva el valor, pero cambiar
              <strong>current</strong> no provoca un render.
            </p>

            <pre>
              <code>{`useRef
  ↓
.current cambia
  ↓
NO render automático`}</code>
            </pre>

          </details>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default UseRef;