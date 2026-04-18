'use client';

import React, { useState, useEffect } from 'react';
import styles from './PopupForm.module.css';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isOpen) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your API
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={handleClose}>&times;</button>
        <div className={styles.header}>
          <h2>Get in Touch</h2>
          <p>Let us help you build your dream project.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
