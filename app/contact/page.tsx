'use client';

import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import { MapPin, Phone, Mail, Send, MessageSquare, User, AtSign, PhoneCall, HelpCircle } from 'lucide-react';

export default function Contact() {
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
    <div className={styles.contactPage} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.label} ${styles.animate} ${styles.fadeDown}`}>Contact Us</div>
          <h1 className={`${styles.title} ${styles.animate} ${styles.fadeUp}`}>
            Get in <span className={styles.highlight}>Touch.</span>
          </h1>
          <p className={`${styles.sub} ${styles.animate} ${styles.fadeUp}`}>
            We are here to answer your questions and help you start your next project. 
            Reach out to us anytime and let&apos;s build something extraordinary together.
          </p>
        </div>
      </section>

      <section className={styles.layoutSection}>
        <div className={styles.layout}>
          {/* Contact Information */}
          <div className={`${styles.infoCard} ${styles.animate} ${styles.fadeRight}`}>
            <div className={styles.infoHead}>
              <h2>Contact Information</h2>
              <div className={styles.line}></div>
            </div>
            
            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div className={styles.detailText}>
                  <h3>Our Office</h3>
                  <p>RISE Jhansi, Jhansi Nagar Nigam premises, near Elite Chauraha, Civil Lines, Jhansi, Uttar Pradesh 284001</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.detailText}>
                  <h3>Phone Numbers</h3>
                  <p>+91 87562 93808</p>
                  <p>+91 9219511025</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.detailText}>
                  <h3>Email Address</h3>
                  <p>info@structurebuildify.com</p>
                </div>
              </div>
            </div>

            <div className={styles.socialPrompt}>
              <p>Follow us for latest updates and project highlights.</p>
              <div className={styles.socialPlaceholder}>
                {/* Social icons can be added here if needed */}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className={`${styles.formWrapper} ${styles.animate} ${styles.fadeLeft}`}>
            <form className={styles.form}>
              <div className={styles.formHead}>
                <MessageSquare size={20} color="#C49A3C" />
                <h3>Send Us an Inquiry</h3>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.inputGroup}>
                  <label><User size={14} /> Full Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className={styles.inputGroup}>
                  <label><AtSign size={14} /> Email Address</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>

                <div className={styles.inputGroup}>
                  <label><PhoneCall size={14} /> Phone Number (Optional)</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>

                <div className={styles.inputGroup}>
                  <label><HelpCircle size={14} /> Subject</label>
                  <input type="text" placeholder="How can we help?" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label><MessageSquare size={14} /> Message</label>
                <textarea placeholder="Tell us more about your project or inquiry..." required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Placeholder for future) */}
      <section className={`${styles.mapPlaceholder} ${styles.animate} ${styles.fadeUp}`}>
        <div className={styles.mapOverlay}>
          <p>Looking for our physical location? We are conveniently located in the heart of Jhansi.</p>
          <a 
            href="https://maps.google.com/?q=RISE+Jhansi,+near+Elite+Chauraha" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            View on Google Maps <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
