'use client';

import { useEffect, useRef } from 'react';
import styles from './Services.module.css';
import { Home, Layout, Heart, Sun, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
}

const services: Service[] = [
  {
    id: 'architecture-design',
    icon: <Home size={32} />,
    title: 'Architecture Design',
    shortDesc: 'Crafting visionary spaces with precision and creativity, from initial concept to final blueprint.',
  },
  {
    id: 'structural-construction',
    icon: <Layout size={32} />,
    title: 'Structural Construction',
    shortDesc: 'Building robust, high-quality structures with an unwavering commitment to safety and durability.',
  },
  {
    id: 'interior-design',
    icon: <Heart size={32} />,
    title: 'Interior Design',
    shortDesc: 'Transforming interiors into personalized, elegant, and functional environments that reflect your style.',
  },
  {
    id: 'solar-management',
    icon: <Sun size={32} />,
    title: 'Solar Management',
    shortDesc: 'Implementing sustainable energy solutions for a greener, more efficient, and cost-effective future.',
  },
  {
    id: 'property-management',
    icon: <Building2 size={32} />,
    title: 'Property Management',
    shortDesc: 'Comprehensive property oversight to maintain value, manage tenants, and ensure peace of mind.',
  },
];

export default function Services() {
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
    <div className={styles.servicesPage} ref={containerRef}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>Our Expertise</div>
          <h1 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>
            Comprehensive Solutions <br/>for <span className={styles.highlight}>Modern Projects.</span>
          </h1>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>
            We provide a full spectrum of real estate and construction services, ensuring quality and excellence at every stage.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={service.id} className={`${styles.card} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{service.icon}</div>
                <span className={styles.cardNumber}>0{i + 1}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <Link href={`/services/${service.id}`} className={styles.readMore}>
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
