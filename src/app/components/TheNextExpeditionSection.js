"use client";

import { House } from "lucide-react";

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

        {/* Home Button - Top Right */}
        <a href="/" className="home-button" title="Back to Home">
          <House size={28} strokeWidth={2.5} />
        </a>

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
