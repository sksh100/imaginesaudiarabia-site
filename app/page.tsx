"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Transparent Header */}
      <header style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 48px"
      }}>
        <div style={{display: "flex", alignItems: "center", gap: 16}}>
          <Image src="/logo-header.png" alt="Imagine Saudi Logo" width={90} height={90} />
          <span style={{fontFamily: "var(--font-league-spartan)", fontWeight: 700, fontSize: 24, letterSpacing: 2}}>Imagine Saudi Arabia</span>
        </div>
        <nav style={{display: "flex", gap: 32}}>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Banner with overlay card */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a"
      }}>
        <video
          src="/saudi-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.6)"
          }}
        />
        <div style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(34, 51, 47, 0.85)",
          borderRadius: 24,
          boxShadow: "0 8px 48px 0 rgba(0, 62, 54, 0.18)",
          padding: "56px 64px",
          maxWidth: 800,
          color: "var(--color-clean-white)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Image src="/logo.png" alt="Imagine Saudi Logo" width={80} height={80} style={{marginBottom: 24}} />
          <h1 style={{
            fontFamily: "var(--font-cormorant-garamond)",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 0,
            textAlign: "center",
            letterSpacing: "0.12em",
            maxWidth: "100%",
          }}>
            Welcome to
          </h1>
          <h2 style={{
            fontFamily: "var(--font-cormorant-garamond)",
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "center",
            letterSpacing: "0.12em",
            color: "var(--color-clean-white)",
            marginTop: 8,
          }}>
            IMAGINE SAUDI ARABIA
          </h2>
          <p style={{fontFamily: "var(--font-league-spartan)", fontSize: 18, marginBottom: 24, textAlign: "center"}}>
            Discover the future of Saudi tourism, culture, and investment. Explore, connect, and experience the Kingdom like never before.
          </p>
          <Link href="#explore" style={{
            background: "var(--color-tarifa-green)",
            color: "var(--color-clean-white)",
            borderRadius: 8,
            padding: "14px 32px",
            fontWeight: 700,
            fontFamily: "var(--font-league-spartan)",
            fontSize: 18,
            letterSpacing: 1.5,
            textDecoration: "none",
            boxShadow: "0 4px 24px rgba(0, 62, 54, 0.10)",
            transition: "background 0.2s"
          }}>Explore Now</Link>
        </div>
      </section>

      {/* Example Modern Section */}
      <section id="about" style={{
        background: "var(--color-desert-frost)",
        color: "var(--color-neo-forest)",
        padding: "80px 0",
        textAlign: "center"
      }}>
        <h2 style={{fontFamily: "var(--font-cormorant-garamond)", fontSize: 32, fontWeight: 700, marginBottom: 24}}>About Imagine Saudi Arabia</h2>
        <p style={{fontFamily: "var(--font-league-spartan)", fontSize: 20, maxWidth: 700, margin: "0 auto"}}>
          Imagine Saudi Arabia is your digital gateway to the Kingdom&apos;s vibrant culture, breathtaking landscapes, and limitless opportunities. Stay tuned as we build the future of Saudi tourism and innovation.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--color-graphite-smoke)",
        color: "var(--color-clean-white)",
        padding: "32px 0 24px 0",
        textAlign: "center",
        marginTop: "auto"
      }}>
        <span style={{fontFamily: "var(--font-league-spartan)", fontSize: 18}}>© {new Date().getFullYear()} Imagine Saudi Arabia. All rights reserved.</span>
        <div style={{marginTop: 16, display: "flex", justifyContent: "center", gap: 20}}>
          <a href="https://www.instagram.com/imagine.saudiarabia/" target="_blank" rel="noopener" aria-label="Instagram">
            <Image src="/social/instagram-desertfrost.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@imagine.saudiarabia" target="_blank" rel="noopener" aria-label="TikTok">
            <Image src="/social/tiktok-desertfrost.png" alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://www.pinterest.com/ImagineSaudiArabia/" target="_blank" rel="noopener" aria-label="Pinterest">
            <Image src="/social/pinterest-desertfrost.png" alt="Pinterest" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577291696012" target="_blank" rel="noopener" aria-label="Facebook">
            <Image src="/social/facebook-desertfrost.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://x.com/Imaginesaudi" target="_blank" rel="noopener" aria-label="X">
            <Image src="/social/x-desertfrost.png" alt="X" width={24} height={24} />
          </a>
        </div>
      </footer>
    </div>
  );
} 
