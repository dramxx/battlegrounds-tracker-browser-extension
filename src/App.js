import React, { useState, useEffect } from "react";
import { SaveResult } from "./components/SaveResult";
import { ResultsPage } from "./components/ResultsPage";
import Button from "@material-ui/core/Button";
import {
  initLocalStorage,
  saveToLocalStorage,
  loadFromLocalStorage,
  getCurrentDateTime,
} from "./utils/helpers";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedStanding, setSelectedStanding] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => initLocalStorage(), []);

  useEffect(() => {
    setData(loadFromLocalStorage().reverse());
  }, []);

  const handleSubmit = () => {
    const existingResults = loadFromLocalStorage();
    const currentResult = {
      hero: selectedHero,
      standing: selectedStanding,
      date: getCurrentDateTime(),
    };
    const result = [...existingResults, currentResult];

    if (selectedHero && selectedStanding) {
      saveToLocalStorage(result);
      setData(loadFromLocalStorage().reverse());
    }
  };

  return (
    <div className="main_wrapper">
      <SaveResult setHero={setSelectedHero} setStanding={setSelectedStanding} />
      <div className="submit-button-wrapper">
        <Button
          disabled={!selectedHero || !selectedStanding}
          variant="outlined"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
      <ResultsPage data={data} />
    </div>
  );
}

export default App;
