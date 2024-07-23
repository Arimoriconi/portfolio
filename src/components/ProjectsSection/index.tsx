import styles from '../../styles/ProjectsSection.module.scss';

const ProjectsSection = () => (
  <section id="projects" className={styles.section}>
    <h2>Mis Proyectos</h2>
    <div className={styles.projectsGrid}>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/300" alt="Proyecto 1" />
        <div className={styles.projectCardContent}>
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/300" alt="Proyecto 2" />
        <div className={styles.projectCardContent}>
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto 2.</p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/300" alt="Proyecto 2" />
        <div className={styles.projectCardContent}>
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
