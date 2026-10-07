import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function UseEffect() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  // --------------------------------------------------
  // EJEMPLO 1: useEffect básico
  // Se ejecuta cuando el componente aparece.
  // --------------------------------------------------
  useEffect(() => {
    console.log("El componente apareció en pantalla");
  }, []);

  // --------------------------------------------------
  // EJEMPLO 2: useEffect con dependencia
  // Se ejecuta cuando cambia contador.
  // --------------------------------------------------
  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);

  // --------------------------------------------------
  // EJEMPLO 3: useEffect con localStorage
  // Guarda el nombre cada vez que cambia.
  // --------------------------------------------------
  useEffect(() => {
    if (nombre !== "") {
      localStorage.setItem("nombre", nombre);
    }
  }, [nombre]);

  // --------------------------------------------------
  // EJEMPLO 4: Simulación de API
  // --------------------------------------------------
  function simularAPI() {
    setMensaje("⏳ Cargando datos...");

    setTimeout(() => {
      setMensaje("✅ Datos recibidos correctamente.");
    }, 1500);
  }

  return (
    <>
      <div className="concepto">

        <h1>⚡ useEffect</h1>

        <h2>📖 ¿Qué es?</h2>

        <p>
          <strong>useEffect</strong> es un Hook de React que permite ejecutar
          código después de que React renderiza un componente.
        </p>

        <p>
          Se utiliza principalmente para trabajar con <strong>efectos secundarios
          (side effects)</strong>.
        </p>

        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Consumir APIs.</li>
          <li>Guardar datos en localStorage.</li>
          <li>Escuchar eventos.</li>
          <li>Trabajar con timers.</li>
          <li>Modificar cosas externas a React.</li>
          <li>Ejecutar código cuando cambia un estado.</li>
        </ul>


        <h2>💻 Sintaxis</h2>

        <pre>
{`useEffect(() => {
  // código del efecto
}, [dependencias]);`}
        </pre>


        <h2>🧠 Las tres formas importantes</h2>

        <h3>1️⃣ Sin dependencias</h3>

        <pre>
{`useEffect(() => {
  console.log("Se ejecuta después de cada render");
});`}
        </pre>

        <p>
          Se ejecuta después de cada renderizado.
        </p>


        <h3>2️⃣ Array vacío</h3>

        <pre>
{`useEffect(() => {
  console.log("Se ejecuta una vez");
}, []);`}
        </pre>

        <p>
          Se ejecuta cuando el componente aparece por primera vez.
        </p>


        <h3>3️⃣ Con dependencias</h3>

        <pre>
{`useEffect(() => {
  console.log("Cambió el contador");
}, [contador]);`}
        </pre>

        <p>
          Se ejecuta cuando cambia alguna dependencia.
        </p>


        <h2>🔄 ¿Cómo funciona?</h2>

        <pre>
{`React renderiza
      ↓
useEffect espera
      ↓
Se ejecuta el efecto
      ↓
React detecta cambios
      ↓
¿Cambió una dependencia?
      ↓
   SÍ → ejecuta nuevamente
   NO → no lo ejecuta`}
        </pre>


        <h2>🎮 Pruébalo tú mismo</h2>

        <h3>🧪 Ejemplo 1 — Dependencia</h3>

        <p>
          Cada vez que cambies el contador, el efecto detecta el cambio.
        </p>

        <button onClick={() => setContador(contador + 1)}>
          +1
        </button>

        <button onClick={() => setContador(contador - 1)}>
          -1
        </button>

        <p>
          Contador: <strong>{contador}</strong>
        </p>

        <h4>💻 Código utilizado</h4>

        <pre>
{`const [contador, setContador] = useState(0);

useEffect(() => {
  console.log("El contador cambió:", contador);
}, [contador]);

<button onClick={() => setContador(contador + 1)}>
  +1
</button>`}
        </pre>


        <h3>🧪 Ejemplo 2 — localStorage</h3>

        <p>
          Escribe un nombre. useEffect lo guardará automáticamente.
        </p>

        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p>
          Nombre: {nombre || "ninguno"}
        </p>

        <h4>💻 Código utilizado</h4>

        <pre>
{`const [nombre, setNombre] = useState("");

useEffect(() => {
  if (nombre !== "") {
    localStorage.setItem("nombre", nombre);
  }
}, [nombre]);`}
        </pre>


        <h3>🧪 Ejemplo 3 — Simulación de API</h3>

        <button onClick={simularAPI}>
          Obtener datos
        </button>

        {mensaje && (
          <p>{mensaje}</p>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
{`function simularAPI() {
  setMensaje("⏳ Cargando datos...");

  setTimeout(() => {
    setMensaje("✅ Datos recibidos correctamente.");
  }, 1500);
}`}
        </pre>


        <h2>🌐 useEffect + API</h2>

        <p>
          Una de las aplicaciones más importantes de useEffect es cargar datos
          cuando un componente aparece.
        </p>

        <pre>
{`useEffect(() => {
  async function obtenerDatos() {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const datos = await respuesta.json();

    console.log(datos);
  }

  obtenerDatos();
}, []);`}
        </pre>

        <p>
          Aquí el array vacío significa:
          <strong> "haz esta petición cuando el componente aparezca".</strong>
        </p>


        <h2>🧹 Cleanup — limpiar efectos</h2>

        <p>
          Algunos efectos necesitan ser limpiados cuando el componente
          desaparece.
        </p>

        <p>
          Para eso, useEffect puede devolver una función.
        </p>

        <pre>
{`useEffect(() => {

  const intervalo = setInterval(() => {
    console.log("Ejecutando...");
  }, 1000);

  return () => {
    clearInterval(intervalo);
  };

}, []);`}
        </pre>

        <p>
          La función que retorna el efecto se llama
          <strong> cleanup function</strong>.
        </p>


        <h2>🧠 Mapa mental</h2>

        <pre>
{`useEffect
   ↓
Efectos secundarios
   ↓
┌───────────────┬──────────────┬─────────────┐
│               │              │             │
API         localStorage     Eventos      Timers
│               │              │             │
fetch()      setItem()      addEvent()   setInterval()
`}
        </pre>


        <h2>⚠️ Error común</h2>

        <p>
          No debes poner efectos innecesarios dentro de useEffect.
        </p>

        <p>
          Si solamente necesitas calcular un valor a partir de otro estado,
          normalmente no necesitas useEffect.
        </p>

        <pre>
{`❌ Innecesario:

useEffect(() => {
  setResultado(numero * 2);
}, [numero]);

✅ Mejor:

const resultado = numero * 2;`}
        </pre>


        <h2>🧠 Lo importante para recordar</h2>

        <ul>
          <li>useEffect trabaja con efectos secundarios.</li>
          <li>Se ejecuta después del render.</li>
          <li><code>[]</code> → una vez al montar.</li>
          <li><code>[contador]</code> → cuando cambia contador.</li>
          <li>Sin array → después de cada render.</li>
          <li>Puede devolver una función de limpieza.</li>
          <li>Es muy utilizado para APIs y localStorage.</li>
        </ul>

        <h2>✅ Flujo final</h2>

        <pre>
{`Render
  ↓
useEffect
  ↓
¿Hay dependencias?
  ↓
Sí ──→ ¿cambiaron?
          ↓
        Sí → ejecuta
        No → no ejecuta

Efectos que necesitan limpieza
  ↓
cleanup()
  ↓
componente desaparece`}
        </pre>

      </div>

      <Footer />
    </>
  );
}

export default UseEffect;