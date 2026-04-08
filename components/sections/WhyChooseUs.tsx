'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyChooseUs.module.css';
import { CheckCircle2, ShieldCheck, Zap, Clock, Diamond, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Users size={32} />,
    title: 'Experienced Engineers & Designers',
    desc: 'Our professional team brings decades of combined expertise to every project.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'End-to-End Project Management',
    desc: 'We handle everything from initial concepts to final handover, ensuring a stress-free experience.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Modern Technology & Sustainable Solutions',
    desc: 'We use the latest tools and eco-friendly practices to build for the future.'
  },
  {
    icon: <Diamond size={32} />,
    title: 'Transparent Pricing',
    desc: 'No hidden costs. We provide clear, detailed estimates you can trust.'
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: 'High Quality Materials',
    desc: 'We never compromise on quality, sourcing only the best materials for durability.'
  },
  {
    icon: <Clock size={32} />,
    title: 'On-Time Project Delivery',
    desc: 'We respect your time and strictly adhere to project timelines and milestones.'
  }
];

export default function WhyChooseUs() {
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
        <div className={styles.header}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>Value Proposal</div>
          <h2 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>Why Choose Us?</h2>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>
            We are committed to delivering excellence through transparency, quality, and innovation.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`${styles.card} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}
            >
              <div className={styles.iconWrapper}>{reason.icon}</div>
              <div className={styles.content}>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
