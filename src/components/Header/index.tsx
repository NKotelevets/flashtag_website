import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Image
        src="/assets/Logo.png"
        alt="Logo"
        width="44"
        height="48"
        className={styles.logo}
      />
      <div className={styles.linkContainer}>
        <Link className={styles.link} href={"https://www.google.com/"}>
          Download
        </Link>
      </div>
    </header>
  );
};

export default Header;
