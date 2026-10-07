
import Footer from "../components/Footer";
function ComponentesFuncionales() {
  return (
    <div className="concepto">

      <h1>🧩 Componentes funcionales</h1>

      <section>
        <h2>📖 ¿Qué es un componente funcional?</h2>

        <p>
          Un componente funcional es una función de JavaScript que
          devuelve JSX para representar una parte de la interfaz.
        </p>

        <p>
          Los componentes permiten dividir una aplicación en partes
          pequeñas, organizadas y reutilizables.
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Dividir la interfaz en partes más pequeñas.</li>
          <li>Reutilizar elementos de la aplicación.</li>
          <li>Organizar mejor el código.</li>
          <li>Recibir datos mediante props.</li>
          <li>Utilizar hooks como useState y useEffect.</li>
        </ul>
      </section>

      <section>
        <h2>💻 Sintaxis básica</h2>

        <pre>
          <code>
{`function Saludo() {
  return <h1>Hola mundo</h1>;
}

export default Saludo;`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🔍 ¿Cómo funciona?</h2>

        <pre>
          <code>
{`Componente
    ↓
Función
    ↓
JSX
    ↓
React
    ↓
Interfaz`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧪 Ejemplo real</h2>

        <pre>
          <code>
{`function Usuario() {
  return (
    <div>
      <h2>Usuario</h2>
      <p>Celes D.G.</p>
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un componente llamado Producto que muestre
          el nombre y el precio de un producto.
        </p>
      </section>

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`function Producto() {
  return (
    <div>
      <h2>Teclado</h2>
      <p>Precio: $500</p>
    </div>
  );
}`}
          </code>
        </pre>
      </section>
      <Footer />
    </div>
  );
}

export default ComponentesFuncionales;