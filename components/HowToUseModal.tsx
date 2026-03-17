"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "logo_howto_seen";

export default function HowToUseModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)", padding: "1rem" }}
      onClick={dismiss}
    >
      <div
        style={{ background: "linear-gradient(135deg, rgba(20,18,10,0.98), rgba(10,10,8,0.98))", border: "1px solid rgba(212,175,55,0.45)", borderRadius: "20px", padding: "2rem 2rem 1.8rem", maxWidth: "440px", width: "100%", boxShadow: "0 0 60px rgba(212,175,55,0.15), 0 20px 60px rgba(0,0,0,0.6)", textAlign: "center" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Title */}
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.35rem", fontWeight: 900, color: "#E8C87C", marginBottom: "0.4rem", letterSpacing: "0.5px" }}>
          🛡️ Before You Generate
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", marginBottom: "1.6rem" }}>
          Read this to get great logos:
        </p>

        {/* Tips */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.8rem", textAlign: "left" }}>
          {[
            { num: "1", text: "Be specific: style + name + symbol + colors + font + background" },
            { num: "2", text: "Always choose 1:1 square format for logos" },
            { num: "3", text: "Bad prompt = bad logo. Use our examples below for inspiration." },
          ].map(({ num, text }) => (
            <div key={num} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.18)", borderRadius: "12px", padding: "0.85rem 1rem" }}>
              <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "linear-gradient(135deg, #D4AF37, #E8C87C)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "0.75rem", color: "#0a0a0a" }}>
                {num}
              </span>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", lineHeight: 1.55, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={dismiss}
          style={{ width: "100%", padding: "0.85rem 1.5rem", background: "linear-gradient(135deg, #B8860B, #D4AF37, #E8C87C)", border: "none", borderRadius: "12px", color: "#0a0a0a", fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.5px", boxShadow: "0 4px 20px rgba(212,175,55,0.35)", transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Got it, let&apos;s create!
        </button>
      </div>
    </div>
  );
}
