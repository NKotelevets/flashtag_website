"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const STORAGE_KEY = "winnerFullName";

export default function ThankYouPage() {
  const [winnerName, setWinnerName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setWinnerName(stored);
  }, []);

  const displayName = winnerName?.trim() || "The winner";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.illustrationWrap}>
          <Image
            src="/assets/congratulation.svg"
            alt="Celebration"
            width={220}
            height={220}
            className={styles.illustration}
            priority
          />
        </div>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.subtitle}>
          <span>{displayName}</span> can now claim the prize within the app by
          messaging Flashboard.
        </p>
      </div>
    </div>
  );
}
