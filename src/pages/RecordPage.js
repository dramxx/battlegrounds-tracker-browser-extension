import React from "react";
import { HEROES, STANDINGS } from "../utils/config";
import { HeroCard } from "../components/HeroCard";
import { StandingCard } from "../components/StandingCard";

export const RecordPage = () => {
  return (
    <div className="record_page">
      <div className="heroes_list">
        {HEROES.map((hero) => (
          <HeroCard hero={hero} />
        ))}
      </div>
      <div className="standings_list">
        {STANDINGS.map((standing) => (
          <StandingCard standing={standing} />
        ))}
      </div>
    </div>
  );
};
