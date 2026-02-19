import styles from './Card.module.css';

function Card({ children, className = '', hover = true }) {
    return (
        <div className={`${styles.card} ${hover ? styles.hoverable : ''} ${className}`}>
            {children}
        </div>
    );
}

export default Card;
