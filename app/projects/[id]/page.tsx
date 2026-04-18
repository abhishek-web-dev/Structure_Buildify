'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './ProjectDetail.module.css';
import CTABand from '@/components/sections/CTABand';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Maximize2, 
  CheckCircle2,
  Construction,
  Building2,
  Sun
} from 'lucide-react';

const projectData: Record<string, any> = {
  'luxury-villa-jhansi': {
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Civil Lines, Jhansi',
    image: '/Home_Banner.png',
    desc: 'A premium residential project featuring contemporary architecture and sustainable design with smart home integration.',
    fullDesc: 'The Modern Luxury Villa in Civil Lines, Jhansi, stands as a testament to sophisticated living. This project combines cutting-edge architectural design with functional elegance. Every aspect of the villa, from its spatial layout to the choice of materials, was meticulously planned to provide a luxurious yet comfortable environment. The design integrates sustainable features and smart home technologies, ensuring it is as efficient as it is beautiful.',
    stats: { 
      'Client': 'Private Resident',
      'Area': '4500 sqft', 
      'Status': 'Completed',
      'Duration': '14 Months',
      'Location': 'Civil Lines, Jhansi'
    },
    highlights: [
      'Smart home automation system',
      'Energy-efficient lighting and HVAC',
      'Premium Italian marble flooring',
      'Custom-designed landscape garden',
      'Contemporary modular kitchen'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'tech-business-park': {
    title: 'Modern Business Hub',
    category: 'Commercial',
    location: 'Elite Chauraha, Jhansi',
    image: '/About_Banner.jpg',
    desc: 'State-of-the-art office spaces designed for maximum productivity and architectural elegance.',
    fullDesc: 'Located at the bustling Elite Chauraha in Jhansi, the Modern Business Hub is designed to meet the needs of the contemporary workforce. The architecture focuses on open spaces, natural light, and structural durability. This commercial complex offers flexible office layouts that can be customized to suit various business requirements, all while maintaining a sleek, professional aesthetic that stands out in the urban landscape.',
    stats: { 
      'Client': 'Buildify Corp',
      'Area': '12000 sqft', 
      'Status': 'Ongoing',
      'Duration': 'Projected 24 Months',
      'Location': 'Elite Chauraha, Jhansi'
    },
    highlights: [
      'High-speed elevator systems',
      'Centralized climate control',
      '24/7 advanced security monitoring',
      'Flexible open-plan floor plates',
      'Ample underground parking'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'green-energy-complex': {
    title: 'Eco-Friendly Solar Plant',
    category: 'Solar',
    location: 'Gwalior Road',
    image: '/Service_Banner.png',
    desc: 'Full-scale solar installation providing sustainable energy solutions for an industrial complex.',
    fullDesc: 'The Eco-Friendly Solar Plant on Gwalior Road represents our commitment to renewable energy. This full-scale industrial installation was engineered to provide maximum energy yield with minimal environmental impact. Utilizing the latest photovoltaic technology, the plant significantly reduces the carbon footprint of the surrounding industrial complex while providing a reliable and cost-effective power source.',
    stats: { 
      'Client': 'GreenTech Industries',
      'Capacity': '500kW', 
      'Status': 'Completed',
      'Panels': '1200+ Units',
      'Location': 'Gwalior Road'
    },
    highlights: [
      'High-efficiency monocrystalline panels',
      'Automated sun-tracking system',
      'Real-time energy monitoring dashboard',
      'Integrated battery storage solution',
      'Low-maintenance structural support'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projectData[id];

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible);
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.animate}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!project) {
    return (
      <div className={styles.detailPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
             <Link href="/projects" className={styles.backLink}>
              <ArrowLeft size={20} /> Back to Projects
            </Link>
            <h1 className={styles.title}>Project Not Found</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${project.image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <div className={`${styles.animate} ${styles.fadeUp}`}>
            <div className={styles.tag}>{project.category}</div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}><MapPin size={18} style={{display: 'inline', verticalAlign: 'middle', marginRight: '8px'}} /> {project.location}</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={`${styles.mainContent} ${styles.animate} ${styles.fadeRight}`}>
              <div className={styles.tag}>Project Overview</div>
              <h2>About this Project</h2>
              <p>{project.fullDesc}</p>
              
              <div className={styles.highlights}>
                <h3>Key Highlights</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                  {project.highlights.map((highlight: string, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={20} color="var(--gold)" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${styles.projectSidebar} ${styles.animate} ${styles.fadeLeft}`}>
              <div className={styles.projectInfo}>
                <h3 className={styles.infoTitle}>Project Information</h3>
                <div className={styles.infoGrid}>
                  {Object.entries(project.stats).map(([label, value]) => (
                    <div key={label} className={styles.infoItem}>
                      <span className={styles.infoLabel}>{label}</span>
                      <span className={styles.infoValue}>{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={`${styles.tag} ${styles.animate} ${styles.fadeUp}`}>Visuals</div>
          <h2 className={`${styles.animate} ${styles.fadeUp}`} style={{fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '40px'}}>Project Gallery</h2>
          <div className={styles.galleryGrid}>
            {project.gallery.map((img: string, index: number) => (
              <div key={index} className={`${styles.galleryImgWrapper} ${styles.animate} ${styles.fadeUp} ${styles[`delay${index}`]}`}>
                <Image src={img} alt={`${project.title} view ${index + 1}`} fill className={styles.galleryImg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
