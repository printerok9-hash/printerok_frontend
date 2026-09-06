"use client";

import { useEffect, useMemo, useState } from "react";

export default function TextType({ text, typingSpeed = 75, pauseDuration = 1500, deletingSpeed = 50, variableSpeedEnabled = false, variableSpeedMin = 60, variableSpeedMax = 120, showCursor = true, cursorCharacter = "|", cursorBlinkDuration = 0.5 }) {
  const words = useMemo(() => typeof text === "string" ? [text] : text, [text]);
  const [frame, setFrame] = useState({ word: 0, length: words?.[0]?.length ?? 0, deleting: false });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!words?.length || paused) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    function schedule() {
      if (motion.matches) return;
      const word = words[frame.word % words.length];
      const full = frame.length >= word.length;
      const delay = !frame.deleting && full ? pauseDuration : frame.deleting ? deletingSpeed : variableSpeedEnabled ? variableSpeedMin + Math.random() * Math.max(0, variableSpeedMax - variableSpeedMin) : typingSpeed;
      timer = window.setTimeout(() => {
        if (!frame.deleting && full) setFrame({ ...frame, deleting: true });
        else if (frame.deleting && frame.length === 0) setFrame({ word: (frame.word + 1) % words.length, length: 0, deleting: false });
        else setFrame({ ...frame, length: frame.length + (frame.deleting ? -1 : 1) });
      }, delay);
    }
    function onMotionChange() { window.clearTimeout(timer); schedule(); }
    schedule();
    motion.addEventListener("change", onMotionChange);
    return () => { window.clearTimeout(timer); motion.removeEventListener("change", onMotionChange); };
  }, [frame, words, paused, typingSpeed, pauseDuration, deletingSpeed, variableSpeedEnabled, variableSpeedMin, variableSpeedMax]);

  if (!words?.length) return null;
  return (
    <span className="text-type">
      <span className="sr-only">{words[0]}</span>
      <span className="typed-visual" aria-hidden="true">{words[frame.word % words.length].slice(0, frame.length)}{showCursor && <span className={`typing-cursor${paused ? " is-paused" : ""}`} style={{ "--blink-duration": `${cursorBlinkDuration}s` }}>{cursorCharacter}</span>}</span>
      <span className="reduced-motion-word" aria-hidden="true">{words[0]}</span>
      <button type="button" className="animation-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume text animation" : "Pause text animation"} aria-pressed={paused}>{paused ? "▷" : "Ⅱ"}</button>
    </span>
  );
}
