"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import sipatuh from "../assets/sipatuh.png";
import nike from "../assets/nike.png";
import webshit from "../assets/webshit.png";
import barber from "../assets/barber.png";
import atapu from "../assets/atapu.png";
import asset from "../assets/asset.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type FolderColor = "blue" | "gray" | "yellow" | "green" | "pink" | "purple";

type FolderItem = {
  id: number;
  label: string;
  color: FolderColor;
  image: StaticImageData | null;
  description: string;
  tags?: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const items: FolderItem[] = [
  {
    id: 1,
    label: "Business",
    color: "blue",
    image: webshit,
    description:
      "Focusing on long-term growth through a dedication to professionalism. We are committed to creating solutions that support your business sustainability amidst competitive market challenges.",
    tags: ["Solutions", "Vision", "Professionalism"],
  },
  {
    id: 2,
    label: "Store",
    color: "yellow",
    image: atapu,
    description:
      "Prioritizing lightning-fast transaction speed with high-level payment security. We offer competitive pricing for gamers to ensure a more affordable and worry-free top-up experience.",
    tags: ["Speed", "Security", "Competitive Pricing"],
  },
  {
    id: 3,
    label: "Barbershop",
    color: "gray",
    image: barber,
    description:
      "Providing user convenience in scheduling haircuts for better time management. Enhance customer loyalty through a personalized and efficient booking system that eliminates long waits.",
    tags: ["PStyle", "Comfort", "Confidence"],
  },
  {
    id: 4,
    label: "Warehouse",
    color: "green",
    image: asset,
    description:
      "Optimize your supply chain with our smart warehouse management system. Monitor stock in real-time, manage inbound and outbound inventory with precision, and reduce human error—all within one integrated dashboard.",
    tags: ["Efficiency", "Stock Control", "Data Accuracy"],
  },
  {
    id: 5,
    label: "School",
    color: "purple",
    image: sipatuh,
    description:
      "Building transparency between schools and parents through real-time monitoring of student behavior. This system ensures accountability in every violation record for improved discipline.",
    tags: ["Transparency", "Accountability", "Real-Time Monitoring"],
  },
  {
    id: 6,
    label: "Brand",
    color: "pink",
    image: nike,
    description:
      "Delivering boundless innovation in every product to support your peak athletic performance. Serving as a source of inspiration for every individual to keep moving and push beyond their limits.",
    tags: ["Innovation", "Performance", "Inspiration"],
  },
];

// ─── Folder color palette (SVG fill values + tag colors) ─────────────────────
// These stay in JS because SVG gradients require inline hex values.

const folderColors: Record<
  FolderColor,
  { tab: string; bodyTop: string; bodyMid: string; bodyBot: string; shadow: string; accent: string; tagBg: string }
> = {
  blue:   { tab: "#76C4F7", bodyTop: "#7DC9F7", bodyMid: "#59B6F2", bodyBot: "#3E9EE0", shadow: "rgba(90,160,230,0.35)",  accent: "#1a82c4", tagBg: "#ddf0fd" },
  gray:   { tab: "#B0B8C4", bodyTop: "#BCC4CE", bodyMid: "#9AA4B0", bodyBot: "#7E8A98", shadow: "rgba(100,110,130,0.3)",  accent: "#5f6b78", tagBg: "#eaecef" },
  yellow: { tab: "#FFD97A", bodyTop: "#FFE08A", bodyMid: "#F5C842", bodyBot: "#DBA820", shadow: "rgba(220,170,30,0.35)",  accent: "#a06800", tagBg: "#fff4cc" },
  green:  { tab: "#7DD98A", bodyTop: "#8AE296", bodyMid: "#5EC96D", bodyBot: "#3EAD4E", shadow: "rgba(60,170,80,0.3)",   accent: "#2d8a40", tagBg: "#dff5e3" },
  pink:   { tab: "#F4A7C0", bodyTop: "#F8B8CF", bodyMid: "#EE87AB", bodyBot: "#D9638E", shadow: "rgba(210,90,140,0.3)",  accent: "#c0436e", tagBg: "#fde8f0" },
  purple: { tab: "#B9A0F0", bodyTop: "#C4AEF5", bodyMid: "#9E82E8", bodyBot: "#7E60D2", shadow: "rgba(120,90,210,0.3)", accent: "#6040b8", tagBg: "#ede8fc" },
};

// ─── Folder SVG ───────────────────────────────────────────────────────────────
// SVG gradients require inline hex stops — cannot be replaced with CSS classes.

function FolderSVG({ color = "blue", size = 110 }: { color?: FolderColor; size?: number }) {
  const c = folderColors[color];
  const uid = `pf-${color}-${size}`;
  return (
    <svg
      viewBox="0 0 72 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: Math.round(size * 0.83), display: "block" }}
    >
      <defs>
        <linearGradient id={`${uid}-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor={c.bodyTop} />
          <stop offset="0.5" stopColor={c.bodyMid} />
          <stop offset="1"   stopColor={c.bodyBot} />
        </linearGradient>
      </defs>
      <rect x="2"  y="12" width="30" height="10" rx="3"   fill={c.tab} />
      <rect x="2"  y="18" width="68" height="38" rx="5"   fill={`url(#${uid}-b)`} />
      <rect x="4"  y="19" width="64" height="5"  rx="2.5" fill="rgba(255,255,255,0.28)" />
      <rect x="4"  y="51" width="64" height="3"  rx="1.5" fill="rgba(0,0,0,0.07)" />
    </svg>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ item, onClose }: { item: FolderItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const c = folderColors[item.color];

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 10);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => {
    setOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`pf-overlay ${open ? "open" : ""}`} onClick={close}>
      <div
        className={`pf-modal ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / placeholder */}
        <div
          className="pf-modal-img"
          style={{
            background: item.image
              ? "#f5f5f0"
              : `linear-gradient(145deg, ${c.bodyTop} 0%, ${c.bodyBot} 100%)`,
          }}
        >
          {item.image ? (
            <Image src={item.image} alt={item.label} fill style={{ objectFit: "cover" }} />
          ) : (
            <div style={{ opacity: 0.45, filter: `drop-shadow(0 8px 24px ${c.shadow})` }}>
              <FolderSVG color={item.color} size={88} />
            </div>
          )}

          {/* Colored accent bar */}
          <div
            className="pf-modal-bar"
            style={{ background: `linear-gradient(90deg, ${c.bodyMid}, ${c.tab})` }}
          />

          <button className="pf-modal-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="pf-modal-body">
          <div className="pf-modal-title-row">
            <FolderSVG color={item.color} size={36} />
            <h2 className="pf-modal-title">{item.label}</h2>
          </div>

          <p className="pf-modal-desc">{item.description}</p>

          {item.tags && (
            <div className="pf-tags">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="pf-tag"
                  style={{ background: c.tagBg, color: c.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Folder Card ──────────────────────────────────────────────────────────────

function FolderCard({
  item,
  index,
  visible,
  onOpen,
}: {
  item: FolderItem;
  index: number;
  visible: boolean;
  onOpen: () => void;
}) {
  const c = folderColors[item.color];

  return (
    <div
      className={`pf-folder-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 65}ms` }}
      onClick={onOpen}
    >
      <div
        className="pf-folder-icon"
        style={{ filter: `drop-shadow(0 5px 10px ${c.shadow})` }}
      >
        <FolderSVG color={item.color} size={110} />
      </div>
      <span className="pf-folder-label">{item.label}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [openItem, setOpenItem] = useState<FolderItem | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pf-section">
      {/* Header */}
      <header className="pf-header">
        <div className="pf-header-inner">
          <FolderSVG color="blue" size={38} />
          <span className="pf-header-title">Portofolio</span>
        </div>
      </header>

      {/* Hero */}
      <div className="pf-hero-wrap">
        <h1 className="pf-hero-title">
          Some projects
          <br />
          that I have worked on
        </h1>
        <p className="pf-hero-sub">Click a folder to explore</p>
      </div>

      {/* Grid */}
      <main className="pf-grid-wrap">
        <div className="pf-grid">
          {items.map((item, i) => (
            <FolderCard
              key={item.id}
              item={item}
              index={i}
              visible={visible}
              onOpen={() => setOpenItem(item)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      {openItem && (
        <Modal item={openItem} onClose={() => setOpenItem(null)} />
      )}
    </section>
  );
}