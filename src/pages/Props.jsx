
import Footer from "../components/Footer.jsx";
function Props() {
  return (
    <div className="concepto">

      <h1>📨 Props</h1>

      {/* ¿QUÉ SON? */}

      <section>
        <h2>📖 ¿Qué son las Props?</h2>

        <p>
          Las props son datos que un componente padre puede enviar
          a un componente hijo.
        </p>

        <p>
          La palabra props viene de "properties" y permite pasar
          información entre componentes.
        </p>
      </section>

      {/* ¿PARA QUÉ SIRVEN? */}

      <section>
        <h2>🎯 ¿Para qué sirven?</h2>

        <ul>
          <li>Enviar datos de un componente a otro.</li>
          <li>Personalizar componentes reutilizables.</li>
          <li>Compartir información entre componentes padre e hijo.</li>
          <li>Evitar repetir código.</li>
        </ul>
      </section>

      {/* SINTAXIS */}

      <section>
        <h2>💻 Sintaxis básica</h2>

        <pre>
          <code>
{`function Saludo(props) {
  return <h1>Hola {props.nombre}</h1>;
}

<Saludo nombre="Celes" />`}
          </code>
        </pre>
      </section>

      {/* FLUJO */}

      <section>
        <h2>🧠 ¿Cómo funcionan?</h2>

        <pre>
          <code>
{`Componente padre
      ↓
   props
      ↓
Componente hijo
      ↓
muestra los datos`}
          </code>
        </pre>

        <p>
          El padre envía la información y el hijo la recibe mediante
          las props.
        </p>
      </section>

      {/* EJEMPLO */}

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

      {/* DESESTRUCTURACIÓN */}

      <section>
        <h2>📦 Desestructuración</h2>

        <p>
          Podemos recibir las props directamente utilizando
          desestructuración.
        </p>

        <pre>
          <code>
{`function Usuario({ nombre, edad }) {
  return (
    <p>
      {nombre} tiene {edad} años
    </p>
  );
}`}
          </code>
        </pre>

        <p>
          En lugar de escribir <strong>props.nombre</strong> y
          <strong> props.edad</strong>, recibimos directamente
          las propiedades que necesitamos.
        </p>
      </section>

      {/* REGLA IMPORTANTE */}

      <section>
        <h2>⚠️ Regla importante</h2>

        <p>
          Las props son de solo lectura. El componente hijo no debe
          modificar directamente las props que recibe.
        </p>
      </section>

      {/* RETO */}

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un componente llamado Producto que reciba mediante props
          un nombre y un precio.
        </p>

        <p>
          Después muestra ambos datos en pantalla.
        </p>
      </section>

      {/* SOLUCIÓN */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`function Producto({ nombre, precio }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${"{precio}"}</p>
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

export default Props;