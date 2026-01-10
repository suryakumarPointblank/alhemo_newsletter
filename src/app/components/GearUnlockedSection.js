"use client";

export default function GearUnlockedSection() {
  return (
    <section className="section" id="gear-unlocked">
      <div className="background-wrapper">
        <img
          src="/gear_unlocked/main_bg.png"
          alt="Gear Unlocked Background"
          className="main-background"
        />

        {/* Header with swing animation */}
        <div className="section-header">
          <img
            src="/gear_unlocked/header.png"
            alt="Gear Unlocked"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
