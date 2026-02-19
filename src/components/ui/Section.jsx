import styles from './Section.module.css';
import Container from './Container';

function Section({ children, dark = false, className = '', id }) {
    return (
        <section
            id={id}
            className={`${styles.section} ${dark ? styles.dark : styles.light} ${className}`}
        >
            <Container>{children}</Container>
        </section>
    );
}

export default Section;
