"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
            setIsTyping(true);
            setDisplayedText("");
            i = 0;
        }, 5000); // Reset after 5 seconds
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <h2 className={cn("relative", className)}>
      {displayedText}
      {isTyping && (
        <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent" />
      )}
    </h2>
  );
}
