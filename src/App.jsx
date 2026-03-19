import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const toggleFavorito = (pelicula) => {
    const actualizado = favoritos.some(f => f.title === pelicula.title)
      ? favoritos.filter(f => f.title !== pelicula.title)
      : [...favoritos, pelicula];
    setFavoritos(actualizado);
    localStorage.setItem("favoritos", JSON.stringify(actualizado));
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
          <Route path="/cartelera" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;