import { useMemo, useState } from "react";
import Footer from "../components/Footer";

function UseMemo() {
  const [numero, setNumero] = useState(1);
  const [nombre, setNombre] = useState("");

  const resultado = useMemo(() => {
    console.log("Calculando resultado...");

    return numero * 500;
  }, [numero]);

  return (
    <div className="concepto">

      <h1>🧠 useMemo</h1>

      <section>
        <h2>📖 ¿Qué es?</h2>

        <p>
          <strong>useMemo</strong> es un Hook de React que permite
          memorizar el resultado de un cálculo.
        </p>

        <p>
          Su objetivo es evitar que React vuelva a realizar un cálculo
          cuando las dependencias del cálculo no han cambiado.
        </p>

        <p>
          En pocas palabras:
          <strong> useMemo guarda un resultado para poder reutilizarlo.</strong>
        </p>
      </section>

      <section>
        <h2>🎯 ¿Para qué sirve?</h2>

        <ul>
          <li>🧠 Memorizar resultados de cálculos.</li>
          <li>⚡ Evitar cálculos innecesarios.</li>
          <li>📦 Reutilizar un resultado mientras sus dependencias no cambien.</li>
          <li>🚀 Mejorar el rendimiento en cálculos costosos.</li>
        </ul>
      </section>

      <section>
        <h2>💻 Sintaxis</h2>

        <pre>
          <code>{`const resultado = useMemo(() => {
  return calculo();
}, [dependencias]);`}</code>
        </pre>

        <p>
          La función se ejecuta para obtener un resultado y React
          memoriza ese resultado.
        </p>

        <p>
          Si las dependencias no cambian, React puede reutilizar
          el resultado anterior.
        </p>
      </section>

      <section>
        <h2>🧠 La idea de la cajita</h2>

        <pre>
          <code>{`useMemo()
   ↓
🧠 calcula
   ↓
┌─────────────────┐
│ resultado       │
│ guardado        │
└─────────────────┘
   ↓
¿Cambió alguna dependencia?
   ↓
 ┌───────────┐
 NO          SÍ
 ↓            ↓
usa          recalcula
resultado`}</code>
        </pre>

        <p>
          Piensa en <strong>useMemo</strong> como una memoria que guarda
          el resultado de una operación.
        </p>
      </section>

      <section>
        <h2>🔍 ¿Cómo funciona?</h2>

        <pre>
          <code>{`const resultado = useMemo(() => {
  return numero * 500;
}, [numero]);`}</code>
        </pre>

        <p>
          La primera vez React realiza el cálculo.
        </p>

        <pre>
          <code>{`numero = 2

2 × 500

= 1000`}</code>
        </pre>

        <p>
          React guarda ese resultado.
        </p>

        <p>
          Si el componente vuelve a renderizarse pero
          <strong> numero</strong> no cambió, React puede reutilizar
          el resultado guardado.
        </p>
      </section>

      <section>
        <h2>📦 Las dependencias</h2>

        <p>
          Las dependencias indican a React cuándo debe volver a calcular
          el resultado.
        </p>

        <pre>
          <code>{`const resultado = useMemo(() => {
  return numero * 500;
}, [numero]);`}</code>
        </pre>

        <p>
          En este ejemplo la dependencia es:
        </p>

        <pre>
          <code>{`[numero]`}</code>
        </pre>

        <p>
          Si <strong>numero</strong> cambia, useMemo vuelve a calcular.
        </p>

        <p>
          Si <strong>numero</strong> no cambia, puede reutilizar el
          resultado anterior.
        </p>
      </section>

      <section>
        <h2>🔄 Flujo cuando NO cambia la dependencia</h2>

        <pre>
          <code>{`Render
   ↓
useMemo
   ↓
¿Cambió numero?
   ↓
NO
   ↓
🧠 Usa resultado guardado`}</code>
        </pre>
      </section>

      <section>
        <h2>🔄 Flujo cuando SÍ cambia</h2>

        <pre>
          <code>{`Render
   ↓
useMemo
   ↓
¿Cambió numero?
   ↓
SÍ
   ↓
🧮 Ejecuta el cálculo
   ↓
🧠 Guarda nuevo resultado`}</code>
        </pre>
      </section>

      <section>
        <h2>⚠️ useMemo NO es useState</h2>

        <h3>useState</h3>

        <pre>
          <code>{`const [numero, setNumero] = useState(1);`}</code>
        </pre>

        <p>
          <strong>useState</strong> guarda un estado que puede cambiar
          durante la interacción con el usuario.
        </p>

        <h3>useMemo</h3>

        <pre>
          <code>{`const resultado = useMemo(() => {
  return numero * 500;
}, [numero]);`}</code>
        </pre>

        <p>
          <strong>useMemo</strong> guarda el resultado de un cálculo.
        </p>
      </section>

      <section>
        <h2>🧠 Diferencia mental</h2>

        <pre>
          <code>{`useState
   ↓
"Quiero guardar un estado"


useMemo
   ↓
"Quiero guardar el resultado
de un cálculo"`}</code>
        </pre>
      </section>

      <section>
        <h2>🧪 Ejemplo real</h2>

        <p>
          Imagina una tienda con miles de productos.
        </p>

        <p>
          Queremos filtrar productos caros:
        </p>

        <pre>
          <code>{`const productosCaros = useMemo(() => {
  return productos.filter(
    producto => producto.precio > 1000
  );
}, [productos]);`}</code>
        </pre>

        <p>
          El filtro solamente necesita volver a ejecutarse cuando
          <strong> productos</strong> cambie.
        </p>
      </section>

      <section>
        <h2>🎮 Pruébalo tú mismo</h2>

        <h3>Escribe tu nombre</h3>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />

        <p>
          Nombre: <strong>{nombre}</strong>
        </p>

        <h3>Modifica el número</h3>

        <button onClick={() => setNumero(numero + 1)}>
          Aumentar número
        </button>

        <p>
          Número: <strong>{numero}</strong>
        </p>

        <p>
          Resultado: <strong>{resultado}</strong>
        </p>

        <p>
          Abre la consola del navegador y observa cuándo aparece:
        </p>

        <pre>
          <code>{`Calculando resultado...`}</code>
        </pre>

        <p>
          Escribe en el nombre y observa que el componente se renderiza,
          pero el cálculo no necesita ejecutarse nuevamente porque
          <strong> numero</strong> no cambió.
        </p>

        <p>
          Cuando aumentas el número, la dependencia cambia y
          <strong> useMemo</strong> vuelve a calcular.
        </p>
      </section>

      <section>
        <h2>⚡ ¿Por qué puede mejorar el rendimiento?</h2>

        <p>
          Imagina que tienes un cálculo muy pesado:
        </p>

        <pre>
          <code>{`const resultado = calcularMilesDeProductos();`}</code>
        </pre>

        <p>
          Si el componente se renderiza muchas veces, podríamos terminar
          realizando ese cálculo repetidamente.
        </p>

        <p>
          Con useMemo podemos memorizar el resultado:
        </p>

        <pre>
          <code>{`const resultado = useMemo(() => {
  return calcularMilesDeProductos();
}, [productos]);`}</code>
        </pre>

        <p>
          Así el cálculo solamente necesita actualizarse cuando
          <strong> productos</strong> cambie.
        </p>
      </section>

      <section>
        <h2>⚠️ No uses useMemo para todo</h2>

        <p>
          useMemo no significa que todos los cálculos deban llevar
          useMemo.
        </p>

        <p>
          Para operaciones pequeñas y simples normalmente no hace falta.
        </p>

        <pre>
          <code>{`const resultado = 2 + 2;`}</code>
        </pre>

        <p>
          No necesitamos usar useMemo para algo tan sencillo.
        </p>

        <p>
          useMemo tiene más sentido cuando el cálculo puede ser costoso
          o cuando realmente queremos evitar recalcularlo innecesariamente.
        </p>
      </section>

      <section>
        <h2>🧠 useMemo + map + filter</h2>

        <pre>
          <code>{`const productosFiltrados = useMemo(() => {
  return productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);
}, [productos]);`}</code>
        </pre>

        <p>
          Aquí podemos combinar conceptos que ya conoces:
        </p>

        <pre>
          <code>{`productos
   ↓
filter()
   ↓
selecciona
   ↓
map()
   ↓
transforma
   ↓
useMemo
   ↓
memoriza el resultado`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 useMemo vs useEffect</h2>

        <pre>
          <code>{`useMemo
   ↓
calcular y memorizar
   ↓
obtener un valor


useEffect
   ↓
ejecutar un efecto
   ↓
sincronizar con algo externo`}</code>
        </pre>

        <p>
          <strong>useMemo</strong> está pensado para obtener un valor
          calculado.
        </p>

        <p>
          <strong>useEffect</strong> está pensado para efectos secundarios,
          como APIs, localStorage, timers o eventos externos.
        </p>
      </section>

      <section>
        <h2>🧠 Flujo completo</h2>

        <pre>
          <code>{`Componente renderiza
        ↓
    useMemo()
        ↓
¿Cambió alguna dependencia?
     ↙          ↘
   NO            SÍ
   ↓              ↓
usa resultado   recalcula
guardado           ↓
   ↓           nuevo resultado
   │                ↓
   └────────→ 🧠 memoriza`}</code>
        </pre>
      </section>

      <section>
        <h2>🎯 Reto</h2>

        <p>
          Crea un contador y utiliza useMemo para calcular el doble
          del contador.
        </p>

        <p>Debes tener:</p>

        <pre>
          <code>{`useState
useMemo
[contador]`}</code>
        </pre>

        <p>
          El resultado debe ser:
        </p>

        <pre>
          <code>{`contador = 5

resultado = 10`}</code>
        </pre>
      </section>

      <section>
        <h2>👁️ Solución</h2>

        <pre>
          <code>{`const [contador, setContador] = useState(0);

const doble = useMemo(() => {
  return contador * 2;
}, [contador]);

<button onClick={() => setContador(contador + 1)}>
  Aumentar
</button>

<p>{doble}</p>`}</code>
        </pre>
      </section>

      <section>
        <h2>🧠 Regla mental</h2>

        <pre>
          <code>{`useMemo
   ↓
🧠 "Guarda este resultado"


[dependencias]
   ↓
¿Cambió?
   ↓
SÍ → recalcula
NO → usa el resultado guardado`}</code>
        </pre>

        <p>
          <strong>useState</strong> guarda estado.
        </p>

        <p>
          <strong>useMemo</strong> memoriza resultados.
        </p>

        <p>
          Esa es la idea clave que debes llevarte.
        </p>
      </section>

      <Footer />

    </div>
  );
}

export default UseMemo;