// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

// app/components/Footer.js
import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Navfooter () {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Souza Dev. | All rights reserved.</p>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
