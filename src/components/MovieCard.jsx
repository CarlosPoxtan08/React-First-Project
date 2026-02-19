import styles from './MovieCard.module.css';

function MovieCard({ title, image, onVerDetalle, genre, duration }) {
    return (
        <div className={styles.card} onClick={onVerDetalle}>
            {/* Poster image with overlay */}
            <div className={styles.imageWrapper}>
                <img
                    src={image}
                    alt={title}
                    className={styles.image}
                />
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