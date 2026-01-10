"use client";

export default function Home() {
  // Branch positions (percentage-based for responsive scaling)
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

  // Buttons - positioned independently with consistent size
  // Positioned at the END of each branch (accounting for branch height)
  const buttons = [
    {
      id: 1,
      src: "/homepage/button-1.png",
      left: "3%",
      top: "21%", // Branch 1 ends around here (starts at 5%, long branch)
      delay: "0s",
      link: "/basecamp-genesis",
    },
    {
      id: 2,
      src: "/homepage/button-2.png",
      left: "14%",
      top: "28%", // Branch 2 ends around here (starts at 5%, medium branch)
      delay: "0.5s",
      link: "/into-the-wild",
    },
    {
      id: 3,
      src: "/homepage/button-3.png",
      left: "31%",
      top: "22%", // Branch 3 ends around here (starts at 15%, short branch)
      delay: "1s",
      link: "/footprints-secured",
    },
    {
      id: 4,
      src: "/homepage/button-4.png",
      left: "43%",
      top: "26%", // Branch 4 ends around here (starts at 15%)
      delay: "0.3s",
      link: "/the-next-expedition",
    },
    {
      id: 5,
      src: "/homepage/button-5.png",
      left: "56%",
      top: "22%", // Branch 5 ends around here (starts at 15%)
      delay: "0.7s",
      link: "/gear-unlocked",
    },
    {
      id: 6,
      src: "/homepage/button-6.png",
      left: "67%",
      top: "27%", // Branch 6 ends around here (starts at 5%, long branch)
      delay: "0.2s",
      link: "/across-the-trail",
    },
    {
      id: 7,
      src: "/homepage/button-7.png",
      left: "80%",
      top: "22%", // Branch 7 ends around here (starts at 5%, long branch)
      delay: "0.8s",
      link: "/voice-from-commander",
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

        {/* Header - Alhemo logo with subtle swing animation */}
        <div className="homepage-header">
          <img
            src="/homepage/homepage_header.png"
            alt="Alhemo - Nemo the explorer"
            className="header-image"
          />
        </div>

        {/* Animated Branch Overlays */}
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

        {/* Navigation Buttons - Independent positioning with consistent size */}
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.link}
            className="nav-button"
            style={{
              left: button.left,
              top: button.top,
              animationDelay: button.delay,
            }}
          >
            <img
              src={button.src}
              alt={`Navigation button ${button.id}`}
              className="button-image"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
