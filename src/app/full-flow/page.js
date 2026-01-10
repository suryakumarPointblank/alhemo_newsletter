"use client";

// Import section components
import HomepageSection from "../components/HomepageSection";
import FootprintsSecuredSection from "../components/FootprintsSecuredSection";
import AcrossTheTrailSection from "../components/AcrossTheTrailSection";
import VoiceFromCommanderSection from "../components/VoiceFromCommanderSection";

export default function FullFlow() {
  return (
    <div className="full-flow-container">
      <HomepageSection useScrollLinks={true} />
      <FootprintsSecuredSection />
      <AcrossTheTrailSection />
      <VoiceFromCommanderSection />
    </div>
  );
}
