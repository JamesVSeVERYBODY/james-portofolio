import React, { useEffect, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 30,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLSpanElement>(null);

  // Fungsi untuk trigger animasi
  const startAnimation = () => {
    let i = 0;
    setDisplayed(""); // reset
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cleanup: (() => void) | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cleanup = startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (cleanup) cleanup();
    };
    // eslint-disable-next-line
  }, [text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
};