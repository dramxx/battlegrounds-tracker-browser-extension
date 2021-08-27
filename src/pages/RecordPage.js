import React from "react";
import { HEROES, STANDINGS } from "../utils/config";
import { HeroCard } from "../components/HeroCard";
import { StandingCard } from "../components/StandingCard";

export const RecordPage = ({ hero, setHero, standing, setStanding }) => {
  return (
    <div className="record_page">
      {!hero && (
        <div className="heroes_list">
          {HEROES.map((hero) => (
            <HeroCard hero={hero} click={setHero} />
          ))}
        </div>
      )}
      {!standing && (
        <div className="standings_list">
          {STANDINGS.map((standing) => (
            <StandingCard standing={standing} click={setStanding} />
          ))}
        </div>
      )}
    </div>
  );
};
