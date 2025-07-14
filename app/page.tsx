"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const CountdownCounter = dynamic(() => import("./CountdownCounter"), { ssr: false });

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
        src="/Imagine-Saudi-2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideoBg}
      ></video>
      <div className={styles.page}>
        <div className={styles.socialsVertical}>
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
        <div className={styles.hero}>
          <div className={styles.heroContentBox}>
            <h1 className={styles.headline}>
              <span className={styles.imagineWord}>IMAGINE</span><br /><span className={styles.saudiArabiaWord}>SAUDI ARABIA</span>
            </h1>
            <div className={styles.subheadline}>COMING SOON!</div>
            <CountdownCounter />
            <p className={styles.description}>
              Embark on a journey where heritage fuels innovation — inviting travelers, dreamers, and explorers to discover Saudi Arabia’s hidden wonders, rich culture, and Vision 2030 stories.<br /><span className={styles.descriptionBreak}>Subscribe now and see the Kingdom like never before!</span>
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
                autoComplete="email"
              />
              <button
                type="submit"
                disabled={submitting}
                className={styles.ctaButton}
              >
                <span style={{ marginRight: 6 }}>&rarr;</span>
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <div className={styles.successMsg}>
                Thank you for subscribing!
              </div>
            )}
            {error && (
              <div className={styles.errorMsg}>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 
