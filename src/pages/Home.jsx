import styles from './Cartelera.module.css';
import MovieCard from '../components/MovieCard';

const peliculas = [
    {
        title: 'Seven',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zkr01DspxQbAMOvHciLw-QQRMCix7rleDA&s',
        genre: 'Thriller',
        duration: '2h 7min',
    },
    {
        title: 'The Whale',
        image: 'https://www.mubis.es/media/movies/7665/313637/la-ballena-the-whale-original.jpg',
        genre: 'Drama',
        duration: '1h 57min',
    },
    {
        title: 'Transformers',
        image: 'https://i.ebayimg.com/images/g/TpsAAOSw5VZXAxOK/s-l1200.jpg',
        genre: 'Acción',
        duration: '2h 24min',
    },
    {
        title: 'Oppenheimer',
        image: 'https://moviepostermexico.com/cdn/shop/files/oppenheimer_ver3_xxlg_1024x1024@2x.jpg?v=1690337282',
        genre: 'Biográfico',
        duration: '3h 0min',
    },
];

function Home({ cambiarVista }) {
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
                            onVerDetalle={() => cambiarVista('detalle')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;