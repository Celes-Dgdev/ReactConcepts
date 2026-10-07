

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer.jsx"
import ReactPages from "./pages/ReactPages.jsx"
import Fundamentos from "./pages/Fundamentos.jsx"
import JSX from "./pages/JSX.jsx" 
import ComponentesFuncionales from "./pages/ComponetesFuncionales.jsx"
import ImportExport from "./pages/ImportExport.jsx"
import Props from "./pages/Props.jsx"
import PadreHijo from "./pages/PadreHijo.jsx"
import Estado from "./pages/Estado.jsx"
import UseState from "./pages/UseState.jsx"
import OnClick from "./pages/OnClick.jsx"
import OnChange from "./pages/OnChange.jsx"
import MapFilter from "./pages/MapFilter.jsx"
import LocalStorage from "./pages/LocalStorege.jsx"
import ComponentesReutilizables from "./pages/ComponentesReutilizables.jsx"
import RenderizadoCondicional from "./pages/RenderizadoCondicional.jsx"
import FormsInputs from "./pages/FormsInputs.jsx"
import UseEffect from "./pages/UseEffect.jsx"
import ContextAPI from "./pages/ContextAPI.jsx"
import ReactRouter from "./pages/ReactRouter.jsx"
import UseRef from "./pages/UseRef.jsx"
import UseMemo from "./pages/UseMemo.jsx"
import CustomHooks from "./pages/CustomHooks.jsx"
import ApisRest from "./pages/ApisRest.jsx"
import MetodosHTTP from "./pages/MetodosHTTP.jsx"
import Axios from "./pages/Axios.jsx"
import AsyncAwait from "./pages/AsyncAwait.jsx"
import Jest from "./pages/Jest.jsx"
import Vite from "./pages/Vite.jsx"
import E2E from "./pages/E2E.jsx"


