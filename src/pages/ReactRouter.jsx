import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ReactRouter() {
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  function irAInicio() {
    navigate("/");
  }

  function irAContacto() {
    navigate("/contacto");
  }

  function mostrarMensaje() {
    setMensaje("¡La navegación funcionó sin recargar la página!");
  }

  return (
    <>
      <div className="concepto">

        <h1>🧭 React Router</h1>

        {/* ========================= */}
        {/* ¿QUÉ ES? */}
        {/* ========================= */}

        <section>
          <h2>📖 ¿Qué es React Router?</h2>

          <p>
            React Router es una librería que permite crear navegación entre
            diferentes páginas o vistas dentro de una aplicación React.
          </p>

          <p>
            Aunque el usuario cambia de URL, React puede cambiar el contenido
            mostrado sin tener que recargar toda la página.
          </p>

          <p>
            Por ejemplo:
          </p>

          <ul>
            <li>/ → Inicio</li>
            <li>/perfil → Perfil</li>
            <li>/contacto → Contacto</li>
            <li>/productos → Productos</li>
          </ul>
        </section>


        {/* ========================= */}
        {/* ¿PARA QUÉ SIRVE? */}
        {/* ========================= */}

        <section>
          <h2>🎯 ¿Para qué sirve?</h2>

          <p>
            Sirve para construir la navegación de una aplicación React.
          </p>

          <p>
            Por ejemplo, una aplicación podría tener:
          </p>

          <ul>
            <li>🏠 Inicio</li>
            <li>👤 Perfil</li>
            <li>🛒 Carrito</li>
            <li>📦 Productos</li>
            <li>⚙️ Configuración</li>
          </ul>

          <p>
            Cada sección puede tener su propia URL y su propio componente.
          </p>
        </section>


        {/* ========================= */}
        {/* INSTALACIÓN */}
        {/* ========================= */}

        <section>
          <h2>📦 Instalación</h2>

          <p>
            En un proyecto React con Vite puedes instalar React Router con:
          </p>

          <pre>
            <code>{`npm install react-router-dom`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* IMPORTACIONES */}
        {/* ========================= */}

        <section>
          <h2>💻 Importaciones principales</h2>

          <pre>
            <code>{`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";`}</code>
          </pre>

          <p>
            Cada elemento tiene una responsabilidad diferente.
          </p>

          <ul>
            <li>
              <strong>BrowserRouter:</strong> activa el sistema de navegación.
            </li>

            <li>
              <strong>Routes:</strong> contiene las rutas.
            </li>

            <li>
              <strong>Route:</strong> relaciona una URL con un componente.
            </li>

            <li>
              <strong>Link:</strong> permite navegar mediante enlaces.
            </li>

            <li>
              <strong>useNavigate:</strong> permite navegar mediante código
              JavaScript.
            </li>
          </ul>
        </section>


        {/* ========================= */}
        {/* BROWSERROUTER */}
        {/* ========================= */}

        <section>
          <h2>🌐 BrowserRouter</h2>

          <p>
            <strong>BrowserRouter</strong> es el contenedor que permite que
            React Router controle la navegación.
          </p>

          <pre>
            <code>{`<BrowserRouter>

  <Routes>
    ...
  </Routes>

</BrowserRouter>`}</code>
          </pre>

          <p>
            Mentalmente puedes verlo como:
          </p>

          <pre>
            <code>{`BrowserRouter
      ↓
React Router activo
      ↓
Routes
      ↓
Route`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* ROUTES */}
        {/* ========================= */}

        <section>
          <h2>🗺️ Routes</h2>

          <p>
            <strong>Routes</strong> contiene todas las rutas de nuestra
            aplicación.
          </p>

          <pre>
            <code>{`<Routes>

  <Route path="/" element={<Inicio />} />

  <Route path="/perfil" element={<Perfil />} />

  <Route path="/contacto" element={<Contacto />} />

</Routes>`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* ROUTE */}
        {/* ========================= */}

        <section>
          <h2>📍 Route</h2>

          <p>
            Una <strong>Route</strong> conecta una URL con un componente.
          </p>

          <pre>
            <code>{`<Route
  path="/perfil"
  element={<Perfil />}
/>`}</code>
          </pre>

          <p>
            Aquí:
          </p>

          <ul>
            <li>
              <strong>path:</strong> URL que identifica la página.
            </li>

            <li>
              <strong>element:</strong> componente que se mostrará.
            </li>
          </ul>

          <p>
            Es como decir:
          </p>

          <pre>
            <code>{`"/perfil"
    ↓
mostrar
    ↓
<Perfil />`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* LINK */}
        {/* ========================= */}

        <section>
          <h2>🔗 Link</h2>

          <p>
            <strong>Link</strong> sirve para crear enlaces de navegación.
          </p>

          <pre>
            <code>{`<Link to="/">Inicio</Link>

<Link to="/perfil">Perfil</Link>

<Link to="/contacto">Contacto</Link>`}</code>
          </pre>

          <p>
            Es parecido a un enlace HTML:
          </p>

          <pre>
            <code>{`<a href="/perfil">Perfil</a>`}</code>
          </pre>

          <p>
            Pero en una aplicación React Router normalmente utilizamos:
          </p>

          <pre>
            <code>{`<Link to="/perfil">Perfil</Link>`}</code>
          </pre>

          <p>
            porque React Router puede realizar la navegación dentro de la
            aplicación sin recargar toda la página.
          </p>
        </section>


        {/* ========================= */}
        {/* DEMOSTRACIÓN LINK */}
        {/* ========================= */}

        <section>
          <h2>🎮 Pruébalo tú mismo: Link</h2>

          <p>
            Estos enlaces demuestran cómo funciona <strong>Link</strong>.
          </p>

          <div className="ejemplo-interactivo">

            <Link to="/">
              🏠 Ir a Inicio
            </Link>

            <br />
            <br />

            <Link to="/perfil">
              👤 Ir a Perfil
            </Link>

            <br />
            <br />

            <Link to="/componentes">
              🧩 Ir a Componentes
            </Link>

          </div>

          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`<Link to="/">
  🏠 Ir a Inicio
</Link>

<Link to="/perfil">
  👤 Ir a Perfil
</Link>

<Link to="/componentes">
  🧩 Ir a Componentes
</Link>`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* USE NAVIGATE */}
        {/* ========================= */}

        <section>
          <h2>🚀 useNavigate</h2>

          <p>
            <strong>useNavigate</strong> permite cambiar de ruta mediante
            JavaScript.
          </p>

          <p>
            Primero obtenemos la función:
          </p>

          <pre>
            <code>{`const navigate = useNavigate();`}</code>
          </pre>

          <p>
            Después podemos utilizarla:
          </p>

          <pre>
            <code>{`navigate("/perfil");`}</code>
          </pre>

          <p>
            Esto significa:
          </p>

          <pre>
            <code>{`navigate("/perfil")
       ↓
cambiar URL
       ↓
buscar Route correspondiente
       ↓
mostrar Perfil`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* EJEMPLO NAVIGATE */}
        {/* ========================= */}

        <section>
          <h2>🎮 Pruébalo tú mismo: useNavigate</h2>

          <button onClick={irAInicio}>
            🏠 Ir a Inicio
          </button>

          <button onClick={irAContacto}>
            📞 Ir a Contacto
          </button>

          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const navigate = useNavigate();

function irAInicio() {
  navigate("/");
}

function irAContacto() {
  navigate("/contacto");
}

<button onClick={irAInicio}>
  Ir a Inicio
</button>

<button onClick={irAContacto}>
  Ir a Contacto
</button>`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* LINK VS NAVIGATE */}
        {/* ========================= */}

        <section>
          <h2>⚔️ Link vs useNavigate</h2>

          <p>
            Ambos sirven para navegar, pero se utilizan en situaciones
            diferentes.
          </p>

          <h3>🔗 Link</h3>

          <p>
            Se utiliza principalmente para enlaces visibles que el usuario
            puede presionar.
          </p>

          <pre>
            <code>{`<Link to="/perfil">
  Ver perfil
</Link>`}</code>
          </pre>

          <h3>🚀 useNavigate</h3>

          <p>
            Se utiliza cuando quieres navegar como consecuencia de una acción
            o lógica de JavaScript.
          </p>

          <pre>
            <code>{`function guardar() {

  // guardar datos...

  navigate("/perfil");
}`}</code>
          </pre>

          <p>
            Ejemplo típico:
          </p>

          <pre>
            <code>{`Usuario inicia sesión
        ↓
login correcto
        ↓
navigate("/perfil")
        ↓
Perfil`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* PARAMETROS */}
        {/* ========================= */}

        <section>
          <h2>🧩 Parámetros de URL</h2>

          <p>
            React Router también permite crear rutas dinámicas.
          </p>

          <p>
            Por ejemplo:
          </p>

          <pre>
            <code>{`/usuario/25
/usuario/30
/usuario/100`}</code>
          </pre>

          <p>
            Podemos crear una ruta utilizando:
          </p>

          <pre>
            <code>{`<Route
  path="/usuario/:id"
  element={<Usuario />}
/>`}</code>
          </pre>

          <p>
            El <strong>:id</strong> significa que esa parte de la URL es
            dinámica.
          </p>

          <p>
            Por ejemplo:
          </p>

          <pre>
            <code>{`/usuario/25

id = 25`}</code>
          </pre>

          <p>
            Para obtener ese valor podemos utilizar el hook:
          </p>

          <pre>
            <code>{`useParams()`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* CONCEPTO IMPORTANTE */}
        {/* ========================= */}

        <section>
          <h2>🧠 Algo MUY importante</h2>

          <p>
            React Router no significa que cada URL sea necesariamente un
            archivo HTML diferente.
          </p>

          <p>
            En una SPA (<strong>Single Page Application</strong>), normalmente
            tenemos una aplicación React y React Router decide qué componente
            mostrar según la URL.
          </p>

          <pre>
            <code>{`URL
 ↓
React Router
 ↓
Route correspondiente
 ↓
Componente
 ↓
Interfaz`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* DEMOSTRACIÓN */}
        {/* ========================= */}

        <section>
          <h2>🎮 Pruébalo tú mismo: navegación interna</h2>

          <button onClick={mostrarMensaje}>
            Probar navegación
          </button>

          {mensaje && (
            <p>
              {mensaje}
            </p>
          )}

          <h3>💻 Código utilizado</h3>

          <pre>
            <code>{`const [mensaje, setMensaje] = useState("");

function mostrarMensaje() {
  setMensaje(
    "¡La navegación funcionó sin recargar la página!"
  );
}

<button onClick={mostrarMensaje}>
  Probar navegación
</button>

{mensaje && (
  <p>{mensaje}</p>
)}`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* ERROR COMÚN */}
        {/* ========================= */}

        <section>
          <h2>⚠️ Error común</h2>

          <p>
            No confundas estos dos casos:
          </p>

          <pre>
            <code>{`❌ < route />

✅ <Route />`}</code>
          </pre>

          <p>
            Los componentes de React distinguen mayúsculas y minúsculas.
          </p>

          <p>
            <strong>Route</strong> debe escribirse con R mayúscula.
          </p>
        </section>


        {/* ========================= */}
        {/* FLUJO */}
        {/* ========================= */}

        <section>
          <h2>🧠 Flujo completo</h2>

          <pre>
            <code>{`BrowserRouter
      ↓
   Routes
      ↓
    Route
      ↓
     URL
      ↓
  Componente
      ↓
   Interfaz`}</code>
          </pre>

          <p>
            Para navegar:
          </p>

          <pre>
            <code>{`Link
 ↓
cambia la ruta

o

useNavigate()
 ↓
cambia la ruta mediante JavaScript`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* MAPA MENTAL */}
        {/* ========================= */}

        <section>
          <h2>🗺️ Mapa mental</h2>

          <pre>
            <code>{`React Router
│
├── BrowserRouter
│      └── activa el router
│
├── Routes
│      └── contiene las rutas
│
├── Route
│      └── URL → componente
│
├── Link
│      └── navegación mediante enlace
│
├── useNavigate
│      └── navegación mediante JavaScript
│
└── useParams
       └── obtiene parámetros de la URL`}</code>
          </pre>
        </section>


        {/* ========================= */}
        {/* RESUMEN */}
        {/* ========================= */}

        <section>
          <h2>✅ Resumen</h2>

          <ul>
            <li>
              <strong>BrowserRouter:</strong> activa React Router.
            </li>

            <li>
              <strong>Routes:</strong> contiene las rutas.
            </li>

            <li>
              <strong>Route:</strong> relaciona una URL con un componente.
            </li>

            <li>
              <strong>Link:</strong> permite navegar mediante enlaces.
            </li>

            <li>
              <strong>useNavigate:</strong> permite navegar mediante código.
            </li>

            <li>
              <strong>useParams:</strong> permite obtener parámetros de una URL.
            </li>
          </ul>
        </section>


        {/* ========================= */}
        {/* RETO */}
        {/* ========================= */}

        <section>
          <h2>🧠 Reto mental</h2>

          <p>
            Si tienes esta ruta:
          </p>

          <pre>
            <code>{`<Route
  path="/productos"
  element={<Productos />}
/>`}</code>
          </pre>

          <p>
            ¿Qué componente debería aparecer cuando el usuario entra a:
          </p>

          <pre>
            <code>{`/productos`}</code>
          </pre>

          <p>
            <strong>Respuesta:</strong>
          </p>

          <pre>
            <code>{`<Productos />`}</code>
          </pre>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default ReactRouter;