"use client";

import { House } from "lucide-react";

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

        {/* Home Button - Top Right */}
        <a href="/" className="home-button" title="Back to Home">
          <House size={28} strokeWidth={2.5} />
        </a>

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
