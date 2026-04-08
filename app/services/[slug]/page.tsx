'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './ServiceDetail.module.css';
import CTABand from '@/components/sections/CTABand';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Maximize, 
  Box, 
  ShieldCheck, 
  Zap, 
  ThermometerSun,
  HardHat,
  Hammer,
  Anchor,
  Clock,
  Briefcase,
  Palette,
  Layout,
  Gem,
  Lightbulb as LucideLightbulb,
  Leaf as LucideLeaf,
  Users,
  Sun,
  TrendingDown,
  BatteryCharging,
  FileCheck,
  Wrench,
  SearchCheck,
  Wallet,
  Settings,
  ShieldAlert,
  Smile,
  Shield,
  TrendingUp,
  ClipboardCheck,
  Banknote,
  Gavel
} from 'lucide-react';

// Define placeholder components or use renamed lucide icons to avoid naming conflicts
const LightbulbIcon = ({size}: {size: number}) => <LucideLightbulb size={size} />;
const LeafIcon = ({size}: {size: number}) => <LucideLeaf size={size} />;

const serviceDetails: Record<string, any> = {
  'architecture-design': {
    title: 'Architecture Design',
    subtitle: 'Visionary Space Planning & Conceptual Design',
    mainDesc: 'Our architectural design services focus on creating smart, efficient and aesthetically pleasing structures. From concept development to detailed planning, we ensure every design reflects your vision and lifestyle.',
    secondaryDesc: 'We carefully analyze factors such as space utilization, natural lighting, ventilation, safety standards, and client preferences before creating a design.',
    coreHighlights: [
      { icon: <Compass />, title: 'Visionary Concepts', text: 'Transforming your ideas into inspiring and viable architectural plans.' },
      { icon: <Layers />, title: 'Precision Blueprints', text: 'Developing detailed drawings that guide a flawless construction process.' },
      { icon: <Maximize />, title: 'Functional Spaces', text: 'Designing environments that enhance usability and comfort for occupants.' }
    ],
    servicesInclude: [
      { 
        title: 'Residential Design', 
        desc: 'Our architects focus on smart space utilization, proper ventilation, natural lighting, and modern layouts to create comfortable and functional homes.',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Commercial Building Design', 
        desc: 'Whether it is an office building, showroom, or retail space, we ensure optimized space planning and professional architectural designs.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2D Floor Plans & Layout', 
        desc: 'Detailed 2D drawings showing rooms, walls, and structural elements to help you visualize the project before construction.',
        img: '/2D_Floor.jpg'
      },
      { 
        title: '3D Design Visualization', 
        desc: 'Realistic 3D elevation designs allowing you to see the final building and make improvements before breaking ground.',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Structural Planning', 
        desc: 'Engineering safe, durable buildings capable of handling wind, earthquakes, and heavy usage.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
      }
    ],
    process: [
      { id: '01', title: 'Conceptual Design & Feasibility', icon: <LightbulbIcon size={24} /> },
      { id: '02', title: 'Detailed Blueprints & 3D Modeling', icon: <Box size={24} /> },
      { id: '03', title: 'Regulatory Approvals & Compliance', icon: <ShieldCheck size={24} /> },
      { id: '04', title: 'Sustainable & Green Building Practices', icon: <LeafIcon size={24} /> }
    ],
    heroImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop'
  },
  'structural-construction': {
    title: 'Structural Construction',
    subtitle: 'Building Robust & Lasting Structures',
    mainDesc: 'Structure Buildify provides reliable construction services for residential, commercial, and infrastructure projects. We follow modern construction techniques and maintain strict quality standards to ensure durability and safety.',
    secondaryDesc: 'From foundation work to final finishing, our team manages every stage of construction with professionalism and transparency.',
    coreHighlights: [
      { icon: <Hammer />, title: 'Quality Craftsmanship', text: 'Executing every detail with precision and care for a superior finish.' },
      { icon: <ShieldCheck />, title: 'Safety First', text: 'Implementing strict safety protocols to ensure a secure construction environment.' },
      { icon: <Anchor />, title: 'Lasting Durability', text: 'Using the best materials to build structures that withstand the test of time.' }
    ],
    servicesInclude: [
      { 
        title: 'Residential Construction', 
        desc: 'Building high-quality, safe, and modern homes tailored to your lifestyle and needs.',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Commercial Construction', 
        desc: 'Developing efficient and durable commercial spaces designed to support business growth.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Renovation and Remodeling', 
        desc: 'Transforming existing spaces with modern designs, improved functionality, and enhanced aesthetics.',
        img: '/renovation.jpg'
      },
      { 
        title: 'Foundation & Structural Work', 
        desc: 'Ensuring strong and stable building foundations for long-lasting safety and durability.',
        img: '/foundation.jpg'
      },
      { 
        title: 'Project Management', 
        desc: 'Managing every stage of construction to ensure smooth execution, quality control, and timely completion.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
      }
    ],
    whyChoose: [
      { title: 'High-Quality Materials', icon: <Layers size={24} /> },
      { title: 'Experienced Workforce', icon: <Briefcase size={24} /> },
      { title: 'Strict Safety Protocols', icon: <HardHat size={24} /> },
      { title: 'On-Time & On-Budget Delivery', icon: <Clock size={24} /> }
    ],
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
  },
  'interior-design': {
    title: 'Interior Design',
    subtitle: 'Personalized & Functional Environments',
    mainDesc: 'Our interior design team creates functional and elegant spaces that match your personality and needs. Interior design plays an important role in transforming a building into a comfortable and stylish living or working space.',
    secondaryDesc: 'Our interior design experts create personalized designs that match the lifestyle, taste, and functional needs of our clients. We combine aesthetics, space planning, lighting, furniture, and color schemes to create interiors that are elegant and practical.',
    coreHighlights: [
      { icon: <Palette />, title: 'Tailored to Your Taste', text: 'Crafting designs that reflect your personal style and preferences.' },
      { icon: <Layout />, title: 'Functional Elegance', text: 'Blending sophisticated design with everyday usability.' },
      { icon: <Gem />, title: 'Attention to Detail', text: 'Meticulously planning every element, from lighting to finishes.' }
    ],
    servicesInclude: [
      { 
        title: 'Living Room Design', 
        desc: 'Creating stylish and comfortable living spaces that reflect your personality and enhance everyday living.',
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Kitchen Design', 
        desc: 'Designing modern and functional kitchens that maximize space, efficiency, and convenience.',
        img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Bedroom Interiors', 
        desc: 'Crafting relaxing and elegant bedroom interiors that promote comfort and peaceful living.',
        img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Office Interiors', 
        desc: 'Designing professional and productive office spaces that support efficiency and creativity.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Lighting & Furniture', 
        desc: 'Carefully planning lighting and furniture placement to improve functionality, comfort, and visual appeal.',
        img: '/lighting.jpg'
      }
    ],
    approach: [
      { title: 'A collaborative process to bring your dream space to life.', icon: <Users size={24} /> },
      { title: 'Personalized Style Consultation', icon: <Palette size={24} /> },
      { title: 'Space Planning & Layout Optimization', icon: <Maximize size={24} /> },
      { title: 'Material & Furniture Selection', icon: <Box size={24} /> },
      { title: 'Full Project Management', icon: <Briefcase size={24} /> }
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=1200&auto=format&fit=crop'
  },
  'solar-management': {
    title: 'Solar Management',
    subtitle: 'Clean Energy for a Sustainable Future',
    mainDesc: 'As the demand for renewable energy grows, solar energy has become an efficient and sustainable solution for homes and businesses. Structure Buildify offers complete solar installation services that help clients reduce electricity bills and contribute to a greener environment.',
    secondaryDesc: 'Our solar experts analyze energy requirements and provide customized solar systems suitable for each property. Switch to clean energy and reduce electricity bills with our solar installation services.',
    coreHighlights: [
      { icon: <Zap />, title: 'Energy Independence', text: 'Generate your own power and reduce reliance on the grid.' },
      { icon: <TrendingDown />, title: 'Cost Savings', text: 'Significantly lower your monthly electricity bills and benefit from government incentives.' },
      { icon: <LucideLeaf />, title: 'Sustainable Future', text: 'Contribute to a cleaner environment by using renewable energy.' }
    ],
    servicesInclude: [
      { 
        title: 'Rooftop Solar Installation', 
        desc: 'Professional installation of high-efficiency solar panels tailored to your roof structure.',
        img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Consultation & Planning', 
        desc: 'Expert analysis of your property’s solar potential and detailed system planning.',
        img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Performance Analysis', 
        desc: 'Detailed system performance tracking to ensure your solar array operates at its peak.',
        img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Government Subsidy Guidance', 
        desc: 'We help you navigate government incentives and subsidies to maximize your ROI.',
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Maintenance & Inspection', 
        desc: 'Regular cleaning and technical inspections to ensure long-term reliability and efficiency.',
        img: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800&auto=format&fit=crop'
      }
    ],
    process: [
      { id: '01', title: 'Energy Audit & Consultation', icon: <SearchCheck size={24} /> },
      { id: '02', title: 'System Design & Engineering', icon: <Settings size={24} /> },
      { id: '03', title: 'Professional Installation', icon: <HardHat size={24} /> },
      { id: '04', title: 'Monitoring & Maintenance', icon: <Wrench size={24} /> }
    ],
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=1200&auto=format&fit=crop'
  },
  'property-management': {
    title: 'Property Management',
    subtitle: 'Comprehensive Care for Your Assets',
    mainDesc: 'Managing property requires time, effort, and technical knowledge. Our property management services help property owners maintain their assets efficiently and maximize their value.',
    secondaryDesc: 'We ensure that properties remain well-maintained, secure, and properly managed. We help property owners maintain and manage their assets efficiently.',
    coreHighlights: [
      { icon: <Smile />, title: 'Tenant Satisfaction', text: 'Keeping tenants happy to ensure stable, long-term occupancy.' },
      { icon: <Shield />, title: 'Asset Protection', text: 'Proactive maintenance to preserve and enhance your property\'s value.' },
      { icon: <TrendingUp />, title: 'Maximized Returns', text: 'Efficient operations and strategic oversight to boost your profitability.' }
    ],
    servicesInclude: [
      { 
        title: 'Tenant Screening & Leasing', 
        desc: 'We conduct thorough background checks to find reliable tenants and manage all leasing paperwork seamlessly.',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Rent & Financial Reporting', 
        desc: 'Timely rent collection and detailed financial statements to keep you informed about your investment’s performance.',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: 'Maintenance & Repairs', 
        desc: 'Proactive maintenance and prompt handling of repair requests to keep your property in top condition.',
        img: '/repair.jpg'
      },
      { 
        title: 'Legal & Eviction Handling', 
        desc: 'We ensure your property complies with all regulations and manage difficult processes professionally.',
        img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop'
      }
    ],
    commitment: [
      { title: 'High-Quality Materials', icon: <Layers size={24} /> },
      { title: 'Experienced Workforce', icon: <Briefcase size={24} /> },
      { title: 'Strict Safety Protocols', icon: <HardHat size={24} /> },
      { title: 'On-Time & On-Budget Delivery', icon: <Clock size={24} /> }
    ],
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=1200&auto=format&fit=crop'
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const detail = serviceDetails[slug];

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible);
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.animate}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!detail) return <div>Service not found</div>;

  // Premium Layout for all main services
  const usePremiumLayout = ['architecture-design', 'structural-construction', 'interior-design', 'solar-management', 'property-management'].includes(slug);

  if (usePremiumLayout) {
    return (
      <div className={styles.detailPage}>
        {/* HERO */}
        <section className={styles.hero} style={{ backgroundImage: `url(${detail.heroImage || detail.image})` }}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <Link href="/services" className={styles.backLink}>
              <ArrowLeft size={20} /> Back to Services
            </Link>
            <div className={`${styles.animate} ${styles.fadeUp}`}>
              <h1 className={styles.title}>{detail.title}</h1>
              <p className={styles.subtitle}>{detail.subtitle}</p>
            </div>
          </div>
        </section>

        {/* OVERVIEW & HIGHLIGHTS */}
        <section className={styles.overviewSection}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={`${styles.overviewText} ${styles.animate} ${styles.fadeRight}`}>
                <div className={styles.tag}>Overview</div>
                <h2>
                  {slug === 'property-management' ? 'Efficient Management' : 
                   slug === 'solar-management' ? 'Powering the Future' : 
                   slug === 'architecture-design' ? 'Crafting the Future' : 
                   slug === 'interior-design' ? 'Personalized Elegance' : 'Building Excellence'}
                </h2>
                <p className={styles.leadP}>{detail.mainDesc}</p>
                <p>{detail.secondaryDesc}</p>
              </div>
              <div className={styles.highlightsGrid}>
                {detail.coreHighlights.map((item: any, i: number) => (
                  <div key={i} className={`${styles.highlightCard} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i}`]}`}>
                    <div className={styles.hIcon}>{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDE */}
        <section className={styles.includeSection}>
          <div className={styles.container}>
            <div className={`${styles.centeredHeader} ${styles.animate} ${styles.fadeUp}`}>
              <div className={styles.tag}>What we offer</div>
              <h2>Services Include</h2>
            </div>
            <div className={styles.includeGrid}>
              {detail.servicesInclude.map((item: any, i: number) => (
                <div key={i} className={`${styles.includeCard} ${styles.animate} ${styles.fadeUp} ${styles[`delay${i % 3}`]}`}>
                  <div className={styles.includeImgWrapper}>
                    <Image src={item.img} alt={item.title} fill className={styles.includeImg} />
                  </div>
                  <div className={styles.includeContent}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS / WHY CHOOSE / APPROACH / COMMITMENT */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.processGrid}>
              <div className={`${styles.processImage} ${styles.animate} ${styles.fadeRight}`}>
                <Image
                  src={slug === 'property-management'
                    ? "/management.jpg"
                    : slug === 'solar-management'
                    ? "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop"
                    : (slug === 'interior-design'
                      ? "/interior.jpg"
                      : (slug === 'architecture-design'
                        ? "/Architec.jpg"
                        : "/why_choose.jpg"))
                  }                  alt="Process" 
                  width={600} 
                  height={700}
                  className={styles.procImg}
                />
              </div>
              <div className={`${styles.processContent} ${styles.animate} ${styles.fadeLeft}`}>
                <div className={styles.tag}>
                  {slug === 'property-management' ? 'Our Commitment' :
                   slug === 'solar-management' ? 'The Journey' : 
                   slug === 'interior-design' ? 'Our Approach' : 
                   slug === 'architecture-design' ? 'Our Approach' : 'Our Commitment'}
                </div>
                <h2>
                  {slug === 'property-management' ? 'Why Choose Our Management?' :
                   slug === 'solar-management' ? 'Our Solar Installation Process' : 
                   slug === 'interior-design' ? 'Our Interior Design Approach' : 
                   slug === 'architecture-design' ? 'Our Architectural Process' : 'Why Choose Our Services?'}
                </h2>
                <p>
                  {slug === 'property-management' ? 'Our management process ensures the use of high-quality materials, skilled workforce, and efficient project management.' :
                   slug === 'solar-management' ? 'A seamless journey from initial consultation to powering your property with solar.' :
                   slug === 'interior-design' ? 'A collaborative process to bring your dream space to life.' :
                   slug === 'architecture-design' ? 'A systematic approach to ensure quality and precision at every step.' :
                   'Our construction process ensures the use of high-quality materials, skilled workmanship, and efficient project management.'}
                </p>
                <div className={styles.processList}>
                  {(detail.process || detail.whyChoose || detail.approach || detail.commitment).map((step: any, i: number) => (
                    <div key={i} className={styles.processItem}>
                      <span className={styles.procNum}>{step.id || <CheckCircle2 size={24} />}</span>
                      <div className={styles.procInfo}>
                        <h4>{step.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <section className={styles.hero} style={{ backgroundImage: `url(${detail.image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <h1 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>{detail.title}</h1>
          <p className={`${styles.subtitle} ${styles.animate} ${styles.fadeUp}`}>{detail.subtitle}</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <p>{detail.description}</p>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
