
import Footer from "../components/Footer.jsx";
function ComponentesReutilizables() {

  return (
    <div className="concepto">
        
      <h1>🧩 Componentes reutilizables</h1>

      <section>
        <h2>📖 ¿Qué es un componente reutilizable?</h2>

        <p>
          Un componente reutilizable es un componente que podemos
          utilizar varias veces dentro de una aplicación sin tener
          que escribir nuevamente todo su código.
        </p>

        <p>
          La idea principal es crear un componente una vez y después
          personalizarlo utilizando props.
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Evitar repetir código.</li>
          <li>Crear interfaces más organizadas.</li>
          <li>Facilitar el mantenimiento de la aplicación.</li>
          <li>Crear componentes que puedan utilizarse en diferentes lugares.</li>
          <li>Personalizar componentes mediante props.</li>
        </ul>
      </section>

      <section>
        <h2>🧠 La idea principal</h2>

        <pre>
          <code>
{`Crear una vez
     ↓
Componente
     ↓
Reutilizar
     ↓
Personalizar con props`}
          </code>
        </pre>
      </section>

      <section>
        <h2>❌ Sin componente reutilizable</h2>

        <p>
          Imagina que necesitamos tres botones.
        </p>

        <pre>
          <code>
{`<button>Comprar</button>

<button>Guardar</button>

<button>Eliminar</button>`}
          </code>
        </pre>

        <p>
          Estamos repitiendo la estructura del botón.
        </p>
      </section>

      <section>
        <h2>✅ Con un componente reutilizable</h2>

        <pre>
          <code>
{`function Boton({ texto }) {
  return (
    <button>
      {texto}
    </button>
  );
}`}
          </code>
        </pre>

        <p>
          Ahora podemos utilizar el mismo componente varias veces.
        </p>

        <pre>
          <code>
{`<Boton texto="Comprar" />

<Boton texto="Guardar" />

<Boton texto="Eliminar" />`}
          </code>
        </pre>
      </section>

      <section>
        <h2>📨 Personalización mediante props</h2>

        <p>
          Las props permiten que el mismo componente tenga diferentes
          datos dependiendo de dónde lo utilicemos.
        </p>

        <pre>
          <code>
{`function Usuario({ nombre }) {
  return (
    <div>
      <h2>{nombre}</h2>
    </div>
  );
}

<Usuario nombre="Celes" />

<Usuario nombre="Juan" />

<Usuario nombre="Pedro" />`}
          </code>
        </pre>

        <p>
          El componente es el mismo, pero cambia la información
          que recibe.
        </p>
      </section>

      <section>
        <h2>🎨 Componentes reutilizables con variantes</h2>

        <p>
          También podemos utilizar props para cambiar el comportamiento
          o apariencia de un componente.
        </p>

        <pre>
          <code>
{`function Boton({ texto, variante }) {

  return (
    <button className={variante}>
      {texto}
    </button>
  );
}`}
          </code>
        </pre>

        <p>
          Después podemos crear diferentes botones:
        </p>

        <pre>
          <code>
{`<Boton
  texto="Comprar"
  variante="primary"
/>

<Boton
  texto="Eliminar"
  variante="danger"
/>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧩 ¿Qué podemos reutilizar?</h2>

        <ul>
          <li>Botones</li>
          <li>Tarjetas</li>
          <li>Inputs</li>
          <li>Modales</li>
          <li>Navbar</li>
          <li>Footer</li>
          <li>Cards de productos</li>
          <li>Mensajes</li>
          <li>Componentes de formularios</li>
        </ul>
      </section>

      <section>
        <h2>🧪 Ejemplo real</h2>

        <p>
          Imagina una tienda online.
        </p>

        <pre>
          <code>
{`function Producto({ nombre, precio }) {

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${"{precio}"}</p>

      <button>
        Comprar
      </button>
    </div>
  );
}`}
          </code>
        </pre>

        <p>
          Podemos utilizar el mismo componente para diferentes productos:
        </p>

        <pre>
          <code>
{`<Producto
  nombre="Teclado"
  precio={500}
/>

<Producto
  nombre="Mouse"
  precio={300}
/>

<Producto
  nombre="Monitor"
  precio={2500}
/>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>📁 Separar el componente en otro archivo</h2>

        <p>
          Normalmente los componentes reutilizables se colocan
          en archivos separados.
        </p>

        <pre>
          <code>
{`src/
 ├── components/
 │    └── Boton.jsx
 │
 └── App.jsx`}
          </code>
        </pre>

        <p>
          En <strong>Boton.jsx</strong>:
        </p>

        <pre>
          <code>
{`function Boton({ texto }) {

  return (
    <button>
      {texto}
    </button>
  );
}

export default Boton;`}
          </code>
        </pre>

        <p>
          Después lo importamos donde lo necesitemos:
        </p>

        <pre>
          <code>
{`import Boton from "./components/Boton";`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🔄 Flujo completo</h2>

        <pre>
          <code>
{`Componente reutilizable
          ↓
        Props
          ↓
  Personalizamos datos
          ↓
    Mismo componente
          ↓
  Diferentes resultados`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <p>
          Imagina que necesitas crear tres botones diferentes.
          En lugar de crear tres componentes, utiliza uno solo.
        </p>

        <pre>
          <code>
{`function Boton({ texto }) {
  return (
    <button>
      {texto}
    </button>
  );
}`}
          </code>
        </pre>

        <h3>Después utilízalo tres veces:</h3>

        <pre>
          <code>
{`<Boton texto="Comprar" />

<Boton texto="Guardar" />

<Boton texto="Eliminar" />`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🔥 Componente reutilizable + función</h2>

        <p>
          Un componente también puede recibir una función mediante props.
        </p>

        <pre>
          <code>
{`function Boton({ texto, onClick }) {

  return (
    <button onClick={onClick}>
      {texto}
    </button>
  );
}`}
          </code>
        </pre>

        <p>
          Y el padre decide qué debe hacer el botón:
        </p>

        <pre>
          <code>
{`function App() {

  function saludar() {
    console.log("Hola Celes");
  }

  return (
    <Boton
      texto="Saludar"
      onClick={saludar}
    />
  );
}`}
          </code>
        </pre>

        <p>
          Aquí conectamos varios conceptos:
        </p>

        <pre>
          <code>
{`Componente padre
      ↓
      props
      ↓
Componente reutilizable
      ↓
     onClick
      ↓
    función`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Reto</h2>

        <p>
          Crea un componente llamado <strong>Tarjeta</strong>.
        </p>

        <p>
          Debe recibir mediante props:
        </p>

        <ul>
          <li>nombre</li>
          <li>precio</li>
        </ul>

        <p>
          Después utiliza el componente tres veces con diferentes productos.
        </p>
      </section>

      <section>
        <h2>👁️ Mostrar solución</h2>

        <pre>
          <code>
{`function Tarjeta({ nombre, precio }) {

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${"{precio}"}</p>
    </div>
  );
}

function App() {

  return (
    <div>

      <Tarjeta
        nombre="Teclado"
        precio={500}
      />

      <Tarjeta
        nombre="Mouse"
        precio={300}
      />

      <Tarjeta
        nombre="Monitor"
        precio={2500}
      />

    </div>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>
{`❌ Copiar y pegar código

        VS

✅ Crear una vez
       ↓
  recibir props
       ↓
  reutilizar
       ↓
  personalizar`}
          </code>
        </pre>
      </section>
<Footer/>
    </div>
  );
}

export default ComponentesReutilizables;