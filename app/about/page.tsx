'use client';

import { useEffect } from 'react';
import styles from './About.module.css';
import CTABand from '@/components/sections/CTABand';
import { Target, Rocket, Award, Shield, Star, Heart, Lightbulb, Leaf } from 'lucide-react';
import Image from 'next/image';

const coreValues = [
  {
    icon: <Shield size={28} />,
    title: 'Integrity',
    desc: 'We build lasting relationships based on transparency, trust, and ethical conduct.',
    img: '/Home_Banner.png'
  },
  {
    icon: <Star size={28} />,
    title: 'Quality',
    desc: 'We are committed to the highest standards of craftsmanship and materials in every project we undertake.',
    img: '/About_Banner.jpg'
  },
  {
    icon: <Heart size={28} />,
    title: 'Customer Satisfaction',
    desc: 'Our clients are at the heart of everything we do. We listen, understand, and deliver on their vision.',
    img: '/Service_Banner.png'
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovation',
    desc: 'Delivering modern design solutions and advanced construction techniques to build smarter, future-ready spaces.',
    img: '/Home_2.jpg'
  },
  {
    icon: <Leaf size={28} />,
    title: 'Sustainability',
    desc: 'Creating environmentally responsible buildings using energy-efficient designs and renewable solar solutions.',
    img: '/Service_Banner.png'
  }
];

const team = [
  {
    name: 'Ravi Pathak',
    role: 'Founder & Lead Architect',
    desc: 'With years of experience, Ravi leads the team with a passion for innovative design and sustainable building practices.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sandeep Sharma',
    role: 'Head of Construction',
    desc: 'Sandeep ensures every project is executed to the highest standards of quality and safety, overseeing all on-site operations.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Priya Singh',
    role: 'Lead Interior Designer',
    desc: 'Priya brings creativity and a keen eye for detail to create spaces that are both beautiful and highly functional.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
];

export default function About() {
  useEffect(() => {
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

    const animatedElements = document.querySelectorAll(`.${styles.animate}`);
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>Since 2021</div>
          <h1 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>
            Shaping the Future of <br/>
            <span className={styles.highlight}>Modern Living.</span>
          </h1>
          <p className={`${styles.heroSub} ${styles.animate} ${styles.fadeUp}`}>
            Structure Buildify is dedicated to transforming your vision into architectural excellence, combining innovative design with sustainable construction practices.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={styles.whoWeAre}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={`${styles.contentCol} ${styles.animate} ${styles.fadeRight}`}>
              <div className={styles.tag}>Who We Are</div>
              <h2 className={styles.sectionHeading}>Pioneering Construction and Design Since 2021</h2>
              <p className={styles.mainText}>
                Structure Buildify is a construction and design company committed to delivering exceptional building solutions. Our goal is to transform ideas into beautiful, safe and sustainable spaces.
              </p>
              <p className={styles.subText}>
                We specialize in architectural design, construction services, interior design, solar solutions and property management. With a dedicated team of professionals, we ensure every project meets the highest quality standards.
              </p>
              
              <div className={styles.miniStats}>
                <div className={styles.miniStatItem}>
                  <Award className={styles.statIcon} />
                  <span>Quality Standards</span>
                </div>
                <div className={styles.miniStatItem}>
                  <Rocket className={styles.statIcon} />
                  <span>Innovative Design</span>
                </div>
              </div>
            </div>
            <div className={`${styles.imageCol} ${styles.animate} ${styles.fadeLeft}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Construction" 
                  width={800} 
                  height={600}
                  className={styles.aboutImg}
                />
                <div className={styles.experienceCard}>
                  <span className={styles.expNum}>5+</span>
                  <span className={styles.expText}>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.twoCol}>
          <div className={`${styles.col} ${styles.animate} ${styles.fadeUp}`}>
            <div className={styles.iconCircle}><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>To deliver innovative, sustainable and high-quality construction solutions that enhance people&apos;s lifestyles and create long-lasting value.</p>
            <ul className={styles.list}>
              <li>Delivering Excellence and Quality</li>
              <li>Building with Integrity and trust</li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.animate} ${styles.fadeUp} ${styles.delay1}`}>
            <div className={styles.iconCircle}><Rocket size={32} /></div>
            <h3>Our Vision</h3>
            <p>To become one of the most trusted construction and infrastructure development companies known for excellence, reliability, and customer satisfaction.</p>
            <ul className={styles.list}>
              <li>Innovation for a better future</li>
              <li>Leading with sustainable practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.header}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>What Drives Us</div>
          <h2 className={`${styles.sectionTitle} ${styles.animate} ${styles.fadeUp}`}>Our Core Values</h2>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>The principles that guide our work and define our character.</p>
        </div>
        
        <div className={styles.valuesImageGrid}>
          {coreValues.map((val, i) => (
            <div key={i} className={`${styles.valueImageCard} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
              <div className={styles.valueImageWrapper}>
                <Image 
                  src={val.img} 
                  alt={val.title} 
                  fill
                  className={styles.valueCardImg} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.valueOverlay}>
                  <div className={styles.valueIcon}>{val.icon}</div>
                  <div className={styles.valueContent}>
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.header}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>The Experts</div>
          <h2 className={`${styles.sectionTitle} ${styles.animate} ${styles.fadeUp}`}>Our Professional Team</h2>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>
            Our team consists of experienced architects, engineers, designers and project managers who work together to deliver exceptional results.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} className={`${styles.teamCard} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
              <div className={styles.teamImg}>
                <Image src={member.img} alt={member.name} width={600} height={400} />
              </div>
              <div className={styles.teamInfo}>
                <h3>{member.name}</h3>
                <div className={styles.teamRole}>{member.role}</div>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.teamCTA} ${styles.animate} ${styles.fadeUp}`}>
          <p>Partner with a team that is as passionate about your project as you are. Let&apos;s build something remarkable together.</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
