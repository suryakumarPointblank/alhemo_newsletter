"use client";

export default function FootprintsSecured() {
  // Highlight signposts - positioned in the middle, spread horizontally
  const highlights = [
    {
      id: 1,
      src: "/footprints_secured/highlight_1.png",
      left: "12%",
      top: "32%",
      delay: "0s",
    },
    {
      id: 2,
      src: "/footprints_secured/highlight_2.png",
      left: "40%",
      top: "32%",
      delay: "0.4s",
    },
    {
      id: 3,
      src: "/footprints_secured/highlight_3.png",
      left: "68%",
      top: "32%",
      delay: "0.8s",
    },
  ];

  return (
    <div className="page-container">
      {/* Main Background Image - Full Width with aspect ratio preserved */}
      <div className="background-wrapper">
        <img
          src="/footprints_secured/main_bg.png"
          alt="Footprints Secured Background"
          className="main-background"
        />

        {/* Highlight Signposts with subtle wobble */}
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="highlight-wrapper"
            style={{
              left: highlight.left,
              top: highlight.top,
              animationDelay: highlight.delay,
            }}
          >
            <img
              src={highlight.src}
              alt={`Highlight ${highlight.id}`}
              className="highlight-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
