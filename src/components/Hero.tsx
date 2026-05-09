"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";
import img1 from "../assets/1.jpg";
import imgMinus5 from "../assets/5.jpg";
import imgDesember from "../assets/4.jpg";
import imgKuning from "../assets/6.jpg";
import imgPinkWhite from "../assets/2.jpg";
import tiga from "../assets/3.jpg";
import imgLagipula from "../assets/7.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const albums = [
  { id: 1, rotate: -18, image: img1, alt: "Album 1" },
  { id: 2, rotate: -8, image: imgPinkWhite, alt: "Pink + White" },
  { id: 3, rotate: -3, image: imgDesember, alt: "Desember" },
  { id: 4, rotate: 3, image: imgKuning, alt: "Kuning" },
  { id: 5, rotate: 8, image: tiga, alt: "tiga" },
  { id: 6, rotate: 14, image: imgMinus5, alt: "Minus 5" },
  { id: 7, rotate: 18, image: imgLagipula, alt: "Lagipula Hidup Akan Berakhir" },
];

function AlbumCard({
  album,
  index,
  total,
}: {
  album: (typeof albums)[0];
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);
  const centerIndex = Math.floor(total / 2);
  const offset = index - centerIndex;
  const zIndex = total - Math.abs(offset);
  const arcYBase = Math.pow(offset, 2);
  const currentRotate = hovered ? album.rotate * 0.85 : album.rotate;

  return (
    <div
      className="albumCard absolute w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
      style={{
        zIndex,
        transform: `
          translateX(calc(${offset} * clamp(45px, 8vw, 135px)))
          translateY(calc(${arcYBase} * clamp(3px, 1vw, 8px) + ${hovered ? "clamp(-8px, -1.5vw, -18px)" : "0px"}))
          rotate(${currentRotate}deg)
          scale(${hovered ? 1.08 : 1})
        `,
        boxShadow: hovered
          ? "0 24px 48px rgba(0,0,0,0.32), 0 8px 16px rgba(0,0,0,0.18)"
          : "0 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)",
        transition: "all 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="albumContent w-full h-full">
        <img
          src={album.image.src}
          alt={album.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const scrollToMarquee = () => {
    const marqueeSection = document.getElementById("marquee");
    if (marqueeSection) {
      marqueeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div aria-hidden="true" className="navbar-spacer" />
      <div
        id="hero"
        className={`hero flex flex-col items-center justify-start md:justify-center w-full min-h-screen px-4 md:px-8 pt-0 md:pt-40 pb-16 overflow-x-hidden ${poppins.className}`}
      >
        <div className="text-center z-10">
          <h2 className="heading text-lg sm:text-xl md:text-2xl mb-2">
            The <span className="headingPlace">place</span> where you can{" "}
            <span className="headingGet">get</span> to{" "}
            <span className="headingKnow">know</span>
          </h2>
          <h1 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
            Hafizh Arrasyiid Syahbana
          </h1>
        </div>

        <div className="fanWrapper relative flex justify-center items-center w-full h-[180px] sm:h-[250px] md:h-[400px] my-4 md:my-8">
          {albums.map((album, i) => (
            <AlbumCard
              key={album.id}
              album={album}
              index={i}
              total={albums.length}
            />
          ))}
        </div>

        <p className="subtitle mt-8 md:mt-10 text-sm sm:text-base md:text-lg text-center max-w-[95%] sm:max-w-2xl md:max-w-3xl leading-relaxed z-10">
          Hello and welcome! This is the official digital portfolio of Hafizh
          Arrasyiid Syahbana. As an IT student, I love combining visual creativity
          with logical problem-solving. This space is dedicated to showcasing my
          professional profile, academic journey, and the various tech innovations
          I've been working on. Take a moment to explore my background and the
          projects I'm passionate about.
        </p>

        <button
          className="scrollBtn mt-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm z-10"
          onClick={scrollToMarquee}
          aria-label="Scroll to marquee section"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <style>{`
        .navbar-spacer {
          width: 100%;
          height: 64px;
          flex-shrink: 0;
        }
        @media (min-width: 769px) {
          .navbar-spacer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}