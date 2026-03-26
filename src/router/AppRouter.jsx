import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos";

// Lazy loading pages
const Home = lazy(() => import("../pages/Home"));
const Cartelera = lazy(() => import("../pages/Cartelera"));
const DetallesPelicula = lazy(() => import("../pages/DetallesPelicula"));
const Alimentos = lazy(() => import("../pages/Alimentos"));
const Promociones = lazy(() => import("../pages/Promociones"));
const NotFound = lazy(() => import("../pages/NotFound"));

// fallback content while loading split chunks
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', color: 'var(--cine-yellow)' }}>
    <h2>Cargando...</h2>
  </div>
);

function AppRouter() {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="/cartelera" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/pelicula/:id" element={<DetallesPelicula />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
