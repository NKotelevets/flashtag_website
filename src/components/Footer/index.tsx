import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Image
        src="/assets/FullLogo.png"
        alt="Logo"
        width="225"
        height="44"
        className={styles.logo}
      />
      <div className={styles.linkContainer}>
        <div className={styles.linkRow}>
          <Link className={styles.link} href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className={styles.link} href="/term-of-services">
            Terms of Service
          </Link>
        </div>
        <div className={styles.copyrightContainer}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Flashboard
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
