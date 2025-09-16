import styles from "./page.module.css";
import Link from "next/link";

export default function ReleaseTermsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Parental Consent
          <br />
          and Release Terms
        </h1>

        <div className={styles.list}>
          <div>
            <h3>1. Consent to participate and accept prize</h3>
            <p>
              I, the undersigned, am the parent or legal guardian of the minor
              named on the prior page. I give my consent for the minor to accept
              the prize awarded in connection with the Flashboard Sweepstakes. I
              confirm that the minor meets all eligibility requirements as
              stated in the Official Rules.
            </p>
          </div>
          <div>
            <h3>2.Tax acknowledgement</h3>
            <p>
              I understand that prizes valued at $600 or more require completion
              of IRS Form W-9 and may be reported to the IRS on Form 1099-MISC.
              I agree to provide any requested tax forms before prize
              disbursement and acknowledge that I am responsible for any
              applicable taxes.
            </p>
          </div>
          <div>
            <h3>3. Parental payout policy</h3>
            <p>
              I understand and agree that if my child (age 13–17) is selected as
              a prize winner, the prize may be paid directly to myself (the
              parent or legal guardian), or to a digital payment account (e.g.,
              Venmo Teen, Cash App for Teens) that has been properly established
              with my authorization and supervision.
            </p>
            <p>
              By signing this release, I confirm that I have approved my
              child&apos;s use of such an account and accept full responsibility
              for monitoring their receipt and use of any prize funds. I
              acknowledge that Flashboard is not responsible for how the funds
              are managed after disbursement and that prize funds may be subject
              to applicable taxes and reporting requirements.
            </p>
          </div>
          <div>
            <h3>4. Liability release</h3>
            <p>
              In consideration of the prize awarded to the minor, I hereby
              release and discharge Flashboard, its affiliates, officers,
              employees, sponsors, and agents from any and all claims, demands,
              losses, liabilities, or damages arising out of or related to the
              minor&apos;s participation in the Sweepstakes and the acceptance
              or use of the prize.
            </p>
          </div>
          <div>
            <h3>5. Publicity release</h3>
            <p>
              I grant Flashboard the right to use the minor’s name, likeness,
              voice, image, video content, biographical information, and any
              statements made regarding the Sweepstakes or prize in promotional
              materials, on social media, and in media coverage, without
              additional compensation, notification, or approval.
            </p>
          </div>
        </div>

        <p className={styles.confirm}>
          By tapping the submit button below, I confirm that I am the
          parent/legal guardian of this minor and agree to the terms above.
        </p>

        <div className={styles.ctaContainer}>
          <Link href="/thank-you" className={styles.ctaOuter}>
            <span className={styles.ctaInner}>Submit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
