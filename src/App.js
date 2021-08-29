import React, { useState } from "react";
import { RecordPage } from "./pages/RecordPage";
import { ResultPage } from "./pages/ResultPage";
import Button from "@material-ui/core/Button";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedStanding, setSelectedStanding] = useState(null);

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleString("sk-SK");

    console.log({ selectedHero });
    console.log({ selectedStanding });
    console.log({ currentDate });
  };

  return (
    <div className="main_wrapper">
      <RecordPage setHero={setSelectedHero} setStanding={setSelectedStanding} />
      <div className="submit-button-wrapper">
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <ResultPage />
    </div>
  );
}

export default App;
