import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Post Clips <br /> Climb Leaderboards <br /> Win Prizes
      </h1>
      <h2 className={styles.subtitle}>
        Flashboard is where students compete, connect, <br />
        and shine - one clip at a time.
      </h2>
      <div className={styles.linkContainer}>
        <Link
          className={styles.link}
          href={"https://apps.apple.com/us/app/flashboard-app/id6748233793"}
          target="_blank"
        >
          Get the App
        </Link>
      </div>
      <div className={styles.screenShotsContainer}>
        <Image
          src="/assets/AppScreenShots.png"
          alt="App Screenshots"
          width="1200"
          height="647"
          className={styles.screenShots}
        />
      </div>

      <Link
        className={styles.link}
        href={"https://apps.apple.com/us/app/flashboard-app/id6748233793"}
        target="_blank"
      >
        <Image
          src="/assets/DownloadApple.png"
          alt="Download on the App Store"
          width="169"
          height="50"
          className={styles.downloadApple}
        />
      </Link>
    </div>
  );
}
