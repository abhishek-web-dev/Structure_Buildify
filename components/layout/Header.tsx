'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { ChevronDown, Menu, X, Sun, Moon, Building2 } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Avoid hydration mismatch by only showing dynamic parts after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || (path !== '/' && pathname.startsWith(path));

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
        <div className={styles.logoCircle}>
          <img src="/logo.png" alt="Structure Buildify Logo" className={styles.logoImage} />
        </div>
        <span className={styles.logoText}>Structure <span>Buildify</span></span>
      </Link>
      
      <nav className={styles.nav}>
        <div className={`${styles.navOverlay} ${mobileMenuOpen ? styles.overlayVisible : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li className={styles.mobileOnlyHeader}>
            <span className={styles.logoText}>Structure <span>Buildify</span></span>
            <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
          </li>
          <li><Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about') ? styles.active : ''}>About Us</Link></li>
          <li className={`${styles.dropdown} ${isActive('/services') ? styles.active : ''}`}>
            <Link href="/services">Services <ChevronDown size={14} /></Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/services/architecture-design">Architecture Design</Link></li>
              <li><Link href="/services/structural-construction">Structural Construction</Link></li>
              <li><Link href="/services/interior-design">Interior Design</Link></li>
              <li><Link href="/services/solar-management">Solar Management</Link></li>
              <li><Link href="/services/property-management">Property Management</Link></li>
            </ul>
          </li>
          <li><Link href="/projects" className={isActive('/projects') ? styles.active : ''}>Projects</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? styles.active : ''}>Contact</Link></li>
          <li className={styles.mobileCta}>
             <Link href="/contact" className={styles.cta}>Get a Quote</Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            {mounted ? (theme === 'light' ? <Sun size={20} /> : <Moon size={20} />) : <div style={{width: 20, height: 20}} />}
          </button>
          <Link href="/contact" className={styles.cta}>Get a Quote</Link>
          <button className={styles.hamburger} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>

  );
}
