"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function CountdownCounter() {
  const target = useState(() => new Date("2025-08-08T12:00:00"))[0];
  const [time, setTime] = useState(getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className={styles.countdown}>
      {String(time.days).padStart(2, "0")} days / {String(time.hours).padStart(2, "0")} hours / {String(time.minutes).padStart(2, "0")} minutes / {String(time.seconds).padStart(2, "0")} seconds
    </div>
  );
}

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSubscribed(false);
    try {
      const formData = new FormData();
      formData.append("email", email);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.error || "Subscription failed.");
      }
    } catch {
      setError("Subscription failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Video background */}
      <video
        src="/saudi-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideoBg}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></video>
              <div className={styles.page}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
            <h1 className={styles.headline}>
              IMAGINE
              <br />
              SAUDI ARABIA
            </h1>
            <div className={styles.subheadline}>COMING SOON!</div>
            <div className={styles.countdown}><CountdownCounter /></div>
            <p className={styles.description}>
              Embark on a journey where heritage fuels innovation - inviting travellers, dreamers and investors to be part of Saudi Arabia&apos;s bold new chapter.
            </p>
            <form
              className={styles.newsletter}
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={submitting}
                className={styles.input}
              />
              <button
                type="submit"
                disabled={submitting}
                className={styles.ctaButton}
              >
                <span style={{ marginRight: 6 }}>→</span>
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
           {subscribed && (
             <div style={{
               marginTop: 18,
               background: "#4cae9b",
               color: "#fff",
               borderRadius: 8,
               padding: "10px 24px",
               fontFamily: "Lato, 'sans-serif'",
               fontWeight: 700,
               fontSize: 16,
               letterSpacing: "0.161em",
               boxShadow: "0 2px 12px rgba(0, 62, 54, 0.10)",
               textAlign: "center"
             }}>
               Thank you for subscribing!
             </div>
           )}
           {error && (
             <div style={{
               marginTop: 18,
               background: "#e57373",
               color: "#fff",
               borderRadius: 8,
               padding: "10px 24px",
               fontFamily: "Lato, 'sans-serif'",
               fontWeight: 700,
               fontSize: 16,
               letterSpacing: "0.161em",
               boxShadow: "0 2px 12px rgba(0, 62, 54, 0.10)",
               textAlign: "center"
             }}>
               {error}
             </div>
           )}
          </div>
          <div className={styles.socials}>
            <a href="https://x.com/Imaginesaudi" target="_blank" rel="noopener" aria-label="X">
              <Image src="/social/x-desertfrost.png" alt="X" width={32} height={32} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577291696012" target="_blank" rel="noopener" aria-label="Facebook">
              <Image src="/social/facebook-desertfrost.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/imagine.saudiarabia/" target="_blank" rel="noopener" aria-label="Instagram">
              <Image src="/social/instagram-desertfrost.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://www.tiktok.com/@imagine.saudiarabia" target="_blank" rel="noopener" aria-label="TikTok">
              <Image src="/social/tiktok-desertfrost.png" alt="TikTok" width={32} height={32} />
            </a>
            <a href="https://www.pinterest.com/ImagineSaudiArabia/" target="_blank" rel="noopener" aria-label="Pinterest">
              <Image src="/social/pinterest-desertfrost.png" alt="Pinterest" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 28px !important;
            letter-spacing: 0.12em !important;
            line-height: 1.2 !important;
            white-space: normal !important;
          }
          .your-video-class {
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
          }
          div[style*="padding: 56px 64px"] {
            padding: 24px 8px !important;
            max-width: 98vw !important;
          }
          div[style*="font-size: 32px"] {
            font-size: 20px !important;
            margin-top: 24px !important;
          }
          div[style*="font-size: 22px"] {
            font-size: 14px !important;
            margin: 18px 0 24px 0 !important;
            padding: 0 2px !important;
          }
          p[style*="font-size: 18px"] {
            font-size: 13px !important;
            margin-bottom: 24px !important;
          }
          form {
            flex-direction: column !important;
            gap: 8px !important;
            max-width: 98vw !important;
          }
          input[type="email"] {
            font-size: 14px !important;
            padding: 10px 12px !important;
          }
          button[type="submit"] {
            font-size: 14px !important;
            padding: 10px 12px !important;
          }
          div[style*="position: fixed"][style*="right: 32px"] {
            right: 8px !important;
            bottom: 8px !important;
            gap: 10px !important;
          }
          div[style*="border-radius: 24px"] {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </>
  );
} 
