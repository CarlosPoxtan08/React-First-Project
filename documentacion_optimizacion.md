# Documentación de Optimización de Rendimiento

## ¿Qué se optimizó?

Se realizaron las siguientes optimizaciones en la aplicación de React, manteniendo intactas la lógica y funcionalidades originales:

1. **Separación de rutas (Code Splitting & Lazy Loading)**
   - Se creó un archivo independiente para el enrutamiento: `src/router/AppRouter.jsx`.
   - Se implementó `React.lazy` y `Suspense` para la carga diferida (lazy loading) de las páginas (`Home`, `Cartelera`, `DetallesPelicula`, `Alimentos`, `Promociones`, `NotFound`).
   - El componente principal `App.jsx` se simplificó considerablemente, limitándose ahora a mostrar el `Navbar` base y cargar el envoltorio del enrutador.

2. **Movimiento de la Lógica de Estado a un Custom Hook**
   - La lógica para gestionar las películas favoritas y la sincronización con `localStorage` fue extraída de `App.jsx`.
   - Se creó el hook personalizado `src/hooks/useFavoritos.js` proporcionando modularidad para la persistencia de los favoritos.

3. **Eliminación de Código Innecesario y Duplicado (Data Extraction)**
   - Se detectó que las páginas `Home.jsx`, `Cartelera.jsx` y `DetallesPelicula.jsx` contenían copias exactas del arreglo local `peliculasMock`.
   - Se extrajo este arreglo en un archivo compartido: `src/data/peliculas.js`. Esto evita redundancias y disminuye el tamaño del bundle para cada componente de forma individual.

4. **Mejora en la Estructura de Carpetas**
   - Se consolidó una mejor organización arquitectónica del código, estructurando las funcionalidades a través de distintas carpetas (`/hooks`, `/data`, `/router`), lo que obedece a buenas prácticas en proyectos React mantenibles y escalables.

## Justificación de Decisiones Técnicas

- **Por qué `React.lazy` y `Suspense`:** La carga diferida de los componentes (pages) asegura que los componentes JS y los módulos de CSS (como `Cartelera.module.css` o `Alimentos.module.css`) se pidan al navegador **solo en el momento en que el usuario intenta visitar esa ruta**, y no todos de golpe al abrir el sitio la primera vez. Esto mejora radicalmente el tiempo de carga aparente (Time to Interactive) y reduce el bundle inicial. 

- **Por qué el uso de un Custom Hook (`useFavoritos.js`):** Mezclar el estado visual (`Navbar`, `Routes`) con lógica de negocio y métodos de ciclo de vida (`localStorage` set/get) hace que los componentes sean difíciles de probar y de mantener. Extraerlo facilita la inyección y previene recrear la lógica de negocio repetidas veces.

- **Por qué aislar la simulación de Mock Data (`src/data/peliculas.js`):** Los componentes de presentación (como las páginas) no deben contener lógica de datos dura en gran escala dentro de la misma vista, para no alargar el archivo principal. Aislarlo evita tener que actualizar en varios lugares el mismo dato de la película en caso de requerir un cambio y sienta las bases listas para sustituir eventualmente el JSON estático por un contexto proveniente de un `fetch()` API.
