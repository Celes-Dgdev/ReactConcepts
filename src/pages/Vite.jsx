import { useState } from "react";
import Footer from "../components/Footer";

function Vite() {
  const [mensaje, setMensaje] = useState("");

  function probarVite() {
    setMensaje("⚡ Vite está funcionando y listo para desarrollar.");
  }

  return (
    <>
      <div className="concepto">

        <h1>⚡ Vite</h1>

        <h2>📖 ¿Qué es Vite?</h2>

        <p>
          Vite es una herramienta de desarrollo para aplicaciones web modernas.
          Se utiliza mucho con React para crear, desarrollar y preparar proyectos
          para producción.
        </p>

        <p>
          Vite NO es React. React sirve para construir la interfaz y Vite se
          encarga de facilitar el desarrollo y la construcción del proyecto.
        </p>


        <h2>🕐 Historia de Vite</h2>

        <p>
          Vite nació alrededor de <strong>2020</strong> y fue creado por
          <strong> Evan You</strong>, creador de Vue.js.
        </p>

        <p>
          Originalmente comenzó como un experimento para mejorar el desarrollo
          de aplicaciones Vue utilizando los <strong>ES Modules nativos del navegador</strong>.
        </p>

        <p>
          El problema que buscaba solucionar era que las herramientas
          tradicionales podían tardar mucho en iniciar y actualizar proyectos
          grandes.
        </p>

        <p>
          Vite cambió esta forma de trabajar: durante el desarrollo aprovecha
          los módulos nativos del navegador y actualiza solamente lo necesario.
        </p>

        <h3>📅 Línea del tiempo</h3>

        <ul>
          <li><strong>2020:</strong> Evan You comienza Vite.</li>
          <li><strong>2021:</strong> Vite 2.0 se vuelve independiente del framework y agrega soporte oficial para React.</li>
          <li><strong>2022:</strong> Vite 3.0.</li>
          <li><strong>2023:</strong> Vite 4.0.</li>
          <li><strong>2024:</strong> Vite 5.0.</li>
          <li><strong>2025:</strong> Vite 7.0.</li>
          <li><strong>2026:</strong> Vite 8.0 incorpora Rolldown como nuevo motor de bundling.</li>
        </ul>

        <p>
          El nombre <strong>Vite</strong> viene del francés y significa
          <strong> "rápido"</strong>.
        </p>


        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Crear proyectos rápidamente.</li>
          <li>Levantar un servidor de desarrollo.</li>
          <li>Actualizar cambios casi inmediatamente.</li>
          <li>Trabajar con React y otros frameworks.</li>
          <li>Preparar el proyecto para producción.</li>
        </ul>


        <h2>💻 Crear un proyecto con Vite</h2>

        <pre>
{`npm create vite@latest`}
        </pre>

        <p>Después:</p>

        <pre>
{`npm install
npm run dev`}
        </pre>


        <h2>📁 Estructura básica del proyecto</h2>

        <pre>
{`mi-proyecto/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js`}
        </pre>


        <h2>📂 ¿Qué hace cada archivo y carpeta?</h2>

        <h3>📁 node_modules/</h3>

        <p>
          Aquí se guardan las dependencias que instalamos con npm.
        </p>

        <p>
          Por ejemplo, cuando ejecutamos <code>npm install</code>, npm descarga
          React, React DOM y las demás dependencias necesarias.
        </p>

        <p>
          <strong>No debemos modificar esta carpeta manualmente.</strong>
        </p>


        <h3>📁 public/</h3>

        <p>
          Contiene archivos estáticos que pueden utilizarse directamente en
          nuestra aplicación.
        </p>

        <p>
          Por ejemplo: imágenes, iconos u otros archivos que no necesitan ser
          procesados por React.
        </p>


        <h3>📁 src/</h3>

        <p>
          Esta es la carpeta principal donde escribimos nuestro código de React.
        </p>

        <p>
          Aquí normalmente estarán nuestros componentes, páginas, estilos,
          hooks y demás código de la aplicación.
        </p>

        <pre>
{`src/
 ↓
Nuestro código de React`}
        </pre>


        <h3>📁 src/assets/</h3>

        <p>
          Se utiliza para guardar recursos que forman parte de la aplicación,
          como imágenes, SVG u otros archivos que importamos desde nuestro código.
        </p>


        <h3>⚛️ App.jsx</h3>

        <p>
          Es uno de los componentes principales de React.
        </p>

        <p>
          Aquí normalmente construimos la estructura principal de nuestra
          aplicación o colocamos nuestras rutas y componentes.
        </p>

        <pre>
{`function App() {
  return (
    <h1>Hola React</h1>
  );
}

export default App;`}
        </pre>

        <p>
          <strong>App.jsx = componente principal de nuestra interfaz.</strong>
        </p>


        <h3>🎨 App.css</h3>

        <p>
          Contiene los estilos CSS relacionados con App.jsx.
        </p>

        <p>
          Aquí podemos modificar colores, tamaños, espacios, posiciones,
          botones, etc.
        </p>


        <h3>🎨 index.css</h3>

        <p>
          Contiene estilos generales o globales de la aplicación.
        </p>

        <p>
          Por ejemplo, podemos establecer la fuente, el fondo o quitar los
          márgenes predeterminados del navegador.
        </p>


        <h3>🚀 main.jsx</h3>

        <p>
          Este archivo es muy importante porque es el punto de entrada de
          nuestra aplicación React.
        </p>

        <p>
          Aquí React toma nuestro componente principal y lo conecta con el HTML
          del navegador.
        </p>

        <pre>
{`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);`}
        </pre>

        <p>
          La idea mental es:
        </p>

        <pre>
{`index.html
    ↓
main.jsx
    ↓
App.jsx
    ↓
Componentes
    ↓
Interfaz`}
        </pre>


        <h3>🌐 index.html</h3>

        <p>
          Es el HTML principal que recibe el navegador.
        </p>

        <p>
          En una aplicación React normalmente encontramos un elemento como:
        </p>

        <pre>
{`<div id="root"></div>`}
        </pre>

        <p>
          React utiliza ese elemento como punto donde coloca nuestra aplicación.
        </p>


        <h3>📦 package.json</h3>

        <p>
          Este archivo contiene información importante del proyecto y sus
          dependencias.
        </p>

        <p>
          También contiene los comandos que podemos ejecutar con npm.
        </p>

        <pre>
{`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}`}
        </pre>

        <p>
          Por ejemplo:
        </p>

        <pre>
{`npm run dev`}
        </pre>

        <p>
          ejecuta el comando asociado a <code>dev</code>.
        </p>


        <h3>🔒 package-lock.json</h3>

        <p>
          Guarda información exacta sobre las versiones de las dependencias
          instaladas.
        </p>

        <p>
          Esto ayuda a que diferentes computadoras puedan instalar versiones
          consistentes de las mismas dependencias.
        </p>

        <p>
          Normalmente no necesitamos editarlo manualmente.
        </p>


        <h3>⚙️ vite.config.js</h3>

        <p>
          Es el archivo de configuración de Vite.
        </p>

        <p>
          Aquí podemos configurar aspectos del funcionamiento de Vite, como
          plugins, rutas, servidor y otras opciones.
        </p>

        <p>
          En un proyecto React creado con Vite normalmente aparece configurado
          el plugin de React.
        </p>


        <h3>🧹 .gitignore</h3>

        <p>
          Le indica a Git qué archivos o carpetas no debe subir al repositorio.
        </p>

        <p>
          Por ejemplo, normalmente se evita subir:
        </p>

        <pre>
{`node_modules/`}
        </pre>


        <h3>🔍 eslint.config.js</h3>

        <p>
          Contiene la configuración de ESLint.
        </p>

        <p>
          ESLint analiza nuestro código y puede detectar errores, problemas de
          estilo o malas prácticas.
        </p>


        <h2>🧠 ¿Cómo se conecta todo?</h2>

        <pre>
{`index.html
   ↓
<div id="root">
   ↓
main.jsx
   ↓
<App />
   ↓
App.jsx
   ↓
Componentes
   ↓
Interfaz que ves en el navegador`}
        </pre>


        <h2>🔥 ¿Qué hace Vite durante el desarrollo?</h2>

        <pre>
{`Código
   ↓
Vite
   ↓
Servidor de desarrollo
   ↓
Navegador
   ↓
Cambias código
   ↓
Vite detecta el cambio
   ↓
Actualiza solamente lo necesario`}
        </pre>


        <h2>⚡ HMR</h2>

        <p>
          Vite utiliza <strong>HMR (Hot Module Replacement)</strong>.
        </p>

        <p>
          Esto permite que cuando modificas un archivo, el navegador actualice
          solamente la parte necesaria sin tener que reconstruir toda la
          aplicación.
        </p>


        <h2>🏗️ Producción</h2>

        <p>
          Cuando terminamos nuestro proyecto podemos crear una versión
          optimizada para producción.
        </p>

        <pre>
{`npm run build`}
        </pre>

        <p>
          Vite prepara los archivos para que puedan ser utilizados en un
          servidor de producción.
        </p>


        <h2>🎮 Pruébalo tú mismo</h2>

        <button onClick={probarVite}>
          Probar Vite
        </button>

        {mensaje && (
          <p>
            {mensaje}
          </p>
        )}

        <h3>💻 Código utilizado</h3>

        <pre>
{`const [mensaje, setMensaje] = useState("");

function probarVite() {
  setMensaje("⚡ Vite está funcionando y listo para desarrollar.");
}

<button onClick={probarVite}>
  Probar Vite
</button>`}
        </pre>


        <h2>🧠 Mapa mental</h2>

        <pre>
{`Vite
 ↓
Herramienta de desarrollo
 ↓
Proyecto React
 ↓
index.html
 ↓
main.jsx
 ↓
App.jsx
 ↓
Componentes
 ↓
Interfaz

Durante desarrollo:
Vite → servidor + HMR

Para producción:
npm run build
      ↓
archivos optimizados`}
        </pre>


        <h2>✅ Lo importante para recordar</h2>

        <ul>
          <li>Vite no es React.</li>
          <li>Vite facilita el desarrollo de aplicaciones.</li>
          <li>Fue creado por Evan You alrededor de 2020.</li>
          <li><code>src/</code> contiene nuestro código principal.</li>
          <li><code>main.jsx</code> conecta React con el HTML.</li>
          <li><code>App.jsx</code> es el componente principal.</li>
          <li><code>index.html</code> es la base HTML.</li>
          <li><code>package.json</code> contiene dependencias y scripts.</li>
          <li><code>vite.config.js</code> configura Vite.</li>
          <li><code>node_modules/</code> contiene las dependencias instaladas.</li>
          <li><code>npm run dev</code> inicia el desarrollo.</li>
          <li><code>npm run build</code> prepara producción.</li>
        </ul>

      </div>

      <Footer />
    </>
  );
}

export default Vite;