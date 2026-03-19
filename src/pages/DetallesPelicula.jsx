import { useParams, useNavigate } from "react-router-dom";
// UX Decision: Se utiliza useNavigate() para permitir al usuario retroceder a la cartelera fácilmente
// sin depender únicamente de los botones del navegador, mejorando la navegación interna.

// Mock data (en un escenario real vendría de un endpoint o un contexto temporal)
const peliculasMock = [
    {
        id: "seven",
        title: 'Seven',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zkr01DspxQbAMOvHciLw-QQRMCix7rleDA&s',
        genre: 'Thriller',
        duration: '2h 7min',
        description: 'Dos detectives, un novato y un veterano, dan caza a un asesino en serie que utiliza los siete pecados capitales como motivo de sus crímenes.',
    },
    {
        id: "the-whale",
        title: 'The Whale',
        image: 'https://www.mubis.es/media/movies/7665/313637/la-ballena-the-whale-original.jpg',
        genre: 'Drama',
        duration: '1h 57min',
        description: 'Un solitario profesor de inglés con obesidad severa intenta reconectar con su hija adolescente distanciada, en una última oportunidad de redención.',
    },
    {
        id: "transformers",
        title: 'Transformers',
        image: 'https://i.ebayimg.com/images/g/TpsAAOSw5VZXAxOK/s-l1200.jpg',
        genre: 'Acción',
        duration: '2h 24min',
        description: 'Una antigua lucha entre dos razas extraterrestres, los Autobots y los Decepticons, llega a la Tierra, con el destino de la humanidad en juego.',
    },
    {
        id: "oppenheimer",
        title: 'Oppenheimer',
        image: 'https://moviepostermexico.com/cdn/shop/files/oppenheimer_ver3_xxlg_1024x1024@2x.jpg?v=1690337282',
        genre: 'Biográfico',
        duration: '3h 0min',
        description: 'La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.',
    },
];

function DetallesPelicula() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Buscar la película en los datos de mock por medio del id
    // Si estuviésemos en un caso más avanzado, se haría un fetch(api/pelicula/${id})
    const pelicula = peliculasMock.find(p => p.id === id);

    if (!pelicula) {
        return (
            <main style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: 'white' }}>
                <h2>Película no encontrada</h2>
                <p>No logramos encontrar la película que estás buscando.</p>
                <button 
                    onClick={() => navigate('/cartelera')}
                    style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'var(--cine-yellow)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Volver a Cartelera
                </button>
            </main>
        );
    }

    return (
        <main
            style={{
                padding: "100px 24px 24px", // 100px padding to account for fixed navbar
                maxWidth: "800px",
                margin: "0 auto",
                color: "white"
            }}
        >
            <button 
                onClick={() => navigate(-1)} // Retroceder a la página anterior (Cartelera)
                style={{ marginBottom: "20px", display: "inline-block", background: "transparent", color: "var(--cine-yellow)", border: "1px solid var(--cine-yellow)", padding: "8px 16px", borderRadius: "20px", cursor: "pointer" }}
            >
                ← Volver
            </button>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--cine-yellow)' }}>{pelicula.title}</h2>
            <div style={{ display: 'flex', gap: '15px', color: 'gray', marginBottom: '20px', fontSize: '0.9rem' }}>
                <span>{pelicula.genre}</span> • <span>{pelicula.duration}</span>
            </div>

            <img
                src={pelicula.image}
                alt={pelicula.title}
                style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "12px",
                    marginBottom: "24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
            />

            <div style={{ backgroundColor: 'var(--cine-black-light)', padding: '20px', borderRadius: '8px', border: '1px solid var(--cine-border)' }}>
                <h3 style={{ marginBottom: '10px', color: '#fff' }}>Sinopsis</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--cine-text-muted)' }}>{pelicula.description}</p>
            </div>
        </main>
    );
}

export default DetallesPelicula;
