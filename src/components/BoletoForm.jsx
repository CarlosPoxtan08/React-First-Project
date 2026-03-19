import { useState } from 'react';
import styles from './BoletoForm.module.css';

function BoletoForm({ peliculas = [] }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        boletos: 1,
        pelicula: peliculas.length > 0 ? peliculas[0].title : ''
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje(`Compra confirmada para ${formData.nombre}, ${formData.boletos} boleto(s) para ${formData.pelicula}. Confirmación enviada a ${formData.email}.`);
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Compra de Boletos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu nombre completo"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@correo.com"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="boletos">Cantidad de boletos</label>
                    <input
                        type="number"
                        id="boletos"
                        name="boletos"
                        value={formData.boletos}
                        onChange={handleChange}
                        min="1"
                        max="10"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="pelicula">Película seleccionada</label>
                    <select
                        id="pelicula"
                        name="pelicula"
                        value={formData.pelicula}
                        onChange={handleChange}
                        required
                    >
                        {peliculas.map((p, index) => (
                            <option key={index} value={p.title}>{p.title}</option>
                        ))}
                        {peliculas.length === 0 && <option value="Otra">Otra</option>}
                    </select>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Confirmar Compra
                </button>
            </form>

            {mensaje && (
                <div className={styles.successMessage}>
                    <p>{mensaje}</p>
                </div>
            )}
        </div>
    );
}

export default BoletoForm;
