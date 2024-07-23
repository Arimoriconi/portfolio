import styles from '../../styles/ContactSection.module.scss';

const ContactSection = () => (
  <section id="contact" className={styles.section}>
    <h2>Contacto</h2>
    <div className={styles.contact}>
      <form action="submit_form.php" method="POST">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo Electrónico" required />
        <textarea name="message" placeholder="Tu Mensaje"  required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
