'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Projects.module.css';
import { 
  Home, 
  Building2, 
  Paintbrush, 
  RefreshCw, 
  Sun, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const projectTypes = [
  { icon: <Home size={20} />, label: 'Residential homes' },
  { icon: <Building2 size={20} />, label: 'Commercial buildings' },
  { icon: <Paintbrush size={20} />, label: 'Interior design projects' },
  { icon: <RefreshCw size={20} />, label: 'Renovation projects' },
  { icon: <Sun size={20} />, label: 'Solar installation' },
];

const projects = [
  {
    id: 'luxury-villa-jhansi',
    category: 'Residential',
    title: 'Modern Luxury Villa',
    location: 'Civil Lines, Jhansi',
    image: '/Home_Banner.png',
    desc: 'A premium residential project featuring contemporary architecture and sustainable design with smart home integration.',
    stats: { area: '4500 sqft', status: 'Completed' }
  },
  {
    id: 'tech-business-park',
    category: 'Commercial',
    title: 'Modern Business Hub',
    location: 'Elite Chauraha, Jhansi',
    image: '/About_Banner.jpg',
    desc: 'State-of-the-art office spaces designed for maximum productivity and architectural elegance.',
    stats: { area: '12000 sqft', status: 'Ongoing' }
  },
  {
    id: 'green-energy-complex',
    category: 'Solar',
    title: 'Eco-Friendly Solar Plant',
    location: 'Gwalior Road',
    image: '/Service_Banner.png',
    desc: 'Full-scale solar installation providing sustainable energy solutions for an industrial complex.',
    stats: { capacity: '500kW', status: 'Completed' }
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
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
    <div className={styles.projectsPage} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>Our Portfolio</div>
          <h1 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>
            Our Recent <span className={styles.highlight}>Projects.</span>
          </h1>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>
            We have successfully completed various residential and commercial projects that showcase our expertise in design and construction.
            Each project reflects our commitment to quality, innovation, and customer satisfaction.
          </p>
          
          <div className={`${styles.typeGrid} ${styles.animate} ${styles.fadeUp}`}>
            {projectTypes.map((type, i) => (
              <div key={i} className={styles.typeTag}>
                <span className={styles.typeIcon}>{type.icon}</span>
                {type.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.animate} ${styles.fadeUp}`}>Featured Works</h2>
          <div className={`${styles.line} ${styles.animate} ${styles.fadeRight}`}></div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={project.id} className={`${styles.card} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.categoryBadge}>{project.category}</div>
                <div className={styles.overlay}>
                  <Link href={`/projects/${project.id}`} className={styles.overlayBtn}>
                    <ExternalLink size={24} />
                  </Link>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.location}>
                  <CheckCircle2 size={14} color="#C49A3C" /> {project.location}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.projectStats}>
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key} className={styles.statItem}>
                        <span className={styles.statLabel}>{key}:</span>
                        <span className={styles.statVal}>{val}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`} className={styles.readMore}>
                    Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats/Call to Action */}
      <section className={`${styles.ctaSection} ${styles.animate} ${styles.fadeUp}`}>
        <div className={styles.ctaCard}>
          <h2>Have a Vision in Mind?</h2>
          <p>Let's collaborate to build something extraordinary together.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Project <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
