"use client";

import HomepageSection from "./components/HomepageSection";

export default function Home() {
  return (
    <div className="page-container">
      <HomepageSection useScrollLinks={false} />
    </div>
  );
}
