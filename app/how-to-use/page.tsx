"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const otherTools = [
  { name: "Remove Background", desc: "Instantly remove image backgrounds", url: "https://bgremover.deepvortexai.com", icon: "✂️" },
  { name: "Image Upscaler", desc: "Enhance resolution with AI", url: "https://upscaler.deepvortexai.com", icon: "🔍" },
  { name: "3D Generator", desc: "Transform images into 3D models", url: "https://3d.deepvortexai.com", icon: "🧊" },
  { name: "Voice Generator", desc: "AI text-to-speech generation", url: "https://voice.deepvortexai.com", icon: "🎙️" },
  { name: "Emoticon Generator", desc: "Custom AI emoji creation", url: "https://emoticons.deepvortexai.com", icon: "😀" },
  { name: "Image to Video", desc: "Animate any image with AI", url: "https://video.deepvortexai.com", icon: "🎬" },
  { name: "AI Chat Suite", desc: "4 frontier models in one place", url: "https://chat.deepvortexai.com", icon: "💬" },
  { name: "Deep Vortex Hub", desc: "All AI tools in one ecosystem", url: "https://deepvortexai.com", icon: "🌐" },
];

export default function HowToUsePage() {
  useEffect(() => {
    document.title = "How to Use the AI Logo Generator - Deep Vortex AI";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundImage: "radial-gradient(rgba(212,175,55,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>

      {/* Header */}
      <header style={{ textAlign: "center", padding: "2.5rem 1rem 1rem", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
        <Link href="https://logo.deepvortexai.com" style={{ display: "inline-block", color: "rgba(212,175,55,0.8)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "1.2rem", letterSpacing: "0.5px" }}>
          ← Back to Logo Generator
        </Link>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <Image src="/logotinyreal.webp" alt="Deep Vortex AI" width={180} height={58} priority style={{ objectFit: "contain" }} />
        </div>
        <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.4rem, 4vw, 2.2rem)", fontWeight: 900, letterSpacing: "1px", background: "linear-gradient(135deg, #E8C87C 0%, #D4AF37 60%, #B8860B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.6rem" }}>
          How to Use the AI Logo Generator
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>Create professional logos from text in seconds</p>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.2rem 5rem" }}>

        {/* Steps */}
        <section style={{ marginBottom: "3.5rem" }}>
          {[
            {
              num: 1,
              title: "Write Your Logo Prompt",
              body: "Describe your logo with 4 key elements: 1) Company name or initial, 2) Style (minimalist, vintage, luxury, modern, aggressive, playful), 3) Colors (be specific: navy blue, gold, neon green), 4) Symbol or icon (shield, lightning bolt, leaf, dragon, crown). The more specific, the better the result.",
            },
            {
              num: 2,
              title: "Choose Square Format 1:1",
              body: "Always use 1:1 (square) for logos — it works on business cards, websites, social media, and apps. Ideogram V2 excels at clean designs with readable text and crisp edges.",
            },
            {
              num: 3,
              title: "Generate & Refine",
              body: "Generate your logo and download it in full quality. If the result isn't perfect, tweak your prompt — add more details about style or colors and regenerate. Save your favorites to your gallery.",
            },
          ].map(({ num, title, body }) => (
            <div key={num} style={{ display: "flex", gap: "1.4rem", alignItems: "flex-start", marginBottom: "2rem", background: "rgba(20,18,10,0.85)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "16px", padding: "1.6rem", backdropFilter: "blur(12px)" }}>
              <div style={{ flexShrink: 0, width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #E8C87C, #D4AF37)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#0a0a0a" }}>
                {num}
              </div>
              <div>
                <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#E8C87C", marginBottom: "0.5rem" }}>{title}</h2>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.65, fontSize: "0.93rem" }}>{body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Pro Tip */}
        <section style={{ marginBottom: "3.5rem", background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.4)", borderRadius: "16px", padding: "1.6rem 1.8rem" }}>
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "1.5px", marginBottom: "0.6rem" }}>⚡ PRO TIP — The Logo Prompt Formula</p>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.65, fontSize: "0.93rem", marginBottom: "0.8rem" }}>
            <strong style={{ color: "#E8C87C" }}>[Style]</strong> + <strong style={{ color: "#E8C87C" }}>[Name/Letter]</strong> + <strong style={{ color: "#E8C87C" }}>[Symbol]</strong> + <strong style={{ color: "#E8C87C" }}>[Colors]</strong> + <strong style={{ color: "#E8C87C" }}>[Font]</strong> + <strong style={{ color: "#E8C87C" }}>[Background]</strong>
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", fontStyle: "italic" }}>
            Example: &ldquo;Minimalist tech logo, letter D, diamond shape, blue silver, sans-serif, white background&rdquo;
          </p>
        </section>

        {/* Ready-to-Use Prompts */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#E8C87C", textAlign: "center", marginBottom: "1.6rem", letterSpacing: "1px" }}>
            8 Ready-to-Use Prompts
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Minimalist tech startup, letter D, diamond shape, deep blue silver, sans-serif, white background",
              "Luxury restaurant, golden fork icon, elegant script font, black background, gold effect",
              "Gaming company, fierce dragon, red black, bold aggressive font, dark background",
              "Law firm, scales of justice, navy blue gold, serif font, white background",
              "Eco brand, green leaf in circle, earthy tones, modern minimalist, white background",
              "Crypto project, hexagon pattern, purple neon, futuristic font, dark background",
              "Vintage barbershop, classic razor, red white blue, retro bold lettering",
              "Fitness brand, lightning bolt shield, orange black, strong condensed font",
            ].map((prompt, i) => (
              <button
                key={i}
                onClick={() => navigator.clipboard.writeText(prompt)}
                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(20,18,10,0.85)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "0.9rem 1.2rem", cursor: "pointer", textAlign: "left", transition: "border-color 0.2s, box-shadow 0.2s", width: "100%" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.6)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(212,175,55,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.2)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
              >
                <span style={{ flexShrink: 0, fontFamily: "'Orbitron', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#D4AF37", minWidth: "20px" }}>{i + 1}.</span>
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", lineHeight: 1.5, flex: 1 }}>{prompt}</span>
                <span style={{ flexShrink: 0, fontSize: "0.75rem", color: "rgba(212,175,55,0.6)", letterSpacing: "0.5px" }}>copy</span>
              </button>
            ))}
          </div>
        </section>

        {/* What to Avoid */}
        <section style={{ marginBottom: "3.5rem", background: "rgba(180,30,30,0.06)", border: "1px solid rgba(200,60,60,0.25)", borderRadius: "16px", padding: "1.6rem 1.8rem" }}>
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#e07070", letterSpacing: "1.5px", marginBottom: "1rem" }}>⚠️ WHAT TO AVOID</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              ["Too vague", "just say \"logo\" with no details"],
              ["Too many elements", "max 1–2 symbols per prompt"],
              ["No background color specified", "always mention white, black, or dark"],
              ["No font style mentioned", "add serif, sans-serif, script, or bold condensed"],
            ].map(([label, detail]) => (
              <div key={label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#e07070", fontSize: "0.9rem", flexShrink: 0, marginTop: "1px" }}>✗</span>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                  <strong style={{ color: "#e07070" }}>{label}</strong> — {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Tools */}
        <section>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#E8C87C", textAlign: "center", marginBottom: "1.6rem", letterSpacing: "1px" }}>
            Explore Our Other AI Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.9rem" }}>
            {otherTools.map((tool) => (
              <a key={tool.url} href={tool.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", gap: "0.3rem", padding: "1rem 1.1rem", background: "rgba(20,18,10,0.85)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "12px", textDecoration: "none", color: "inherit", transition: "border-color 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.6)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(212,175,55,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.2)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
              >
                <span style={{ fontSize: "1.5rem" }}>{tool.icon}</span>
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#D4AF37" }}>{tool.name}</span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{tool.desc}</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="https://logo.deepvortexai.com" style={{ display: "inline-block", padding: "0.7rem 2rem", background: "linear-gradient(135deg, #B8860B, #D4AF37)", color: "#0a0a0a", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.5px" }}>
            Start Creating Logos →
          </Link>
        </div>

      </main>

      <footer style={{ textAlign: "center", padding: "2rem 1rem", borderTop: "1px solid rgba(212,175,55,0.15)", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
        <a href="https://deepvortexai.com" style={{ color: "rgba(212,175,55,0.6)", textDecoration: "none" }}>Deep Vortex AI</a> — Building the complete AI creative ecosystem
      </footer>
    </div>
  );
}
