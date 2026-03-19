# Guión de Exposición: Proyecto CinePolis

*(Nota: Este guión está diseñado para ser leído en voz alta en un formato de video de aproximadamente 15 minutos. Las pausas y transiciones están indicadas para ayudar en la fluidez de la presentación).*

---

## 1. Introducción y presentación de CinePolis (1:00)

¡Hola a todos! Qué gusto saludarles el día de hoy. Mi nombre es [Tu Nombre], y estoy muy emocionado de presentarles mi proyecto integrador desarrollado con React. Se trata de **CinePolis**, una aplicación web diseñada para ofrecer la experiencia más inmersiva al explorar carteleras de cine, comprar boletos, consultar las golosinas favoritas y mantenerse al día con las últimas noticias del séptimo arte. 

A lo largo de este video, analizaremos paso a paso las entrañas de mi aplicación: desde cómo está estructurada internamente la arquitectura, pasando por las decisiones de diseño responsivo, el manejo del estado global y local, la interacción a través de eventos y formularios, hasta llegar al consumo dinámico de datos. Todo esto aplicando las mejores prácticas de desarrollo en React. 

Sin más preámbulos, acompáñenme a conocer el código que le da vida a CinePolis.

---

## 2. Arquitectura y Componentes (3:00)

Comencemos hablando de la estructura del proyecto y su arquitectura. Desde el principio, me propuse mantener un código limpio, modular y altamente reutilizable, y esto se refleja directamente en la organización de mis carpetas.

En el directorio principal `src`, dividí mi código en cuatro áreas fundamentales:
- La carpeta **`components`**: Aquí residen los bloques de construcción reutilizables de la aplicación. Por ejemplo, tenemos nuestro encabezado superior en `Header.jsx`, las tarjetas individuales de las películas en `MovieCard.jsx`, el formulario de compras en `BoletoForm.jsx`, y la sección lateral de novedades en `Noticias.jsx`. Incluso hay una subcarpeta `food` para modularizar los componentes de `FoodCategory` y `FoodCard`.
- La carpeta **`pages`**: Esta aloja las vistas completas a las que el usuario puede "navegar", como `Home.jsx`, `Cartelera.jsx`, `Alimentos.jsx`, `Otros.jsx` y `Detalle.jsx`.
- La carpeta **`styles`**: Contiene archivos base como `variables.css` que dictan el sistema de diseño global, asegurando que los colores y espaciados sean idénticos en cualquier rincón del código.
- Finalmente, la carpeta **`assets`** para cualquier recurso estático necesario.

El pilar de React es la reutilización de componentes a través del paso de propiedades o *props*. En CinePolis, esto es evidente en todas partes. Por ejemplo, en el componente padre `App.jsx`, mantengo el estado de la vista actual y qué películas son favoritas. Desde ahí, paso funciones fundamentales como `cambiarVista` y `toggleFavorito` hacia los componentes hijos, como `Home` y `Cartelera`.
A su vez, estos componentes iteran sobre datos y renderizan múltiples instancias de `MovieCard`. A cada `MovieCard` le paso props sumamente importantes: el título (`title`), imagen (`image`), género (`genre`), duración (`duration`), y eventos enlazados a botones como `onVerDetalle` u `onToggleFavorite`.

Elegí pasar estas propiedades porque me permite desacoplar la apariencia del componente de la lógica de datos. Un solo componente visual, `MovieCard`, me sirve tanto para la pantalla de inicio mostrando los "Destacados" como para la pantalla completa de la "Cartelera", e incluso para la sección condicional de "Mis Películas Favoritas". Esto hace que mi código sea limpio, predecible y extremadamente fácil de mantener.

---

## 3. Diseño, Layout y Responsividad (3:00)

Pasemos a un aspecto crícial para la experiencia del usuario: la coherencia visual y el diseño responsivo. 

Para este proyecto decidí implementar **CSS Modules**; cada componente tiene su propio archivo, por ejemplo `MovieCard.module.css` o `Cartelera.module.css`. Esto asegura que los estilos estén fuertemente ligados a su componente (escopeados) y evita colisiones de nombres.

La coherencia nace desde mi archivo central `variables.css`. Ahí definí una paleta de colores inmersiva, simulando la experiencia de entrar a una sala oscura: fondos que oscilan entre negros puros (`--cine-black: #0a0a0a`) y superficies grises oscuras (`--cine-card: #242424`), que generan un contraste espectacular con mi color de acento, el amarillo clásico de la marca (`--cine-yellow: #ffc107`). 

En cuanto a la estructura del layout o maquetación, me he apoyado poderosamente en **Grid** y **Flexbox**:
- Utilizo **Flexbox** predominantemente para alinear elementos internos. Por ejemplo, en el `Header.jsx`, me permite distribuir el logotipo a la izquierda y la navegación a la derecha sin esfuerzo. De igual modo, en las tarjetas de película o componentes de noticias, utilizo `display: flex; flex-direction: column;` para apilar la imagen, los títulos y los botones uno debajo de otro ordenadamente.
- Utilizo **CSS Grid** para las estructuras a gran escala. Si miramos `Cartelera.module.css` o `Home.module.css`, notaremos un bloque `.grid` que dice `grid-template-columns: repeat(4, 1fr)`. Esto divide la pantalla en cuatro columnas perfectas para acomodar nuestras películas.

Y por supuesto, la responsividad no se quedó atrás. Usando media queries, estas cuadrículas de cuatro columnas disminuyen a tres en portátiles (`@media (max-width: 1024px)`), a dos en tabletas (`max-width: 768px`) y finalmente terminan fluyendo en una sola columna en pantallas móviles (`max-width: 480px`).
Todo esto se aplica de forma fluida y puede visualizarse perfectamente no solo en la Cartelera, sino también en las páginas temáticas funcionales de la aplicación, como la sección de **Alimentos** (con grillas y divisores hermosos por categorías de dulces y bebidas) y la sección de membrecías de **Otros**. 

---

## 4. Estado con useState (3:00)

Un proyecto robusto en React está vivo y recuerda la interacción del usuario gracias al gancho **useState**. En CinePolis, el manejo de estados fue un ejercicio de diseño cuidadoso para balancear estados globales y locales.

Empezando en la raíz de todo, en `App.jsx`, encontramos dos estados vitales: 
1. `const [vistaActual, setVistaActual] = useState("home");` el cual controla la navegación. Cada vez que se actualiza, el componente `main` condicionalmente renderiza una página u otra.
2. `const [favoritos, setFavoritos] = useState(...)` el cual maneja un **arreglo de objetos** de las películas guardadas. Decidí elevar este estado hasta `App.jsx` e hidratarlo mediante el `localStorage` del navegador. De esta forma, si el usuario refresca la página o navega de la vista *Home* a *Cartelera*, sus favoritos persisten en la memoria global de mi aplicación.

Si bajamos varios niveles hasta el `MovieCard.jsx`, tengo otro estado distinto: 
`const [showDescription, setShowDescription] = useState(false);`. Este es un estado **booleano local** que solamente le incumbe a esa tarjeta en específico para saber si el usuario quiere ver "Más" o "Menos" del texto de la sinopsis. 

Por otro lado, en mi componente **`BoletoForm.jsx`**, decidí alojar mi estado en un **objeto** con la variable `formData` que almacena el nombre, email, cantidad de boletos y qué película está seleccionada, además de otro estado `mensaje` que es tan solo un string vacío al iniciar y que, tras una compra exitosa, se vuelve renderizado dinámico en pantalla mediante validación condicional.

Gracias a la manipulación experta del estado virtual de React, las propiedades bajan como cascada desde `App` hasta los componentes más recónditos provocando animaciones reactivas instantáneas cuando se detecta el más mínimo cambio.

---

## 5. Eventos y Formularios (2:30)

Como hemos visto, ninguna aplicación está completa sin poder interactuar bidireccionalmente con el usuario. Para interceptar estas interacciones hago uso constante de oyentes (listeners) de eventos.

El rey de mi navegación es el evento `onClick`. Se lo pueden encontrar disparando la función `cambiarVista` en las anclas de texto de mi componente `Header.jsx`, propiciando menús desplegables del texto de la sinopsis en la etiqueta `button` de mi `MovieCard.jsx`, y en el manejador que delega nuestro botón de "Marcar como favorita" bajo un click. Destaco también el uso de `e.stopPropagation()` al hacer click en componentes interiores dentro de la `MovieCard` para frustrar la propagación no deseada y evitar un choque de clicks fantasma.

Punto y aparte merece nuestro formulario de compras: el componente `BoletoForm.jsx`. Construí un **formulario estrictamente controlado por React**.
Cada input dentro del formulario —ya sea texto, número o la lista desplegable del *select*— está anclado a un valor en el objeto de estado `formData` y cuenta con un evento `onChange`. Este evento ejecuta una función llamada `handleChange`, encargada de inyectar dinámicamente y carácter a carácter los `value` de los inputs en las llaves homónimas del objeto (`e.target.name`). Si el usuario escribe su correo, el estado se actualiza en tiempo real, garantizando que mi interfaz nunca se desincronice de los datos internos.

Finalmente, al pulsar "Confirmar Compra", intercedo en el botón de submit enviando un evento `onSubmit` hacia el manejador principal `handleSubmit`. Aquí, mi primera línea de defensa es llamar obligatoriamente a `e.preventDefault()`. Esto detiene en seco la recarga automática del navegador (que mataría el estado de la aplicación) y, una vez retenida, concateno los campos controlados para inyectar un mensaje de "Compra confirmada" en mi estado de resultados, dibujándolo maravillosamente en formato de una alerta en pantalla verde para el usuario.

---

## 6. Consumo de Datos Dinámicos (2:00)

Para cerrar las funcionalidades estrella de este proyecto, mi aplicación necesitaba ser capaz de consumir datos en paralelo. En la ruta de Inicio o *Home*, coloqué en la parte inferior un componente llamado `Noticias.jsx`.

Originalmente diseñado para consumir la API externa de JSONPlaceholder, migré la lógica internamente para demostrar dominio puro sobre datos simulados pero preservando el flujo natural de cualquier solicitud asíncrona mediante el uso del hook **`useEffect`**.

El `useEffect` de este componente se invoca proveyendo un arreglo de dependencias vacío al final (`[]`). ¿Por qué hago esto? Porque en React, un arreglo de dependencias vacío le indica al componente que este "efecto" o función debe correrse exacta y exclusivamente **una única vez**: justo cuando el componente atraviesa la fase de *Montaje* en el DOM.

Al montarse nuestro componente de noticias, declaro una función `fetchNoticias`. En ella, en lugar de bloquear todo el hilo de ejecución principal o hardcodear el texto directamente sobre el HTML, utilizo una función asíncrona emulada mediante `setTimeout`. Este timeout dura menos de un segundo (800ms) durante el cual nuestro componente exhibe un "estado de carga" (mostrando mi booleano de loading) para el usuario. 

Mágicamente transcurrido ese lapso, inyectamos nuestro JSON local de noticias ficticias a mi estado setter `setNoticias()` y apagamos la variable de *loading*. El Motor de React despierta, sabe que debe actualizar en pantalla, cicla mediante la función `noticias.map()` y arroja cinco hermosas tarjetas temáticas del cine con sus respectivos titulares (*Estrenos de Temporada, Películas Más Taquilleras*) devueltos desde este vector local.

---

## 7. Conclusión (0:30)

Y así concluye este recorrido profundo por CinePolis. 

Al sumergirnos en su código, pudimos evidenciar cómo combinar componentes modulares, CSS inteligente en grid y flexbox y el ciclo de vida intrínseco de React mediante el almacenamiento de estados y eventos interactivos en formularios. Todo se hilvana magistralmente para crear una experiencia persistente, intuitiva, limpia visualmente, y lista para ser un punto de partida escalable.

Muchas gracias por su atención y nos vemos pronto en el cine. ¡Feliz codificación!
