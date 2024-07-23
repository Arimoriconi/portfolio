"use client"

import React, { useState } from 'react';
import AboutSkillsSection from '@/components/AboutSkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';


const Home = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Portafolio de Ariana</title>
            <meta name="description" content="Portafolio personal de Ariana Moriconi" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main>
            <HeroSection />
            <AboutSkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
    
          <Footer />
        </div>
      );
};

export default Home;
