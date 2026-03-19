import { useNavigate } from 'react-router-dom';
import styles from './Cartelera.module.css';
import MovieCard from '../components/MovieCard';
import BoletoForm from '../components/BoletoForm';

const peliculas = [
    {
        title: 'Seven',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zkr01DspxQbAMOvHciLw-QQRMCix7rleDA&s',
        genre: 'Thriller',
        duration: '2h 7min',
        description: 'Dos detectives, un novato y un veterano, dan caza a un asesino en serie que utiliza los siete pecados capitales como motivo de sus crímenes.',
    },
    {
        title: 'The Whale',
        image: 'https://www.mubis.es/media/movies/7665/313637/la-ballena-the-whale-original.jpg',
        genre: 'Drama',
        duration: '1h 57min',
        description: 'Un solitario profesor de inglés con obesidad severa intenta reconectar con su hija adolescente distanciada, en una última oportunidad de redención.',
    },
    {
        title: 'Transformers',
        image: 'https://i.ebayimg.com/images/g/TpsAAOSw5VZXAxOK/s-l1200.jpg',
        genre: 'Acción',
        duration: '2h 24min',
        description: 'Una antigua lucha entre dos razas extraterrestres, los Autobots y los Decepticons, llega a la Tierra, con el destino de la humanidad en juego.',
    },
    {
        title: 'Oppenheimer',
        image: 'https://moviepostermexico.com/cdn/shop/files/oppenheimer_ver3_xxlg_1024x1024@2x.jpg?v=1690337282',
        genre: 'Biográfico',
        duration: '3h 0min',
        description: 'La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.',
    },
];

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
                            onVerDetalle={() => navigate('/detalle')}
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
                                onVerDetalle={() => navigate('/detalle')}
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