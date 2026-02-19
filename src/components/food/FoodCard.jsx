import styles from './FoodCard.module.css';

function FoodCard({ name, description, price, image, emoji }) {
    return (
        <div className={styles.card}>
            {/* Image */}
            <div className={styles.imageWrapper}>
                {image ? (
                    <>
                        <img src={image} alt={name} className={styles.image} />
                        <div className={styles.imageOverlay} />
                    </>
                ) : (
                    <div
                        className={styles.emojiPlaceholder}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            fontSize: '4rem',
                            background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
                        }}
                    >
                        {emoji || '🍿'}
                    </div>
                )}
            </div>

            {/* Body */}
            <div className={styles.body}>
                <h4 className={styles.name}>{name}</h4>
                {description && <p className={styles.description}>{description}</p>}

                <div className={styles.footer}>
                    <span className={styles.price}>{price}</span>
                    <button className={styles.btn}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
