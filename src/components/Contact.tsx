import React from "react";
import Image, { StaticImageData } from "next/image";
import finderIcon from "../assets/find.png";
import websiteIcon from "../assets/white.png";
import appstoreIcon from "../assets/appstore.png";
import discordIcon from "../assets/dc.png";
import vscodeIcon from "../assets/vsc.png";

type IconItem = {
  label: string;
  delay: number;
  image: StaticImageData;
};

const icons: IconItem[] = [
  { label: "Finder",    delay: 0,   image: finderIcon },
  { label: "Website",   delay: 0.3, image: websiteIcon },
  { label: "App Store", delay: 0.6, image: appstoreIcon },
  { label: "Discord",   delay: 0.9, image: discordIcon },
  { label: "VS Code",   delay: 1.2, image: vscodeIcon },
];

export default function DigitalCorner() {
  return (
    <div
      id="digital-corner"
      className="
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-10 lg:px-16
        pt-0
        -mt-2 sm:-mt-3 md:-mt-4
        pb-12 sm:pb-20 md:pb-28 lg:pb-36
        mb-4 sm:mb-6 md:mb-10 lg:mb-16
        bg-white relative z-10
      "
    >
      {/* ── Hero text ── */}
      <p
        className="
          hero-text text-center leading-relaxed text-gray-900
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl
          mb-12 sm:mb-20 md:mb-28 lg:mb-36
        "
        style={{ fontWeight: 400 }}
      >
        Huge thanks for stopping by my digital corner! I hope you're digging
        what I've been working on. Whether you've got a project that needs some
        magic, or you just want to link up and talk shop, hit me up! I'm always
        down to connect with like-minded people and see where we can take
        things.
      </p>

      {/* ── Dock ── */}
      <div className="dock-wrap w-full flex justify-center px-2">
        <div
          className="
            flex items-end
            gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4
            px-2 xs:px-2.5 sm:px-3 md:px-4 lg:px-5
            py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5
            rounded-xl sm:rounded-2xl md:rounded-3xl
          "
          style={{
            background: "rgba(200,200,210,0.18)",
            border: "0.5px solid rgba(0,0,0,0.12)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {icons.map(({ label, delay, image }) => (
            <div
              key={label}
              className="
                dock-icon relative flex items-center justify-center
                cursor-pointer flex-shrink-0
                transition-all duration-300
                hover:-translate-y-3 hover:scale-110
              "
              style={{
                animation: `float 3.6s ease-in-out ${delay}s infinite`,
                borderRadius: "16px",
                // Fluid sizing: tiny on mobile, grows with viewport
                width:  "clamp(40px, 11vw, 72px)",
                height: "clamp(40px, 11vw, 72px)",
              }}
            >
              {/* Tooltip */}
              <span className="tooltip">{label}</span>

              {/* Icon image */}
              <Image
                src={image}
                alt={label}
                draggable={false}
                className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] select-none"
                style={{
                  width:  "clamp(24px, 6.5vw, 46px)",
                  height: "clamp(24px, 6.5vw, 46px)",
                }}
                // next/image needs explicit width/height or fill; use fill + sized container
                width={46}
                height={46}
              />

              <span className="pulse-dot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}