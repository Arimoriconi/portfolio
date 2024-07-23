import styles from '../../styles/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socialIcons}>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
    {/* <p>&copy; 2024 Ariana Moriconi. Todos los derechos reservados.</p> */}
    <p>Copyright &copy; 2024 Ariana Moriconi. All Rights Reserved.</p>
  </footer>
);
export default Footer;
