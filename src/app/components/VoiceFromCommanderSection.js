"use client";

export default function VoiceFromCommanderSection() {
  return (
    <section className="section" id="voice-from-commander">
      <div className="background-wrapper">
        <img
          src="/voice_from_the_commander/main_bg_voice_from_commander.png"
          alt="Voice from Commander Background"
          className="main-background"
        />

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
