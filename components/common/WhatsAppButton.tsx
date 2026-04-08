import styles from './WhatsAppButton.module.css';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918756293808"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
