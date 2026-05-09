"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import porto from "../assets/porto.png";
import basketballImg from "../assets/sipatuh.png";
import pingpongImg from "../assets/nike.png";
import footballImg from "../assets/webshit.png";
import racingImg from "../assets/barber.png";

type PortfolioItem = {
  id: number;
  title: string;
  type: "text" | "image";
  image: StaticImageData | null;
};

const items: PortfolioItem[] = [
  { id: 1, title: "COMPANY", type: "text", image: null },
  { id: 2, title: "Basketball", type: "image", image: basketballImg },
  { id: 3, title: "BUSINESS", type: "text", image: null },
  { id: 4, title: "Ping Pong", type: "image", image: pingpongImg },
  { id: 5, title: "Football", type: "image", image: footballImg },
  { id: 6, title: "SCHOOL", type: "text", image: null },
  { id: 7, title: "Racing", type: "image", image: racingImg },
  { id: 8, title: "BRAND", type: "text", image: null },
];

const gridPositions = [
  "col-span-1 row-span-1 lg:col-start-1 lg:row-start-1",
  "col-span-1 row-span-2 lg:col-start-2 lg:row-start-1",
  "col-span-1 row-span-1 lg:col-start-3 lg:row-start-1",
  "col-span-1 row-span-2 lg:col-start-4 lg:row-start-1",
  "col-span-1 row-span-2 lg:col-start-1 lg:row-start-2",
  "col-span-1 row-span-1 lg:col-start-2 lg:row-start-3",
  "col-span-1 row-span-2 lg:col-start-3 lg:row-start-2",
  "col-span-1 row-span-1 lg:col-start-4 lg:row-start-3",
];

interface CardProps {
  item: PortfolioItem;
  index: number;
  visible: boolean;
  gridClass: string;
}

function PortfolioCard({ item, index, visible, gridClass }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const delay = `${index * 70}ms`;
  const baseShadow =
    item.type === "image"
      ? "0 4px 12px rgba(0,0,0,0.15)"
      : "0 2px 8px rgba(0,0,0,0.04)";
  const hoverShadow =
    item.type === "image"
      ? "0 20px 48px rgba(0,0,0,0.25)"
      : "0 18px 48px rgba(0,0,0,0.12)";

  const enterAnim: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? hovered
        ? "translateY(-6px) scale(1.02)"
        : "translateY(0) scale(1)"
      : "translateY(30px) scale(0.95)",
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay},
                 transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay},
                 box-shadow 0.3s ease, 
                 background 0.25s ease`,
    boxShadow: hovered ? hoverShadow : baseShadow,
    zIndex: hovered ? 20 : 1,
    willChange: "transform, opacity, box-shadow",
  };

  if (item.type === "image" && item.image) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden cursor-pointer ${gridClass}`}
        style={enterAnim}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover block"
          placeholder="blur"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center ${gridClass}`}
      style={{
        ...enterAnim,
        background: hovered ? "#e5e9f0" : "#f4f6f9",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-bold text-[#5c6c84] text-base md:text-lg lg:text-xl select-none text-center px-4"
        style={{
          letterSpacing: hovered ? "0.15em" : "0.05em",
          transition: "letter-spacing 0.35s ease",
        }}
      >
        {item.title}
      </span>
    </div>
  );
}

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="portfolio" className="min-h-screen bg-white flex flex-col items-center">
      {/* ── Header ── */}
      <header className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-md flex justify-center h-16 px-7">
        <div className="w-full max-w-5xl flex items-center gap-3">
          <div className="w-8 h-8 shrink-0 flex items-center justify-center">
            <Image
              src={porto}
              alt="Portofolio Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-slate-800 text-lg tracking-wide">
            Portofolio
          </span>
        </div>
      </header>

      {/* ── Grid Container ── */}
      <main className="p-4 md:p-7 mt-[20px] md:mt-[40px] w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[120px] md:auto-rows-[160px] grid-flow-dense gap-4 md:gap-5 w-full max-w-5xl">
          {items.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              visible={visible}
              gridClass={gridPositions[i]}
            />
          ))}
        </div>
      </main>
    </section>
  );
}