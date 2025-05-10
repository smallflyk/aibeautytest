import React from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a title="AI Beauty Test - 发现你的美丽分数">
              <span className={styles.logoText}>AI Beauty Test</span>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <a title="首页 - AI Beauty Test">Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                <a title="关于我们 - AI Beauty Test">About</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/faq">
                <a title="常见问题 - AI Beauty Test">FAQ</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <a title="美容博客 - AI Beauty Test">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.ctaContainer}>
          <Link href="/#upload-section">
            <a className={styles.ctaButton} title="立即开始你的AI美颜测试">Try Now</a>
          </Link>
        </div>
      </header>
      
      <main>{children}</main>
    </div>
  );
} 