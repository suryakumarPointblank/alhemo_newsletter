"use client";

import HomepageSection from "./components/HomepageSection";
import BaseCampGenesisSection from "./components/BaseCampGenesisSection";
import GearUnlockedSection from "./components/GearUnlockedSection";
import IntoTheWildSection from "./components/IntoTheWildSection";
import AcrossTheTrailSection from "./components/AcrossTheTrailSection";
import FootprintsSecuredSection from "./components/FootprintsSecuredSection";
import VoiceFromCommanderSection from "./components/VoiceFromCommanderSection";
import TheNextExpeditionSection from "./components/TheNextExpeditionSection";

export default function Home() {
  return (
    <div className="full-flow-container">
      <HomepageSection useScrollLinks={true} />
      <BaseCampGenesisSection />
      <GearUnlockedSection />
      <IntoTheWildSection />
      <AcrossTheTrailSection />
      <FootprintsSecuredSection />
      <VoiceFromCommanderSection />
      <TheNextExpeditionSection />
    </div>
  );
}
