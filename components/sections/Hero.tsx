'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Hold logo for 2 seconds before opening doors
    const timer = setTimeout(() => {
      setIsOpening(true);
    }, 2000);

    // Fully remove doors after animation finishes (2s hold + 2s animation)
    const doneTimer = setTimeout(() => {
      setIsDone(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (isDone) {
    return (
      <section className={styles.hero}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Build Your Dream Space with <br />
            <span className={styles.highlight}>Structure Buildify.</span>
          </h1>
          <div className={styles.btns}>
            <Link href="/contact" className={styles.btnPrimary}>
              Get Free Consultation <ArrowRight size={20} />
            </Link>
            <Link href="/services" className={styles.btnSecondary}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      {/* Door Animation Overlay */}
      <div className={styles.doorContainer}>
        <div className={`${styles.door} ${styles.leftDoor} ${isOpening ? styles.openLeft : ''}`}>
           <div className={styles.doorHandle}></div>
        </div>
        
        <div className={`${styles.doorLogo} ${isOpening ? styles.logoFade : ''}`}>
          <div className={styles.logoCircle}>
            <img src="/logo.png" alt="Structure Buildify Logo" className={styles.logoImage} />
          </div>
          <span className={styles.logoText}>Structure <span>Buildify</span></span>
        </div>

        <div className={`${styles.door} ${styles.rightDoor} ${isOpening ? styles.openRight : ''}`}>
           <div className={styles.doorHandle}></div>
        </div>
      </div>

      <div className={styles.bg}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Build Your Dream Space with <br />
          <span className={styles.highlight}>Structure Buildify.</span>
        </h1>
        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>
            Get Free Consultation <ArrowRight size={20} />
          </Link>
          <Link href="/services" className={styles.btnSecondary}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
