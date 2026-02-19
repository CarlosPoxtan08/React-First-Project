import styles from './CineButton.module.css';

function CineButton({ text, onClick, variant = 'primary', size = 'md', fullWidth = false, type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={[
                styles.btn,
                styles[variant],
                styles[size],
                fullWidth ? styles.fullWidth : '',
            ].join(' ')}
        >
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default CineButton;
