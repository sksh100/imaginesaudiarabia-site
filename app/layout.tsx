import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Imagine Saudi Arabia — Culture, Heritage, and Vision 2030 Unveiled",
  description:
    "Explore the Kingdom of Saudi Arabia through immersive stories, ancient landmarks, and Vision 2030 insights. Discover culture, heritage, travel, and opportunity like never before.",
  openGraph: {
    title: "Imagine Saudi Arabia — Culture, Heritage, and Vision 2030 Unveiled",
    description:
      "Explore the Kingdom of Saudi Arabia through immersive stories, ancient landmarks, and Vision 2030 insights. Discover culture, heritage, travel, and opportunity like never before.",
    url: "https://imaginesaudiarabia.com/",
    type: "website",
    images: [
      {
        url: "https://imaginesaudiarabia.com/imagine-saudi-preview-card.jpg",
        width: 1200,
        height: 630,
        alt: "Imagine Saudi Arabia Preview Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagine Saudi Arabia — Culture, Heritage, and Vision 2030 Unveiled",
    description:
      "Explore the Kingdom of Saudi Arabia through immersive stories, ancient landmarks, and Vision 2030 insights. Discover culture, heritage, travel, and opportunity like never before.",
    images: [
      "https://imaginesaudiarabia.com/imagine-saudi-preview-card.jpg"
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:image" content="https://imaginesaudiarabia.com/imagine-saudi-preview-card.jpg" />
        <meta property="og:title" content="Imagine Saudi Arabia — Culture, Heritage, and Vision 2030 Unveiled" />
        <meta property="og:description" content="Explore the Kingdom of Saudi Arabia through immersive stories, ancient landmarks, and Vision 2030 insights. Discover culture, heritage, travel, and opportunity like never before." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imaginesaudiarabia.com/" />
        {/* Twitter Card Meta Tag */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4B33G1F1Y8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4B33G1F1Y8');
            `,
          }}
        />
        <link rel="icon" href="/flavicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/flavicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/flavicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/flavicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/flavicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/flavicons/android-chrome-512x512.png" />
      </head>
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
