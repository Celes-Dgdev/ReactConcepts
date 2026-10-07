import { useState } from "react";
import Footer from "../components/Footer";

/*
  Un Custom Hook es una función de JavaScript
  cuyo nombre comienza con "use".

  Aquí creamos un Hook reutilizable para manejar
  un contador.
*/
function useContador(inicial = 0, pasoAumentar = 1, pasoDisminuir = 1) {
  const [contador, setContador] = useState(inicial);

  function aumentar() {
    setContador(contador + pasoAumentar);
  }

  function disminuir() {
    setContador(contador - pasoDisminuir);
  }

  function reiniciar() {
    setContador(inicial);
  }

  return {
    contador,
    aumentar,
    disminuir,
    reiniciar
  };
}

function CustomHooks() {
  /*
    Utilizamos nuestro Custom Hook.

    Ya no necesitamos escribir aquí toda la lógica
    de useState y las funciones del contador.
  */
  const contador1 = useContador(0, 3, 2);
  const contador2 = useContador(10, 6, 3);

  return (
    <div className="concepto">

      <h1>🪝 Custom Hooks</h1>

      <section>
        <h2>📖 ¿Qué es?</h2>

        <p>
          Un <strong>Custom Hook</strong> es una función de JavaScript
          creada por nosotros para reutilizar lógica de React.
        </p>

        <p>
          Su nombre debe comenzar normalmente con
          <strong> use</strong>.
        </p>

        <p>
          Por ejemplo:
        </p>

        <pre>
          <code>{`function useContador() {
  // lógica reutilizable
}`}</code>
        </pre>

        <p>
          La idea principal es:
          <strong> escribir la lógica una vez y reutilizarla en diferentes componentes.</strong>
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>♻️ Reutilizar lógica.</li>
          <li>🧹 Evitar repetir código.</li>
          <li>🧠 Separar la lógica de la interfaz.</li>
          <li>📦 Crear comportamientos reutilizables.</li>
          <li>⚡ Compartir lógica entre componentes.</li>
        </ul>
      </section>

      <section>
        <h2>💻 Sintaxis</h2>

        <pre>
          <code>{`function useAlgo() {

  // lógica

  return resultado;
}`}</code>
        </pre>

        <p>
          Después podemos utilizarlo dentro de un componente:
        </p>

        <pre>
          <code>{`const resultado = useAlgo();`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 La idea de la "caja de herramientas"</h2>

        <pre>
          <code>{`Custom Hook
     ↓
┌───────────────────┐
│ 🧠 lógica         │
│ ⚙️ funciones      │
│ 📦 estado         │
└───────────────────┘
     ↓
Componente
     ↓
Interfaz`}</code>
        </pre>

        <p>
          El Custom Hook guarda la lógica que queremos reutilizar.
        </p>

        <p>
          El componente se preocupa principalmente por mostrar
          la interfaz.
        </p>
      </section>

      <section>
        <h2>🔍 ¿Cómo funciona?</h2>

        <p>
          Primero creamos una función cuyo nombre comienza con
          <strong> use</strong>.
        </p>

        <pre>
          <code>{`function useContador() {
  
}`}</code>
        </pre>

        <p>
          Dentro podemos utilizar otros Hooks de React:
        </p>

        <pre>
          <code>{`function useContador() {
  const [contador, setContador] = useState(0);
}`}</code>
        </pre>

        <p>
          Después podemos crear funciones:
        </p>

        <pre>
          <code>{`function aumentar() {
  setContador(contador + 1);
}`}</code>
        </pre>

        <p>
          Finalmente devolvemos lo que el componente necesita:
        </p>

        <pre>
          <code>{`return {
  contador,
  aumentar
};`}</code>
        </pre>
      </section>

      <section>
        <h2>🪝 Nuestro primer Custom Hook</h2>

        <pre>
          <code>{`function useContador(inicial = 0) {

  const [contador, setContador] = useState(inicial);

  function aumentar() {
    setContador(contador + 3);
  }

  return {
    contador,
    aumentar
  };
}`}</code>
        </pre>

        <p>
          Este Hook contiene toda la lógica necesaria para manejar
          un contador.
        </p>
      </section>

      <section>
        <h2>📦 ¿Qué devuelve?</h2>

        <pre>
          <code>{`return {
  contador,
  aumentar
};`}</code>
        </pre>

        <p>
          Estamos devolviendo dos cosas:
        </p>

        <ul>
          <li><strong>contador</strong> → el valor actual.</li>
          <li><strong>aumentar</strong> → la función para modificarlo.</li>
        </ul>

        <p>
          El componente puede utilizar esas dos cosas.
        </p>
      </section>

      <section>
        <h2>🔄 Flujo completo</h2>

        <pre>
          <code>{`Componente
    ↓
useContador()
    ↓
Custom Hook
    ↓
useState()
    ↓
contador + funciones
    ↓
return
    ↓
Componente
    ↓
Interfaz`}</code>
        </pre>
      </section>

      <section>
        <h2>♻️ ¿Por qué es reutilizable?</h2>

        <p>
          Podemos utilizar el mismo Custom Hook varias veces.
        </p>

        <pre>
          <code>{`const contador1 = useContador(0);

const contador2 = useContador(10);`}</code>
        </pre>

        <p>
          Cada llamada tiene su propio estado.
        </p>

        <pre>
          <code>{`contador1
   ↓
0 → 1 → 2 → 3


contador2
   ↓
10 → 11 → 12`}</code>
        </pre>

        <p>
          No comparten automáticamente el mismo estado.
        </p>
      </section>

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <h3>Contador 1</h3>

        <p>
          Valor: <strong>{contador1.contador}</strong>
        </p>

        <button onClick={contador1.aumentar}>
          ➕ Aumentar en 3
        </button>

        <button onClick={contador1.disminuir}>
          ➖ Disminuir en 2
        </button>

        <button onClick={contador1.reiniciar}>
          🔄 Reiniciar
        </button>

        <h3>Contador 2</h3>

        <p>
          Valor: <strong>{contador2.contador}</strong>
        </p>

        <button onClick={contador2.aumentar}>
          ➕ Aumentar en 6
        </button>

        <button onClick={contador2.disminuir}>
          ➖ Disminuir en 3
        </button>

        <button onClick={contador2.reiniciar}>
          🔄 Reiniciar
        </button>

        <p>
          Observa que ambos utilizan el mismo Custom Hook,
          pero mantienen estados independientes.
        </p>

        <h3>💻 Código que estamos utilizando</h3>

        <pre>
          <code>{`// Custom Hook

function useContador(
  inicial = 0,
  pasoAumentar = 1,
  pasoDisminuir = 1
) {
  const [contador, setContador] = useState(inicial);

  function aumentar() {
    setContador(contador + pasoAumentar);
  }

  function disminuir() {
    setContador(contador - pasoDisminuir);
  }

  function reiniciar() {
    setContador(inicial);
  }

  return {
    contador,
    aumentar,
    disminuir,
    reiniciar
  };
}

// Contador 1
const contador1 = useContador(0, 3, 2);

// Contador 2
const contador2 = useContador(10, 6, 3);

// Mostrar contador 1
<p>{contador1.contador}</p>

<button onClick={contador1.aumentar}>
  Aumentar
</button>

<button onClick={contador1.disminuir}>
  Disminuir
</button>

<button onClick={contador1.reiniciar}>
  Reiniciar
</button>

// Mostrar contador 2
<p>{contador2.contador}</p>

<button onClick={contador2.aumentar}>
  Aumentar
</button>

<button onClick={contador2.disminuir}>
  Disminuir
</button>

<button onClick={contador2.reiniciar}>
  Reiniciar
</button>`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 Custom Hook vs componente</h2>

        <pre>
          <code>{`Componente
   ↓
se encarga de
INTERFAZ


Custom Hook
   ↓
se encarga de
LÓGICA`}</code>
        </pre>

        <p>
          Un Custom Hook normalmente no devuelve JSX.
        </p>

        <p>
          Devuelve datos, estados, funciones o lógica que el componente
          puede utilizar.
        </p>
      </section>

      <section>
        <h2>❌ Sin Custom Hook</h2>

        <p>
          Imagina que tenemos dos componentes con exactamente la misma
          lógica:
        </p>

        <pre>
          <code>{`const [contador, setContador] = useState(0);

function aumentar() {
  setContador(contador + 1);
}

function disminuir() {
  setContador(contador - 1);
}`}</code>
        </pre>

        <p>
          Estamos repitiendo lógica.
        </p>
      </section>

      <section>
        <h2>✅ Con Custom Hook</h2>

        <pre>
          <code>{`function useContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  return {
    contador,
    aumentar,
    disminuir
  };
}`}</code>
        </pre>

        <p>
          Ahora podemos reutilizar esa lógica.
        </p>

        <pre>
          <code>{`const contador = useContador();`}</code>
        </pre>
      </section>

      <section>
        <h2>🧩 Custom Hooks pueden utilizar otros Hooks</h2>

        <p>
          Un Custom Hook puede utilizar otros Hooks de React.
        </p>

        <pre>
          <code>{`function useContador() {

  const [contador, setContador] = useState(0);

  // lógica

}`}</code>
        </pre>

        <p>
          También puede utilizar otros Hooks como:
        </p>

        <pre>
          <code>{`useState
useEffect
useContext
useRef
useMemo`}</code>
        </pre>

        <p>
          Esto permite construir lógica reutilizable bastante poderosa.
        </p>
      </section>

      <section>
        <h2>🌐 Ejemplo con API</h2>

        <p>
          Un Custom Hook también puede encapsular lógica de una API.
        </p>

        <pre>
          <code>{`function useUsuarios() {

  const [usuarios, setUsuarios] = useState([]);

  // fetch()
  // loading
  // error

  return {
    usuarios
  };
}`}</code>
        </pre>

        <p>
          Así diferentes componentes podrían utilizar la misma lógica
          para obtener usuarios.
        </p>
      </section>

      <section>
        <h2>🧠 Custom Hook + useEffect</h2>

        <pre>
          <code>{`function useUsuarios() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://api.com/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return usuarios;
}`}</code>
        </pre>

        <p>
          El componente solamente tendría que utilizar:
        </p>

        <pre>
          <code>{`const usuarios = useUsuarios();`}</code>
        </pre>
      </section>

      <section>
        <h2>⚠️ Regla importante</h2>

        <p>
          Los Custom Hooks deben comenzar con
          <strong> use</strong>.
        </p>

        <pre>
          <code>{`useContador
useUsuarios
useLocalStorage
useFetch
useAuth`}</code>
        </pre>

        <p>
          Esto permite identificar que la función utiliza lógica de Hooks
          y debe respetar las reglas de los Hooks de React.
        </p>
      </section>

      <section>
        <h2>🧠 Flujo mental</h2>

        <pre>
          <code>{`Tengo lógica repetida
        ↓
¿La puedo reutilizar?
        ↓
      SÍ
        ↓
Creo un Custom Hook
        ↓
function useAlgo()
        ↓
Meto la lógica
        ↓
return datos + funciones
        ↓
Los componentes lo utilizan`}</code>
        </pre>
      </section>

      <section>
        <h2>🎯 Reto</h2>

        <p>
          Crea un Custom Hook llamado:
        </p>

        <pre>
          <code>{`useContador`}</code>
        </pre>

        <p>
          Debe tener:
        </p>

        <ul>
          <li>Un estado llamado <strong>contador</strong>.</li>
          <li>Una función <strong>aumentar</strong>.</li>
          <li>Una función <strong>disminuir</strong>.</li>
          <li>Una función <strong>reiniciar</strong>.</li>
        </ul>

        <p>
          El Hook debe devolver las tres funciones y el contador.
        </p>
      </section>

      <section>
        <h2>👁️ Solución</h2>

        <pre>
          <code>{`function useContador(inicial = 0) {

  const [contador, setContador] = useState(inicial);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  function reiniciar() {
    setContador(inicial);
  }

  return {
    contador,
    aumentar,
    disminuir,
    reiniciar
  };
}`}</code>
        </pre>

        <p>
          Después podemos utilizarlo:
        </p>

        <pre>
          <code>{`const contador = useContador(0);`}</code>
        </pre>

        <p>
          Y acceder a sus valores:
        </p>

        <pre>
          <code>{`contador.contador
contador.aumentar()
contador.disminuir()
contador.reiniciar()`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>{`Custom Hook
     ↓
🪝 function useAlgo()
     ↓
🧠 lógica reutilizable
     ↓
📦 return
     ↓
datos + funciones
     ↓
♻️ diferentes componentes`}</code>
        </pre>

        <p>
          La idea clave:
          <strong>
            {" "}un Custom Hook no es un componente nuevo; es una forma
            de reutilizar lógica de React.
          </strong>
        </p>
      </section>

      <Footer />

    </div>
  );
}

export default CustomHooks;