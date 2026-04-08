'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';

const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Customer Satisfaction', value: 98, suffix: '%' },
  { label: 'Safety Record', value: 100, suffix: '%' },
];

function Counter({ target, suffix, duration = 2000 }: { target: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div ref={elementRef} className={styles.statBox}>
      <div className={styles.value}>
        {count}{suffix}
      </div>
    </div>
  );
}

export default function StatsSection() {
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
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={`${styles.statItem} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
