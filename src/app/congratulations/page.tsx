import Link from "next/link";
import styles from "./page.module.css";

export default function CongratulationsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Congratulations!</h1>
        <p className={styles.leadText}>
          <span>Luke Harris</span> has been selected as a winner of the latest{" "}
          <br />
          Flashboard sweepstake cash prize of <span>$500!</span>
        </p>

        <div className={styles.card}>
          <p>
            <span>Flashboard</span> is a social media videogame whereby users
            can post videos and go viral on local leaderboards.
          </p>

          <p>
            Because your child is under 18, your consent is required as the
            parent / legal guardian of <span>Luke Harris</span> in order for the
            prize to be awarded.
          </p>

          <p>
            Please tap <span>continue</span> to enter your contact information
            for our records, and thereafter review the Parental Release Form.
          </p>

          <p>
            The form must be completed within 60 minutes of initial prize notice
            before we are allowed to select another candidate to receive the
            prize award.
          </p>

          <p>
            You can download the mobile app to read the official contest rules.
          </p>
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/winner-form" className={styles.ctaOuter}>
            <span className={styles.ctaInner}>Continue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
