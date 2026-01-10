"use client";

const flag = { src: "/across_the_trail/flag.png", left: "50%", top: "30%" };

export default function AcrossTheTrailSection() {
  return (
    <section className="section" id="across-the-trail">
      <div className="background-wrapper">
        <img
          src="/across_the_trail/main_bg_accross_the_trail.png"
          alt="Across the Trail Background"
          className="main-background"
        />

        {/* Flag with waving animation */}
        <div
          className="flag-wrapper"
          style={{ left: flag.left, top: flag.top }}
        >
          <img src={flag.src} alt="Flag" className="flag-image" />
        </div>
      </div>
    </section>
  );
}
