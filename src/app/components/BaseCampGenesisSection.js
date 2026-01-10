"use client";

export default function BaseCampGenesisSection() {
  return (
    <section className="section" id="basecamp-genesis">
      <div className="background-wrapper">
        <img
          src="/base_camp_genesis/main_bg.png"
          alt="Basecamp Genesis Background"
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

        {/* Header with swing animation */}
        <div className="section-header">
          <img
            src="/base_camp_genesis/header.png"
            alt="Basecamp Genesis"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
