import { useState } from "react";
import Footer from "../components/Footer";

function Jest() {
  const [resultadoSuma, setResultadoSuma] = useState(null);
  const [resultadoNombre, setResultadoNombre] = useState(null);
  const [resultadoEdad, setResultadoEdad] = useState(null);

  // ==========================================
  // FUNCIONES QUE QUEREMOS PROBAR
  // ==========================================

  function sumar(a, b) {
    return a + b;
  }

  function saludar(nombre) {
    return `Hola, ${nombre}`;
  }

  function esMayorDeEdad(edad) {
    return edad >= 18;
  }

  // ==========================================
  // PRUEBA INTERACTIVA 1
  // ==========================================

  function probarSuma() {
    const resultado = sumar(5, 3);

    if (resultado === 8) {
      setResultadoSuma("✅ La prueba pasó correctamente.");
    } else {
      setResultadoSuma("❌ La prueba falló.");
    }
  }

  // ==========================================
  // PRUEBA INTERACTIVA 2
  // ==========================================

  function probarSaludo() {
    const resultado = saludar("Celes");

    if (resultado === "Hola, Celes") {
      setResultadoNombre("✅ La prueba pasó correctamente.");
    } else {
      setResultadoNombre("❌ La prueba falló.");
    }
  }

  // ==========================================
  // PRUEBA INTERACTIVA 3
  // ==========================================

  function probarEdad() {
    const resultado = esMayorDeEdad(30);

    if (resultado === true) {
      setResultadoEdad("✅ La prueba pasó correctamente.");
    } else {
      setResultadoEdad("❌ La prueba falló.");
    }
  }

  return (
    <>
      <div className="concepto">

        <h1>🧪 Jest</h1>

        <h2>📖 ¿Qué es Jest?</h2>

        <p>
          Jest es una herramienta de JavaScript utilizada para
          realizar <strong>pruebas automáticas</strong>.
        </p>

        <p>
          Una prueba automática sirve para comprobar que nuestro
          código se comporta como esperamos.
        </p>

        <p>
          En lugar de revisar manualmente cada vez que una función
          funciona correctamente, podemos escribir una prueba que
          lo compruebe por nosotros.
        </p>

        <div className="ejemplo">
          <p>💻 Tenemos una función.</p>

          <p>↓</p>

          <p>🧪 Escribimos una prueba.</p>

          <p>↓</p>

          <p>▶️ Ejecutamos la prueba.</p>

          <p>↓</p>

          <p>✅ Pasa o ❌ falla.</p>
        </div>

        <h2>🎯 ¿Para qué sirve Jest?</h2>

        <p>
          Jest sirve para detectar errores y comprobar que nuestro
          código sigue funcionando después de realizar cambios.
        </p>

        <p>
          Por ejemplo, imagina que tenemos esta función:
        </p>

        <pre>
          <code>{`function sumar(a, b) {
  return a + b;
}`}</code>
        </pre>

        <p>
          Podemos probar que:
        </p>

        <pre>
          <code>{`sumar(5, 3)`}</code>
        </pre>

        <p>
          debe producir:
        </p>

        <pre>
          <code>{`8`}</code>
        </pre>

        <h2>🧠 ¿Qué problema resuelve?</h2>

        <p>
          Sin pruebas, podríamos modificar una función y romper
          alguna parte de nuestra aplicación sin darnos cuenta.
        </p>

        <p>
          Con pruebas automáticas podemos volver a ejecutar nuestras
          pruebas y comprobar que el comportamiento esperado sigue
          funcionando.
        </p>

        <div className="ejemplo">
          <p>
            🔧 Modificas código
          </p>

          <p>↓</p>

          <p>
            🧪 Ejecutas las pruebas
          </p>

          <p>↓</p>

          <p>
            ✅ Todo sigue funcionando
          </p>

          <p>
            o
          </p>

          <p>
            ❌ Encontraste un problema
          </p>
        </div>

        <h2>📦 Instalación</h2>

        <p>
          En un proyecto donde vamos a utilizar Jest necesitamos
          instalarlo.
        </p>

        <pre>
          <code>npm install --save-dev jest</code>
        </pre>

        <p>
          <strong>--save-dev</strong> indica que Jest es una
          dependencia utilizada principalmente durante el desarrollo
          y las pruebas.
        </p>

        <h2>🧪 ¿Qué es un test?</h2>

        <p>
          Un <strong>test</strong> es una prueba que comprueba que
          nuestro código produce el resultado esperado.
        </p>

        <p>
          Una estructura básica de Jest puede verse así:
        </p>

        <pre>
          <code>{`test("la suma funciona", () => {
  expect(sumar(5, 3)).toBe(8);
});`}</code>
        </pre>

        <p>
          Aquí aparecen tres piezas importantes:
        </p>

        <ul>
          <li>
            <strong>test()</strong> → define la prueba.
          </li>

          <li>
            <strong>expect()</strong> → indica qué resultado queremos
            comprobar.
          </li>

          <li>
            <strong>toBe()</strong> → indica qué resultado esperamos.
          </li>
        </ul>

        <h2>🔍 Vamos pieza por pieza</h2>

        <h3>1️⃣ test()</h3>

        <p>
          <strong>test()</strong> crea una prueba.
        </p>

        <pre>
          <code>{`test("la suma funciona", () => {
  
});`}</code>
        </pre>

        <p>
          El primer argumento es el nombre de la prueba.
        </p>

        <p>
          El segundo argumento es una función que contiene lo que
          queremos comprobar.
        </p>

        <h3>2️⃣ expect()</h3>

        <p>
          <strong>expect()</strong> recibe el valor que queremos
          comprobar.
        </p>

        <pre>
          <code>{`expect(sumar(5, 3))`}</code>
        </pre>

        <p>
          Primero se ejecuta:
        </p>

        <pre>
          <code>{`sumar(5, 3)`}</code>
        </pre>

        <p>
          El resultado es:
        </p>

        <pre>
          <code>{`8`}</code>
        </pre>

        <p>
          Por lo tanto, conceptualmente tenemos:
        </p>

        <pre>
          <code>{`expect(8)`}</code>
        </pre>

        <h3>3️⃣ toBe()</h3>

        <p>
          <strong>toBe()</strong> indica el resultado que esperamos.
        </p>

        <pre>
          <code>{`expect(sumar(5, 3)).toBe(8);`}</code>
        </pre>

        <p>
          Jest compara:
        </p>

        <div className="ejemplo">
          <p>
            Resultado real → <strong>8</strong>
          </p>

          <p>
            Resultado esperado → <strong>8</strong>
          </p>

          <p>
            ↓
          </p>

          <p>
            ✅ Coinciden
          </p>
        </div>

        <h2>🧠 La idea más importante</h2>

        <p>
          Una prueba compara lo que realmente ocurrió contra lo que
          nosotros esperábamos que ocurriera.
        </p>

        <pre>
          <code>{`resultado real
      ↓
   expect()
      ↓
resultado esperado
      ↓
   matcher
      ↓
✅ pasa / ❌ falla`}</code>
        </pre>

        <h2>🎯 ¿Qué es un matcher?</h2>

        <p>
          Un <strong>matcher</strong> es el método que utilizamos
          para expresar qué queremos comprobar.
        </p>

        <p>
          Algunos matchers comunes son:
        </p>

        <pre>
          <code>{`toBe()
toEqual()
toBeTruthy()
toBeFalsy()
toContain()
toBeGreaterThan()
toBeLessThan()`}</code>
        </pre>

        <p>
          No necesitamos memorizar todos ahora. Lo importante es
          entender el concepto.
        </p>

        <h2>🔵 toBe()</h2>

        <p>
          <strong>toBe()</strong> se utiliza principalmente para
          comparar valores simples.
        </p>

        <pre>
          <code>{`expect(5).toBe(5);

expect("Hola").toBe("Hola");

expect(true).toBe(true);`}</code>
        </pre>

        <h2>🟢 toEqual()</h2>

        <p>
          <strong>toEqual()</strong> es especialmente útil cuando
          queremos comparar objetos o arreglos por su contenido.
        </p>

        <pre>
          <code>{`expect({
  nombre: "Celes",
  edad: 30
}).toEqual({
  nombre: "Celes",
  edad: 30
});`}</code>
        </pre>

        <p>
          Esto es importante porque los objetos son estructuras
          diferentes aunque tengan exactamente los mismos datos.
        </p>

        <h2>🎮 Pruébalo tú mismo</h2>

        <p>
          Aquí vamos a hacer una versión visual del concepto.
          El navegador ejecutará las mismas funciones y comprobará
          si producen el resultado que esperamos.
        </p>

        <h3>➕ Ejemplo 1 — Probar una suma</h3>

        <button onClick={probarSuma}>
          Probar sumar(5, 3)
        </button>

        {resultadoSuma && (
          <div className="resultado">
            <p>{resultadoSuma}</p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`function sumar(a, b) {
  return a + b;
}

function probarSuma() {
  const resultado = sumar(5, 3);

  if (resultado === 8) {
    setResultadoSuma(
      "✅ La prueba pasó correctamente."
    );
  } else {
    setResultadoSuma(
      "❌ La prueba falló."
    );
  }
}`}</code>
        </pre>

        <h3>👋 Ejemplo 2 — Probar un saludo</h3>

        <button onClick={probarSaludo}>
          Probar saludo
        </button>

        {resultadoNombre && (
          <div className="resultado">
            <p>{resultadoNombre}</p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`function saludar(nombre) {
  return \`Hola, \${nombre}\`;
}

function probarSaludo() {
  const resultado = saludar("Celes");

  if (resultado === "Hola, Celes") {
    setResultadoNombre(
      "✅ La prueba pasó correctamente."
    );
  } else {
    setResultadoNombre(
      "❌ La prueba falló."
    );
  }
}`}</code>
        </pre>

        <h3>🔞 Ejemplo 3 — Comprobar una condición</h3>

        <button onClick={probarEdad}>
          Comprobar edad
        </button>

        {resultadoEdad && (
          <div className="resultado">
            <p>{resultadoEdad}</p>
          </div>
        )}

        <h4>💻 Código utilizado</h4>

        <pre>
          <code>{`function esMayorDeEdad(edad) {
  return edad >= 18;
}

function probarEdad() {
  const resultado = esMayorDeEdad(30);

  if (resultado === true) {
    setResultadoEdad(
      "✅ La prueba pasó correctamente."
    );
  } else {
    setResultadoEdad(
      "❌ La prueba falló."
    );
  }
}`}</code>
        </pre>

        <h2>🧪 Ahora sí: un test real de Jest</h2>

        <p>
          Lo anterior fue una demostración interactiva dentro de
          React para entender la lógica.
        </p>

        <p>
          En Jest, la prueba real estaría en un archivo separado.
        </p>

        <p>
          Por ejemplo, si tenemos:
        </p>

        <pre>
          <code>{`sumar.js`}</code>
        </pre>

        <p>con:</p>

        <pre>
          <code>{`function sumar(a, b) {
  return a + b;
}

export default sumar;`}</code>
        </pre>

        <p>
          Podríamos crear:
        </p>

        <pre>
          <code>{`sumar.test.js`}</code>
        </pre>

        <p>Y escribir:</p>

        <pre>
          <code>{`import sumar from "./sumar";

test("sumar 5 + 3 debe dar 8", () => {
  expect(sumar(5, 3)).toBe(8);
});`}</code>
        </pre>

        <h2>▶️ ¿Qué sucede cuando ejecutamos el test?</h2>

        <pre>
          <code>{`npm test`}</code>
        </pre>

        <p>
          Jest ejecuta las pruebas y nos informa cuáles pasaron y
          cuáles fallaron.
        </p>

        <div className="ejemplo">
          <p>🧪 Ejecutar pruebas</p>

          <p>↓</p>

          <p>📂 Buscar archivos de test</p>

          <p>↓</p>

          <p>▶️ Ejecutar cada prueba</p>

          <p>↓</p>

          <p>🔍 Comparar resultados</p>

          <p>↓</p>

          <p>✅ PASS / ❌ FAIL</p>
        </div>

        <h2>🧠 Jest y React</h2>

        <p>
          Jest puede utilizarse para probar diferentes partes de
          una aplicación.
        </p>

        <ul>
          <li>Funciones</li>
          <li>Lógica</li>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Resultados esperados</li>
        </ul>

        <p>
          Para probar interfaces React también suele utilizarse
          <strong> React Testing Library</strong>.
        </p>

        <p>
          La idea es que Jest sea el motor que ejecuta las pruebas,
          mientras que otras herramientas pueden ayudarnos a
          interactuar con componentes de React.
        </p>

        <h2>🧠 Jest no modifica tu código</h2>

        <p>
          Jest no arregla automáticamente una función que está mal.
        </p>

        <p>
          Jest solamente comprueba si el comportamiento coincide
          con lo que nosotros esperamos.
        </p>

        <div className="ejemplo">
          <p>
            💻 Código
          </p>

          <p>↓</p>

          <p>
            🧪 Test
          </p>

          <p>↓</p>

          <p>
            🔍 Comparación
          </p>

          <p>↓</p>

          <p>
            ✅ Correcto / ❌ Hay un problema
          </p>
        </div>

        <h2>🧠 Mapa mental</h2>

        <pre>
          <code>{`JEST
 │
 ├── test()
 │     └── define la prueba
 │
 ├── expect()
 │     └── indica qué comprobamos
 │
 └── matcher
       ├── toBe()
       ├── toEqual()
       ├── toContain()
       └── etc.

        ↓

Código
  ↓
Resultado real
  ↓
expect()
  ↓
Resultado esperado
  ↓
Matcher
  ↓
PASS / FAIL`}</code>
        </pre>

        <h2>📌 Resumen</h2>

        <ul>
          <li>
            Jest es una herramienta para realizar pruebas automáticas.
          </li>

          <li>
            Un <strong>test</strong> comprueba un comportamiento
            esperado.
          </li>

          <li>
            <strong>expect()</strong> recibe el resultado que queremos
            comprobar.
          </li>

          <li>
            Los <strong>matchers</strong> indican cómo queremos
            compararlo.
          </li>

          <li>
            <strong>toBe()</strong> sirve para comparar valores.
          </li>

          <li>
            <strong>toEqual()</strong> permite comparar estructuras
            como objetos y arreglos por su contenido.
          </li>

          <li>
            Jest nos ayuda a detectar errores cuando modificamos
            nuestro código.
          </li>
        </ul>

      </div>

      <Footer />
    </>
  );
}

export default Jest;