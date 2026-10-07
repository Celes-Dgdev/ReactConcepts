
import Footer from "../components/Footer.jsx";
function OnClick() {
  return (
    <div className="concepto">

      <h1>🖱️ onClick</h1>

      <section>
        <h2>📖 ¿Qué es onClick?</h2>

        <p>
          onClick es un evento de React que permite ejecutar una acción
          cuando el usuario hace clic sobre un elemento.
        </p>

        <p>
          Normalmente utilizamos una función para indicarle a React
          qué debe hacer cuando ocurra el clic.
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>Ejecutar funciones al hacer clic.</li>
          <li>Cambiar estados.</li>
          <li>Mostrar u ocultar elementos.</li>
          <li>Enviar información.</li>
          <li>Ejecutar acciones de botones.</li>
          <li>Responder a las acciones del usuario.</li>
        </ul>
      </section>

      <section>
        <h2>1️⃣ onClick con referencia a una función</h2>

        <pre>
          <code>
{`function saludar() {
  console.log("Hola");
}

<button onClick={saludar}>
  Saludar
</button>`}
          </code>
        </pre>

        <p>
          Esta es una de las formas más comunes.
        </p>

        <p>
          Le estamos pasando la función a React, pero no la estamos
          ejecutando nosotros.
        </p>

        <pre>
          <code>
{`onClick={saludar}

"React, cuando ocurra el clic,
ejecuta la función saludar."`}
          </code>
        </pre>
      </section>

      <section>
        <h2>2️⃣ onClick ejecutando una función directamente</h2>

        <pre>
          <code>
{`<button onClick={saludar()}>
  Saludar
</button>`}
          </code>
        </pre>

        <p>
          ⚠️ Esta forma normalmente es incorrecta.
        </p>

        <p>
          Los paréntesis significan "ejecuta esta función ahora".
          Por lo tanto, saludar() se ejecuta durante el renderizado,
          no cuando el usuario hace clic.
        </p>

        <pre>
          <code>
{`saludar()
   ↓
se ejecuta inmediatamente
   ↓
se renderiza el botón
   ↓
el usuario hace clic
   ↓
❌ ya no hay una función que ejecutar`}
          </code>
        </pre>
      </section>

      <section>
        <h2>3️⃣ onClick con función flecha</h2>

        <pre>
          <code>
{`<button onClick={() => saludar()}>
  Saludar
</button>`}
          </code>
        </pre>

        <p>
          Aquí sí es correcto.
        </p>

        <p>
          La función flecha crea una función nueva que será ejecutada
          cuando ocurra el clic.
        </p>

        <pre>
          <code>
{`Usuario hace clic
       ↓
() => saludar()
       ↓
saludar()
       ↓
se ejecuta la función`}
          </code>
        </pre>
      </section>

      <section>
        <h2>4️⃣ onClick con función flecha y código directamente</h2>

        <pre>
          <code>
{`<button
  onClick={() => {
    console.log("Hola");
  }}
>
  Saludar
</button>`}
          </code>
        </pre>

        <p>
          También podemos colocar directamente las instrucciones
          que queremos ejecutar dentro de la función flecha.
        </p>
      </section>

      <section>
        <h2>5️⃣ onClick con parámetros</h2>

        <pre>
          <code>
{`function saludar(nombre) {
  console.log("Hola", nombre);
}

<button onClick={() => saludar("Celes")}>
  Saludar
</button>`}
          </code>
        </pre>

        <p>
          Cuando necesitamos enviar argumentos a una función,
          utilizamos una función flecha.
        </p>

        <p>
          Esto evita ejecutar saludar("Celes") inmediatamente.
        </p>
      </section>

      <section>
        <h2>6️⃣ onClick con el evento</h2>

        <pre>
          <code>
{`function manejarClick(e) {
  console.log(e);
}

<button onClick={manejarClick}>
  Haz clic
</button>`}
          </code>
        </pre>

        <p>
          React proporciona automáticamente el objeto del evento
          como argumento de la función.
        </p>

        <p>
          Podemos utilizar ese objeto para obtener información sobre
          el clic y el elemento que lo recibió.
        </p>
      </section>

      <section>
        <h2>7️⃣ onClick con función flecha y evento</h2>

        <pre>
          <code>
{`<button
  onClick={(e) => console.log(e)}
>
  Haz clic
</button>`}
          </code>
        </pre>

        <p>
          También podemos recibir el evento directamente dentro
          de una función flecha.
        </p>
      </section>

      <section>
        <h2>🧠 Las diferencias importantes</h2>

        <pre>
          <code>
{`onClick={saludar}
      ↓
React recibe la función
      ↓
se ejecutará al hacer clic


onClick={saludar()}
      ↓
React recibe el resultado de ejecutar la función
      ↓
se ejecuta inmediatamente


onClick={() => saludar()}
      ↓
React recibe una función
      ↓
al hacer clic
      ↓
se ejecuta saludar()`}
          </code>
        </pre>
      </section>

      <section>
        <h2>📋 Resumen</h2>

        <pre>
          <code>
{`1. onClick={saludar}
   ✅ Correcto
   → Pasamos la función


2. onClick={saludar()}
   ❌ Normalmente incorrecto
   → Ejecutamos la función inmediatamente


3. onClick={() => saludar()}
   ✅ Correcto
   → Creamos una función que ejecutará saludar


4. onClick={() => {
     console.log("Hola");
   }}
   ✅ Correcto
   → Ejecutamos código directamente


5. onClick={() => saludar("Celes")}
   ✅ Correcto
   → Permite enviar parámetros


6. onClick={manejarClick}
   ✅ Correcto
   → React entrega el evento automáticamente`}
          </code>
        </pre>
      </section>

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>
{`¿Estoy pasando una función?
        ↓
      Sí ✅

onClick={saludar}


¿Estoy ejecutando una función?
        ↓
      Sí ⚠️

onClick={saludar()}


¿Necesito ejecutar algo al hacer clic?
        ↓
Función flecha

onClick={() => saludar()}`}
          </code>
        </pre>
      </section>
<Footer />
    </div>
  );
}

export default OnClick;