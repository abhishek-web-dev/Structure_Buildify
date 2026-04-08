'use client';

import { useEffect, useRef } from 'react';
import styles from './Introduction.module.css';

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = containerRef.current.querySelectorAll(`.${styles.animate}`);
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      {/* Decorative background elements */}
      <div className={styles.bgDecor}>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.badge} ${styles.animate} ${styles.fadeDown}`}>Our Philosophy</div>
          
          <h2 className={`${styles.subheading} ${styles.animate} ${styles.fadeUp} ${styles.delay0}`}>
            We design, build and transform spaces with <span className={styles.accent}>innovation</span>, quality craftsmanship and sustainable solutions. 
          </h2>
          
          <div className={`${styles.divider} ${styles.animate} ${styles.scaleRight} ${styles.delay1}`}></div>
          
          <p className={`${styles.description} ${styles.animate} ${styles.fadeUp} ${styles.delay2}`}>
            Structure Buildify is a leading real estate service provider, delivering excellence in architecture, 
            construction, and management with unwavering commitment.
          </p>
          
          <p className={`${styles.mission} ${styles.animate} ${styles.fadeUp} ${styles.delay3}`}>
            From architectural planning to interior design and solar energy solutions, Structure Buildify provides 
            end-to-end construction and property services. Our mission is to turn your ideas into strong, 
            beautiful and functional structures that last for generations.
          </p>
        </div>
      </div>
    </section>
  );
}
