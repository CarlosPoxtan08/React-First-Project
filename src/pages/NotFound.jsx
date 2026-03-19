import { useNavigate } from "react-router-dom";
// UX Decision: Catch-all para evitar que si el usuario escribe mal una ruta se encuentre con una pantalla rota
// Redirige proactivamente con un botón de acción claro.

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "120px 24px", textAlign: "center", color: "white", minHeight: "80vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: "5rem", color: "var(--cine-red)", marginBottom: "10px" }}>404</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Página no encontrada</h2>
            <p style={{ color: "var(--cine-text-muted)", marginBottom: "30px", maxWidth: "400px" }}>
                Lo sentimos, la página que buscas no existe o ha sido movida. Revisa la URL e inténtalo de nuevo.
            </p>
            <button
                onClick={() => navigate("/")}
                style={{
                    backgroundColor: "var(--cine-yellow)",
                    color: "black",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "24px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}
            >
                Ir al Inicio
            </button>
        </div>
    );
}

export default NotFound;
