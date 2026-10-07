
import Footer from "../components/Footer";
function ImportExport() {
  return (
    <div className="concepto">

      <h1>📦 Import / Export</h1>

      {/* ¿QUÉ ES? */}

      <section>
        <h2>📖 ¿Qué es Import / Export?</h2>

        <p>
          Import y Export son características de JavaScript que permiten
          compartir código entre diferentes archivos.
        </p>

        <p>
          En React se utilizan constantemente para compartir componentes,
          funciones, variables y otros recursos.
        </p>
      </section>

      {/* ¿PARA QUÉ SIRVE? */}

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Compartir componentes entre archivos.</li>
          <li>Organizar mejor el código.</li>
          <li>Reutilizar funciones y variables.</li>
          <li>Separar una aplicación en diferentes módulos.</li>
        </ul>
      </section>

      {/* EXPORT */}

      <section>
        <h2>📤 Export</h2>

        <p>
          Export permite hacer disponible una función, componente o
          variable para utilizarla desde otro archivo.
        </p>

        <pre>
          <code>
{`function Saludo() {
  return <h1>Hola</h1>;
}

export default Saludo;`}
          </code>
        </pre>
      </section>

      {/* IMPORT */}

      <section>
        <h2>📥 Import</h2>

        <p>
          Import permite traer algo que fue exportado desde otro archivo.
        </p>

        <pre>
          <code>
{`import Saludo from "./Saludo.jsx";`}
          </code>
        </pre>
      </section>

      {/* FLUJO */}

      <section>
        <h2>🧠 ¿Cómo funciona?</h2>

        <pre>
          <code>
{`Saludo.jsx
    ↓
export default Saludo
    ↓
App.jsx
    ↓
import Saludo
    ↓
<Saludo />`}
          </code>
        </pre>
      </section>

      {/* EXPORT DEFAULT */}

      <section>
        <h2>⭐ Export default</h2>

        <p>
          Un archivo puede tener un export default. Al importarlo,
          podemos elegir el nombre que tendrá dentro del archivo que lo recibe.
        </p>

        <pre>
          <code>
{`export default Saludo;

import MiSaludo from "./Saludo.jsx";`}
          </code>
        </pre>
      </section>

      {/* EXPORT NOMBRADO */}

      <section>
        <h2>📦 Export nombrado</h2>

        <p>
          También podemos exportar varios elementos utilizando sus nombres.
        </p>

        <pre>
          <code>
{`export const nombre = "Celes";
export const edad = 30;

import { nombre, edad } from "./datos.js";`}
          </code>
        </pre>
      </section>

      {/* EJEMPLO REAL */}

      <section>
        <h2>🧪 Ejemplo real en React</h2>

        <pre>
          <code>
{`// Boton.jsx

function Boton() {
  return <button>Comprar</button>;
}

export default Boton;`}
          </code>
        </pre>

        <pre>
          <code>
{`// App.jsx

import Boton from "./Boton.jsx";

function App() {
  return (
    <div>
      <h1>Mi aplicación</h1>
      <Boton />
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      {/* RETO */}

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un componente llamado Tarjeta, expórtalo desde
          Tarjeta.jsx e impórtalo después en App.jsx.
        </p>
      </section>

      {/* SOLUCIÓN */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`// Tarjeta.jsx

function Tarjeta() {
  return <div>Mi tarjeta</div>;
}

export default Tarjeta;`}
          </code>
        </pre>

        <pre>
          <code>
{`// App.jsx

import Tarjeta from "./Tarjeta.jsx";

function App() {
  return <Tarjeta />;
}`}
          </code>
        </pre>
      </section>
<Footer/>
    </div>
  );
}

export default ImportExport;