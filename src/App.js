import React, { useState } from "react";
import { RecordPage } from "./pages/RecordPage";
import { ResultPage } from "./pages/ResultPage";

function App() {
  const [showRecord, setShowRecord] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedStanding, setSelectedStanding] = useState(null);

  return (
    <div className="main_wrapper">
      <button
        onClick={() => setShowRecord(!showRecord)}
        className="record_button"
      >
        +
      </button>
      {showRecord && (
        <RecordPage
          hero={selectedHero}
          setHero={setSelectedHero}
          standing={selectedStanding}
          setStanding={setSelectedStanding}
        />
      )}
      <ResultPage />
    </div>
  );
}

export default App;
