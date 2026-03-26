import { useNavigate } from 'react-router-dom';
import styles from './Cartelera.module.css';
import MovieCard from '../components/MovieCard';
import BoletoForm from '../components/BoletoForm';
import { peliculas } from '../data/peliculas';

function Cartelera({ favoritos = [], toggleFavorito }) {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>Cartelera</h1>
                <p className={styles.heroSubtitle}>
                    Descubre las mejores películas en cartelera esta semana
                </p>
            </div>

            {/* Movie grid */}
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>En Cartelera</h2>
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

                {/* Sección de Mis Películas Favoritas */}
                <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Mis Películas Favoritas</h2>
                <div className={styles.titleDivider} />

                {favoritos.length === 0 ? (
                    <div className={styles.emptyFavorites}>
                        <p>No has agregado películas favoritas todavía</p>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {favoritos.map((pelicula) => (
                            <MovieCard
                                key={pelicula.title}
                                title={pelicula.title}
                                image={pelicula.image}
                                genre={pelicula.genre}
                                duration={pelicula.duration}
                                description={pelicula.description}
                                isFavorite={true}
                                onToggleFavorite={() => toggleFavorito && toggleFavorito(pelicula)}
                                onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
                            />
                        ))}
                    </div>
                )}

                {/* Sección del Formulario para Boletos */}
                <BoletoForm peliculas={peliculas} />
            </div>
        </div>
    );
}

export default Cartelera;