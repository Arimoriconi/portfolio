import styles from '../../styles/HeroSection.module.scss';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.textSection}>
        <span>
          HI THERE <span className={styles.wavingHand}>👋</span> I'M
        </span>
        <h1>Ariana Moriconi</h1>
        <p>FRONTEND DEVELOPER</p>
        <button className={styles.ctaButton}>Contact me</button>
      </div>
      <div className={styles.imageSection}>
        <Image 
          src="/image/ari-memoji.PNG" 
          alt="Ariana Moriconi"
          width={200}
          height={200}
          className={styles.heroImage}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
