import React from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <span className={styles.logoText}>AI Beauty Test</span>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.ctaContainer}>
          <Link href="/#upload-section">
            <a className={styles.ctaButton}>Try Now</a>
          </Link>
        </div>
      </header>
      
      <main>{children}</main>
    </div>
  );
} 