function App() {
  return (
    <>
    <div className="burbujas" aria-hidden="true">
  <span className="burbuja burbuja1"></span>
  <span className="burbuja burbuja2"></span>
  <span className="burbuja burbuja3"></span>
  <span className="burbuja burbuja4"></span>
  <span className="burbuja burbuja5"></span>
  <span className="burbuja burbuja6"></span>
  <span className="burbuja burbuja7"></span>
  <span className="burbuja burbuja8"></span>
</div>

 <BrowserRouter basename="/ReactConcepts">
   <Routes>   <Route path="/react" element={<ReactPages />} />
    <Route path="/fundamentos" element={<Fundamentos />}  /> 
    <Route path="/jsx" element={<JSX />}  />
    <Route path="/componentes-funcionales" element={<ComponentesFuncionales />} />
    <Route path="/import-export" element={<ImportExport />}  />
    <Route path="/props" element={<Props />}  />
    <Route path="/padre-hijo" element={<PadreHijo />}  />
    <Route path="/estado" element={<Estado />}  />
    <Route path="/useState" element={<UseState />}  />
<Route path="/OnClick" element={<OnClick />}  />
<Route path="/OnChange" element={<OnChange />}  />
<Route path="/map-filter" element={<MapFilter />}  />
<Route path="/localStorage" element={<LocalStorage />}  />
<Route path="/ComponentesReutilizables" element={<ComponentesReutilizables />}  />
<Route path="/renderizadoCondicional" element={<RenderizadoCondicional />}  />
<Route path="/formsInputs" element={<FormsInputs />}  />
<Route path="/useEffect" element={<UseEffect />}  />
<Route path="/contextAPI" element={<ContextAPI />}  />
<Route path="/reactRouter" element={<ReactRouter />}  />
<Route path="/useRef" element={<UseRef />}  />
<Route path="/useMemo" element={<UseMemo />}  />
   <Route path="/customHooks" element={<CustomHooks />}  />
   <Route path="/ApisRest" element={<ApisRest />}  />
   <Route path="/metodosHTTP" element={<MetodosHTTP />}  />
    <Route path="/axios" element={<Axios />}  />
    <Route path="/asyncAwait" element={<AsyncAwait />}  />
    <Route path="/jest" element={<Jest />}  />
    <Route path="/vite" element={<Vite />}  />
    <Route path="/e2e" element={<E2E />}  />
    
      <Route  path="/"  element={
  
    
    <div>
      <h1>⚛️ ReactConcepts</h1>

      <h2>🧠 Ruta de Aprendizaje React</h2>

      <div className="mapa">

        <Link to="/react" className="caja principal">
          ⚛️ React
        </Link>

        <div className="flecha">↓</div>

        <div className="caja ruta">
          🧠 Ruta de Aprendizaje
        </div>

        <div className="flecha">↓</div>

        {/* FUNDAMENTOS */}

        <div className="fila">

          <div className="bloque">
            <Link to="/fundamentos" className="caja">
              🧱 Fundamentos
            </Link>

            <div className="flecha">↓</div>

            <Link to="/jsx" className="caja">
              JSX
            </Link>

            <div className="flecha">↓</div>

            <Link to="/componentes-funcionales" className="caja">
              Componentes funcionales
            </Link>

            <div className="flecha">↓</div>

            <Link to="/import-export" className="caja">
              Import / Export
            </Link>

            <div className="flecha">↓</div>

            <Link to="/props" className="caja">
              Props
            </Link>

            <div className="flecha">↓</div>

            <Link to="/padre-hijo" className="caja">
              Padre → Hijo
            </Link>
          </div>

          {/* ESTADO */}

          <div className="bloque">
            <Link to="/estado" className="caja">
              🧠 Estado
            </Link>

            <div className="flecha">↓</div>

            <Link to="/useState" className="caja">
              useState
            </Link>

            <div className="flecha">↓</div>

            <Link to="/OnClick" className="caja">
              onClick
            </Link>
            <div className="flecha">↓</div>

            <Link to="/onChange" className="caja">
              onChange
            </Link>
            <div className="flecha">↓</div>

            <Link to="/map-filter" className="caja">
              map / filter
            </Link>

            <div className="flecha">↓</div>

            <Link to="/localStorage" className="caja">
              localStorage
            </Link>
          </div>

        </div>

        <div className="flecha">↓</div>

        {/* COMPONENTES Y RENDERIZADO */}

        <div className="fila">

          <div className="bloque">
            <Link to="/componentesReutilizables" className="caja">
              🧩 Componentes reutilizables
            </Link>

            <div className="flecha">↓</div>

            <Link to="/renderizadoCondicional" className="caja">
              Renderizado condicional
            </Link>
          </div>

          <div className="bloque">
            <Link to="/formsInputs" className="caja">
              📝 Forms & Inputs
            </Link>

            <div className="flecha">↓</div>

            <Link to="/useEffect" className="caja">
              ⚙️ useEffect
            </Link>
          </div>

        </div>

        <div className="flecha">↓</div>

        {/* REACT INTERMEDIO */}

        <div className="fila">

          <div className="bloque">
            <Link to="/contextAPI" className="caja">
              🌎 Context API
            </Link>

            <div className="flecha">↓</div>

            <Link to="/reactRouter" className="caja">
              🛣️ React Router
            </Link>
          </div>

          <div className="bloque">
            <Link to="/useRef" className="caja">
              useRef
            </Link>

            <div className="flecha">↓</div>

            <Link to="/useMemo" className="caja">
              useMemo
            </Link>
          </div>

        </div>

        <div className="flecha">↓</div>

        {/* HOOKS */}

        <Link to="/customHooks" className="caja">
          🪝 Custom Hooks
        </Link>

        <div className="flecha">↓</div>

        {/* APIs */}

        <div className="fila">

          <div className="bloque">
            <Link to="/ApisRest" className="caja">
              🌐 APIs / REST
            </Link>

            <div className="flecha">↓</div>

            <Link to="/metodosHTTP" className="caja">
              GET / POST / PUT / DELETE
            </Link>
          </div>

          <div className="bloque">
           <Link to="/axios" className="caja actual">
    🟡 Axios
  </Link>

            <div className="flecha">↓</div>

            <Link to="/asyncAwait" className="caja">
              async / await
            </Link>
          </div>

        </div>

        <div className="flecha">↓</div>

        {/* SIGUIENTES TEMAS */}

        <Link to="/jest" className="caja pendiente">
          ⬜ Jest
        </Link>

        <div className="flecha">↓</div>

        <Link to="/vite" className="caja pendiente">
          ⬜ Vite
        </Link>

        <div className="flecha">↓</div>

        <Link to="/e2e" className="caja pendiente">
          ⬜ E2E
        </Link>

      </div>
      
      <Footer/>
    </div>

      }
    />
    </Routes>
 </BrowserRouter>
    </>
  );
}

export default App;