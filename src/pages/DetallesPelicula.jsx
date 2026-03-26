import { useParams, useNavigate } from "react-router-dom";
// UX Decision: Se utiliza useNavigate() para permitir al usuario retroceder a la cartelera fácilmente
// sin depender únicamente de los botones del navegador, mejorando la navegación interna.

import { peliculas } from '../data/peliculas';

function DetallesPelicula() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Buscar la película en los datos de mock por medio del id
    // Si estuviésemos en un caso más avanzado, se haría un fetch(api/pelicula/${id})
    const pelicula = peliculas.find(p => p.id === id);

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
