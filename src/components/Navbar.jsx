import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    // UX Decision: Used NavLink to provide visual feedback of the active section, 
    // improving navigation clarity so the user always knows where they are.
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
    };

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo */}
                <NavLink to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎬</span>
                    <h1 className={styles.logoText}>
                        Cine<span className={styles.logoDot}>polis</span>
                    </h1>
                </NavLink>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <NavLink to="/" className={getNavLinkClass} end>Inicio</NavLink>
                    <NavLink to="/cartelera" className={getNavLinkClass}>Cartelera</NavLink>
                    <NavLink to="/alimentos" className={getNavLinkClass}>Alimentos</NavLink>
                    <NavLink to="/promociones" className={getNavLinkClass}>Promociones</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
