import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import DetallesPelicula from "./pages/DetallesPelicula";
import Alimentos from "./pages/Alimentos";
import Promociones from "./pages/Promociones";
import NotFound from "./pages/NotFound";

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
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
          <Route path="/cartelera" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/promociones" element={<Promociones />} />
          {/* Dynamic route UX: Allows deep linking to a specific movie */}
          <Route path="/pelicula/:id" element={<DetallesPelicula />} />
          
          {/* Catch-all 404 route UX: Handles misspelled URLs gracefully */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;