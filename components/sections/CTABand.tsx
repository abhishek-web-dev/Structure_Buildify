'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CTABand.module.css';
import { ChevronRight } from 'lucide-react';

export default function CTABand() {
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
      <div className={`${styles.cta} ${styles.animate} ${styles.fadeUp}`}>
        <h2 className={`${styles.animate} ${styles.fadeUp} ${styles.delay0}`}>
          Start Your Dream Project Today
        </h2>
        <p className={`${styles.animate} ${styles.fadeUp} ${styles.delay1}`}>
          Let our experts help you design and build your perfect space. 
          Let&apos;s discuss how Structure Buildify can turn your ideas into reality. 
          Our team is ready to provide expert guidance and a detailed plan for your success.
        </p>
        <Link href="/contact" className={`${styles.btn} ${styles.animate} ${styles.fadeUp} ${styles.delay2}`}>
          Request Free Quote Today <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}
