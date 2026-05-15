"use client";

import { useState } from "react";
import Image from "next/image";
import me from "@/assets/me.jpeg";
import arrowImg from "../assets/arrow.png";

const PhoneMockup = () => (
  <div
    style={{
      width: 200,
      height: 280,
      borderRadius: 28,
      padding: "18px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      position: "relative",
      flexShrink: 0,
      background: "#2d2b27",
      boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
    }}
  >
    <div
      style={{
        width: 32,
        height: 4,
        borderRadius: 10,
        background: "#555",
        margin: "0 auto 4px",
      }}
    />

    <div
      style={{
        position: "absolute",
        top: 18,
        right: 14,
        width: 32,
        height: 32,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#3a3835",
      }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ccc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </div>

    <p
      style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}
    >
      Nanas
    </p>
    <p
      className="font-body"
      style={{ fontSize: 10, color: "#aaa", marginTop: -6, marginBottom: 2 }}
    >
      hafizhas14des@gmail.com
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {[
        { label: "Web", bg: "#6ee28a" },
        { label: "UX/UI", bg: "#e8c4c4" },
        { label: "Mobile", bg: "#f6c96b" },
      ].map((t) => (
        <span
          key={t.label}
          className="font-body"
          style={{
            fontSize: 11,
            fontWeight: 600,
            borderRadius: 20,
            padding: "4px 12px",
            background: t.bg,
            color: "#111",
          }}
        >
          {t.label}
        </span>
      ))}
    </div>

    <span
      className="font-body"
      style={{
        fontSize: 11,
        background: "#4a9e6b",
        color: "#fff",
        borderRadius: 20,
        padding: "5px 12px",
        textAlign: "center",
      }}
    >
      User experience
    </span>

    <div
      className="font-body"
      style={{
        marginTop: "auto",
        fontSize: 11,
        color: "#888",
        background: "#3a3835",
        borderRadius: 10,
        padding: "8px 10px",
      }}
    >
      Message
    </div>
    <div
      className="font-body"
      style={{
        fontSize: 11,
        fontWeight: 700,
        background: "#3b70f5",
        color: "#fff",
        borderRadius: 10,
        padding: "8px 0",
        textAlign: "center",
      }}
    >
      Hire
    </div>
  </div>
);

const HoverCard = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 28,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        transform: hovered
          ? "translateY(-16px) scale(1.04)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 32px 64px rgba(0,0,0,0.28)"
          : "0 8px 28px rgba(0,0,0,0.18)",
        transition:
          "transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.38s ease",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* ── Selected Text Highlight on "Work" ── */
const SelectedWord = ({ word }: { word: string }) => (
  <span style={{ position: "relative", display: "inline-block" }}>
    {/* Popup Copy | Paste */}
    <span
      style={{
        position: "absolute",
        top: -52,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        borderRadius: 10,
        overflow: "hidden",
        background: "#1f1f1f",
        boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
        whiteSpace: "nowrap",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          padding: "9px 20px",
          fontSize: 14,
          fontWeight: 500,
          color: "#fff",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          borderRight: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        Copy
      </span>
      <span
        style={{
          padding: "9px 20px",
          fontSize: 14,
          fontWeight: 500,
          color: "#fff",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        Paste
      </span>
      {/* Arrow */}
      <span
        style={{
          position: "absolute",
          bottom: -7,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "8px solid #1f1f1f",
        }}
      />
    </span>

    {/* Highlighted word */}
    <span
      style={{
        background: "#b8d4f8",
        color: "#0a0a0a",
        borderRadius: 4,
        padding: "0 3px",
        position: "relative",
        display: "inline-block",
      }}
    >
      {word}

      {/* Left handle dot */}
      <span
        style={{
          width: 11,
          height: 11,
          background: "#2563eb",
          borderRadius: "50%",
          position: "absolute",
          bottom: -6,
          left: -3,
          display: "block",
        }}
      />

      {/* Right handle dot */}
      <span
        style={{
          width: 11,
          height: 11,
          background: "#2563eb",
          borderRadius: "50%",
          position: "absolute",
          bottom: -6,
          right: -3,
          display: "block",
        }}
      />

      {/* Blinking cursor */}
      <span
        style={{
          position: "absolute",
          bottom: 2,
          right: 0,
          width: 2,
          height: "75%",
          background: "#2563eb",
          display: "block",
          animation: "lwt-blink 1.1s step-end infinite",
        }}
      />
    </span>

    {/* Keyframes injected once via a style tag */}
    <style>{`
      @keyframes lwt-blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
    `}</style>
  </span>
);

export default function LetsWorkTogether() {
  return (
    <section
      id="lets-work-together"
      style={{
        width: "100%",
        minHeight: "70vh",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "80px 64px 260px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
          flexWrap: "wrap",
        }}
      >
        {/* ── LEFT: Title + Overlapping Images ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#0a0a0a",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginTop: 62,
              textAlign: "center",
            }}
          >
            {/* "Let's " + selected "Work" on the same line */}
            <span style={{ display: "block" }}>
              Let&apos;s{" "}
              <SelectedWord word="Work" />
            </span>
            Together
          </h2>

          <div style={{ position: "relative", width: 380, height: 320 }}>
            <HoverCard
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: 210,
                height: 260,
                transform: "rotate(-6deg)",
                zIndex: 1,
              }}
            >
              <Image src={me} alt="Nanas" fill style={{ objectFit: "cover" }} />
            </HoverCard>

            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <Image
                src={arrowImg}
                alt="Arrow"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>

            <HoverCard
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                transform: "rotate(4deg)",
                zIndex: 2,
              }}
            >
              <PhoneMockup />
            </HoverCard>
          </div>
        </div>

        {/* ── RIGHT: Quote ── */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p className="subtitle">
            "Yo! I'm a web and mobile dev always looking to build something
            "crazy," and I'm really digging your vibe. I've been following what
            you're doing and I think we're on the same wavelength. It would be
            totally dope to tag team on a project and cook up a killer app or
            platform together. I'm talking about something that actually breaks
            the mold, not just another generic build. With my technical side and
            your vision, we could definitely make some magic happen. Hit me up
            if you're down to collab—let's build something epic!"
          </p>
        </div>
      </div>
    </section>
  );
}