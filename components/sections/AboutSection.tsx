'use client';

import { useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const animatedElements = containerRef.current.querySelectorAll(`.${styles.animate}`);
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.imageSide} ${styles.animate} ${styles.fadeRight}`}>
            <div className={styles.imageWrapper}>
              <img src="/Home_2.jpg" alt="About Structure Buildify" className={styles.image} />
              <div className={styles.experienceBadge}>
                <span className={styles.years}>5+</span>
                <span className={styles.expText}>Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.contentSide} ${styles.animate} ${styles.fadeLeft}`}>
            <div className={styles.label}>About Our Company</div>
            <h2 className={styles.title}>Crafting Excellence in <br/><span className={styles.highlight}>Every Structure.</span></h2>
            
            <p className={styles.description}>
              Structure Buildify is a trusted construction and design company dedicated to creating 
              high-quality residential and commercial spaces. Our team combines technical expertise, 
              creative design, and modern technology to deliver projects that meet the highest 
              standards of safety, efficiency and aesthetics.
            </p>
            
            <p className={styles.description}>
              Whether you are planning to build a new home, renovate an existing property, 
              design interiors or install solar energy solutions, we provide complete support 
              from concept to completion.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Expert Architectural Planning</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Quality Construction & Materials</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Sustainable Energy Solutions</span>
              </div>
            </div>

            <Link href="/about" className={styles.link}>
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
