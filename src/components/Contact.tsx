import React from "react";
import finderIcon from "../assets/find.png";
import websiteIcon from "../assets/white.png";
import appstoreIcon from "../assets/appstore.png";
import discordIcon from "../assets/dc.png";
import vscodeIcon from "../assets/vsc.png";

const icons = [
  { label: "Finder", delay: 0, image: finderIcon },
  { label: "Website", delay: 0.3, image: websiteIcon },
  { label: "App Store", delay: 0.6, image: appstoreIcon },
  { label: "Discord", delay: 0.9, image: discordIcon },
  { label: "VS Code", delay: 1.2, image: vscodeIcon },
];

export default function DigitalCorner() {
  return (
    <div
      id="digital-corner"
      className="flex flex-col items-center justify-center px-4 sm:px-6 -mt-12 pb-16 sm:pb-24 md:pb-32 mb-12 sm:mb-16 md:mb-24 bg-white relative z-10"
    >
      {/* Hero text */}
      <p
        className="hero-text text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-900 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mb-16 sm:mb-24 md:mb-36"
        style={{ fontWeight: 400 }}
      >
        Huge thanks for stopping by my digital corner! I hope you're digging
        what I've been working on. Whether you've got a project that needs some
        magic, or you just want to link up and talk shop, hit me up! I'm always
        down to connect with like-minded people and see where we can take
        things.
      </p>

      {/* Dock */}
      <div className="dock-wrap w-full flex justify-center">
        <div
          className="flex items-end gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl"
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
              className="dock-icon relative flex items-center justify-center cursor-pointer flex-shrink-0 transition-all duration-300 hover:-translate-y-3 hover:scale-110"
              style={{
                animation: `float 3.6s ease-in-out ${delay}s infinite`,
                borderRadius: "16px",
                width: "clamp(44px, 10vw, 64px)",
                height: "clamp(44px, 10vw, 64px)",
              }}
            >
              <span className="tooltip">{label}</span>

              {/* Icon image */}
              <img
                src={image.src}
                alt={label}
                draggable={false}
                className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] select-none"
                style={{
                  width: "clamp(28px, 6.5vw, 40px)",
                  height: "clamp(28px, 6.5vw, 40px)",
                }}
              />

              <span className="pulse-dot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}