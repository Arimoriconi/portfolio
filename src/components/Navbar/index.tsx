import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>Ariana Moriconi</div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link href="#hero" onClick={toggleMenu}>Inicio</Link>
        <Link href="#about" onClick={toggleMenu}>Sobre Mí</Link>
        <Link href="#projects" onClick={toggleMenu}>Proyectos</Link>
        <Link href="#contact" onClick={toggleMenu}>Contacto</Link>
      </div>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
