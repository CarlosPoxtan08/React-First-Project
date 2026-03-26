import { useState } from "react";

export function useFavoritos() {
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

  return { favoritos, toggleFavorito };
}
