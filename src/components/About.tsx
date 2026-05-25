"use client";

import { useState } from "react";
import Image from "next/image";
import me from "@/assets/me.jpeg";
import arrowImg from "../assets/arrow.png";

/* ── Tech stack items ── */
const STACK_ITEMS = [
  { name: "React.jsx",  icon: "⚛️",  ext: "jsx",   top: "8%",   left: "4%",   rotate: "-8deg",  iconBg: "#e8f4fd", iconColor: undefined },
  { name: "Next.js",   icon: "▲",   ext: "js",    top: "5%",   right: "6%",  rotate: "6deg",   iconBg: "#fff",    iconColor: "#000"    },
  { name: "TypeScript",icon: "TS",  ext: "ts",    top: "32%",  left: "2%",   rotate: "-4deg",  iconBg: "#3178c6", iconColor: "#fff"    },
  { name: "Figma.fig", icon: "🎨",  ext: "fig",   top: "55%",  left: "8%",   rotate: "7deg",   iconBg: "#fff",    iconColor: undefined },
  { name: "Tailwind",  icon: "💨",  ext: "css",   top: "72%",  left: "3%",   rotate: "-6deg",  iconBg: "#e0f7fa", iconColor: undefined },
  { name: "Node.js",   icon: "🟢",  ext: "js",    top: "28%",  right: "4%",  rotate: "9deg",   iconBg: "#fff",    iconColor: undefined },
  { name: "Framer",    icon: "▣",   ext: "framer",top: "52%",  right: "3%",  rotate: "-5deg",  iconBg: "#0d0d0d", iconColor: "#fff"    },
  { name: "Git.init",  icon: "🐙",  ext: "init",  top: "75%",  right: "7%",  rotate: "4deg",   iconBg: "#f05032", iconColor: undefined },
];

