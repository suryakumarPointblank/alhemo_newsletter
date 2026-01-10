"use client";

export default function AcrossTheTrail() {
  // Flag overlay with waving animation
  const flag = {
    src: "/across_the_trail/flag.png",
    left: "50%", // Adjust position as needed
    top: "30%", // Adjust position as needed
  };

  return (
    <div className="page-container">
      {/* Main Background Image - Full Width with aspect ratio preserved */}
      <div className="background-wrapper">
        <img
          src="/across_the_trail/main_bg_accross_the_trail.png"
          alt="Across the Trail Background"
          className="main-background"
        />

        {/* Flag with waving animation */}
        <div
          className="flag-wrapper"
          style={{
            left: flag.left,
            top: flag.top,
          }}
        >
          <img src={flag.src} alt="Flag" className="flag-image" />
        </div>
      </div>
    </div>
  );
}
