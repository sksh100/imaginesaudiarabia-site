"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error.");
    }
  };

  return (
    <div className={styles.page}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="brand-toast"
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideoBg}
          src="/saudi-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.heroLogoCorner}>
          <Image
            src="/logo.png"
            alt="Imagine Saudi Arabia Logo"
            width={150}
            height={150}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            <span className={styles.headlineTop}>Welcome To</span><br />
            <span className={styles.headlineBottom}>Imagine&nbsp;Saudi&nbsp;Arabia</span>
          </h1>
          <p className={styles.subheadline}>
            Embark on a journey where heritage fuels innovation—inviting travellers, dreamers, and investors to be part of Saudi Arabia&apos;s bold new chapter.
          </p>
          <form className={styles.newsletter} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.ctaButton}>
              Subscribe to our newsletter
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.futuristicAboutBox}>
          <div className="museum-accent">
            <span className="museum-accent-icon" />
          </div>
          <div className="museum-text">
            Welcome to Imagine Saudi Arabia, a curated digital destination that reveals the heart and soul of the Kingdom. From its ancient roots and evolving present to its ambitious future, this platform celebrates the people, places, and possibilities that make Saudi Arabia extraordinary.<br /><br />
            This is a space for the curious—traveler or not, investor or dreamer, local or global—each welcome to uncover Saudi Arabia.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Follow us:</span>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/imagine.saudiarabia/" target="_blank" rel="noopener" aria-label="Instagram">
            <Image src="/social/instagram logo.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@imagine.saudiarabia" target="_blank" rel="noopener" aria-label="TikTok">
            <Image src="/social/TikTok logo.png" alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://www.pinterest.com/ImagineSaudiArabia/" target="_blank" rel="noopener" aria-label="Pinterest">
            <Image src="/social/pinterest logo.png" alt="Pinterest" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577291696012" target="_blank" rel="noopener" aria-label="Facebook">
            <Image src="/social/Facebook logo.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://x.com/Imaginesaudi" target="_blank" rel="noopener" aria-label="X">
            <Image src="/social/x logo.png" alt="X" width={24} height={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
