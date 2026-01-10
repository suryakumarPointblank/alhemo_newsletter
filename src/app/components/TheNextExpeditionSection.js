"use client";

export default function TheNextExpeditionSection() {
  return (
    <section className="section" id="the-next-expedition">
      <div className="background-wrapper">
        <img
          src="/the_next_expedition/main_bg.png"
          alt="The Next Expedition Background"
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
            src="/the_next_expedition/header.png"
            alt="The Next Expedition"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
