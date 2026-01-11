"use client";

import { House } from "lucide-react";

export default function IntoTheWildSection() {
  return (
    <section className="section" id="into-the-wild">
      <div className="background-wrapper">
        <img
          src="/into_the_wild/main_bg.png"
          alt="Into the Wild Background"
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
            src="/into_the_wild/header.png"
            alt="Into the Wild"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
