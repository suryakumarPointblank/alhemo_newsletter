"use client";

import { House } from "lucide-react";

// Array of flags - adjust left, top, and delay values as needed
const flags = [
  {
    id: 1,
    src: "/across_the_trail/flag1.png",
    left: "12.6%",
    top: "18.5%",
    delay: "0s",
  },
  {
    id: 2,
    src: "/across_the_trail/flag2.png",
    left: "34.6%",
    top: "18.5%",
    delay: "0.3s",
  },
  {
    id: 3,
    src: "/across_the_trail/flag3.png",
    left: "56.6%",
    top: "18.5%",
    delay: "0.6s",
  },
  {
    id: 4,
    src: "/across_the_trail/flag4.png",
    left: "78.3%",
    top: "18.5%",
    delay: "0.9s",
  },
  {
    id: 5,
    src: "/across_the_trail/flag5.png",
    left: "23.6%",
    top: "32.5%",
    delay: "1.2s",
  },
  {
    id: 6,
    src: "/across_the_trail/flag6.png",
    left: "45.6%",
    top: "32.5%",
    delay: "1.5s",
  },
  {
    id: 7,
    src: "/across_the_trail/flag7.png",
    left: "67.6%",
    top: "32.5%",
    delay: "1.8s",
  },
];

export default function AcrossTheTrailSection() {
  return (
    <section className="section" id="across-the-trail">
      <div className="background-wrapper">
        <img
          src="/across_the_trail/main_bg_accross_the_trail.png"
          alt="Across the Trail Background"
          className="main-background"
        />

        {/* Background Trees Overlay */}
        <div className="bg-trees-overlay">
          <img
            src="/homepage/bg_trees.png"
            alt="Background Trees"
            className="bg-trees-image"
          />
        </div>

        {/* Home Button - Top Right */}
        <a href="/" className="home-button" title="Back to Home">
          <House size={28} strokeWidth={2.5} />
        </a>

        {/* Header with swing animation */}
        <div className="section-header">
          <img
            src="/across_the_trail/header.png"
            alt="Across the Trail"
            className="header-image"
          />
        </div>

        {/* Flags with waving animation */}
        {flags.map((flag) => (
          <div
            key={flag.id}
            className="flag-wrapper"
            style={{
              left: flag.left,
              top: flag.top,
              animationDelay: flag.delay,
            }}
          >
            <img
              src={flag.src}
              alt={`Flag ${flag.id}`}
              className="flag-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
