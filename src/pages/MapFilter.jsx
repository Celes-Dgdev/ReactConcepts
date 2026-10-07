import { useState } from "react";
import Footer from "../components/Footer";

function MapFilter() {
  // ============================================================
  // DATOS
  // ============================================================

  const productosIniciales = [
    {
      id: 1,
      nombre: "Teclado",
      precio: 500,
      categoria: "Accesorios"
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 300,
      categoria: "Accesorios"
    },
    {
      id: 3,
      nombre: "Monitor",
      precio: 2500,
      categoria: "Pantallas"
    },
    {
      id: 4,
      nombre: "Audífonos",
      precio: 800,
      categoria: "Audio"
    },
    {
      id: 5,
      nombre: "Laptop",
      precio: 15000,
      categoria: "Computadoras"
    }
  ];

  const [productos, setProductos] = useState(productosIniciales);

  const [mostrarBaratos, setMostrarBaratos] = useState(false);

  const [busqueda, setBusqueda] = useState("");

  const [categoria, setCategoria] = useState("Todas");

  // ============================================================
  // FILTER
  // ============================================================

  const productosFiltrados = productos
    .filter((producto) => {
      if (mostrarBaratos) {
        return producto.precio < 1000;
      }

      return true;
    })
    .filter((producto) => {
      return producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());
    })
    .filter((producto) => {
      if (categoria === "Todas") {
        return true;
      }

      return producto.categoria === categoria;
    });

  // ============================================================
  // MAP
  // ============================================================

  return (
    <>
      <div className="concepto">

        <h1>🗂️ map() y filter()</h1>

        {/* =====================================================
            ¿QUÉ ES?
        ===================================================== */}

        <h2>📖 ¿Qué son map() y filter()?</h2>

        <p>
          <strong>map()</strong> y <strong>filter()</strong> son métodos
          de JavaScript que se utilizan muchísimo en React para trabajar
          con arreglos.
        </p>

        <p>
          Cada uno tiene una responsabilidad diferente:
        </p>

        <ul>
          <li>
            <strong>filter()</strong> → selecciona elementos.
          </li>

          <li>
            <strong>map()</strong> → transforma o representa elementos.
          </li>
        </ul>

        <hr />

        {/* =====================================================
            FILTER
        ===================================================== */}

        <h2>🔎 filter()</h2>

        <p>
          <strong>filter()</strong> recorre un arreglo y devuelve
          otro arreglo solamente con los elementos que cumplen una
          condición.
        </p>

        <h3>Sintaxis</h3>

        <pre>
          <code>
{`const resultado = arreglo.filter((elemento) => {
  return condicion;
});`}
          </code>
        </pre>

        <p>
          Ejemplo:
        </p>

        <pre>
          <code>
{`const edades = [15, 20, 25, 12, 30];

const mayores = edades.filter((edad) => {
  return edad >= 18;
});`}
          </code>
        </pre>

        <p>
          Resultado:
        </p>

        <pre>
          <code>
{`[20, 25, 30]`}
          </code>
        </pre>

        <p>
          🧠 Piensa en <code>filter()</code> como un filtro de café:
        </p>

        <pre>
          <code>
{`☕ Todas las partículas
        ↓
     FILTER
        ↓
Solo pasan las que cumplen la condición`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            MAP
        ===================================================== */}

        <h2>🔄 map()</h2>

        <p>
          <strong>map()</strong> recorre un arreglo y crea un nuevo
          resultado transformando cada elemento.
        </p>

        <p>
          En React normalmente lo utilizamos para convertir elementos
          de un arreglo en elementos JSX.
        </p>

        <h3>Sintaxis</h3>

        <pre>
          <code>
{`const resultado = arreglo.map((elemento) => {
  return algo;
});`}
          </code>
        </pre>

        <p>
          Ejemplo:
        </p>

        <pre>
          <code>
{`const nombres = ["Celes", "Carlos", "Juan"];

const saludos = nombres.map((nombre) => {
  return "Hola " + nombre;
});`}
          </code>
        </pre>

        <p>
          Resultado:
        </p>

        <pre>
          <code>
{`[
  "Hola Celes",
  "Hola Carlos",
  "Hola Juan"
]`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            MAP EN REACT
        ===================================================== */}

        <h2>⚛️ map() en React</h2>

        <p>
          En React podemos utilizar <code>map()</code> para convertir
          cada objeto de un arreglo en una parte de nuestra interfaz.
        </p>

        <pre>
          <code>
{`productos.map((producto) => (
  <div key={producto.id}>
    <h3>{producto.nombre}</h3>
    <p>${"{producto.precio}"}</p>
  </div>
))`}
          </code>
        </pre>

        <p>
          El flujo sería:
        </p>

        <pre>
          <code>
{`Array
  ↓
map()
  ↓
JSX
  ↓
Interfaz`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            KEY
        ===================================================== */}

        <h2>🔑 ¿Por qué usamos key?</h2>

        <p>
          Cuando utilizamos <code>map()</code> para crear elementos
          en React, debemos proporcionar una <code>key</code> única.
        </p>

        <pre>
          <code>
{`productos.map((producto) => (
  <div key={producto.id}>
    {producto.nombre}
  </div>
))`}
          </code>
        </pre>

        <p>
          La <code>key</code> ayuda a React a identificar cada elemento
          de la lista.
        </p>

        <hr />

        {/* =====================================================
            FILTER + MAP
        ===================================================== */}

        <h2>🔥 filter() + map()</h2>

        <p>
          Aquí es donde estos dos métodos se vuelven especialmente
          útiles.
        </p>

        <pre>
          <code>
{`productos
  .filter((producto) => producto.precio < 1000)
  .map((producto) => (
    <div key={producto.id}>
      {producto.nombre}
    </div>
  ));`}
          </code>
        </pre>

        <p>
          Primero filtramos.
        </p>

        <pre>
          <code>
{`productos
    ↓
filter()
    ↓
solo productos baratos
    ↓
map()
    ↓
interfaz`}
          </code>
        </pre>

        <p>
          🧠 Esta es la idea más importante del tema:
        </p>

        <pre>
          <code>
{`FILTER = ¿cuáles quiero?
MAP    = ¿qué hago con ellos?`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO INTERACTIVO
        ===================================================== */}

        <h2>🎮 Pruébalo tú mismo</h2>

        <p>
          Aquí tenemos una lista real de productos.
        </p>

        <button
          onClick={() => setMostrarBaratos(!mostrarBaratos)}
        >
          {mostrarBaratos
            ? "👀 Mostrar todos"
            : "💰 Mostrar baratos"}
        </button>

        <div>
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="tarjeta"
            >
              <h3>{producto.nombre}</h3>

              <p>
                Precio: <strong>${producto.precio}</strong>
              </p>

              <p>
                Categoría: {producto.categoria}
              </p>
            </div>
          ))}
        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const productosFiltrados = productos
  .filter((producto) => {
    if (mostrarBaratos) {
      return producto.precio < 1000;
    }

    return true;
  });

