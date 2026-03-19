import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎬</span>
                    <h1 className={styles.logoText}>
                        Cine<span className={styles.logoDot}>polis</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Inicio</Link>
                    <Link to="/cartelera" className={styles.navLink}>Cartelera</Link>
                    <Link to="/alimentos" className={styles.navLink}>Alimentos</Link>
                    <Link to="/otros" className={styles.navLink}>Otros</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;