import styles from './Header.module.css';

function Header({ cambiarVista }) {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo */}
                <div className={styles.logo} onClick={() => cambiarVista('home')}>
                    <span className={styles.logoIcon}>🎬</span>
                    <h1 className={styles.logoText}>
                        Cine<span className={styles.logoDot}>polis</span>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <span className={styles.navLink} onClick={() => cambiarVista('home')}>
                        Inicio
                    </span>
                    <span className={styles.navLink} onClick={() => cambiarVista('cartelera')}>
                        Cartelera
                    </span>
                    <span className={styles.navLink} onClick={() => cambiarVista('alimentos')}>
                        Alimentos
                    </span>
                    <span className={styles.navLink} onClick={() => cambiarVista('otros')}>
                        Otros
                    </span>
                </nav>
            </div>
        </header>
    );
}

export default Header;
