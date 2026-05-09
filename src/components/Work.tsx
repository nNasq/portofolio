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

const pills: Pill[] = [
  {
    label: "Mobile Dev",
    className: "mobile",
    rotate: "-12deg",
    top: "80px",
    left: "40px",
    icon: <MobileIcon />,
  },
  {
    label: "Interfaces",
    className: "interfaces",
    rotate: "-2deg",
    top: "110px",
    left: "760px",
    icon: <InterfacesIcon />,
  },
  {
    label: "Animation",
    className: "animation",
    rotate: "6deg",
    top: "360px",
    left: "350px",
    icon: <AnimationIcon />,
  },
  {
    label: "Web Dev",
    className: "webdev",
    rotate: "-16deg",
    top: "360px",
    left: "1180px",
    icon: <WebDevIcon />,
  },
];

const SkillPills = () => {
  return (
    <>
      <style>{`
        .skills-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .skill-svg {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
        }
        @media (min-width: 1400px) {
          .skills-scene {
            position: relative;
            width: 100%;
            min-height: 560px;
          }
          .skill-pill {
            position: absolute;
            transform: rotate(var(--rotate));
          }
          .skill-svg {
            width: 60px;
            height: 60px;
          }
        }
        @media (min-width: 1024px) and (max-width: 1399px) {
          .skills-scene {
            position: relative;
            width: 1400px;
            min-height: 560px;
            transform-origin: top left;
            transform: scale(calc(100vw / 1400));
            margin-bottom: calc((560px * (100vw / 1400)) - 560px);
          }
          .skill-pill {
            position: absolute;
            transform: rotate(var(--rotate));
          }
        }
        @media (min-width: 600px) and (max-width: 1023px) {
          .skills-scene {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding: 32px 24px;
          }
          .skill-pill {
            position: static !important;
            top: auto !important;
            left: auto !important;
            transform: rotate(var(--rotate)) !important;
            width: 100%;
            box-sizing: border-box;
          }
          .skill-svg {
            width: 40px;
            height: 40px;
          }
        }
        @media (min-width: 400px) and (max-width: 599px) {
          .skills-scene {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 20px 16px;
          }
          .skill-pill {
            position: static !important;
            top: auto !important;
            left: auto !important;
            transform: rotate(var(--rotate)) !important;
            width: 100%;
            box-sizing: border-box;
          }
          .skill-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .skill-svg {
            width: 32px;
            height: 32px;
          }
        }
        @media (max-width: 399px) {
          .skills-scene {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding: 16px 12px;
          }
          .skill-pill {
            position: static !important;
            top: auto !important;
            left: auto !important;
            transform: rotate(var(--rotate)) !important;
            width: 100%;
            box-sizing: border-box;
          }
          .skill-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .skill-svg {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>

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