import { useState } from "react";
import Footer from "../components/Footer.jsx";
function RenderizadoCondicional() {

  const [logueado, setLogueado] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [edad, setEdad] = useState(18);

  return (
    <div className="concepto">

      <h1>🔀 Renderizado condicional</h1>

      {/* ============================= */}
      {/* ¿QUÉ ES? */}
      {/* ============================= */}

      <section>
        <h2>📖 ¿Qué es el renderizado condicional?</h2>

        <p>
          El renderizado condicional significa mostrar diferentes
          elementos en la interfaz dependiendo de una condición.
        </p>

        <p>
          Es parecido a utilizar <strong>if</strong> en JavaScript:
          si una condición se cumple, mostramos algo; si no,
          mostramos otra cosa.
        </p>
      </section>

      {/* ============================= */}
      {/* ¿PARA QUÉ SIRVE? */}
      {/* ============================= */}

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Mostrar contenido dependiendo del estado.</li>
          <li>Mostrar botones diferentes.</li>
          <li>Mostrar mensajes.</li>
          <li>Mostrar contenido cuando un usuario está logueado.</li>
          <li>Mostrar estados de carga o error.</li>
          <li>Mostrar u ocultar elementos.</li>
        </ul>
      </section>

      {/* ============================= */}
      {/* IF */}
      {/* ============================= */}

      <section>
        <h2>1️⃣ Renderizado utilizando if</h2>

        <p>
          Cuando necesitamos lógica más compleja podemos utilizar
          una condición <strong>if</strong> antes del return.
        </p>

        <pre>
          <code>
{`function Usuario({ logueado }) {

  if (logueado) {
    return <h2>Bienvenido</h2>;
  }

  return <h2>Inicia sesión</h2>;
}`}
          </code>
        </pre>

        <p>
          Aquí React muestra una interfaz diferente dependiendo
          del valor de <strong>logueado</strong>.
        </p>
      </section>

      {/* ============================= */}
      {/* TERNARIO */}
      {/* ============================= */}

      <section>
        <h2>2️⃣ Operador ternario</h2>

        <p>
          El operador ternario permite elegir entre dos opciones.
        </p>

        <pre>
          <code>
{`condicion
  ? siEsVerdadero
  : siEsFalso`}
          </code>
        </pre>

        <h3>Ejemplo:</h3>

        <pre>
          <code>
{`{logueado
  ? <p>Bienvenido</p>
  : <p>Inicia sesión</p>
}`}
          </code>
        </pre>

        <p>
          Se lee como:
        </p>

        <pre>
          <code>
{`¿Está logueado?
      ↓
   Sí → Bienvenido
   No → Inicia sesión`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* AND */}
      {/* ============================= */}

      <section>
        <h2>3️⃣ Operador &&</h2>

        <p>
          El operador <strong>&&</strong> sirve cuando solamente
          queremos mostrar algo si una condición es verdadera.
        </p>

        <pre>
          <code>
{`{logueado && <p>Bienvenido</p>}`}
          </code>
        </pre>

        <p>
          Si <strong>logueado</strong> es true, aparece el mensaje.
        </p>

        <p>
          Si es false, no aparece nada.
        </p>
      </section>

      {/* ============================= */}
      {/* SWITCH */}
      {/* ============================= */}

      <section>
        <h2>4️⃣ Varias condiciones</h2>

        <p>
          Cuando tenemos varias posibilidades podemos utilizar
          diferentes condiciones.
        </p>

        <pre>
          <code>
{`if (rol === "admin") {
  return <p>Administrador</p>;
}

if (rol === "usuario") {
  return <p>Usuario</p>;
}

return <p>Invitado</p>;`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* EJEMPLO REAL */}
      {/* ============================= */}

      <section>
        <h2>🧪 Ejemplo real: usuario logueado</h2>

        <pre>
          <code>
{`function Perfil({ logueado }) {

  return (
    <div>

      {logueado ? (
        <h2>Mi perfil</h2>
      ) : (
        <h2>Inicia sesión</h2>
      )}

    </div>
  );
}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* PRUÉBALO */}
      {/* ============================= */}

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <h3>🔐 Usuario</h3>

        <button
          onClick={() => setLogueado(!logueado)}
        >
          {logueado ? "Cerrar sesión" : "Iniciar sesión"}
        </button>

        <p>
          {logueado
            ? "👋 Bienvenido, Celes"
            : "🔒 Debes iniciar sesión"}
        </p>

        <pre>
          <code>
{`{logueado
  ? "👋 Bienvenido, Celes"
  : "🔒 Debes iniciar sesión"
}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* && INTERACTIVO */}
      {/* ============================= */}

      <section>
        <h3>👁️ Mostrar / ocultar</h3>

        <button
          onClick={() => setMostrarMensaje(!mostrarMensaje)}
        >
          Mostrar / ocultar mensaje
        </button>

        {mostrarMensaje && (
          <p>
            🎉 Este mensaje solamente aparece cuando
            mostrarMensaje es true.
          </p>
        )}

        <pre>
          <code>
{`{mostrarMensaje && (
  <p>
    Este mensaje aparece.
  </p>
)}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* CONDICIÓN CON NÚMERO */}
      {/* ============================= */}

      <section>
        <h3>🔢 Condiciones con números</h3>

        <button
          onClick={() => setEdad(edad + 1)}
        >
          Cumplir años
        </button>

        <p>
          Edad: <strong>{edad}</strong>
        </p>

        {edad >= 18 ? (
          <p>🔞 Eres mayor de edad.</p>
        ) : (
          <p>👦 Eres menor de edad.</p>
        )}

        <pre>
          <code>
{`{edad >= 18
  ? <p>Mayor de edad</p>
  : <p>Menor de edad</p>
}`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* FLUJO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Flujo completo</h2>

        <pre>
          <code>
{`Estado
  ↓
Condición
  ↓
¿Se cumple?
  ↓
Sí ─────→ Mostrar elemento A
  │
  No ────→ Mostrar elemento B`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* DIFERENCIAS */}
      {/* ============================= */}

      <section>
        <h2>⚖️ ¿Cuándo utilizar cada uno?</h2>

        <ul>
          <li>
            <strong>if</strong> → cuando necesitamos lógica más compleja.
          </li>

          <li>
            <strong>ternario ? :</strong> → cuando tenemos dos opciones.
          </li>

          <li>
            <strong>&&</strong> → cuando solamente queremos mostrar
            algo si se cumple una condición.
          </li>
        </ul>

        <pre>
          <code>
{`if
 ↓
Lógica compleja


? :
 ↓
Dos posibilidades


&&
 ↓
Mostrar o no mostrar`}
          </code>
        </pre>
      </section>

      {/* ============================= */}
      {/* RETO */}
      {/* ============================= */}

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un estado llamado <strong>activo</strong> que empiece
          en false.
        </p>

        <p>
          Crea un botón que cambie su valor.
        </p>

        <p>
          Si activo es true, muestra:
        </p>

        <pre>
          <code>
{`🟢 Usuario activo`}
          </code>
        </pre>

        <p>
          Si activo es false, muestra:
        </p>

        <pre>
          <code>
{`🔴 Usuario inactivo`}
          </code>
        </pre>

        <p>
          Utiliza un operador ternario.
        </p>
      </section>

      {/* ============================= */}
      {/* SOLUCIÓN */}
      {/* ============================= */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`const [activo, setActivo] = useState(false);

<button
  onClick={() => setActivo(!activo)}
>
  Cambiar estado
</button>

<p>
  {activo
    ? "🟢 Usuario activo"
    : "🔴 Usuario inactivo"}
</p>`}
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
{`¿Necesito decidir entre dos cosas?
        ↓
      ? :

¿Solo quiero mostrar algo
si se cumple?
        ↓
      &&

¿Tengo lógica más compleja?
        ↓
      if`}
          </code>
        </pre>
      </section>
<Footer/>
    </div>
  );
}

export default RenderizadoCondicional;