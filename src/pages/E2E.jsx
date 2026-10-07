import { useState } from "react";
import Footer from "../components/Footer";

function E2E() {
  const [usuario, setUsuario] = useState("");
  const [mensaje, setMensaje] = useState("");

  function iniciarSesion() {
    if (usuario.trim() === "") {
      setMensaje("❌ Escribe un usuario.");
      return;
    }

    setMensaje(`✅ Sesión iniciada como ${usuario}`);
  }

  return (
    <>
      <div className="concepto">

        <h1>🧪 E2E — End-to-End Testing</h1>

        <h2>📖 ¿Qué es E2E?</h2>

        <p>
          E2E significa <strong>End-to-End</strong>, es decir,
          <strong> "de principio a fin"</strong>.
        </p>

        <p>
          Una prueba E2E comprueba que una aplicación completa funcione como
          lo haría un usuario real.
        </p>

        <p>
          Por ejemplo:
        </p>

        <pre>
{`Usuario
  ↓
Abre la página
  ↓
Escribe usuario
  ↓
Hace clic
  ↓
La aplicación procesa
  ↓
Aparece resultado
  ↓
✅ Prueba correcta`}
        </pre>


        <h2>🎯 ¿Para qué sirve?</h2>

        <p>
          Sirve para comprobar que las diferentes partes de una aplicación
          funcionan correctamente juntas.
        </p>

        <ul>
          <li>Interfaz</li>
          <li>Botones</li>
          <li>Formularios</li>
          <li>Rutas</li>
          <li>API</li>
          <li>Autenticación</li>
          <li>Navegación</li>
          <li>Flujos completos del usuario</li>
        </ul>


        <h2>🧠 Ejemplo sencillo</h2>

        <p>
          Imagina una pantalla de inicio de sesión.
        </p>

        <pre>
{`1. Abrir Login
      ↓
2. Escribir usuario
      ↓
3. Escribir contraseña
      ↓
4. Presionar "Iniciar sesión"
      ↓
5. Verificar resultado
      ↓
6. Entrar al Dashboard`}
        </pre>

        <p>
          Una prueba E2E intenta comprobar todo ese recorrido.
        </p>


        <h2>🧪 E2E vs Jest</h2>

        <p>
          <strong>Jest</strong> normalmente prueba partes pequeñas de nuestro
          código.
        </p>

        <p>
          <strong>E2E</strong> prueba el recorrido completo de la aplicación.
        </p>

        <pre>
{`Jest
 ↓
Función
 ↓
Resultado

E2E
 ↓
Navegador
 ↓
Usuario
 ↓
Interfaz
 ↓
Acciones
 ↓
Resultado final`}
        </pre>


        <h2>🎭 Playwright</h2>

        <p>
          Una herramienta muy utilizada para realizar pruebas E2E es
          <strong> Playwright</strong>.
        </p>

        <p>
          Playwright puede controlar navegadores automáticamente y simular
          acciones de un usuario.
        </p>

        <ul>
          <li>Chromium</li>
          <li>Firefox</li>
          <li>WebKit</li>
        </ul>


        <h2>📦 Instalación</h2>

        <pre>
{`npm init playwright@latest`}
        </pre>

        <p>
          Durante la instalación Playwright crea la estructura necesaria para
          nuestras pruebas.
        </p>


        <h2>📁 Estructura típica</h2>

        <pre>
{`mi-proyecto/
│
├── tests/
│   └── ejemplo.spec.js
│
├── playwright.config.js
├── package.json
└── src/`}
        </pre>


        <h2>📂 ¿Qué hace cada archivo?</h2>

        <h3>📁 tests/</h3>

        <p>
          Aquí colocamos nuestras pruebas E2E.
        </p>

        <h3>🧪 ejemplo.spec.js</h3>

        <p>
          Contiene una prueba.
        </p>

        <h3>⚙️ playwright.config.js</h3>

        <p>
          Contiene la configuración de Playwright.
        </p>

        <h3>📦 package.json</h3>

        <p>
          Contiene las dependencias y comandos del proyecto.
        </p>


        <h2>💻 Sintaxis básica</h2>

        <pre>
{`import { test, expect } from "@playwright/test";

test("la página funciona", async ({ page }) => {

  await page.goto("http://localhost:5173");

  await expect(page).toHaveTitle(/React/);

});`}
        </pre>


        <h2>🔍 ¿Cómo funciona?</h2>

        <h3>1️⃣ test()</h3>

        <p>
          Define una prueba.
        </p>

        <pre>
{`test("nombre de la prueba", async ({ page }) => {
  
});`}
        </pre>


        <h3>2️⃣ page</h3>

        <p>
          Representa la página del navegador que Playwright controla.
        </p>


        <h3>3️⃣ page.goto()</h3>

        <p>
          Lleva el navegador a una dirección.
        </p>

        <pre>
{`await page.goto("http://localhost:5173");`}
        </pre>


        <h3>4️⃣ page.locator()</h3>

        <p>
          Busca un elemento dentro de la página.
        </p>

        <pre>
{`page.locator("input")`}
        </pre>


        <h3>5️⃣ fill()</h3>

        <p>
          Escribe dentro de un campo.
        </p>

        <pre>
{`await page.locator("input").fill("Celes");`}
        </pre>


        <h3>6️⃣ click()</h3>

        <p>
          Hace clic en un elemento.
        </p>

        <pre>
{`await page.getByRole("button", {
  name: "Iniciar sesión"
}).click();`}
        </pre>


        <h3>7️⃣ expect()</h3>

        <p>
          Comprueba que algo sea verdadero.
        </p>

        <pre>
{`await expect(page.getByText("Bienvenido"))
  .toBeVisible();`}
        </pre>


        <h2>🎮 Pruébalo tú mismo</h2>

        <p>
          Aquí simulamos el comportamiento que después podríamos automatizar
          con Playwright.
        </p>

        <input
          type="text"
          placeholder="Escribe tu usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <button onClick={iniciarSesion}>
          Iniciar sesión
        </button>

        {mensaje && (
          <p>{mensaje}</p>
        )}


        <h3>💻 Código utilizado</h3>

        <pre>
{`const [usuario, setUsuario] = useState("");
const [mensaje, setMensaje] = useState("");

function iniciarSesion() {
  if (usuario.trim() === "") {
    setMensaje("❌ Escribe un usuario.");
    return;
  }

  setMensaje(\`✅ Sesión iniciada como \${usuario}\`);
}

<input
  type="text"
  placeholder="Escribe tu usuario"
  value={usuario}
  onChange={(e) => setUsuario(e.target.value)}
/>

<button onClick={iniciarSesion}>
  Iniciar sesión
</button>`}
        </pre>


        <h2>🤖 ¿Cómo lo probaría Playwright?</h2>

        <pre>
{`import { test, expect } from "@playwright/test";

test("usuario puede iniciar sesión", async ({ page }) => {

  await page.goto("http://localhost:5173");

  await page
    .getByPlaceholder("Escribe tu usuario")
    .fill("Celes");

  await page
    .getByRole("button", {
      name: "Iniciar sesión"
    })
    .click();

  await expect(
    page.getByText("Sesión iniciada como Celes")
  ).toBeVisible();

});`}
        </pre>


        <h2>▶️ Ejecutar pruebas</h2>

        <pre>
{`npx playwright test`}
        </pre>

        <p>
          Para abrir la interfaz de Playwright:
        </p>

        <pre>
{`npx playwright test --ui`}
        </pre>


        <h2>🧠 Flujo completo</h2>

        <pre>
{`Playwright
    ↓
Abre navegador
    ↓
Abre aplicación
    ↓
Busca elemento
    ↓
Realiza acción
    ↓
Observa resultado
    ↓
expect()
    ↓
✅ pasa
❌ falla`}
        </pre>


        <h2>🧠 La diferencia importante</h2>

        <pre>
{`Jest
↓
"¿Esta función funciona?"

E2E
↓
"¿El usuario puede completar
todo este proceso?"`}
        </pre>


        <h2>✅ Lo importante para recordar</h2>

        <ul>
          <li>E2E significa End-to-End.</li>
          <li>Prueba la aplicación de principio a fin.</li>
          <li>Simula acciones de un usuario real.</li>
          <li>Playwright permite automatizar navegadores.</li>
          <li><code>page</code> representa la página.</li>
          <li><code>goto()</code> navega.</li>
          <li><code>locator()</code> busca elementos.</li>
          <li><code>fill()</code> escribe.</li>
          <li><code>click()</code> hace clic.</li>
          <li><code>expect()</code> comprueba resultados.</li>
        </ul>

      </div>

      <Footer />
    </>
  );
}

export default E2E;