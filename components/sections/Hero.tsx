import Link from 'next/link';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Build Your Dream Space with <br />
          <span className={styles.highlight}>Structure Buildify.</span>
        </h1>
        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>
            Get Free Consultation <ArrowRight size={20} />
          </Link>
          <Link href="/services" className={styles.btnSecondary}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
