import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";

function App() {
  const [vistaActual, setVistaActual] = useState("home");
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header cambiarVista={setVistaActual} />

      <main className="main-content">
        {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
        {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
        {vistaActual === "detalle" && <Detalle />}
        {vistaActual === "alimentos" && <Alimentos />}
        {vistaActual === "otros" && <Otros />}
      </main>
    </div>
  );
}

export default App;