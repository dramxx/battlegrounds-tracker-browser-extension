import React, { useState, useEffect } from "react";
import { SaveResult } from "./components/SaveResult";
import { ResultsPage } from "./components/ResultsPage";
import { AnalyticsPage } from "./components/AnalyticsPage";
import Button from "@material-ui/core/Button";
import {
  initLocalStorage,
  saveToLocalStorage,
  loadFromLocalStorage,
  getCurrentDateTime,
} from "./utils/helpers";
import { HEROES, STANDINGS } from "./utils/config";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedStanding, setSelectedStanding] = useState(null);
  const [tab, setTab] = useState(0);
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

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const renderTabs = () => {
    switch (tab) {
      case 0:
        return (
          <>
            <SaveResult
              heroes={HEROES}
              standings={STANDINGS}
              setHero={setSelectedHero}
              setStanding={setSelectedStanding}
            />
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
          </>
        );
      case 1:
        return <AnalyticsPage data={data} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="main_wrapper">
      {renderTabs()}

      <div className="tabs-wrapper">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<FormatListBulletedIcon />} label="Results" />
          <Tab icon={<TrendingUpIcon />} label="Analytics" />
        </Tabs>
      </div>
    </div>
  );
}

export default App;
