"use client";

import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const phoneSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <g clipPath="url(#clip0_19735_79911)">
        <path
          d="M5.55606 15.9536C7.92324 18.7833 10.7728 21.0112 14.0252 22.5877C15.2635 23.1745 16.9195 23.8707 18.7645 23.9901C18.8789 23.995 18.9883 24 19.1027 24C20.341 24 21.3356 23.5723 22.1462 22.6921C22.1512 22.6871 22.1611 22.6772 22.1661 22.6672C22.4545 22.3191 22.7828 22.0058 23.1259 21.6726C23.3596 21.4488 23.5983 21.2151 23.8271 20.9764C24.8864 19.8724 24.8864 18.47 23.8171 17.4007L20.8283 14.4119C20.3211 13.8848 19.7144 13.6063 19.0778 13.6063C18.4413 13.6063 17.8296 13.8848 17.3074 14.407L15.5271 16.1873C15.3629 16.0928 15.1939 16.0083 15.0347 15.9287C14.8358 15.8293 14.6518 15.7348 14.4877 15.6303C12.8665 14.6009 11.3944 13.2582 9.98706 11.5325C9.27591 10.6324 8.7985 9.8765 8.4653 9.10568C8.93277 8.68297 9.3704 8.24037 9.79311 7.80771C9.9423 7.65354 10.0965 7.49938 10.2506 7.34521C10.7877 6.80812 11.0762 6.18649 11.0762 5.55491C11.0762 4.92333 10.7927 4.3017 10.2506 3.76461L8.76866 2.28264C8.5946 2.10858 8.43049 1.93949 8.26141 1.76544C7.93319 1.42727 7.59004 1.07915 7.25188 0.765852C6.73965 0.263572 6.13791 0 5.50136 0C4.86978 0 4.26307 0.263572 3.73095 0.770825L1.87102 2.63075C1.19469 3.30709 0.811761 4.12764 0.732192 5.0775C0.637704 6.26606 0.856519 7.52922 1.42345 9.05595C2.29373 11.4182 3.60662 13.6113 5.55606 15.9536ZM1.94562 5.18193C2.0053 4.52051 2.25892 3.9685 2.73634 3.49109L4.58632 1.64111C4.87475 1.36262 5.19303 1.2184 5.50136 1.2184C5.80472 1.2184 6.11305 1.36262 6.39651 1.65106C6.72971 1.95939 7.04301 2.28264 7.38118 2.62578C7.55026 2.79983 7.72432 2.97389 7.89838 3.15292L9.38035 4.63489C9.68868 4.94322 9.84782 5.25653 9.84782 5.56486C9.84782 5.87319 9.68868 6.18649 9.38035 6.49482C9.22618 6.64898 9.07202 6.80812 8.91785 6.96229C8.45536 7.42976 8.0227 7.87236 7.54529 8.29507C7.53534 8.30501 7.53037 8.30999 7.52042 8.31993C7.10766 8.7327 7.17231 9.12557 7.27177 9.42395C7.27674 9.43887 7.28172 9.44882 7.28669 9.46374C7.66961 10.3838 8.20173 11.259 9.03223 12.3034C10.5242 14.1434 12.0956 15.5707 13.8263 16.6697C14.0401 16.809 14.2689 16.9184 14.4827 17.0278C14.6816 17.1272 14.8656 17.2217 15.0297 17.3261C15.0496 17.3361 15.0646 17.346 15.0844 17.356C15.2486 17.4405 15.4077 17.4803 15.5668 17.4803C15.9647 17.4803 16.2233 17.2267 16.3078 17.1421L18.1677 15.2822C18.4562 14.9938 18.7695 14.8396 19.0778 14.8396C19.4558 14.8396 19.7641 15.0734 19.958 15.2822L22.9568 18.276C23.5536 18.8728 23.5486 19.5193 22.9419 20.1509C22.733 20.3746 22.5142 20.5885 22.2805 20.8123C21.9324 21.1504 21.5693 21.4986 21.2411 21.8914C20.6692 22.5081 19.9879 22.7965 19.1077 22.7965C19.0231 22.7965 18.9336 22.7915 18.8491 22.7866C17.2179 22.6821 15.7011 22.0456 14.5623 21.5035C11.469 20.0066 8.75374 17.8831 6.50094 15.1877C4.64599 12.9548 3.39775 10.8761 2.57223 8.64816C2.06 7.28056 1.86605 6.18152 1.94562 5.18193Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_19735_79911">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.666016)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <footer className={styles.container}>
      <Image
        src="/assets/FullLogo.png"
        alt="Logo"
        width="225"
        height="44"
        className={styles.logo}
      />
      <div>
        <div>
          <p className={styles.titleCategory}>Contact Us:</p>
        </div>
        <div className={styles.socialsWrapper}>
          <p className={styles.phoneNumber}>
            {phoneSvg}
            +1 (646) 988 - 3844
          </p>
        </div>
      </div>
      {/* <div className={styles.linkContainer}> */}
      <div>
        <div>
          <p className={styles.titleCategory}>Social media:</p>
        </div>
        <Link
          href="https://www.instagram.com/flashboardapp/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramLink}
        >
          <Image
            src="/assets/instagram.png"
            alt="Logo"
            width="225"
            height="44"
            className={styles.instagram}
          />
        </Link>
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
            © {currentYear || "2025"} Flashboard
          </span>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
