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
        <div className={styles.titleWrapper}>
          <div>
            <p className={styles.titleCategory}>Contact Us:</p>
          </div>
          <div className={styles.socialsWrapper}>
            <Link
              href="https://www.instagram.com/flashboardapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram.png"
                alt="Logo"
                width="225"
                height="44"
                className={styles.instagram}
              />
            </Link>

            <p className={styles.phoneNumber}>+1 (646) 988 - 3844</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
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
      </div>
    </footer>
  );
};

export default Footer;
