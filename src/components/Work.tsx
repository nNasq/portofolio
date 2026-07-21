"use client";
import React from "react";

interface Pill {
  label: string;
  className: string;
  rotate: string;
  top: string;
  left: string;
  icon: React.ReactNode;
}

const MobileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="skill-svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);

const AnimationIcon = () => (
  <svg viewBox="0 0 24 24" className="skill-svg" fill="currentColor">
    <polygon points="5,3 19,12 5,21" opacity={0.4} />
    <polygon
      points="5,3 19,12 5,21"
      transform="translate(4,0)"
      opacity={0.7}
    />
    <polygon points="5,3 19,12 5,21" transform="translate(8,0)" />
  </svg>
);

const InterfacesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="skill-svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="m4.93 4.93 2.83 2.83" />
    <path d="m16.24 16.24 2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="m4.93 19.07 2.83-2.83" />
    <path d="m16.24 7.76 2.83-2.83" />
    <path d="M12 8v4l2 2" />
  </svg>
);

const WebDevIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="skill-svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx={12} cy={12} r={10} />
    <line x1={2} y1={12} x2={22} y2={12} />
    <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" />
  </svg>
);

// MENGUBAH px MENJADI % AGAR POSISI FLUID & RESPONSIF DI DESKTOP
const pills: Pill[] = [
  {
    label: "Mobile Dev",
    className: "mobile",
    rotate: "-12deg",
    top: "15%",
    left: "5%",
    icon: <MobileIcon />,
  },
  {
    label: "Interfaces",
    className: "interfaces",
    rotate: "-2deg",
    top: "20%",
    left: "55%",
    icon: <InterfacesIcon />,
  },
  {
    label: "Animation",
    className: "animation",
    rotate: "6deg",
    top: "55%",
    left: "20%",
    icon: <AnimationIcon />,
  },
  {
    label: "Web Dev",
    className: "webdev",
    rotate: "-16deg",
    top: "60%",
    left: "65%",
    icon: <WebDevIcon />,
  },
];

const SkillPills = () => {
  return (
    <>
      

      <section id="skills" className="skills-wrapper">
        <div className="skills-scene">
          {pills.map((pill) => (
            <div
              key={pill.label}
              className={`skill-pill ${pill.className}`}
              style={
                {
                  top: pill.top,
                  left: pill.left,
                  "--rotate": pill.rotate,
                } as React.CSSProperties
              }
            >
              <span className="skill-icon">{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillPills;