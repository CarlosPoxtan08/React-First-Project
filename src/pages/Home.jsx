import { useNavigate } from 'react-router-dom';
import styles from './Cartelera.module.css';
import MovieCard from '../components/MovieCard';
import Noticias from '../components/Noticias';
import { peliculas } from '../data/peliculas';

function Home({ favoritos = [], toggleFavorito }) {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>Bienvenido</h1>
                <p className={styles.heroSubtitle}>
                    El mejor cine de México con la experiencia más inmersiva del país
                </p>
            </div>

            {/* Movie grid */}
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Destacadas</h2>
                <div className={styles.titleDivider} />

                <div className={styles.grid}>
                    {peliculas.map((pelicula) => (
                        <MovieCard
                            key={pelicula.title}
                            title={pelicula.title}
                            image={pelicula.image}
                            genre={pelicula.genre}
                            duration={pelicula.duration}
                            description={pelicula.description}
                            isFavorite={favoritos.some(f => f.title === pelicula.title)}
                            onToggleFavorite={() => toggleFavorito && toggleFavorito(pelicula)}
                            onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
                        />
                    ))}
                </div>

                <Noticias />
            </div>
        </div>
    );
}

export default Home;