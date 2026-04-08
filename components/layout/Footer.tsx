import Link from 'next/link';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Company Overview */}
          <div className={styles.col}>
            {/* <h4 className={styles.colTitle}>Company Overview</h4> */}
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <img src="/logo.png" alt="Logo" />
              </div>
              Structure <span>Buildify.</span>
            </Link>
            <p className={styles.brandDesc}>
              Your trusted partner for comprehensive real estate and construction services in Jhansi, Uttar Pradesh. 
              Delivering excellence and building dreams with integrity and quality since 2021.
            </p>
            <div className={styles.partnershipNote}>
              <strong>Partnership Note:</strong>
              <p>A partnership with Sewa Mitra, providing 275+ services.</p>
            </div>
          </div>
          
          {/* Column 2: Our Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.links}>
              <li><Link href="/services/architecture-design"><ArrowRight size={14} /> Architecture Design</Link></li>
              <li><Link href="/services/structural-construction"><ArrowRight size={14} /> Structural Construction</Link></li>
              <li><Link href="/services/interior-design"><ArrowRight size={14} /> Interior Design</Link></li>
              <li><Link href="/services/solar-management"><ArrowRight size={14} /> Solar Management</Link></li>
              <li><Link href="/services/property-management"><ArrowRight size={14} /> Property Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link href="/about"><ArrowRight size={14} /> About</Link></li>
              <li><Link href="/services"><ArrowRight size={14} /> Services</Link></li>
              <li><Link href="/projects"><ArrowRight size={14} /> Projects</Link></li>
              <li><Link href="/contact"><ArrowRight size={14} /> Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Address:</strong>
                  <span>RISE Jhansi, Jhansi Nagar Nigam premises, near Elite Chauraha, Civil Lines, Jhansi, Uttar Pradesh 284001</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Phone size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Phone Numbers:</strong>
                  <span>+91 87562 93808, +91 9219511025</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Email:</strong>
                  <span>info@structurebuildify.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom: Legal & Credits */}
        <div className={styles.bottom}>
          <div className={styles.legalCredits}>
            {/* <h4 className={styles.bottomTitle}>Legal & Credits</h4> */}
            <div className={styles.creditFlex}>
              <p><strong>Copyright:</strong> © 2026 Structure Buildify. All rights reserved.</p>
              {/* <div className={styles.founder}> */}
               
              {/* </div> */}
            </div>
          </div>
          <div className={styles.socials}>
             <strong>Founder: </strong> <span>Ravi Pathak</span>
            {/* <a href="#" aria-label="Instagram" className={styles.socialLink}><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}><Facebook size={18} /></a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={18} /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
