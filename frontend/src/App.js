import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import MiEspacio from "./components/MiEspacio/MiEspacio.js";
import MiPerfil from "./components/MiPerfil/MiPerfil.js";
import Recetas from "./components/Recetas/Recetas.js"
import RecetasGuardadas from './components/RecetasGuardadas/recetasGuardadas.js';
import AlimentacionDia from './components/AlimentacionDia/alimentacionDia.js';


function App() {
  return (
    <Router>
      <Switch>
        <Layout exact path="/">
          <Recetas></Recetas>
        </Layout>
        <Layout path="/MiEspacio">
          <MiEspacio />
        </Layout>
        <Layout path="/RecetasGuardadas">
          <RecetasGuardadas/>
        </Layout>
        <Layout path="/AlimentacionDia">
          <AlimentacionDia/>
        </Layout>
        <Layout path="/MiPerfil">
          <MiPerfil />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App;
