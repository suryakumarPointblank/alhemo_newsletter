"use client";

export default function IntoTheWildSection() {
  return (
    <section className="section" id="into-the-wild">
      <div className="background-wrapper">
        <img
          src="/into_the_wild/main_bg.png"
          alt="Into the Wild Background"
          className="main-background"
        />

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
