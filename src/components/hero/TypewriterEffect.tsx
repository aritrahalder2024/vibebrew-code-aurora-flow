
import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text?: string;
  typeSpeed?: number;
  initialDelay?: number;
}

export const TypewriterEffect = React.memo(({
  text = "Build & Brew Ideas with AI",
  typeSpeed = 80,
  initialDelay = 400
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setIsTyping(true), initialDelay);
    return () => clearTimeout(startTimeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!isTyping) return;
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, text, typeSpeed]);

  return (
    <span className="typewriter-container gpu-accelerated">
      {displayText}
      {displayText.length < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';
