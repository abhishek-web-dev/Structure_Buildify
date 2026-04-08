'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './ServiceOverview.module.css';
import { Home, Layout, Smile, Sun, Briefcase, Users, ArrowRight, Hammer } from 'lucide-react';

const services = [
  {
    icon: <Home size={28} />,
    title: 'Architecture Design',
    desc: 'We design innovative and practical architectural plans that blend creativity with functionality.',
    link: '/services/architecture-design'
  },
  {
    icon: <Hammer size={28} />,
    title: 'Construction & Structural Development',
    desc: 'Our experienced engineers and builders ensure strong, durable and high-quality construction for residential and commercial projects.',
    link: '/services/structural-construction'
  },
  {
    icon: <Smile size={28} />,
    title: 'Interior Design',
    desc: 'We create stylish and comfortable interiors tailored to your lifestyle and preferences.',
    link: '/services/interior-design'
  },
  {
    icon: <Sun size={28} />,
    title: 'Solar Energy Solutions',
    desc: 'Reduce electricity costs and contribute to a greener future with our efficient solar installation services.',
    link: '/services/solar-management'
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Property Management',
    desc: 'We help property owners manage, maintain, and enhance the value of their real estate investments.',
    link: '/services/property-management'
  },
  {
    icon: <Users size={28} />,
    title: 'Seva Mitra Services',
    desc: 'In partnership with Sewa Mitra, we offer 275+ additional home and business services.',
    link: '/contact'
  },
];

export default function ServiceOverview() {
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
      <div className={styles.header}>
        <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>What We Do</div>
        <h2 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>Our Core Services</h2>
        <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>A complete suite of services to bring your real estate projects to life.</p>
      </div>
      <div className={styles.grid}>
        {services.map((service, i) => (
          <Link 
            key={i} 
            href={service.link} 
            className={`${styles.card} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className={styles.learnMore}>
              Learn More <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
