"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function CountdownCounter() {
  const target = new Date("2025-08-08T12:00:00");
  const [time, setTime] = useState(getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div style={{
      fontFamily: "Lato, sans-serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#4cae9b",
      letterSpacing: "0.161em",
      textAlign: "center",
      margin: "32px 0 48px 0",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      padding: "0 12px"
    }}>
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
    } catch (err) {
      setError("Subscription failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Video background */}
      <video
        src="/hero-page-imagine.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="your-video-class"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* HERO SECTION */}
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            background: "rgba(34, 51, 47, 0.65)",
            borderRadius: 24,
            boxShadow: "0 8px 48px 0 rgba(0, 62, 54, 0.18)",
            padding: "56px 64px",
            maxWidth: 800,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 32,
          }}>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 48,
              fontWeight: 400,
              marginBottom: 0,
              textAlign: "center",
              letterSpacing: "0.22em",
              lineHeight: 1.5,
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#ded0a8",
            }}>
              IMAGINE
              <br />
              SAUDI ARABIA
            </h1>
            <div style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 32,
              fontWeight: 600,
              marginTop: 48,
              marginBottom: 0,
              textAlign: "center",
              letterSpacing: "0.12em",
              color: "#fff",
            }}>
              COMING SOON!
            </div>
            <CountdownCounter />
            <p style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 18,
              marginBottom: 48,
              marginTop: 0,
              textAlign: "center",
              letterSpacing: "0.161em",
              lineHeight: 1.5
            }}>
              Embark on a journey where heritage fuels innovation - inviting travellers, dreamers and investors to be part of Saudi Arabia's bold new chapter.
            </p>
            <form
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: 420,
                margin: "0 auto"
              }}
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
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: 8,
                  border: "1px solid #4cae9b",
                  fontSize: 16,
                  outline: "none",
                  fontFamily: "Lato, sans-serif",
                  letterSpacing: "0.161em",
                  lineHeight: 1.5
                }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: "#4cae9b",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "12px 20px",
                  fontWeight: 700,
                  fontFamily: "Lato, sans-serif",
                  fontSize: 16,
                  border: "none",
                  boxShadow: "0 4px 24px rgba(0, 62, 54, 0.10)",
                  transition: "background 0.2s",
                  cursor: submitting ? "not-allowed" : "pointer",
                  letterSpacing: "0.161em",
                  lineHeight: 1.5
                }}
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
               fontFamily: "Lato, sans-serif",
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
               fontFamily: "Lato, sans-serif",
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
        </div>
        {/* SOCIAL MEDIA ICONS - bottom right, vertical */}
        <div style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "center"
        }}>
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
    </>
  );
}
