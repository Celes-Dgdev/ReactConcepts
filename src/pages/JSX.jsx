
import Footer from "../components/Footer";
function JSX() {
  return (
    <div className="concepto">

      <h1>🧩 JSX</h1>

      {/* ¿QUÉ ES? */}

      <section>
        <h2>📖 ¿Qué es JSX?</h2>

        <p>
          JSX es una extensión de la sintaxis de JavaScript que permite
          escribir una estructura parecida a HTML dentro de JavaScript.
        </p>

        <p>
          React utiliza JSX para describir cómo debe verse la interfaz
          de usuario.
        </p>
      </section>

      {/* ¿PARA QUÉ SIRVE? */}

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Crear la estructura visual de los componentes.</li>
          <li>Combinar JavaScript con elementos de la interfaz.</li>
          <li>Mostrar datos dinámicos dentro de la interfaz.</li>
          <li>Hacer que los componentes sean más fáciles de leer.</li>
        </ul>
      </section>

      {/* SINTAXIS */}

      <section>
        <h2>💻 Sintaxis básica</h2>

        <pre>
          <code>
{`function Saludo() {
  return <h1>Hola mundo</h1>;
}`}
          </code>
        </pre>
      </section>

      {/* JAVASCRIPT DENTRO DE JSX */}

      <section>
        <h2>⚡ JavaScript dentro de JSX</h2>

        <p>
          Podemos utilizar expresiones de JavaScript dentro de JSX
          utilizando llaves.
        </p>

        <pre>
          <code>
{`const nombre = "Celes";

return <h1>Hola {nombre}</h1>;`}
          </code>
        </pre>
      </section>

      {/* ¿CÓMO FUNCIONA? */}

      <section>
        <h2>🔍 ¿Cómo funciona?</h2>

        <p>
          JSX parece HTML, pero realmente forma parte de JavaScript.
          React transforma el JSX para poder crear los elementos de
          la interfaz.
        </p>

        <pre>
          <code>
{`JSX
 ↓
JavaScript
 ↓
React
 ↓
Interfaz`}
          </code>
        </pre>
      </section>

      {/* REGLAS */}

      <section>
        <h2>📌 Reglas importantes</h2>

        <ul>
          <li>Debe existir un elemento padre cuando hay varios elementos.</li>
          <li>Las etiquetas deben cerrarse correctamente.</li>
          <li>Usamos className en lugar de class.</li>
          <li>Las expresiones de JavaScript van dentro de {"{}"}.</li>
        </ul>
      </section>

      {/* EJEMPLO */}

      <section>
        <h2>🧪 Ejemplo real</h2>

        <pre>
          <code>
{`function Usuario() {
  const nombre = "Celes";

  return (
    <div>
      <h2>Usuario</h2>
      <p>Nombre: {nombre}</p>
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
          Crea un componente que tenga una variable llamada
          <strong> edad </strong>
          y muestre esa edad dentro de un párrafo utilizando JSX.
        </p>
      </section>

      {/* SOLUCIÓN */}

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`function Persona() {
  const edad = 30;

  return (
    <p>Mi edad es {edad} años</p>
  );
}`}
          </code>
        </pre>
      </section>
<Footer/>
    </div>
  );
}

export default JSX;