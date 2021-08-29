import React, { useState } from "react";
import { SaveResult } from "./components/SaveResult";
import { ResultsPage } from "./components/ResultsPage";
import Button from "@material-ui/core/Button";
import { DUMMY_ROWS } from "./utils/config";

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
      <SaveResult setHero={setSelectedHero} setStanding={setSelectedStanding} />
      <div className="submit-button-wrapper">
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <ResultsPage rows={DUMMY_ROWS} />
    </div>
  );
}

export default App;
