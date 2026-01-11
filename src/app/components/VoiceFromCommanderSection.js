"use client";

import { House } from "lucide-react";

export default function VoiceFromCommanderSection() {
  return (
    <section className="section" id="voice-from-commander">
      <div className="background-wrapper">
        <img
          src="/voice_from_the_commander/main_bg_voice_from_commander.png"
          alt="Voice from Commander Background"
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
            src="/voice_from_the_commander/header.png"
            alt="Voice from Commander"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
