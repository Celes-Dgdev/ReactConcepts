import { createContext, useContext, useState } from "react";
import Footer from "../components/Footer";

// ============================================================
// 1. CREAR EL CONTEXTO
// ============================================================

const UsuarioContext = createContext();

// ============================================================
// 2. PROVIDER
// ============================================================

function UsuarioProvider({ children }) {
  const [nombre, setNombre] = useState("Celes");
  const [edad, setEdad] = useState(30);

  function aumentarEdad() {
    setEdad(edad + 1);
  }

  return (
    <UsuarioContext.Provider
      value={{
        nombre,
        edad,
        aumentarEdad,
        setNombre
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}

// ============================================================
// COMPONENTE HIJO
// ============================================================

function Perfil() {
  const { nombre, edad, aumentarEdad } = useContext(UsuarioContext);

  return (
    <div className="tarjeta">
      <h3>👤 Perfil</h3>

      <p>
        Nombre: <strong>{nombre}</strong>
      </p>

      <p>
        Edad: <strong>{edad}</strong>
      </p>

      <button onClick={aumentarEdad}>
        🎂 Cumplir años
      </button>
    </div>
  );
}

// ============================================================
// COMPONENTE NAVBAR
// ============================================================

function Navbar() {
  const { nombre } = useContext(UsuarioContext);

  return (
    <div className="tarjeta">
      <h3>🧭 Navbar</h3>

      <p>
        Usuario conectado: <strong>{nombre}</strong>
      </p>
    </div>
  );
}

// ============================================================
// COMPONENTE PARA CAMBIAR NOMBRE
// ============================================================

function CambiarNombre() {
  const { nombre, setNombre } = useContext(UsuarioContext);

  return (
    <div className="tarjeta">
      <h3>✏️ Cambiar nombre</h3>

      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe un nombre"
      />
    </div>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

function ContextAPI() {
  // ----------------------------------------------------------
  // EJEMPLO INTERACTIVO INDEPENDIENTE
  // ----------------------------------------------------------

  const [nombreEjemplo, setNombreEjemplo] = useState("Celes");

  return (
    <>
      <UsuarioProvider>
        <div className="concepto">

          <h1>🌐 Context API</h1>

          {/* ==================================================
              ¿QUÉ ES?
          ================================================== */}

          <h2>📖 ¿Qué es Context API?</h2>

          <p>
            <strong>Context API</strong> es una herramienta de React
            que permite compartir información entre componentes
            sin tener que pasar props manualmente por todos los
            componentes intermedios.
          </p>

          <p>
            En pocas palabras:
          </p>

          <pre>
            <code>
{`Context API
    ↓
comparte datos
    ↓
entre componentes
    ↓
sin pasar props uno por uno`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              PROBLEMA: PROP DRILLING
          ================================================== */}

          <h2>🚧 El problema: Prop Drilling</h2>

          <p>
            Imagina que tenemos:
          </p>

          <pre>
            <code>
{`App
 ↓
Navbar
 ↓
Menu
 ↓
Perfil
 ↓
Usuario`}
            </code>
          </pre>

          <p>
            Y queremos mandar el nombre del usuario desde
            <code> App</code> hasta <code>Perfil</code>.
          </p>

          <p>
            Sin Context API podríamos terminar haciendo esto:
          </p>

          <pre>
            <code>
{`App
 ↓ props
Navbar
 ↓ props
Menu
 ↓ props
Perfil
 ↓ props
Usuario`}
            </code>
          </pre>

          <p>
            Los componentes intermedios solamente están pasando
            el dato, aunque ellos ni siquiera lo necesiten.
          </p>

          <p>
            Eso se llama:
          </p>

          <h3>⚠️ Prop Drilling</h3>

          <hr />

          {/* ==================================================
              SOLUCIÓN
          ================================================== */}

          <h2>💡 La solución: Context API</h2>

          <p>
            Context permite crear un espacio compartido donde
            podemos colocar información.
          </p>

          <pre>
            <code>
{`             Context
          ┌──────────────┐
          │ nombre       │
          │ edad         │
          │ funciones    │
          └──────────────┘
             ↙      ↘
          Navbar    Perfil`}
            </code>
          </pre>

          <p>
            Ahora Navbar y Perfil pueden acceder directamente
            a los datos.
          </p>

          <hr />

          {/* ==================================================
              CREATE CONTEXT
          ================================================== */}

          <h2>1️⃣ createContext()</h2>

          <p>
            Primero creamos el contexto:
          </p>

          <pre>
            <code>
{`const UsuarioContext = createContext();`}
            </code>
          </pre>

          <p>
            Esto crea el contexto que funcionará como nuestro
            "canal" para compartir información.
          </p>

          <h3>💻 Código que estamos utilizando</h3>

          <pre>
            <code>
{`import { createContext } from "react";

const UsuarioContext = createContext();`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              PROVIDER
          ================================================== */}

          <h2>2️⃣ Provider</h2>

          <p>
            El <strong>Provider</strong> es quien proporciona
            los datos a los componentes que estén dentro de él.
          </p>

          <pre>
            <code>
{`<UsuarioContext.Provider value={...}>
    componentes
</UsuarioContext.Provider>`}
            </code>
          </pre>

          <p>
            Podemos imaginarlo como una fuente:
          </p>

          <pre>
            <code>
{`        Provider
           ↓
     ┌─────────────┐
     │ nombre      │
     │ edad        │
     │ funciones   │
     └─────────────┘
        ↙       ↘
    Navbar     Perfil`}
            </code>
          </pre>

          <h3>💻 Código que estamos utilizando</h3>

          <pre>
            <code>
{`function UsuarioProvider({ children }) {
  const [nombre, setNombre] = useState("Celes");
  const [edad, setEdad] = useState(30);

  function aumentarEdad() {
    setEdad(edad + 1);
  }

  return (
    <UsuarioContext.Provider
      value={{
        nombre,
        edad,
        aumentarEdad,
        setNombre
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              VALUE
          ================================================== */}

          <h2>3️⃣ value</h2>

          <p>
            La propiedad <code>value</code> contiene los datos
            que queremos compartir.
          </p>

          <pre>
            <code>
{`value={{
  nombre,
  edad,
  aumentarEdad,
  setNombre
}}`}
            </code>
          </pre>

          <p>
            En este caso estamos compartiendo:
          </p>

          <ul>
            <li>👤 nombre</li>
            <li>🎂 edad</li>
            <li>➕ aumentarEdad()</li>
            <li>✏️ setNombre()</li>
          </ul>

          <hr />

          {/* ==================================================
              USECONTEXT
          ================================================== */}

          <h2>4️⃣ useContext()</h2>

          <p>
            Ahora necesitamos consumir los datos.
          </p>

          <p>
            Para eso utilizamos:
          </p>

          <pre>
            <code>
{`useContext(UsuarioContext)`}
            </code>
          </pre>

          <p>
            Esto permite que un componente obtenga los datos
            que el Provider está compartiendo.
          </p>

          <h3>💻 Código que estamos utilizando</h3>

          <pre>
            <code>
{`function Perfil() {
  const {
    nombre,
    edad,
    aumentarEdad
  } = useContext(UsuarioContext);

  return (
    <div>
      <p>{nombre}</p>
      <p>{edad}</p>

      <button onClick={aumentarEdad}>
        Cumplir años
      </button>
    </div>
  );
}`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              EJEMPLO INTERACTIVO
          ================================================== */}

          <h2>🎮 Pruébalo tú mismo</h2>

          <p>
            Aquí tienes varios componentes que están obteniendo
            información del mismo Context.
          </p>

          <Navbar />

          <Perfil />

          <CambiarNombre />

          <h3>💻 Código que estamos utilizando</h3>

          <pre>
            <code>
{`function Navbar() {
  const { nombre } =
    useContext(UsuarioContext);

  return (
    <div>
      <h3>Navbar</h3>

      <p>
        Usuario conectado:
        {nombre}
      </p>
    </div>
  );
}


function Perfil() {
  const {
    nombre,
    edad,
    aumentarEdad
  } = useContext(UsuarioContext);

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>

      <button onClick={aumentarEdad}>
        Cumplir años
      </button>
    </div>
  );
}


function CambiarNombre() {
  const {
    nombre,
    setNombre
  } = useContext(UsuarioContext);

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />
    </div>
  );
}`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              FLUJO
          ================================================== */}

          <h2>🧠 ¿Cómo funciona todo junto?</h2>

          <pre>
            <code>
{`1. createContext()
        ↓
   crea el contexto
        ↓
2. Provider
        ↓
   guarda/proporciona datos
        ↓
3. value
        ↓
   define qué compartimos
        ↓
4. useContext()
        ↓
   componente consume datos`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              EJEMPLO DE CAMBIO
          ================================================== */}

          <h2>🔄 ¿Qué pasa cuando cambia un dato?</h2>

          <p>
            Si cambiamos el nombre:
          </p>

          <pre>
            <code>
{`setNombre("Carlos")`}
            </code>
          </pre>

          <p>
            El valor del Context cambia.
          </p>

          <pre>
            <code>
{`Context
   ↓
nombre = "Carlos"
   ↓
componentes que consumen Context
   ↓
se actualizan`}
            </code>
          </pre>

          <p>
            Por eso al escribir en el ejemplo anterior,
            tanto Navbar como Perfil muestran el nuevo nombre.
          </p>

          <hr />

          {/* ==================================================
              CONTEXT VS PROPS
          ================================================== */}

          <h2>⚔️ Props vs Context API</h2>

          <div className="tarjeta">

            <h3>📦 Props</h3>

            <pre>
              <code>
{`Padre
 ↓ props
Hijo
 ↓ props
Nieto`}
              </code>
            </pre>

            <p>
              El dato se pasa explícitamente de componente
              a componente.
            </p>

          </div>

          <div className="tarjeta">

            <h3>🌐 Context API</h3>

            <pre>
              <code>
{`        Context
       ↙       ↘
   Componente  Componente`}
              </code>
            </pre>

            <p>
              Los componentes pueden consumir directamente
              el dato del contexto.
            </p>

          </div>

          <hr />

          {/* ==================================================
              CUÁNDO USARLO
          ================================================== */}

          <h2>🤔 ¿Cuándo usar Context API?</h2>

          <p>
            Context es especialmente útil cuando un dato debe
            estar disponible para muchos componentes.
          </p>

          <ul>
            <li>👤 Usuario autenticado</li>
            <li>🌙 Tema claro/oscuro</li>
            <li>🛒 Carrito de compras</li>
            <li>🌎 Idioma de la aplicación</li>
            <li>⚙️ Configuración global</li>
          </ul>

          <p>
            Pero no significa que debamos meter absolutamente
            todo en Context.
          </p>

          <p>
            Para datos locales de un componente normalmente
            <code>useState</code> es suficiente.
          </p>

          <hr />

          {/* ==================================================
              IMPORTANTE
          ================================================== */}

          <h2>🚨 Regla importante</h2>

          <p>
            Un componente solamente puede consumir un Context
            si está dentro del Provider correspondiente.
          </p>

          <pre>
            <code>
{`<UsuarioProvider>

    <Navbar />   ✅
    <Perfil />   ✅

</UsuarioProvider>

<OtroComponente /> ❌`}
            </code>
          </pre>

          <p>
            Los componentes fuera del Provider no reciben
            automáticamente los valores de ese contexto.
          </p>

          <hr />

          {/* ==================================================
              MENTAL MAP
          ================================================== */}

          <h2>🧠 Mapa mental</h2>

          <pre>
            <code>
{`             Context API
                  ↓
          createContext()
                  ↓
              Provider
                  ↓
               value
                  ↓
        ┌─────────┴─────────┐
        ↓                   ↓
     Navbar              Perfil
        ↓                   ↓
   useContext()        useContext()
        ↓                   ↓
      nombre        nombre + edad
                          ↓
                    aumentarEdad()`}
            </code>
          </pre>

          <hr />

          {/* ==================================================
              RETO CONCEPTUAL
          ================================================== */}

          <h2>🧠 Reto conceptual</h2>

          <p>
            Imagina esta estructura:
          </p>

          <pre>
            <code>
{`App
 ↓
Navbar
 ↓
Menu
 ↓
Perfil`}
            </code>
          </pre>

          <p>
            Y <code>App</code> tiene el nombre del usuario,
            pero solamente <code>Perfil</code> necesita ese dato.
          </p>

          <p>
            ¿Qué problema aparecería si mandamos el nombre
            utilizando props por todos los componentes?
          </p>

          <details>
            <summary>👁️ Mostrar solución</summary>

            <p>
              Tendríamos <strong>Prop Drilling</strong>.
            </p>

            <pre>
              <code>
{`App
 ↓ props
Navbar
 ↓ props
Menu
 ↓ props
Perfil`}
              </code>
            </pre>

            <p>
              Context API puede evitar ese recorrido.
            </p>
          </details>

          <hr />

          {/* ==================================================
              RESUMEN
          ================================================== */}

          <h2>📌 Resumen</h2>

          <ul>
            <li>✅ <code>createContext()</code> crea el contexto.</li>
            <li>✅ <code>Provider</code> proporciona los datos.</li>
            <li>✅ <code>value</code> define qué compartimos.</li>
            <li>✅ <code>useContext()</code> consume los datos.</li>
            <li>✅ Evita pasar props innecesariamente.</li>
            <li>✅ Ayuda a solucionar Prop Drilling.</li>
            <li>✅ Los componentes deben estar dentro del Provider.</li>
            <li>⚠️ No todo necesita Context API.</li>
          </ul>

          <h2>🎯 Frase clave</h2>

          <pre>
            <code>
{`Context API = una fuente compartida
                ↓
       Provider proporciona
                ↓
       useContext consume`}
            </code>
          </pre>

        </div>
      </UsuarioProvider>

      <Footer />
    </>
  );
}

export default ContextAPI;