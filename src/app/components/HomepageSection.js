"use client";

// Target button size as percentage of viewport width
const TARGET_BUTTON_SIZE = 12;
// Reference branch width for calculating consistent positioning
const REFERENCE_BRANCH_WIDTH = 11;
// Target distance from branch (as % of reference branch)
const TARGET_TOP_OFFSET = 130;

// Helper to calculate consistent positioning relative to varying branch widths
const calcRelativeTop = (branchWidth) =>
  `${(TARGET_TOP_OFFSET * REFERENCE_BRANCH_WIDTH) / branchWidth}%`;

// Combined branches and buttons data - buttons are associated with their branches
const branchesWithButtons = [
  {
    id: 1,
    branchSrc: "/homepage/branch-1.png",
    left: "7%",
    top: "5%",
    width: "11%",
    delay: "0s",
    duration: "4s",
    button: {
      src: "/homepage/button-1.png",
      // Position relative to the branch wrapper (percentage of branch wrapper)
      relativeLeft: "-10%",
      relativeTop: calcRelativeTop(16), // 130%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 11) * 100}%`,
      link: "/basecamp-genesis",
      scrollTo: "basecamp-genesis",
    },
  },
  {
    id: 2,
    branchSrc: "/homepage/branch-2.png",
    left: "19.7%",
    top: "5%",
    width: "3.8%",
    delay: "0.5s",
    duration: "3.5s",
    button: {
      src: "/homepage/button-2.png",
      relativeLeft: "-100%",
      relativeTop: calcRelativeTop(15), // ~376%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 3.8) * 100}%`,
      link: "/gear-unlocked",
      scrollTo: "gear-unlocked",
    },
  },
  {
    id: 3,
    branchSrc: "/homepage/branch-3.png",
    left: "36%",
    top: "15%",
    width: "3%",
    delay: "1s",
    duration: "4.2s",
    button: {
      src: "/homepage/button-3.png",
      relativeLeft: "-150%",
      relativeTop: calcRelativeTop(16), // ~477%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 3) * 100}%`,
      link: "/into-the-wild",
      scrollTo: "into-the-wild",
    },
  },
  {
    id: 4,
    branchSrc: "/homepage/branch-4.png",
    left: "47%",
    top: "15%",
    width: "3.5%",
    delay: "0.3s",
    duration: "3.8s",
    button: {
      src: "/homepage/button-4.png",
      relativeLeft: "-120%",
      relativeTop: calcRelativeTop(16), // ~409%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 3.5) * 100}%`,
      link: "/across-the-trail",
      scrollTo: "across-the-trail",
    },
  },
  {
    id: 5,
    branchSrc: "/homepage/branch-5.png",
    left: "61%",
    top: "15%",
    width: "3.2%",
    delay: "0.7s",
    duration: "4.5s",
    button: {
      src: "/homepage/button-5.png",
      relativeLeft: "-140%",
      relativeTop: calcRelativeTop(16), // ~447%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 3.2) * 100}%`,
      link: "/footprints-secured",
      scrollTo: "footprints-secured",
    },
  },
  {
    id: 6,
    branchSrc: "/homepage/branch-6.png",
    left: "70%",
    top: "5%",
    width: "11.4%",
    delay: "0.2s",
    duration: "3.6s",
    button: {
      src: "/homepage/button-6.png",
      relativeLeft: "-5%",
      relativeTop: calcRelativeTop(15.6), // ~125%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 11.4) * 100}%`,
      link: "/voice-from-commander",
      scrollTo: "voice-from-commander",
    },
  },
  {
    id: 7,
    branchSrc: "/homepage/branch-7.png",
    left: "84%",
    top: "5%",
    width: "12%",
    delay: "0.8s",
    duration: "4.1s",
    button: {
      src: "/homepage/button-7.png",
      relativeLeft: "-5%",
      relativeTop: calcRelativeTop(15.6), // ~119%
      buttonWidth: `${(TARGET_BUTTON_SIZE / 12) * 100}%`,
      link: "/the-next-expedition",
      scrollTo: "the-next-expedition",
    },
  },
];

export default function HomepageSection({ useScrollLinks = false }) {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="homepage">
      <div className="background-wrapper">
        <img
          src="/homepage/homepage_main_bg.png"
          alt="Alhemo Newsletter Background"
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

        {/* Header */}
        <div className="homepage-header">
          <img
            src="/homepage/homepage_header.png"
            alt="Alhemo - Nemo the explorer"
            className="header-image"
          />
        </div>

        {/* Nemo Board - Left side with gentle swing */}
        <div className="nemo-board-wrapper">
          <img
            src="/homepage/nemo_board.png"
            alt="Meet Nemo - The unbreakable boy"
            className="nemo-board-image"
          />
        </div>

        {/* Branches with attached Buttons */}
        {branchesWithButtons.map((item) => (
          <div
            key={item.id}
            className="branch-wrapper"
            style={{
              left: item.left,
              top: item.top,
              width: item.width,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            <img
              src={item.branchSrc}
              alt={`Branch ${item.id}`}
              className="branch-image"
            />
            {/* Button nested inside branch - swings with the branch */}
            {useScrollLinks ? (
              <div
                className="nav-button-attached"
                onClick={() => handleScroll(item.button.scrollTo)}
                style={{
                  left: item.button.relativeLeft,
                  top: item.button.relativeTop,
                  width: item.button.buttonWidth,
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.button.src}
                  alt={`Button ${item.id}`}
                  className="button-image"
                />
              </div>
            ) : (
              <a
                href={item.button.link}
                className="nav-button-attached"
                style={{
                  left: item.button.relativeLeft,
                  top: item.button.relativeTop,
                  width: item.button.buttonWidth,
                }}
              >
                <img
                  src={item.button.src}
                  alt={`Button ${item.id}`}
                  className="button-image"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
