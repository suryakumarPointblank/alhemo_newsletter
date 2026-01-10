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
