"use client";

import Image from "next/image";

export default function Home() {
  // Branch positions (percentage-based for responsive scaling)
  // These are positioned based on the design reference
  const branches = [
    {
      id: 1,
      src: "/homepage/branch-1.png",
      left: "7%",
      top: "5%",
      width: "11%",
      delay: "0s",
      duration: "4s",
    },
    {
      id: 2,
      src: "/homepage/branch-2.png",
      left: "19.7%",
      top: "5%",
      width: "3.8%",
      delay: "0.5s",
      duration: "3.5s",
    },
    {
      id: 3,
      src: "/homepage/branch-3.png",
      left: "36%",
      top: "15%",
      width: "3%",
      delay: "1s",
      duration: "4.2s",
    },
    {
      id: 4,
      src: "/homepage/branch-4.png",
      left: "47%",
      top: "15%",
      width: "3.5%",
      delay: "0.3s",
      duration: "3.8s",
    },
    {
      id: 5,
      src: "/homepage/branch-5.png",
      left: "61%",
      top: "15%",
      width: "3.2%",
      delay: "0.7s",
      duration: "4.5s",
    },
    {
      id: 6,
      src: "/homepage/branch-6.png",
      left: "70%",
      top: "5%",
      width: "11.4%",
      delay: "0.2s",
      duration: "3.6s",
    },
    {
      id: 7,
      src: "/homepage/branch-7.png",
      left: "84%",
      top: "5%",
      width: "12%",
      delay: "0.8s",
      duration: "4.1s",
    },
  ];

  return (
    <div className="homepage-container">
      {/* Main Background Image - Full Width with aspect ratio preserved */}
      <div className="background-wrapper">
        {/* Using native img to let it define the container height naturally */}
        <img
          src="/homepage/homepage_main_bg.png"
          alt="Alhemo Newsletter Background"
          className="main-background"
        />

        {/* Animated Branch Overlays - positioned relative to image */}
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="branch-wrapper"
            style={{
              left: branch.left,
              top: branch.top,
              width: branch.width,
              animationDelay: branch.delay,
              animationDuration: branch.duration,
            }}
          >
            <img
              src={branch.src}
              alt={`Decorative branch ${branch.id}`}
              className="branch-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
