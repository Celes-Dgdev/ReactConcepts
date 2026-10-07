
import Footer from "../components/Footer.jsx";
function Estado() {
  return (
    <div className="concepto">

      <h1>🧠 Estado en React</h1>

      <section>
        <h2>📖 ¿Qué es el estado?</h2>

        <p>
          El estado es información que un componente necesita
          recordar y que puede cambiar durante la ejecución de la aplicación.
        </p>

        <p>
          Cuando el estado cambia, React vuelve a renderizar el componente
          para mostrar la información actualizada.
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <p>
          Sirve para controlar información que cambia mientras el usuario
          interactúa con la aplicación.
        </p>

        <ul>
          <li>Contadores</li>
          <li>Mostrar u ocultar elementos</li>
          <li>Formularios</li>
          <li>Datos obtenidos de una API</li>
          <li>Preferencias del usuario</li>
        </ul>
      </section>

      <section>
        <h2>🔄 La idea principal</h2>

        <pre>
          <code>
{`Estado
  ↓
React renderiza
  ↓
Usuario interactúa
  ↓
Estado cambia
  ↓
React vuelve a renderizar
  ↓
Interfaz actualizada`}
          </code>
        </pre>
      </section>

      <section>
        <h2>💡 Ejemplo mental</h2>

        <p>
          Imagina que el estado es una cajita donde React guarda
          información que puede cambiar.
        </p>

        <pre>
          <code>
{`┌─────────────────┐
│ Estado          │
│ contador: 0     │
└─────────────────┘
        ↓
   aumenta()
        ↓
┌─────────────────┐
│ Estado          │
│ contador: 1     │
└─────────────────┘`}
          </code>
        </pre>
      </section>

      <section>
        <h2>⚠️ Regla importante</h2>

        <p>
          No debemos modificar directamente el estado.
          Debemos utilizar la función que React proporciona para actualizarlo.
        </p>

        <pre>
          <code>
{`❌ contador = contador + 1

✅ setContador(contador + 1)`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Explica con tus propias palabras qué ocurre cuando
          un estado cambia.
        </p>

        <p>
          Pista: piensa en la relación entre estado,
          renderizado e interfaz.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Estado;