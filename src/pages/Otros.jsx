import styles from './Otros.module.css';

const servicios = [
    {
        icon: '🏷️',
        title: 'Promociones',
        description:
            'Aprovecha nuestras increíbles ofertas y descuentos exclusivos para disfrutar del cine al mejor precio.',
        features: [
            'Martes de 2x1 en boletos',
            'Descuento con tarjeta bancaria',
            'Combos reducidos fines de semana',
            'Promociones mensuales especiales',
        ],
        btnText: 'Ver Promociones',
    },
    {
        icon: '💎',
        title: 'Membresías',
        description:
            'Sé parte del club Cinépolis y accede a beneficios exclusivos, preventas y descuentos en cada visita.',
        features: [
            'Acumulación de puntos por compra',
            'Acceso prioritario en taquilla',
            'Bebida free en tu cumpleaños',
            'Invitaciones a preventas especiales',
        ],
        btnText: 'Obtener Membresía',
    },
    {
        icon: '🎟️',
        title: 'Preventas',
        description:
            'Asegura tu lugar en los estrenos más esperados del año antes de que se agoten las entradas.',
        features: [
            'Estrenos Marvel, DC y más',
            'Funciones de medianoche',
            'Asientos preferenciales disponibles',
            'Sin cargos extra por preventa',
        ],
        btnText: 'Ver Preventas',
    },
    {
        icon: '🎬',
        title: 'Formatos Especiales',
        description:
            'Vive el cine en la máxima expresión con nuestras salas de formatos premium para una experiencia única.',
        features: [
            'IMAX: imagen y sonido sin igual',
            '4DX: movimiento, agua y viento',
            'MX4D: sillas interactivas 4D',
            'Macro XE: pantalla gigante premium',
        ],
        btnText: 'Explorar Salas',
    },
];

function Otros() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>Servicios</h1>
                <p className={styles.heroSubtitle}>
                    Descubre todo lo que Cinépolis tiene para ofrecerte más allá de la pantalla
                </p>
            </div>

            {/* Service cards */}
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>Lo que ofrecemos</h2>
                <div className={styles.titleDivider} />

                <div className={styles.grid}>
                    {servicios.map((servicio) => (
                        <div key={servicio.title} className={styles.serviceCard}>
                            <span className={styles.serviceIcon}>{servicio.icon}</span>
                            <h3 className={styles.serviceTitle}>{servicio.title}</h3>
                            <p className={styles.serviceDescription}>{servicio.description}</p>

                            <ul className={styles.serviceFeatures}>
                                {servicio.features.map((feature) => (
                                    <li key={feature} className={styles.serviceFeature}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={styles.serviceBtn}>{servicio.btnText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Otros;
