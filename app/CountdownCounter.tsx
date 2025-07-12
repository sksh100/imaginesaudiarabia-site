"use client";
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

export default function CountdownCounter() {
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