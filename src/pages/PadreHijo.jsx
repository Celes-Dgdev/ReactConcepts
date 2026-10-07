
import Footer from "../components/Footer.jsx";
function PadreHijo() {
  return (
    <div className="concepto">

      <h1>👨‍👦 Padre → Hijo</h1>

      <section>
        <h2>📖 ¿Qué significa Padre → Hijo?</h2>

        <p>
          En React, un componente padre puede enviar información
          a un componente hijo utilizando props.
        </p>

        <p>
          Esta comunicación ocurre en una sola dirección:
          del padre hacia el hijo.
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Enviar datos de un componente padre a un hijo.</li>
          <li>Personalizar componentes reutilizables.</li>
          <li>Compartir información entre componentes.</li>
          <li>Evitar repetir código.</li>
        </ul>
      </section>

      <section>
        <h2>💻 Sintaxis básica</h2>

        <pre>
          <code>
{`function Hijo({ nombre }) {
  return <h2>Hola {nombre}</h2>;
}

function Padre() {
  return (
    <Hijo nombre="Celes" />
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🔍 ¿Cómo funciona?</h2>

        <pre>
          <code>
{`Componente Padre
      ↓
   envía props
      ↓
Componente Hijo
      ↓
   recibe props
      ↓
  muestra datos`}
          </code>
        </pre>

        <p>
          El padre decide qué información enviar y el hijo recibe
          esa información mediante props.
        </p>
      </section>

      <section>
        <h2>🧪 Ejemplo real</h2>

        <pre>
          <code>
{`function Usuario({ nombre, edad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
    </div>
  );
}

function App() {
  return (
    <Usuario
      nombre="Celes"
      edad={30}
    />
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>📦 ¿Qué puede enviar el padre?</h2>

        <p>
          Las props pueden contener diferentes tipos de datos:
        </p>

        <pre>
          <code>
{`<Usuario
  nombre="Celes"
  edad={30}
  activo={true}
/>`}
          </code>
        </pre>

        <ul>
          <li>Texto</li>
          <li>Números</li>
          <li>Booleanos</li>
          <li>Arrays</li>
          <li>Objetos</li>
          <li>Funciones</li>
        </ul>
      </section>

      <section>
        <h2>⚠️ Regla importante</h2>

        <p>
          La información viaja del padre hacia el hijo.
        </p>

        <pre>
          <code>
{`Padre
  ↓
  ↓
  ↓
Hijo`}
          </code>
        </pre>

        <p>
          El hijo no debe modificar directamente las props que recibe.
        </p>
      </section>

      <section>
        <h2>🧠 Diferencia entre Props y Padre → Hijo</h2>

        <p>
          Las props son el mecanismo que utilizamos para enviar
          información.
        </p>

        <p>
          Padre → Hijo describe la dirección en la que viaja
          esa información.
        </p>

        <pre>
          <code>
{`Padre
  ↓
Props
  ↓
Hijo`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un componente llamado Producto que reciba desde
          su componente padre:
        </p>

        <ul>
          <li>nombre</li>
          <li>precio</li>
        </ul>

        <p>
          Después muestra esos datos dentro del componente hijo.
        </p>
      </section>

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`function Producto({ nombre, precio }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: \${precio}</p>
    </div>
  );
}

function App() {
  return (
    <Producto
      nombre="Teclado"
      precio={500}
    />
  );
}`}
          </code>
        </pre>
      </section>
      <Footer />
    </div>
  );
}

export default PadreHijo;