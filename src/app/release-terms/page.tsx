"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type ParentalReleaseSubmitPayload = {
  parent_first_name: string;
  parent_last_name: string;
  parent_email: string;
  relationship_to_minor: string;
  minor_first_name: string;
  minor_last_name: string;
  minor_birth_date: string;
  terms_accepted: boolean;
};

const PARENTAL_RELEASE_DRAFT_KEY = "parental-release-submit-draft";

export default function ReleaseTermsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async () => {
    if (isSubmitting) return;

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const rawDraft = sessionStorage.getItem(PARENTAL_RELEASE_DRAFT_KEY);
      if (!rawDraft) {
        throw new Error("Missing parental release draft");
      }

      const draft = JSON.parse(rawDraft) as {
        code?: string;
        payload?: ParentalReleaseSubmitPayload;
      };

      const codeFromUrl = new URLSearchParams(window.location.search).get(
        "code",
      );
      const code = draft.code?.trim() || codeFromUrl || "";

      if (!code) {
        throw new Error("Missing code query parameter");
      }

      if (!draft.payload) {
        throw new Error("Missing parental release payload");
      }

      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
      const url = `${baseUrl}/contest/win/parental-release-submit?code=${encodeURIComponent(code)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(draft.payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      sessionStorage.removeItem(PARENTAL_RELEASE_DRAFT_KEY);
      router.push("/thank-you");
    } catch (error) {
      console.error("Failed to submit parental release form", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <button
            type="button"
            className={styles.ctaOuter}
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            <span className={styles.ctaInner}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
          </button>
        </div>
        {submitError && <p className={styles.submitError}>{submitError}</p>}
      </div>
    </div>
  );
}
