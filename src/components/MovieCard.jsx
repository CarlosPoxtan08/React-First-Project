import { useState } from 'react';
import styles from './MovieCard.module.css';

function MovieCard({ title, image, onVerDetalle, genre, duration, description, isFavorite = false, onToggleFavorite }) {
    const [showDescription, setShowDescription] = useState(false);

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        if (onToggleFavorite) onToggleFavorite();
    };

    const toggleDescription = (e) => {
        e.stopPropagation();
        setShowDescription(!showDescription);
    };

    return (
        <div className={styles.card} onClick={onVerDetalle}>
            {/* Poster image with overlay */}
            <div className={styles.imageWrapper}>
                <img
                    src={image}
                    alt={title}
                    className={styles.image}
                />

                <button
                    className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
                    onClick={handleToggleFavorite}
                    title="Marcar como favorita"
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>

                <div className={styles.imageOverlay} />

                {/* Genre & Duration badges */}
                {(genre || duration) && (
                    <div className={styles.badges}>
                        {genre && (
                            <span className={`${styles.badge} ${styles.badgeGenre}`}>
                                {genre}
                            </span>
                        )}
                        {duration && (
                            <span className={`${styles.badge} ${styles.badgeDuration}`}>
                                ⏱ {duration}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Content area */}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>

                {description && (
                    <div className={styles.descriptionContainer}>
                        <button
                            className={styles.toggleDescBtn}
                            onClick={toggleDescription}
                        >
                            {showDescription ? 'Ver menos' : 'Ver más'}
                        </button>
                        {showDescription && (
                            <p className={styles.descriptionText}>{description}</p>
                        )}
                    </div>
                )}

                <div className={styles.btnWrapper}>
                    <button
                        className={styles.btn}
                        onClick={(e) => { e.stopPropagation(); onVerDetalle && onVerDetalle(); }}
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;