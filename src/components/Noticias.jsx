import { useState, useEffect } from 'react';
import styles from './Noticias.module.css';

const noticiasLocales = [
    {
        id: 1,
        title: "Estrenos de temporada",
        body: "Prepárate para la temporada de blockbusters con los estrenos más esperados. ¡Acción, aventura y mucha emoción en cartelera pronto!"
    },
    {
        id: 2,
        title: "Nuevas salas y tecnologías 4D",
        body: "Hemos inaugurado tres nuevas salas con tecnología de proyección láser de última generación y asientos inmersivos para la mejor experiencia."
    },
    {
        id: 3,
        title: "Películas más taquilleras",
        body: "La esperada secuela de ciencia ficción ha superado la marca de mil millones de dólares a nivel mundial en su primera semana de exhibición."
    },
    {
        id: 4,
        title: "Próximas premiaciones y festivales",
        body: "Acompáñanos este fin de semana en nuestras funciones especiales de las películas nominadas y mira la alfombra roja en pantalla grande."
    },
    {
        id: 5,
        title: "Promociones especiales del cine",
        body: "Todos los martes de este mes disfruta de nuestras películas clásicas y de cine independiente al 2x1 en tu complejo favorito."
    }
];

function Noticias() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulando la carga de datos con useEffect para mantener el requisito
        const fetchNoticias = () => {
            try {
                setTimeout(() => {
                    setNoticias(noticiasLocales);
                    setLoading(false);
                }, 800);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNoticias();
    }, []);

    if (loading) return <div className={styles.loading}>Cargando noticias...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <div className={styles.noticiasContainer}>
            <h2 className={styles.sectionTitle}>Noticias del Cine</h2>
            <div className={styles.titleDivider} />
            <div className={styles.grid}>
                {noticias.map((noticia) => (
                    <div key={noticia.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{noticia.title}</h3>
                        <p className={styles.cardBody}>{noticia.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Noticias;
