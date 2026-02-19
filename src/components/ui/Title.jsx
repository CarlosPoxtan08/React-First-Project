import styles from './Title.module.css';

function Title({ text, subtitle, align = 'left' }) {
    return (
        <div className={styles.wrapper} data-align={align}>
            <h2 className={styles.title}>{text}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <span className={styles.underline} />
        </div>
    );
}

export default Title;
