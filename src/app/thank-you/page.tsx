import Image from "next/image";
import styles from "./page.module.css";

export default function ThankYouPage() {
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
          <span>Luke Harris</span> can now claim the prize within the app by
          messaging Flashboard.
        </p>
      </div>
    </div>
  );
}
