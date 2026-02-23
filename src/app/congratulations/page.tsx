"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

type WinValidationResponse = {
  win_id: string;
  first_name: string;
  last_name: string;
  win_amount: number;
};

type State = "loading" | "success" | "error" | "no_token";

function CongratulationsContent() {
  const searchParams = useSearchParams();
  const token = searchParams?.get("code") ?? "";

  const [state, setState] = useState<State>(token ? "loading" : "no_token");
  const [data, setData] = useState<WinValidationResponse | null>(null);

  useEffect(() => {
    if (!token) {
      setState("no_token");
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
    const url = `${baseUrl}/contest/win/is-parental-code-valid?code=${encodeURIComponent(token)}`;

    setState("loading");

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Invalid");
        return res.json();
      })
      .then((json: WinValidationResponse) => {
        setData(json);
        const fullName =
          json.first_name && json.last_name
            ? `${json.first_name} ${json.last_name}`
            : "";
        if (fullName && typeof window !== "undefined") {
          window.localStorage.setItem("winnerFullName", fullName);
        }
        setState("success");
      })
      .catch(() => setState("error"));
  }, [token]);

  if (state === "loading") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.loader} aria-label="Loading">
            <div className={styles.spinner} />
            <p className={styles.loaderText}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (state === "error" || state === "no_token" || !data) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.containerError}>
          <Image
            src="/assets/notAllow.svg"
            alt="Not allowed"
            width={189}
            height={189}
            className={styles.illustration}
            priority
          />
          <p className={styles.errorText}>Page no longer exists</p>
          <p className={styles.errorSubtext}>
            Another winner is being selected
          </p>
        </div>
      </div>
    );
  }

  const fullName =
    data?.first_name && data?.last_name
      ? `${data.first_name} ${data.last_name}`
      : "";
  const amount =
    data?.win_amount != null
      ? `$${(data.win_amount / 100).toFixed(2)}`
      : "";
  const winnerFormHref = `/winner-form?code=${encodeURIComponent(token)}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Congratulations!</h1>
        <p className={styles.leadText}>
          <span>{fullName}</span> has been selected as a winner of the latest{" "}
          <br />
          Flashboard sweepstake cash prize of <span>{amount}</span>!
        </p>

        <div className={styles.card}>
          <p>
            <span>Flashboard</span> is a social media videogame whereby users
            can post videos and go viral on local leaderboards.
          </p>

          <p>
            Because your child is under 18, your consent is required as the
            parent / legal guardian of <span>{fullName}</span> in order for the
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
          <Link href={winnerFormHref} className={styles.ctaOuter}>
            <span className={styles.ctaInner}>Continue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CongratulationsPage() {
  return (
    <Suspense
      fallback={
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.loader} aria-label="Loading">
              <div className={styles.spinner} />
            </div>
          </div>
        </div>
      }
    >
      <CongratulationsContent />
    </Suspense>
  );
}
