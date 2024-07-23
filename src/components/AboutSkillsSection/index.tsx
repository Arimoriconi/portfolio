import styles from '../../styles/AboutSkillsSection.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
  // { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Angular', level: 75 },
  { name: 'TypeScript', level: 85 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Responsive Design', level: 90 },
];

const AboutSkillsSection = () => (
  <section id="about" className={styles.aboutSkillsSection}>
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h2>Sobre Mí</h2>
        <p>
          Soy Ariana Moriconi, una desarrolladora frontend apasionada por crear interfaces de usuario intuitivas y atractivas. Tengo experiencia en tecnologías como React, Next.js, Angular y TypeScript.
        </p>
        <p>
          Me encanta aprender y estar al día con las últimas tendencias en desarrollo web, y siempre busco mejorar mis habilidades y colaborar en proyectos interesantes.
        </p>
      </div>
      <div className={styles.skills}>
        <h2>Habilidades</h2>
        <ul>
          {skillsData.map(skill => (
            <li key={skill.name} className={styles.skillItem}>
               <div className={styles.progressBarWrapper}>
              <CircularProgressbar 
                value={skill.level} 
                text={`${skill.level}%`} 
                styles={buildStyles({
                  textColor: '#3d155f',
                  pathColor: '#ccf381',
                  trailColor: '#f0f0f0',
                })}
              />
              </div>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSkillsSection;