{productosFiltrados.map((producto) => (
  <div key={producto.id}>
    <h3>{producto.nombre}</h3>
    <p>Precio: \${producto.precio}</p>
    <p>Categoría: {producto.categoria}</p>
  </div>
))}`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            BÚSQUEDA
        ===================================================== */}

        <h2>🔍 Buscar productos</h2>

        <p>
          También podemos combinar <code>filter()</code> con
          <code> onChange</code> para crear una búsqueda.
        </p>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar producto..."
        />

        <div>
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="tarjeta"
            >
              <h3>{producto.nombre}</h3>

              <p>
                ${producto.precio}
              </p>
            </div>
          ))}
        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [busqueda, setBusqueda] = useState("");

const productosFiltrados = productos.filter((producto) => {
  return producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase());
});

<input
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Buscar producto..."
/>`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            CATEGORIAS
        ===================================================== */}

        <h2>🏷️ Filtrar por categoría</h2>

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Audio">Audio</option>
          <option value="Computadoras">Computadoras</option>
        </select>

        <div>
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="tarjeta"
            >
              <h3>{producto.nombre}</h3>

              <p>
                ${producto.precio}
              </p>

              <p>
                {producto.categoria}
              </p>
            </div>
          ))}
        </div>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>
{`const [categoria, setCategoria] = useState("Todas");

const productosFiltrados = productos.filter((producto) => {
  if (categoria === "Todas") {
    return true;
  }

  return producto.categoria === categoria;
});

<select
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
>
  <option value="Todas">Todas</option>
  <option value="Accesorios">Accesorios</option>
  <option value="Pantallas">Pantallas</option>
  <option value="Audio">Audio</option>
  <option value="Computadoras">
    Computadoras
  </option>
</select>`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            TRES FILTER
        ===================================================== */}

        <h2>🧠 Podemos encadenar varios filter()</h2>

        <p>
          En nuestro ejemplo estamos usando tres filtros.
        </p>

        <pre>
          <code>
{`productos
  .filter(...)
  .filter(...)
  .filter(...)
  .map(...)`}
          </code>
        </pre>

        <p>
          Cada <code>filter()</code> recibe el resultado del anterior.
        </p>

        <pre>
          <code>
{`Todos los productos
        ↓
Filtro precio
        ↓
Productos que cumplen precio
        ↓
Filtro búsqueda
        ↓
Productos encontrados
        ↓
Filtro categoría
        ↓
Productos de la categoría
        ↓
map()
        ↓
Interfaz`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            EJEMPLO CON DATOS
        ===================================================== */}

        <h2>🧪 Ejemplo completo</h2>

        <p>
          Esta es la lógica que estamos utilizando en la página:
        </p>

        <pre>
          <code>
{`const productosFiltrados = productos
  .filter((producto) => {
    if (mostrarBaratos) {
      return producto.precio < 1000;
    }

    return true;
  })
  .filter((producto) => {
    return producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
  })
  .filter((producto) => {
    if (categoria === "Todas") {
      return true;
    }

    return producto.categoria === categoria;
  });`}
          </code>
        </pre>

        <p>
          Y después:
        </p>

        <pre>
          <code>
{`productosFiltrados.map((producto) => (
  <div key={producto.id}>
    <h3>{producto.nombre}</h3>
    <p>${"{producto.precio}"}</p>
  </div>
))`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            FILTER NO MODIFICA ORIGINAL
        ===================================================== */}

        <h2>🚨 Importante: filter() y map() no modifican el arreglo original</h2>

        <p>
          Estos métodos crean nuevos arreglos.
        </p>

        <pre>
          <code>
{`const numeros = [1, 2, 3, 4];

const mayores = numeros.filter(
  (numero) => numero > 2
);

console.log(numeros);
// [1, 2, 3, 4]

console.log(mayores);
// [3, 4]`}
          </code>
        </pre>

        <p>
          Esto es muy importante en React porque normalmente
          queremos trabajar de forma inmutable con nuestros datos.
        </p>

        <hr />

        {/* =====================================================
            MAP VS FILTER
        ===================================================== */}

        <h2>⚔️ map() vs filter()</h2>

        <div className="tarjeta">

          <h3>🔎 filter()</h3>

          <p>
            Selecciona elementos.
          </p>

          <pre>
            <code>
{`[1, 2, 3, 4]
      ↓
filter(x > 2)
      ↓
[3, 4]`}
            </code>
          </pre>

        </div>

        <div className="tarjeta">

          <h3>🔄 map()</h3>

          <p>
            Transforma cada elemento.
          </p>

          <pre>
            <code>
{`[1, 2, 3]
    ↓
map(x * 2)
    ↓
[2, 4, 6]`}
            </code>
          </pre>

        </div>

        <hr />

        {/* =====================================================
            MAPA MENTAL
        ===================================================== */}

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>
{`                 ARRAY
                   ↓
             ┌─────┴─────┐
             ↓           ↓
          filter()     map()
             ↓           ↓
        selecciona    transforma
             ↓           ↓
             └─────┬─────┘
                   ↓
              INTERFAZ`}
          </code>
        </pre>

        <h3>🔥 La frase que debes recordar</h3>

        <pre>
          <code>
{`filter() → ¿CUÁLES quiero?

map() → ¿QUÉ HAGO con ellos?`}
          </code>
        </pre>

        <hr />

        {/* =====================================================
            RETO CONCEPTUAL
        ===================================================== */}

        <h2>🧠 Reto conceptual</h2>

        <p>
          Tenemos:
        </p>

        <pre>
          <code>
{`const edades = [12, 18, 25, 15, 30];`}
          </code>
        </pre>

        <p>
          Queremos obtener solamente las edades mayores o iguales
          a 18.
        </p>

        <details>
          <summary>👁️ Mostrar solución</summary>

          <pre>
            <code>
{`const mayores = edades.filter(
  (edad) => edad >= 18
);`}
            </code>
          </pre>

          <p>
            Resultado:
          </p>

          <pre>
            <code>
{`[18, 25, 30]`}
            </code>
          </pre>
        </details>

        <hr />

        <h2>📌 Resumen</h2>

        <ul>
          <li>✅ <code>filter()</code> selecciona elementos.</li>
          <li>✅ <code>map()</code> transforma elementos.</li>
          <li>✅ <code>map()</code> se usa muchísimo para renderizar listas.</li>
          <li>✅ Las listas de React necesitan una <code>key</code> única.</li>
          <li>✅ Podemos encadenar <code>filter()</code> y <code>map()</code>.</li>
          <li>✅ Podemos combinar varios <code>filter()</code>.</li>
          <li>✅ <code>filter()</code> y <code>map()</code> crean nuevos arreglos.</li>
        </ul>

        <h2>🎯 Flujo final</h2>

        <pre>
          <code>
{`DATOS
  ↓
filter()
  ↓
seleccionar
  ↓
filter()
  ↓
refinar
  ↓
map()
  ↓
transformar
  ↓
JSX
  ↓
INTERFAZ`}
          </code>
        </pre>

      </div>

      <Footer />
    </>
  );
}

export default MapFilter;