/* ── Phone Mockup ── */
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
    <div style={{ width: 32, height: 4, borderRadius: 10, background: "#555", margin: "0 auto 4px" }} />
    <div
      style={{
        position: "absolute", top: 18, right: 14, width: 32, height: 32,
        borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#3a3835",
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </div>
    <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>Nanas</p>
    <p className="font-body" style={{ fontSize: 10, color: "#aaa", marginTop: -6, marginBottom: 2 }}>
      hafizhas14des@gmail.com
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {[{ label: "Web", bg: "#6ee28a" }, { label: "UX/UI", bg: "#e8c4c4" }, { label: "Mobile", bg: "#f6c96b" }].map((t) => (
        <span key={t.label} className="font-body" style={{ fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "4px 12px", background: t.bg, color: "#111" }}>
          {t.label}
        </span>
      ))}
    </div>
    <span className="font-body" style={{ fontSize: 11, background: "#4a9e6b", color: "#fff", borderRadius: 20, padding: "5px 12px", textAlign: "center" }}>
      User experience
    </span>
    <div className="font-body" style={{ marginTop: "auto", fontSize: 11, color: "#888", background: "#3a3835", borderRadius: 10, padding: "8px 10px" }}>
      Message
    </div>
    <div className="font-body" style={{ fontSize: 11, fontWeight: 700, background: "#3b70f5", color: "#fff", borderRadius: 10, padding: "8px 0", textAlign: "center" }}>
      Hire
    </div>
  </div>
);

/* ── Hover Card ── */
const HoverCard = ({
  children, style, onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 28,
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        flexShrink: 0,
        transform: hovered ? "translateY(-16px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 32px 64px rgba(0,0,0,0.28)" : "0 8px 28px rgba(0,0,0,0.18)",
        transition: "transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.38s ease",
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
      <span style={{ padding: "9px 20px", fontSize: 14, fontWeight: 500, color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", borderRight: "1px solid rgba(255,255,255,0.15)" }}>
        Copy
      </span>
      <span style={{ padding: "9px 20px", fontSize: 14, fontWeight: 500, color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
        Paste
      </span>
      <span style={{ position: "absolute", bottom: -7, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #1f1f1f" }} />
    </span>
    <span style={{ background: "#b8d4f8", color: "#0a0a0a", borderRadius: 4, padding: "0 3px", position: "relative", display: "inline-block" }}>
      {word}
      <span style={{ width: 11, height: 11, background: "#2563eb", borderRadius: "50%", position: "absolute", bottom: -6, left: -3, display: "block" }} />
      <span style={{ width: 11, height: 11, background: "#2563eb", borderRadius: "50%", position: "absolute", bottom: -6, right: -3, display: "block" }} />
      <span className="lwt-cursor" style={{ position: "absolute", bottom: 2, right: 0, width: 2, height: "75%", background: "#2563eb", display: "block" }} />
    </span>
  </span>
);

/* ── AirDrop Modal ── */
const AirDropModal = ({
  onDecline, onAccept, onClose,
}: {
  onDecline: () => void;
  onAccept: () => void;
  onClose: () => void;
}) => (
  <div className="ad-overlay" onClick={onClose}>
    <div className="ad-context-menu" onClick={(e) => e.stopPropagation()}>
      <span className="ad-context-item">Copy</span>
      <span className="ad-context-item">Add Sticker</span>
      <span className="ad-context-item">Share...</span>
    </div>
    <div className="ad-sheet" onClick={(e) => e.stopPropagation()}>
      <div className="ad-header">
        <p className="ad-title">AirDrop</p>
        <p className="ad-subtitle">Tak kenal, maka tak sayang. Hi sayang, aku Nanas ingin membagikan sesuatu melalui AirDrop</p>
      </div>
      <div className="ad-photo">
        <Image src={me} alt="Nanas" fill style={{ objectFit: "cover", display: "block" }} />
      </div>
      <div className="ad-actions">
        <button className="ad-btn ad-btn--decline" onClick={onDecline}>Reject</button>
        <button className="ad-btn ad-btn--accept" onClick={onAccept}>Accept</button>
      </div>
    </div>
  </div>
);

/* ── macOS File Card ── */
const MacFileCard = ({
  item,
  index,
  selected,
  onSelect,
}: {
  item: typeof STACK_ITEMS[number];
  index: number;
  selected: boolean;
  onSelect: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  const isTextIcon = item.icon === "▲" || item.icon === "TS" || item.icon === "▣";

  return (
    <div
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        top: item.top,
        left: "left" in item ? item.left : "auto",
        right: "right" in item ? item.right : "auto",
        transform: `rotate(${item.rotate}) scale(${hovered ? 1.1 : 1}) translateY(${hovered ? "-4px" : "0"})`,
        transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        zIndex: selected ? 20 : hovered ? 15 : 10,
        animationDelay: `${index * 0.06}s`,
        userSelect: "none",
      }}
    >
      {/* macOS file icon */}
      <div
        style={{
          width: 72,
          height: 88,
          background: item.iconBg,
          borderRadius: 10,
          border: selected
            ? "2px solid rgba(59, 130, 246, 0.9)"
            : "1px solid rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: selected
            ? "0 0 0 4px rgba(59,130,246,0.25), 0 6px 20px rgba(0,0,0,0.4)"
            : hovered
            ? "0 8px 24px rgba(0,0,0,0.4)"
            : "0 4px 14px rgba(0,0,0,0.3)",
          position: "relative",
          overflow: "hidden",
          transition: "box-shadow 0.2s ease, border 0.2s ease",
        }}
      >
        {/* Dog-ear fold — top right corner */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0 20px 20px 0",
            borderColor: `transparent rgba(0,0,0,0.18) transparent transparent`,
          }}
        />

        {/* Icon */}
        {isTextIcon ? (
          <span
            style={{
              fontSize: item.icon === "TS" ? 22 : 26,
              fontWeight: 900,
              color: item.iconColor ?? "#000",
              lineHeight: 1,
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            {item.icon}
          </span>
        ) : (
          <span style={{ fontSize: 30, lineHeight: 1 }}>{item.icon}</span>
        )}

        {/* Extension badge */}
        <span
          style={{
            marginTop: 4,
            fontSize: 9,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color:
              item.iconColor === "#fff"
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.35)",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {item.ext}
        </span>

        {/* Selected overlay tint */}
        {selected && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(59, 130, 246, 0.12)",
              borderRadius: 9,
            }}
          />
        )}
      </div>

      {/* Filename label */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: "#fff",
          textAlign: "center",
          textShadow: "0 1px 4px rgba(0,0,0,0.9)",
          padding: selected ? "2px 8px" : "0",
          background: selected ? "rgba(59,130,246,0.75)" : "transparent",
          borderRadius: selected ? 4 : 0,
          whiteSpace: "nowrap",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          transition: "background 0.15s ease",
        }}
      >
        {item.name}
      </span>
    </div>
  );
};

/* ── Stack Modal — macOS file card style ── */
const StackModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div
      className="sk-overlay"
      onClick={() => { setSelectedIndex(null); onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Inner container — relative anchor for file cards */}
      <div
        style={{
          position: "relative",
          width: "min(860px, 92vw)",
          height: "min(580px, 85vh)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
      >



        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "#fff",
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 30,
            backdropFilter: "blur(4px)",
          }}
        >
          ✕
        </button>

        {/* macOS File Cards */}
        {STACK_ITEMS.map((item, i) => (
          <MacFileCard
            key={item.name}
            item={item}
            index={i}
            selected={selectedIndex === i}
            onSelect={() => setSelectedIndex(i === selectedIndex ? null : i)}
          />
        ))}

        {/* Phone Mockup — center anchor */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ position: "relative", zIndex: 5 }}
        >
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
export default function LetsWorkTogether() {
  const [showAirDrop, setShowAirDrop] = useState(false);
  const [showStack, setShowStack] = useState(false);

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
        {/* ── LEFT ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, flexShrink: 0 }}>
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
            <span style={{ display: "block" }}>Let&apos;s <SelectedWord word="Work" /></span>
            Together
          </h2>

          <div style={{ position: "relative", width: 380, height: 320 }}>
            {/* Foto — klik → AirDrop modal */}
            <HoverCard
              onClick={() => setShowAirDrop(true)}
              style={{ position: "absolute", left: 0, bottom: 0, width: 210, height: 260, transform: "rotate(-6deg)", zIndex: 1 }}
            >
              <Image src={me} alt="Nanas" fill style={{ objectFit: "cover" }} />
            </HoverCard>

            {/* Arrow */}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <Image src={arrowImg} alt="Arrow" width={60} height={60} style={{ objectFit: "contain" }} />
            </div>

            {/* Phone Mockup — klik → Stack modal */}
            <HoverCard
              onClick={() => setShowStack(true)}
              style={{ position: "absolute", right: 0, top: 0, transform: "rotate(4deg)", zIndex: 2 }}
            >
              <PhoneMockup />
            </HoverCard>
          </div>
        </div>

        {/* ── RIGHT: Quote ── */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p className="subtitle">
            &ldquo;Yo! I&apos;m a web and mobile dev always looking to build something
            &ldquo;crazy,&rdquo; and I&apos;m really digging your vibe. I&apos;ve been following what
            you&apos;re doing and I think we&apos;re on the same wavelength. It would be
            totally dope to tag team on a project and cook up a killer app or
            platform together. I&apos;m talking about something that actually breaks
            the mold, not just another generic build. With my technical side and
            your vision, we could definitely make some magic happen. Hit me up
            if you&apos;re down to collab&mdash;let&apos;s build something epic!&rdquo;
          </p>
        </div>
      </div>

      {/* AirDrop Modal */}
      {showAirDrop && (
        <AirDropModal
          onClose={() => setShowAirDrop(false)}
          onDecline={() => setShowAirDrop(false)}
          onAccept={() => setShowAirDrop(false)}
        />
      )}

      {/* Stack Modal */}
      {showStack && <StackModal onClose={() => setShowStack(false)} />}
    </section>
  );
}