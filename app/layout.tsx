import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imagine Saudi Arabia",
  description: "A curated digital destination revealing the heart and soul of the Kingdom of Saudi Arabia. Discover history, culture, travel, and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
