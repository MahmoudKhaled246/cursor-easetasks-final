"use client";

import { useEffect, useState, useCallback } from "react";

type TypingPhase = "typing" | "pausing" | "deleting";

interface UseTypingAnimationOptions {
  snippets: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingAnimation({
  snippets,
  typingSpeed = 35,
  deletingSpeed = 20,
  pauseDuration = 2000,
}: UseTypingAnimationOptions) {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<TypingPhase>("typing");

  const currentSnippet = snippets[snippetIndex] ?? "";

  const tick = useCallback(() => {
    setDisplayText((prev) => {
      if (phase === "typing") {
        if (prev.length < currentSnippet.length) {
          return currentSnippet.slice(0, prev.length + 1);
        }
        setPhase("pausing");
        return prev;
      }

      if (phase === "deleting") {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        setSnippetIndex((i) => (i + 1) % snippets.length);
        setPhase("typing");
        return prev;
      }

      return prev;
    });
  }, [phase, currentSnippet, snippets.length]);

  useEffect(() => {
    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    const speed = phase === "typing" ? typingSpeed : deletingSpeed;
    const interval = setInterval(tick, speed);
    return () => clearInterval(interval);
  }, [phase, tick, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, showCursor: phase !== "pausing" || displayText.length > 0 };
}
