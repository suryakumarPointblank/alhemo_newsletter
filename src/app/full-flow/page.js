"use client";

// Import all section components
import HomepageSection from "../components/HomepageSection";
import BaseCampGenesisSection from "../components/BaseCampGenesisSection";
import IntoTheWildSection from "../components/IntoTheWildSection";
import FootprintsSecuredSection from "../components/FootprintsSecuredSection";
import TheNextExpeditionSection from "../components/TheNextExpeditionSection";
import GearUnlockedSection from "../components/GearUnlockedSection";
import AcrossTheTrailSection from "../components/AcrossTheTrailSection";
import VoiceFromCommanderSection from "../components/VoiceFromCommanderSection";

export default function FullFlow() {
  return (
    <div className="full-flow-container">
      <HomepageSection useScrollLinks={true} />
      <BaseCampGenesisSection />
      <IntoTheWildSection />
      <FootprintsSecuredSection />
      <TheNextExpeditionSection />
      <GearUnlockedSection />
      <AcrossTheTrailSection />
      <VoiceFromCommanderSection />
    </div>
  );
}
