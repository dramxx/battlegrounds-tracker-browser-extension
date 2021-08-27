import React, { useState } from "react";
import { RecordPage } from "./pages/RecordPage";
import { ResultPage } from "./pages/ResultPage";

function App() {
  const [showRecord, setShowRecord] = useState(false);

  return (
    <div className="main_wrapper">
      <button
        onClick={() => setShowRecord(!showRecord)}
        className="record_button"
      >
        +
      </button>
      {showRecord && <RecordPage />}
      <ResultPage />
    </div>
  );
}

export default App;
